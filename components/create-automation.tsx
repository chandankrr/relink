"use client";

import { PlusIcon } from "lucide-react";

import { useCreateAutomation } from "@/hooks/use-automations";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export const CreateAutomation = () => {
  const { mutate, isPending } = useCreateAutomation();

  return (
    <Button
      className={cn(
        "w-full h-12 px-6 tracking-wider uppercase rounded-full shadow-none hover:bg-button_primary bg-button_primary"
      )}
      onClick={mutate}
      disabled={isPending}
    >
      <PlusIcon className="mr-2 size-4" />
      <span>{isPending ? "Creating Automation..." : "Create Automation"}</span>
    </Button>
  );
};
