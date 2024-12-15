import { Sidebar } from "@/components/slidebar";

interface DashboardLayoutProps {
  params: { slug: string };
  children: React.ReactNode;
}

export default async function DashboardLayout({
  params,
}: DashboardLayoutProps) {
  const { slug } = await params;

  // WIP: Query client to fetch data

  return (
    <div className="h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* sidebar for desktop */}
      <div className="hidden md:block w-64 lg:w-80 border-r border-gray-100 p-6 h-full text-gray-800 relative z-10">
        <Sidebar slug={slug} />
      </div>
    </div>
  );
}
