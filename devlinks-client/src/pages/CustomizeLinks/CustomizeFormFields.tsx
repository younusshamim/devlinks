import { Input } from "@/components/ui/input";
import ReactSelect from "@/components/ui/react-select";
import { OptionType } from "@/types/option.type";
import { platformLinkType } from "@/types/platform.type";
import { UseFormReturn } from "react-hook-form";
import { FiLink } from "react-icons/fi";
import { MdDragHandle } from "react-icons/md";

interface CustomizeFormFieldsProps {
    methods: UseFormReturn<{ platforms: platformLinkType[] }>;
    remove: (index: number) => void;
    platformsOptions: OptionType[];
    fields: { id: string }[];
}
const CustomizeFormFields = ({
    methods,
    remove,
    platformsOptions,
    fields,
}: CustomizeFormFieldsProps) => {
    const { control, register, formState: { errors } } = methods;

    return (
        <>
            {fields.map((field, index) => (
                <div key={index} className={`space-y-2 p-4 rounded-xl bg-gray-50 text-gray-600`}>
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-2 font-semibold">
                            <MdDragHandle />  <span>Link #{index + 1}</span>
                        </div>
                        <span className="hover:underline cursor-pointer text-sm" onClick={() => remove(index)}>
                            Remove
                        </span>
                    </div>

                    <div className="flex flex-col gap-5">
                        <ReactSelect
                            label="Platform" placeholder="Select Platform"
                            name={`platforms.${index}.name`}
                            control={control}
                            options={platformsOptions}
                            error={errors?.platforms?.[index]?.name?.message}
                        />
                        <Input
                            {...register(`platforms.${index}.link`)}
                            label="Link"
                            placeholder="Write the platform link"
                            iconBefore={<FiLink />}
                            error={errors?.platforms?.[index]?.link?.message}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default CustomizeFormFields;