import { JSX } from "react";

import { cn } from "@/lib/utils";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface PopOverProps {
  trigger: JSX.Element;
  children: React.ReactNode;
  className?: string;
}

export const PopOver = ({ trigger, children, className }: PopOverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        className={cn("bg-gray-700 shadow-lg", className)}
        align="end"
        side="bottom"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};
