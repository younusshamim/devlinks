import Section from "@/components/Section";
import { Input } from "@/components/ui/input";
import { screens } from "@/config/theme";
import useMediaQuery from "@/hooks/use-media-query";
import { ProfileDetailsType } from "@/validators/profile-details.schema";
import { UseFormReturn } from "react-hook-form";
import UploadImage from "./UploadImage";

interface ProfileFormFieldsProps {
    methods: UseFormReturn<ProfileDetailsType>;
}

const ProfileFormFields = ({ methods }: ProfileFormFieldsProps) => {
    const smDevice = useMediaQuery(`(min-width: ${screens.sm})`);

    const { register, formState: { errors } } = methods;

    return (
        <>
            <UploadImage />

            <Section className="bg-gray-50 space-y-5">
                <Input
                    {...register("firstName")}
                    label="First Name*"
                    placeholder="Write first name"
                    error={errors.firstName?.message}
                    layout={'row'}
                />
                <Input
                    {...register("lastName")}
                    label="Last Name*"
                    placeholder="Write last name"
                    error={errors.lastName?.message}
                    layout={smDevice ? "row" : "column"}
                />
                <Input
                    {...register("email")}
                    label="Email"
                    placeholder="Write your email"
                    error={errors.email?.message}
                    layout={smDevice ? "row" : "column"}
                />
            </Section>
        </>
    );
};

export default ProfileFormFields;