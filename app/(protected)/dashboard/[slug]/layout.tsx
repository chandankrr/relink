import { Sidebar } from "@/components/slidebar";
import { PrefetchUserAutomations, PrefetchUserProfile } from "@/lib/prefetch";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface DashboardLayoutProps {
  params: { slug: string };
  children: React.ReactNode;
}

export default async function DashboardLayout({
  params,
  children,
}: DashboardLayoutProps) {
  const { slug } = await params;

  const query = new QueryClient();

  await PrefetchUserProfile(query);

  await PrefetchUserAutomations(query);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="h-screen flex flex-col md:flex-row bg-white overflow-hidden">
        {/* Sidebar for desktop */}
        <div className="hidden md:block w-64 lg:w-80 border-r border-gray-100 p-6 h-full text-gray-800 relative z-10">
          <Sidebar slug={slug} />
        </div>

        {/* Main content area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 shadow-md p-4 md:p-6 relative z-10">
          <div className="relative min-h-full flex flex-col">
            <div className="h-full flex flex-col flex-1 space-y-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
}
