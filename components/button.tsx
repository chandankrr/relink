import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classes = cva(
  "border h-12 rounded-full font-light px-6 uppercase transition duration-300",
  {
    variants: {
      variant: {
        default: "border-none text-black bg-transparent",
        primary: "bg-brand text-white border-brand",
        secondary: "border-brand text-black bg-transparent",
      },
    },
  }
);

export const Button = (
  props: {
    variant: "default" | "primary" | "secondary";
  } & HTMLAttributes<HTMLButtonElement>
) => {
  const { variant, className, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        className,
      })}
      {...otherProps}
    />
  );
};
