import { Radio } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export const ActivateAutomationButton = ({ id }: { id: string }) => {
  console.log(id);

  return (
    <Button
      className={cn(
        "h-12 px-6 tracking-wider uppercase rounded-full shadow-none hover:bg-button_primary bg-button_primary"
      )}
    >
      <Radio className="mr-2 size-4" />
      <span>{false ? "Activating..." : "Activate"}</span>
    </Button>
  );
};
