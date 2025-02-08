import { CirclePlus } from "lucide-react";

import { PopOver } from "./pop-over";

interface TriggerButtonProps {
  children: React.ReactNode;
  label: string;
}

export const TriggerButton = ({ children, label }: TriggerButtonProps) => {
  return (
    <PopOver
      className="w-[400px]"
      trigger={
        <div className="border-dashed border-2 w-full border-blue-600 hover:opacity-80 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5 mt-5">
          <CirclePlus className="size-6" />
          <p className="text-[#768bdd] font-bold">{label}</p>
        </div>
      }
    >
      {children}
    </PopOver>
  );
};
