import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const Heading = ({
  children,
  className,
  ...otherProps
}: HeadingProps) => {
  return (
    <h2
      className={cn(
        "mx-auto w-full text-4xl font-heading md:text-5xl lg:text-7xl text-pretty",
        className
      )}
      {...otherProps}
    >
      {children}
    </h2>
  );
};
