import DashboardForm from "@/components/Forms/DashboardForm/DashboardForm";
import PlatformsData from "@/data/platforms.data";
import { platformLinkType } from "@/types/platform.type";
import { customizeLinksArraySchema } from "@/validators/customize-link.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import AddNewLink from "./AddNewLink";
import CustomizeFormFields from "./CustomizeFormFields";

interface FormData {
    platforms: platformLinkType[];
}

const CustomizeLinks = () => {
    const platformsOptions = useMemo(
        () =>
            PlatformsData.map(platform => ({
                label: platform.name,
                value: platform.name,
                Icon: platform.Icon,
            })),
        []
    );

    const methods = useForm<FormData>({
        resolver: zodResolver(customizeLinksArraySchema),
        defaultValues: { platforms: [{ name: "", link: "" }] },
    });

    const { fields, append, remove } = useFieldArray({
        control: methods.control,
        name: "platforms",
    });

    const onSave = (data: FormData) => {
        console.log(data);
    };

    return (
        <DashboardForm<FormData>
            title="Customize your links"
            subTitle="Add/edit/remove links below and then share all your profiles with the world!"
            methods={methods}
            onSave={onSave}
            afterHeading={<AddNewLink onClick={() => append({ name: "", link: "" })} />}
            formFields={
                <CustomizeFormFields
                    methods={methods}
                    platformsOptions={platformsOptions}
                    fields={fields}
                    remove={remove}
                />
            }
        />
    );
};

export default CustomizeLinks;



