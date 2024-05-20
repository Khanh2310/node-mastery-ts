import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { Button as ButtonUI} from "@/components/ui/button"

export const Button = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button">
>(function ButtonBase({ className = "", ...props }, ref) {
  return <ButtonUI   {...props}
  ref={ref}
  className={`${className}`}/>;
});
