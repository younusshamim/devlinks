import HeadingGroup from "@/components/heading-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MySelect from "@/components/ui/my-select";
import PlatformsData from "@/data/platforms.data";
import { customizeLinksArraySchema } from "@/validators/customize-link.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FiLink } from "react-icons/fi";
import { MdDragHandle } from "react-icons/md";

type FormData = { platforms: { name: string; link: string }[] };

const CustomizeLinks = () => {
    const platformsOptions = PlatformsData.map(platform => {
        return { label: platform.name, value: platform.name, Icon: platform.Icon }
    })

    const methods = useForm<FormData>({
        resolver: zodResolver(customizeLinksArraySchema),
        defaultValues: { platforms: [{ name: "", link: "" }] },
    });
    const { handleSubmit, register, control, formState: { errors } } = methods;
    const { fields, append, remove } = useFieldArray({
        control,
        name: "platforms",
    });

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
    }, [fields]);

    const onSave = (data: unknown) => {
        console.log(data);
    }

    return (
        <div className="h-full space-y-5 overflow-hidden">
            <HeadingGroup
                title="Customize your links"
                subtitle="Add/edit/remove links below and then share all your profiles with the world!"
                className="px-6"
            />

            <div className="px-6">
                <Button variant="outline" className="w-full" onClick={() => append({ name: "", link: "" })}>
                    + Add new link
                </Button>
            </div>

            <form onSubmit={handleSubmit(onSave)} className="max-h-[400px]">
                <div className="px-6 pb-6 space-y-6 max-h-[400px] overflow-y-scroll">
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
                                <MySelect
                                    {...register(`platforms.${index}.name`)}
                                    label="Platform" placeholder="Select Platform" options={platformsOptions}
                                    error={errors?.platforms?.[index]?.name?.message}
                                />
                                <Input
                                    {...register(`platforms.${index}.link`)}
                                    label="Link" placeholder="Write the platform link" iconBefore={<FiLink />}
                                />
                            </div>
                        </div>
                    ))}
                </div>


                <hr className="mb-5 border-2 border-gray-100" />

                <div className="px-6 md:text-end">
                    <div className="md:inline-flex">
                        <Button type="submit" >
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CustomizeLinks;