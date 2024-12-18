import { CreateAutomation } from "@/components/create-automation";
import { DashboardPage } from "@/components/dashboard-page";

import { AutomationPageContent } from "./automation-page-content";

export default function Page() {
  return (
    <DashboardPage title="Automation" cta={<CreateAutomation />}>
      <AutomationPageContent />
    </DashboardPage>
  );
}
