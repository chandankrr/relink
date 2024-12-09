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
        "mx-auto max-w-xl text-4xl leading-8 font-heading md:text-7xl text-pretty md:max-w-2xl lg:max-w-3xl",
        className
      )}
      {...otherProps}
    >
      {children}
    </h2>
  );
};
