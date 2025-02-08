import { useQueryUser } from "@/hooks/use-queries";

interface SubscriptionPlanProps {
  children: React.ReactNode;
  type: "FREE" | "PRO";
}

export const SubscriptionPlan = ({ children, type }: SubscriptionPlanProps) => {
  const { data } = useQueryUser();

  return data?.data?.subscription.plan === type && children;
};
