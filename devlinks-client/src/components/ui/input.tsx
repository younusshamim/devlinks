import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  inputClassName?: string;
  label?: string;
  error?: string;
  iconAfter?: React.ReactNode;
  iconBefore?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputClassName, type, label, error, iconBefore, iconAfter, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1", className)}>
        {label && <label className="text-sm" htmlFor={props.name}>{label}</label>}

        <div className="relative flex items-center">
          {iconBefore && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              {iconBefore}
            </div>
          )}

          <input
            id={props.name}
            type={type}
            className={cn(
              "flex h-10 w-full rounded-md border border-muted bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-card",
              inputClassName,
              { 'border-2 border-red-500': error },
              { 'pl-10': iconBefore },
              { 'pr-16': iconAfter }
            )}
            ref={ref}
            {...props}
          />

          {iconAfter && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {iconAfter}
            </div>
          )}
        </div>

        {error && (
          <p className="text-[13px] ml-1 text-red-500">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input };

