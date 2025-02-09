import { CircleAlert } from "lucide-react";

import { getAutomationInfo } from "@/actions/automation";
import { AutomationBreadcrumb } from "@/components/automation-breadcrumb";
import { Trigger } from "@/components/trigger";
import { Card } from "@/components/ui/card";
import { PrefetchUserAutomation } from "@/lib/prefetch";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ThenNode } from "@/components/then-node";
import { PostNode } from "@/components/post-node";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const info = await getAutomationInfo(id);

  return {
    title: info.data?.name,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const query = new QueryClient();
  await PrefetchUserAutomation(query, id);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex flex-col items-center gap-y-20">
        <AutomationBreadcrumb id={id} />

        <Card className="w-full lg:w-3/4">
          <div className="flex gap-x-2">
            <CircleAlert className="size-5" />
            When...
          </div>
          <Trigger id={id} />
        </Card>
        <ThenNode id={id} />
        <PostNode id={id} />
      </div>
    </HydrationBoundary>
  );
}
