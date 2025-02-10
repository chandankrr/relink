"use client";

import { useQueryUser } from "@/hooks/use-queries";

export const Billing = () => {
  const { data } = useQueryUser();
  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container">
      <div>
        {data?.data?.subscription.plan}
        <p>PRO</p>
      </div>
      <div>
        {data?.data?.subscription.plan}
        <p>FREE</p>
      </div>
    </div>
  );
};
