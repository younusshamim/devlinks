import { cn } from '@/lib/utils';
import { OptionType } from '@/types/option.type';
import { ComponentProps } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import Select, { CSSObjectWithLabel, GroupBase, OptionProps, SingleValueProps } from 'react-select';

type SelectProps = ComponentProps<typeof Select>;

interface PropsTypes<T extends FieldValues> extends SelectProps {
  control: Control<T>;
  className?: string;
  label: string;
  name: Path<T>;
  options: OptionType[];
  value?: OptionType;
  onChange?: (newValue: unknown) => void;
  height?: string;
  error?: string;
  isMulti?: boolean;
}

// Define a generic wrapper for CustomOption to match the react-select expectations
const CustomOptionWrapper = (props: OptionProps<unknown, boolean, GroupBase<unknown>>) => {
  const { data, children, innerRef, innerProps } = props as OptionProps<OptionType, boolean, GroupBase<OptionType>>;
  const Icon = data.Icon;

  return (
    <div ref={innerRef} {...innerProps} className="flex items-center space-x-2 p-2">
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
    </div>
  );
};

// Define a generic wrapper for CustomSingleValue to match the react-select expectations
const CustomSingleValueWrapper = (props: SingleValueProps<unknown, boolean, GroupBase<unknown>>) => {
  const { data } = props as SingleValueProps<OptionType, boolean, GroupBase<OptionType>>;
  const Icon = data.Icon;
  return (
    <div className="flex items-center">
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      <span>{data.label}</span>
    </div>
  );
};

function ReactSelect<T extends FieldValues>({
  control,
  label,
  name,
  options,
  className,
  height,
  isMulti = false,
  error,
  ...rest
}: PropsTypes<T>) {

  const handleChange = (newValue: unknown) => {
    if (Array.isArray(newValue)) {
      return newValue.map((option: OptionType) => option.value);
    } else {
      return (newValue as OptionType).value;
    }
  }

  return (
    <div className={cn('flex flex-col', className)}>
      <label className="font-[500] mb-[5px]">{label}</label>

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <Select
              className={cn('react-select', {
                'border-2 rounded-md border-red-500': error,
              })}
              styles={customSyles(height)}
              options={options}
              components={{
                Option: CustomOptionWrapper,
                SingleValue: CustomSingleValueWrapper
              }}
              value={
                isMulti
                  ? options.filter(option => (value as string[])?.includes(option.value))
                  : options.find(option => option.value === value)
              }
              onChange={(newValue) => onChange(handleChange(newValue))}
              isMulti={isMulti}
              {...rest}
            />
          );
        }}
      />

      {error && <p className="text-[13px] text-red-500 mt-[2px]">{error}</p>}
    </div>
  );
}

export default ReactSelect;

const customSyles = (height?: string) => {
  return {
    menu: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...provided,
      zIndex: 99999,
    }),
    control: (provided: CSSObjectWithLabel, state: { isFocused: boolean }): CSSObjectWithLabel => ({
      ...provided,
      background: 'transparent',
      height: height || '40px',
      minHeight: height || '40px',
      maxHeight: height || '40px',
      fontSize: '14px',
      borderRadius: '5px',
      border: `1px solid ${state.isFocused ? '#633bfe' : '#cfcccc'}`,
      '&:hover': {
        borderColor: `${state.isFocused ? '#633bfe' : '#cfcccc'}`,
      },
    }),
    valueContainer: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      padding: '2px 8px',
      minHeight: height || '38px',
      overflow: 'hidden',
    }),
    singleValue: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...provided,
      margin: 0,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
    }),
    indicatorsContainer: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...provided,
      height: '100%',
    }),
    placeholder: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...provided,
      margin: 0,
      padding: 0,
      lineHeight: 1,
    }),
  };
};
