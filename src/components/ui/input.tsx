import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  inputClassName?: string;
  inputWrapClassName?: string;
  label?: string;
  error?: string;
  iconAfter?: React.ReactNode;
  iconBefore?: React.ReactNode;
  layout?: "row" | "column";
  labelWidth?: string;
  inputWidth?: string;

}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputClassName,
      inputWrapClassName,
      type,
      label,
      error,
      iconBefore,
      iconAfter,
      layout = "column",
      labelWidth = "[30%]",
      inputWidth = "[70%]",
      ...props
    },
    ref
  ) => {
    const labelStyle: React.CSSProperties = { width: layout === "row" ? labelWidth : '100%' };
    const inputStyle: React.CSSProperties = { width: layout === "row" ? inputWidth : '100%', };

    return (
      <div className={cn("w-full", className)}>
        <div className={cn("flex gap-1", layout === "row" ? "flex-row items-center justify-between" : "flex-col")}>
          {label && <label style={labelStyle} className={cn("text-sm")} htmlFor={props.name}>{label}</label>}

          <div style={inputStyle} className={cn("relative flex items-center", inputWrapClassName)}>
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
        </div>

        {error && (
          <p className="text-[13px] ml-1 text-red-500">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

