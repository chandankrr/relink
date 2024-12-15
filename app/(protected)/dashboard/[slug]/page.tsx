import { CreateAutomation } from "@/components/create-automation";
import { DashboardPage } from "@/components/dashboard-page";

import { DashboardPageContent } from "./dashboard-page-content";

export default function Page() {
  return (
    <DashboardPage title="Dashboard" cta={<CreateAutomation />}>
      <DashboardPageContent />
    </DashboardPage>
  );
}
