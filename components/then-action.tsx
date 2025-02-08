"use client";

import { PlusIcon } from "lucide-react";

import { AUTOMATION_LISTENERS } from "@/constants/automation";
import { useListener } from "@/hooks/use-automations";
import { cn } from "@/lib/utils";

import { SubscriptionPlan } from "./subscription-plan";
import { TriggerButton } from "./trigger-button";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ThenAction = ({ id }: { id: string }) => {
  const {
    onSetListener,
    listener: Listener,
    onFormSubmit,
    register,
    isPending,
  } = useListener(id);

  return (
    <TriggerButton label="Then">
      <div className="flex flex-col gap-y-2">
        {AUTOMATION_LISTENERS.map((listener) =>
          listener.type === "SMARTAI" ? (
            <SubscriptionPlan key={listener.type} type="PRO">
              <div
                onClick={() => onSetListener(listener.type)}
                key={listener.id}
                className={cn(
                  Listener === listener.type
                    ? "bg-gradient-to-br from-[#3352cc] to-[#1c2d70]"
                    : "bg-red-600",
                  "p-3 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-80 transition duration-100"
                )}
              >
                <div className="flex gap-2 items-center">
                  <listener.icon />
                  <p className="ml-2">{listener.label}</p>
                </div>
                <p>{listener.description}</p>
              </div>
            </SubscriptionPlan>
          ) : (
            <div
              onClick={() => onSetListener(listener.type)}
              key={listener.id}
              className={cn(
                Listener === listener.type
                  ? "bg-gradient-to-br from-[#3352cc] to-[#1c2d70]"
                  : "bg-red-600",
                "p-3 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-80 transition duration-100"
              )}
            >
              <div className="flex gap-2 items-center">
                <listener.icon />
                <p className="ml-2">{listener.label}</p>
              </div>
              <p>{listener.description}</p>
            </div>
          )
        )}

        <form onSubmit={onFormSubmit} className="flex flex-col gap-y-2">
          <Textarea
            placeholder={
              Listener === "SMARTAI"
                ? "Add a prompt that your smart ai can use..."
                : "Add a message you want sent to your customers"
            }
            {...register("prompt")}
            className="bg-gray-700 outline-none border-none right-0 focus:ring-0"
          />
          <Input
            placeholder="Add a reply for comments (Optional)"
            className="bg-gray-700 outline-none border-none right-0 focus:ring-0"
            {...register("reply")}
          />
          <Button
            disabled={isPending}
            className="bg-gradient-to-br w-full from-[#3352cc] font-medium text-white to-[#1c2d70]"
          >
            <PlusIcon className="mr-2 size-4" />
            <span>{isPending ? "Adding listener..." : "Add listener"}</span>
          </Button>
        </form>
      </div>
    </TriggerButton>
  );
};
