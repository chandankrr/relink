"use client";

import { Loader2Icon, Radio } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { useQueryAutomation } from "@/hooks/use-queries";
import { useMutationData } from "@/hooks/use-mutation-data";
import { activateAutomation } from "@/actions/automation";

export const ActivateAutomationButton = ({ id }: { id: string }) => {
  const { data } = useQueryAutomation(id);
  const { mutate, isPending } = useMutationData(
    ["activate"],
    (data: { state: boolean }) => activateAutomation(id, data.state),
    "automation-info"
  );

  return (
    <Button
      onClick={() => mutate({ state: !data?.data?.active })}
      disabled={isPending}
      className={cn(
        "h-12 px-6 tracking-wider uppercase rounded-full shadow-none hover:bg-button_primary bg-button_primary",
        data?.data?.active &&
          "hover:bg-muted-foreground/60 bg-muted-foreground/80 text-black/80"
      )}
    >
      {isPending ? (
        <Loader2Icon className="size-4 mr-2 animate-spin" />
      ) : (
        <Radio className="mr-2 size-4" />
      )}
      <span>{data?.data?.active ? "Disable" : "Activate"}</span>
    </Button>
  );
};
