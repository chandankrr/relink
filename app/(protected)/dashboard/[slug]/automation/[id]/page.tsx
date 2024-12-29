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

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const info = await getAutomationInfo(id);

  return {
    title: info.data?.name,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const query = new QueryClient();
  await PrefetchUserAutomation(query, id);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex flex-col items-center gap-y-20">
        <AutomationBreadcrumb id={id} />

        <Card>
          <Trigger id={id} />
        </Card>
      </div>
    </HydrationBoundary>
  );
}
