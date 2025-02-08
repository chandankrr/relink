import { create } from "zustand";

import { duplicateValidation } from "@/lib/utils";

type TriggerType = "COMMENT" | "DM";

interface AutomationState {
  trigger: {
    type?: TriggerType;
    keyword?: string;
    types: string[];
    keywords: string[];
  };
  setTrigger: (type: TriggerType) => void;
}

const useAutomationStore = create<AutomationState>((set) => ({
  trigger: {
    type: undefined,
    keyword: undefined,
    types: [],
    keywords: [],
  },
  setTrigger: (type) =>
    set((state) => ({
      trigger: {
        ...state.trigger,
        types: duplicateValidation(state.trigger.types, type),
      },
    })),
}));

export default useAutomationStore;
