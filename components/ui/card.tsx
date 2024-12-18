import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  contentClassName?: string;
}

export const Card = ({
  className,
  contentClassName,
  children,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "relative bg-gray-50 rounded-lg text-card-foreground",
        className
      )}
      {...props}
    >
      <div className={cn("relative z-10 p-6", contentClassName)}>
        {children}
      </div>

      <div className="absolute inset-px z-0 bg-white rounded-lg" />
      <div className="absolute inset-px z-0 rounded-lg ring-1 shadow-sm pointer-events-none ring-black/5" />
    </div>
  );
};
