import { cn } from '@/lib/utils';
import { OptionType } from '@/types/option.type';
import { ComponentProps } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import Select, { CSSObjectWithLabel } from 'react-select';

type SelectProps = ComponentProps<typeof Select>;

interface PropsTypes<T extends FieldValues> extends SelectProps {
  control: Control<T>;
  className?: string;
  label: string;
  name: Path<T>;
  options: OptionType[];
  value?: OptionType;
  onChange?: (newValue: unknown,) => void;
  height?: string;
  error?: string;
  isMulti?: boolean;
}

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

const customSyles = (height?: string,) => {
  return {
    menu: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...provided,
      zIndex: 99999,
    }),
    control: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...provided,
      background: 'transparent',
      minHeight: height,
      maxHeight: height,
      // minWidth: '215px',
      // width: isLargerThanSm ? '215px' : '100%',
      // overflowY: 'scroll',
      fontSize: '14px',
      // marginLeft: 'auto',
      // marginRight: '4px',
      borderRadius: '5px',
      border: `2px solid #e3e3e3`,
      '&:hover': {
        borderColor: `#cfcccc`,
      },
    }),
    valueContainer: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...provided,
      paddingBottom: '5px',
    }),
    singleValue: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...provided,
      color: `#666666`,
    }),
  }
}