import { cn } from "@/lib/utils";
import { OptionType } from "@/types/option.type";
import * as React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select";

type SelectProps = React.ComponentProps<typeof Select>;
interface PropsTypes extends React.SelectHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder: string;
    options: OptionType[];
    className?: string;
    inputClassName?: string;
    error?: string;
}

const MySelect = React.forwardRef<HTMLDivElement, PropsTypes & SelectProps>(
    ({ label, placeholder = "", options, inputClassName, error, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("flex flex-col gap-1")}>
                <label className="text-sm">{label}</label>

                <Select {...props} >
                    <SelectTrigger className={cn('dark:bg-card border-muted', inputClassName, { 'border-2 border-red-500': error })}>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>

                    <SelectContent
                        position="popper"
                        className="border-muted dark:bg-gray-800 dark:text-white z-50"
                        sideOffset={5}
                    >
                        <SelectGroup>
                            {options.map((item, index) => {
                                const { Icon, label, value } = item;
                                return (
                                    <SelectItem value={value} key={index}>
                                        <span className="flex items-center gap-2">
                                            {Icon && <span><Icon /></span>}
                                            <span>{label}</span>
                                        </span>
                                    </SelectItem>
                                );
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                {error && (
                    <p className="text-[13px] ml-1 text-red-500">{error}</p>
                )}
            </div>
        );
    }
);

export default MySelect