import DashboardForm from "@/components/Forms/DashboardForm/DashboardForm";
import { useProfile } from '@/context/ProfileContext';
import { ProfileDetailsType, profileDetailsSchema } from "@/validators/profile-details.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from 'react';
import { useForm } from "react-hook-form";
import ProfileFormFields from "./ProfileFormFields";

const ProfileDetails: React.FC = () => {
    const { userDetails, saveData } = useProfile();

    const methods = useForm<ProfileDetailsType>({
        resolver: zodResolver(profileDetailsSchema),
        defaultValues: userDetails,
    });

    const onSave = async (data: ProfileDetailsType) => {
        // updateProfileDetails(data);
        await saveData(data);
    };

    return (
        <DashboardForm<ProfileDetailsType>
            title="Profile Details"
            subTitle="Add your details to create a personal touch to your profile."
            methods={methods}
            onSave={onSave}
            formFields={<ProfileFormFields methods={methods} />}
        />
    );
};

export default ProfileDetails;