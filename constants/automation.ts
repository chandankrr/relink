import { Instagram, LucideIcon, SendHorizontal } from "lucide-react";
import { v4 as uuid } from "uuid";

interface AutmationListenersProps {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
  type: "SMARTAI" | "MESSAGE";
}

interface AutomationTriggersProps {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
  type: "COMMENT" | "DM";
}

export const AUTOMATION_TRIGGERS: AutomationTriggersProps[] = [
  {
    id: uuid(),
    label: "User comments on my post",
    icon: Instagram,
    description: "Select if you want to automate comments on your post",
    type: "COMMENT",
  },
  {
    id: uuid(),
    label: "User sends me a dm with a keyword",
    icon: Instagram,
    description: "Select if you want to automate DMs on your profile",
    type: "DM",
  },
];

export const AUTOMATION_LISTENERS: AutmationListenersProps[] = [
  {
    id: uuid(),
    label: "Send the user a message",
    icon: SendHorizontal,
    description: "Enter the message that you want to send the user.",
    type: "MESSAGE",
  },
  {
    id: uuid(),
    label: "Let Smart AI take over",
    icon: SendHorizontal,
    description: "Tell AI about your project. (Upgrade to use this feature)",
    type: "SMARTAI",
  },
];
