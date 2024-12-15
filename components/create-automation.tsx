import { PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export const CreateAutomation = () => {
  return (
    <Button
      className={cn(
        "w-full h-12 tracking-wider uppercase rounded-none shadow-none hover:bg-button_primary bg-button_primary sm:w-fit"
      )}
    >
      <PlusIcon className="mr-2 size-4" />
      Create Automation
    </Button>
  );
};
