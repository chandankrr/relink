import Image from "next/image";
import { CheckCircleIcon, Loader2Icon } from "lucide-react";

import { useAutomationPosts } from "@/hooks/use-automations";
import { useQueryAutomationPosts } from "@/hooks/use-queries";
import { InstagramPostProps } from "@/types/posts.type";
import { cn } from "@/lib/utils";

import { TriggerButton } from "./trigger-button";
import { Button } from "./ui/button";

export const PostButton = ({ id }: { id: string }) => {
  const { data } = useQueryAutomationPosts();
  const { posts, onSelectPost, mutate, isPending } = useAutomationPosts(id);

  return (
    <TriggerButton label="Attach a post">
      {data?.status === 200 ? (
        <div className="flex flex-col gap-y-3 w-full">
          <div className="flex flex-wrap w-full gap-3">
            {data.data.map((post: InstagramPostProps) => (
              <div
                key={post.id}
                className="relative w-4/12 aspect-square rounded-lg cursor-pointer overflow-hidden"
                onClick={() =>
                  onSelectPost({
                    postId: post.id,
                    media: post.media_url,
                    mediaType: post.media_type,
                    caption: post.caption,
                  })
                }
              >
                {posts.find((p) => p.postId === post.id) && (
                  <CheckCircleIcon
                    fill="white"
                    stroke="black"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                  />
                )}
                <Image
                  fill
                  sizes="100vw"
                  src={post.media_url}
                  alt="Post image"
                  className={cn(
                    "hover:opacity-75 transition duration-100",
                    posts.find((p) => p.postId === post.id) && "opacity-75"
                  )}
                />
              </div>
            ))}
          </div>
          <Button
            disabled={posts.length === 0}
            onClick={mutate}
            className="bg-gradient-to-br w-full from-[#3352cc] to-[#1c2d70] font-medium text-white "
          >
            {isPending && <Loader2Icon className="size-4 mr-2 animate-spin" />}
            Attach Posts
          </Button>
        </div>
      ) : (
        <p className="text-secondary-foreground text-center">No posts found!</p>
      )}
    </TriggerButton>
  );
};
