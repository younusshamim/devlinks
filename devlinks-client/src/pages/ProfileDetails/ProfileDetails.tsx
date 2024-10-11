import HeadingGroup from "@/components/heading-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import UploadImage from "./UploadImage";

type FormData = { pricture: string; firstName: string, lastName: string, email: string };

const ProfileDetails = () => {
    const methods = useForm<FormData>({
        // resolver: zodResolver(customizeLinksArraySchema),
        // defaultValues: null,
    });
    const { handleSubmit, register, } = methods;

    const onSave = (data: unknown) => {
        console.log(data);
    }

    return (
        <div className="h-full space-y-5">
            <HeadingGroup
                title="Profile Details"
                subtitle="Add your details to create a personal touch to your profile."
                className="px-6"
            />

            <form onSubmit={handleSubmit(onSave)}>
                <div className="px-6 pb-6 space-y-6">
                    <UploadImage />
                    <Input
                        {...register(`firstName`)}
                        label="First Name*"
                        placeholder="Write first name"
                    />
                    <Input
                        {...register(`lastName`)}
                        label="Last Name*"
                        placeholder="Write last name"
                    />
                    <Input
                        {...register(`email`)}
                        label="Email"
                        placeholder="Write your email"
                    />
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

export default ProfileDetails;