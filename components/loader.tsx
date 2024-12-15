import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils";

interface LoaderProps {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
}

export const Loader = ({ state, children, className, color }: LoaderProps) => {
  return state ? (
    <div className={cn(className)}>
      <LoaderCircle className={`fill-${color} text-${color}`} />
    </div>
  ) : (
    children
  );
};
