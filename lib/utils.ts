import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const duplicateValidation = (arr: string[], el: string) => {
  if (!arr.includes(el)) {
    return [...arr, el];
  } else {
    return arr.filter((t) => t !== el);
  }
};
