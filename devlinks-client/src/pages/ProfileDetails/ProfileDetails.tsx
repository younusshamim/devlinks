import DashboardForm from "@/components/Forms/DashboardForm/DashboardForm";
import { ProfileDetailsType, profileDetailsSchema } from "@/validators/profile-details.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ProfileFormFields from "./ProfileFormFields";


const ProfileDetails = () => {
    const methods = useForm<ProfileDetailsType>({
        resolver: zodResolver(profileDetailsSchema),
    });

    const onSave = (data: ProfileDetailsType) => {
        console.log(data);
    };

    return (
        <DashboardForm
            title="Profile Details"
            subTitle="Add your details to create a personal touch to your profile."
            methods={methods}
            onSave={onSave}
            formFields={<ProfileFormFields methods={methods} />}
        />
    );
};

export default ProfileDetails;
