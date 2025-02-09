"use client";

import Image from "next/image";
import { CircleAlertIcon, InstagramIcon } from "lucide-react";

import { useQueryAutomation } from "@/hooks/use-queries";

import { Separator } from "./ui/separator";
import { Card } from "./ui/card";

export const PostNode = ({ id }: { id: string }) => {
  const { data } = useQueryAutomation(id);

  return (
    data?.data?.posts &&
    data?.data?.posts.length > 0 && (
      <Card className="w-10/12 lg:w-8/12 xl:w-7/12 flex flex-col gap-y-3">
        <div className="absolute h-20 left-1/2 bottom-full flex flex-col items-center z-50">
          <span className="size-[9px] bg-gray-600 rounded-full" />
          <Separator
            orientation="vertical"
            className="bottom-full flex-1 border-[1px] border-gray-500"
          />
          <span className="size-[9px] bg-gray-600 rounded-full" />
        </div>
        <div className="flex gap-x-2">
          <CircleAlertIcon className="size-5" />
          If they comment on...
        </div>
        <div className="bg-gray-300 p-3 rounded-xl flex flex-col gap-y-2">
          <div className="flex gap-x-2 items-center">
            <InstagramIcon />
            <p className="font-bold text-lg">These posts</p>
          </div>
          <div className="flex gap-x-2 flex-wrap mt-3">
            {data.data.posts.map((post) => (
              <div
                key={post.id}
                className="relative w-4/12 aspect-square rounded-lg cursor-pointer overflow-hidden"
              >
                <Image
                  fill
                  sizes="100vw"
                  src={post.media}
                  alt="Selected post Image"
                />
              </div>
            ))}
          </div>
        </div>
      </Card>
    )
  );
};
