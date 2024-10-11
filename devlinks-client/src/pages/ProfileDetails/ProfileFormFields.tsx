import { Input } from "@/components/ui/input";
import UploadImage from "./UploadImage";

const ProfileFormFields = ({ methods }) => {
    const { register, formState: { errors } } = methods;

    return (
        <>
            <UploadImage />
            <div className="bg-gray-50 space-y-6">
                <Input
                    {...register("firstName")}
                    label="First Name*"
                    placeholder="Write first name"
                    error={errors.firstName?.message}
                />
                <Input
                    {...register("lastName")}
                    label="Last Name*"
                    placeholder="Write last name"
                    error={errors.lastName?.message}
                />
                <Input
                    {...register("email")}
                    label="Email"
                    placeholder="Write your email"
                    error={errors.email?.message}
                />
            </div>
        </>
    );
};

export default ProfileFormFields;