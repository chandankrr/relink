"use server";

import { redirect } from "next/navigation";

import { refreshToken } from "@/lib/fetch";
import { currentUser } from "@clerk/nextjs/server";
import { stripe } from "@/lib/stripe";

import { updateIntegration } from "../integration/queries";
import { createUser, findUser, updateSubscription } from "./queries";

export const onCurrentUser = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  return user;
};

export const onBoardUser = async () => {
  const user = await onCurrentUser();

  try {
    // Check clerk user is in database or not
    const found = await findUser(user.id);

    // If user found refresh and update integration token
    if (found) {
      if (found.integrations.length > 0 && found.integrations[0].expiresAt) {
        const today = new Date();
        const timeLeft =
          found.integrations[0].expiresAt.getTime() - today.getTime();

        const days = Math.round(timeLeft / (1000 * 3600 * 24));

        if (days < 5) {
          console.log("refresh");

          const refresh = await refreshToken(found.integrations[0].token);

          const today = new Date();
          const expireDate = today.setDate(today.getDate() + 60);

          const updateToken = await updateIntegration(
            found.integrations[0].id,
            refresh.access_token,
            new Date(expireDate)
          );

          if (!updateToken) {
            console.log("Update token failed!");
          }
        }
      }

      return {
        status: 200,
        data: {
          id: found.id,
        },
      };
    }

    // Create user, if no user found with respective clerk id in database
    const created = await createUser(
      user.id,
      user.firstName!,
      user.lastName!,
      user.emailAddresses[0].emailAddress
    );

    return {
      status: 201,
      data: created,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
    };
  }
};

export const onUserInfo = async () => {
  const user = await onCurrentUser();

  try {
    const profile = await findUser(user.id);

    if (profile) {
      return { status: 200, data: profile };
    }

    return { status: 404 };
  } catch (error) {
    console.log(error);
    return { status: 500 };
  }
};

export const onSubscribe = async (session_id: string) => {
  const user = await onCurrentUser();

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session) {
      const subscribed = await updateSubscription(user.id, {
        customerId: session.customer as string,
        plan: "PRO",
      });

      if (subscribed) {
        return { status: 200 };
      }

      return { status: 401 };
    }

    return { status: 404 };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
    };
  }
};
