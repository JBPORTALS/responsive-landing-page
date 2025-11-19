/** Install class variance authority package to continue */

import { cva } from "class-variance-authority";

/** Create two variants of button Defualt | Secondary */
export const buttonVariants = cva(
  "rounded-full flex items-center justify-center gap-2.5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        green: "bg-brand-green text-brand-green-foreground",
      },
      size: {
        md: "px-4 h-9 text-sm",
        lg: "px-6 h-11 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export function Button({ children, size, className, variant }) {
  return (
    <button className={buttonVariants({ variant, size, className })}>
      {children}
    </button>
  );
}
