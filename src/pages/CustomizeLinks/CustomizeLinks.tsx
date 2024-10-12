/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardForm from "@/components/Forms/DashboardForm/DashboardForm";
import { useProfile } from "@/context/ProfileContext";
import PlatformsData from "@/data/platforms.data";
import { customizeLinksArraySchema, PlatformType } from "@/validators/customize-link.schema";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import AddNewLink from "./AddNewLink";
import CustomizeFormFields from "./CustomizeFormFields";

interface FormData {
    platforms: PlatformType[];
}

const CustomizeLinks = () => {
    const { customizeLinks, updateCustomizeLinks, } = useProfile();

    console.log(customizeLinks);


    const platformsOptions = useMemo(() => PlatformsData.map(platform => ({
        label: platform.name, value: platform.name, Icon: platform.Icon,
    })), []);

    const methods = useForm<FormData>({
        resolver: zodResolver(customizeLinksArraySchema),
        defaultValues: { platforms: customizeLinks.length > 0 ? customizeLinks : [{ name: "", link: "", displayOrder: 1 }] },
    });

    const { fields, append, remove, move } = useFieldArray({
        control: methods.control,
        name: "platforms",
    });

    const watchPlatforms = methods.watch("platforms");

    useEffect(() => {
        updateCustomizeLinks(watchPlatforms);
    }, [watchPlatforms]);

    const onSave = async (data: FormData) => {
        const updatedData = {
            platforms: data.platforms.map((platform, index) => ({
                ...platform,
                displayOrder: index + 1,
            })),
        };
        updateCustomizeLinks(updatedData.platforms);
        // await saveData();
    };

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = fields.findIndex((item) => item.id === active.id);
            const newIndex = fields.findIndex((item) => item.id === over.id);
            move(oldIndex, newIndex);
        }
    };

    return (
        <DashboardForm<FormData>
            title="Customize your links"
            subTitle="Add/edit/remove links below and then share all your profiles with the world!"
            methods={methods}
            onSave={onSave}
            afterHeading={<AddNewLink onClick={() => append({ name: "", link: "", displayOrder: fields.length + 1 })} />}
            formFields={
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={fields.map(field => field.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <CustomizeFormFields
                            methods={methods}
                            platformsOptions={platformsOptions}
                            fields={fields}
                            remove={remove}
                        />
                    </SortableContext>
                </DndContext>
            }
        />
    );
};

export default CustomizeLinks;