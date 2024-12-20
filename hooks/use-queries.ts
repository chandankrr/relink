import { getAllAutomations } from "@/actions/automation";
import { useQuery } from "@tanstack/react-query";

export const useQueryAutomations = () => {
  return useQuery({
    queryKey: ["user-automations"],
    queryFn: getAllAutomations,
  });
};
