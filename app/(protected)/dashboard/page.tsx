import { redirect } from "next/navigation";

import { onBoardUser } from "@/actions/user";

export default async function Page() {
  const user = await onBoardUser();

  if (user.status === 200 || user.status === 201) {
    return redirect(`/dashboard/${user.data?.id}`);
  }
  return redirect("/sign-in");
}
