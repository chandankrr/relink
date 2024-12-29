"use client";

import { useQueryAutomation } from "@/hooks/use-queries";

import { ActiveTrigger } from "./active-trigger";
import { ThenAction } from "./then-action";

export const Trigger = ({ id }: { id: string }) => {
  const { data } = useQueryAutomation(id);

  // if (data?.data && data.data.trigger.length > 0) {
  return (
    <div className="flex flex-col gap-y-6 items-center">
      {/* WIP: add this for the type: data.data.trigger[0].type */}
      <ActiveTrigger
        type="COMMENT"
        keywords={[{ id: "gsfgfs", word: "hello", automationId: id }]}
      />

      {/* WIP: add this for the data.data.trigger.length */}
      {/* data?.data?.trigger.length > 1 && <></> */}
      <>
        <div className="relative w-6/12 border">
          <p className="absolute transform px-2 bg-white -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
            or
          </p>
        </div>
        <ActiveTrigger
          type="MESSAGE"
          keywords={[{ id: "gdfgfs", word: "Hello", automationId: id }]}
        />
      </>

      <ThenAction id={id} />
    </div>
  );
  // }
};
