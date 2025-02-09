"use client";

import { useQueryAutomation } from "@/hooks/use-queries";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { BotIcon, CircleAlert, SendHorizontalIcon } from "lucide-react";
import { PostButton } from "./post-button";

export const ThenNode = ({ id }: { id: string }) => {
  const { data } = useQueryAutomation(id);

  const commentTrigger = data?.data?.trigger.find((t) => t.type === "COMMENT");

  return !data?.data?.listener ? (
    <></>
  ) : (
    <Card className="w-full lg:w-3/4">
      <div className="absolute h-20 left-1/2 bottom-full flex flex-col items-center z-50">
        <span className="size-[9px] bg-gray-600 rounded-full " />
        <Separator
          orientation="vertical"
          className="bottom-full flex-1 border-[1px] border-gray-500"
        />
        <span className="size-[9px] bg-gray-600 rounded-full " />
      </div>
      <div className="flex gap-x-2">
        <CircleAlert className="size-5" />
        Then...
      </div>
      <div className="p-3 bg-gray-200 rounded-xl flex flex-col gap-y-2">
        <div className="flex gap-x-2 items-center">
          {data.data.listener.listener === "MESSAGE" ? (
            <SendHorizontalIcon />
          ) : (
            <BotIcon />
          )}
          <p className="text-lg">
            {data.data.listener.listener === "MESSAGE"
              ? "Send the user a message."
              : "Let Smart AI take over."}
          </p>
        </div>
        <p className="font-light text-gray-500">{data.data.listener.prompt}</p>
      </div>
      {data.data.posts.length > 0 ? (
        <></>
      ) : commentTrigger ? (
        <PostButton id={id} />
      ) : (
        <></>
      )}
    </Card>
  );
};
