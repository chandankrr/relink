"use client";

import { ChevronRight, PencilIcon } from "lucide-react";

import { useEditAutomation } from "@/hooks/use-automations";
import { useQueryAutomation } from "@/hooks/use-queries";

import { ActivateAutomationButton } from "./activate-automation-button";
import { Input } from "./ui/input";

export const AutomationBreadcrumb = ({ id }: { id: string }) => {
  const { data } = useQueryAutomation(id);
  const { edit, enableEdit, inputRef, isPending } = useEditAutomation(id);

  return (
    <div className="w-full p-5 flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-gray-500 truncate">Automation</p>
        <ChevronRight className="flex-shrink-0 text-gray-500 size-5" />
        <span className="flex gap-x-3 items-center min-w-0">
          {edit ? (
            <Input
              ref={inputRef}
              placeholder={isPending ? "hello" : "Add a new name"}
              className="bg-transparent shadow-none text-base h-auto border-none"
            />
          ) : (
            <p className="truncate">{data?.data?.name}</p>
          )}

          {edit ? null : (
            <span className="cursor-pointer hover:opacity-65 duration-100 transition flex-shrink-0 mr-4">
              <PencilIcon onClick={enableEdit} className="size-4" />
            </span>
          )}
        </span>
      </div>

      <div className="flex items-center gap-x-5 ml-auto">
        <p className="truncate min-w-0 text-gray-500">
          All states are automatically saved
        </p>
        <ActivateAutomationButton id={id} />
      </div>
    </div>
  );
};
