import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";
import FormFooter from "./FormFooter";
import FormHeading from "./FormHeading";

interface DashboardFormProps<T extends FieldValues> {
    title: string;
    subTitle: string;
    formFields: React.ReactNode;
    methods: UseFormReturn<T>;
    onSave: SubmitHandler<T>;
    afterHeading?: React.ReactNode;
}

const DashboardForm = <T extends FieldValues>({
    title,
    subTitle,
    formFields,
    methods,
    onSave,
    afterHeading,
}: DashboardFormProps<T>) => {
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSave)}>
                <div className="px-6 pb-10 space-y-6">
                    <FormHeading title={title} subtitle={subTitle} />
                    {afterHeading}
                    <div className="space-y-5 max-h-[470px] min-h-[470px] overflow-y-auto">
                        {formFields}
                    </div>
                </div>
                <FormFooter />
            </form>
        </FormProvider>
    )
};

export default DashboardForm;
