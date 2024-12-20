import { createAutomation } from "@/actions/automation";

import { useMutationData } from "./use-mutation-data";

export const useCreateAutomation = () => {
  const { mutate, isPending } = useMutationData(
    ["create-automation"],
    () => createAutomation(),
    "user-automations"
  );

  return {
    mutate,
    isPending,
  };
};
