/** Install class variance authority package to continue */

import { cva } from "class-variance-authority";

/** Create two variants of button Defualt | Secondary */
export const buttonVariants = cva(
  "px-4 h-9 rounded-full text-sm flex items-center justify-center gap-2.5",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        secondary: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function Button({ children, variant }) {
  return <button className={buttonVariants({ variant })}>{children}</button>;
}
