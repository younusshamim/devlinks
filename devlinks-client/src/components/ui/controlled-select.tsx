"use client"

import { OptionType } from "@/types/option.type";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import MySelect from './my-select';
import { Select } from "./select";

type SelectProps = React.ComponentProps<typeof Select>;

type PropsTypes<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder: string;
    options: OptionType[];
    className?: string;
    inputClassName?: string;
    error?: string;
} & SelectProps;

function ControlledSelect<T extends FieldValues>({
    control,
    name,
    options,
    label,
    placeholder,
    error,
    className,
    inputClassName,
    ...props
}: PropsTypes<T>) {

    const handleValueChange = (selected: string | number, onChange: (value: string | number) => void) => {
        onChange(!isNaN(Number(selected)) ? Number(selected) : selected)
    }

    return (
        <div className={className}>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => {
                    return (
                        <MySelect
                            value={options.find(option => option.value == value)?.value}
                            onValueChange={(selected) => handleValueChange(selected, onChange)}
                            label={label}
                            options={options}
                            placeholder={placeholder}
                            error={error}
                            inputClassName={inputClassName}
                            {...props}
                        />
                    )
                }}
            />
        </div>
    );
};

export default ControlledSelect;