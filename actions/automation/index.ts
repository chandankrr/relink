"use server";

import { onCurrentUser } from "../user";
import { getAutomations, insertAutomation } from "./queries";

export const getAllAutomations = async () => {
  const user = await onCurrentUser();

  try {
    const automations = await getAutomations(user.id);

    if (automations) {
      return {
        status: 200,
        data: automations.automations,
      };
    }

    return {
      status: 404,
      data: [],
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      data: [],
    };
  }
};

export const createAutomation = async () => {
  const user = await onCurrentUser();

  try {
    const create = await insertAutomation(user.id);

    if (create) {
      return { status: 200, data: "Automation created" };
    }

    return { status: 404, data: "Oops! something went wrong" };
  } catch (error) {
    console.log(error);
    return { status: 500, data: "Internal server error" };
  }
};
