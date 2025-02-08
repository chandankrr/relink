"use client";

import { AUTOMATION_TRIGGERS } from "@/constants/automation";
import { useTriggers } from "@/hooks/use-automations";
import { useQueryAutomation } from "@/hooks/use-queries";
import { cn } from "@/lib/utils";

import { ActiveTrigger } from "./active-trigger";
import { ThenAction } from "./then-action";
import { TriggerButton } from "./trigger-button";
import { Keywords } from "./keywords";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";

export const Trigger = ({ id }: { id: string }) => {
  const { data } = useQueryAutomation(id);
  const { types, onSetTrigger, onSaveTrigger, isPending } = useTriggers(id);

  if (data?.data && data.data.trigger.length > 0) {
    return (
      <div className="flex flex-col gap-y-6 items-center">
        <ActiveTrigger
          type={data.data.trigger[0].type}
          keywords={data.data.keywords}
        />

        {data?.data?.trigger.length > 1 && (
          <>
            <div className="relative w-6/12 border">
              <p className="absolute transform px-2 bg-white -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
                or
              </p>
            </div>
            <ActiveTrigger
              type={data.data.trigger[1].type}
              keywords={data.data.keywords}
            />
          </>
        )}

        {!data.data.listener && <ThenAction id={id} />}
      </div>
    );
  }

  return (
    <TriggerButton label="Add Trigger">
      <div className="flex flex-col gap-y-2">
        {AUTOMATION_TRIGGERS.map((trigger) => (
          <div
            key={trigger.id}
            onClick={() => onSetTrigger(trigger.type)}
            className={cn(
              "hover:opacity-80 text-white rounded-xl flex cursor-pointer flex-col p-3 gap-y-2",
              !types.includes(trigger.type)
                ? "bg-gray-700"
                : "bg-gradient-to-br from-[#3352cc] to-[#1c2d70] font-medium"
            )}
          >
            <div className="flex gap-x-2 items-center">
              <trigger.icon />
              <p className="font-bold">{trigger.label}</p>
            </div>
            <p className="text-sm font-light">{trigger.description}</p>
          </div>
        ))}
        <Keywords id={id} />
        <Button
          onClick={onSaveTrigger}
          disabled={types.length === 0}
          className="bg-gradient-to-br from-[#3352cc] to-[#1c2d70] cursor-pointer"
        >
          {isPending && <Loader2Icon className="size-4 mr-2" />}Create Trigger
        </Button>
      </div>
    </TriggerButton>
  );
};
