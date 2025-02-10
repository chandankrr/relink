"use client";

import { Billing } from "@/components/billing";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/use-subscription";

const UpgradePage = () => {
  const { isProcessing, onSubscribe } = useSubscription();

  return (
    <>
      <Button onClick={onSubscribe} disabled={isProcessing} className="w-fit">
        {isProcessing ? "Processing..." : "Upgrade"}
      </Button>
      <Billing />
    </>
  );
};

export default UpgradePage;
