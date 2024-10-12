import SignupLoginForm from '@/components/Forms/SignupLoginForm/SignupLoginForm';
import { Input } from '@/components/ui/input';
import PageRoutes from '@/config/page-routes';
import { showErrorToast, showSuccessToast } from '@/config/toast-options';
import { useProfile } from '@/context/ProfileContext';
import { useCreateUser } from '@/hooks/user-hooks';
import { setUserToLocalStorage } from '@/lib/localStorage';
import { handleLoginError } from '@/lib/utils';
import { signupSchema, signupType } from '@/validators/signup.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
    const { updateUserDetails } = useProfile()
    const navigation = useNavigate();
    const createUser = useCreateUser();
    const methods = useForm<signupType>({ resolver: zodResolver(signupSchema) });
    const { register, formState: { errors } } = methods;

    const onSave = async (userData: signupType) => {
        try {
            const result = await createUser.mutateAsync(userData);
            if (result.success) {
                setUserToLocalStorage(result);
                showSuccessToast('User created successfully');
                updateUserDetails(result.data!.user);
                navigation(PageRoutes.customizeLinks);
            } else {
                showErrorToast(result.message || 'User creation failed');
            }
        } catch (error) {
            handleLoginError(error);
        }
    };

    return (
        <SignupLoginForm<signupType>
            formType="signup"
            methods={methods}
            onSave={onSave}
            loading={createUser.isPending}
            formFields={
                <>
                    <Input
                        label="First name"
                        placeholder="Enter your first name"
                        {...register("firstName")}
                        error={errors.firstName?.message}
                    />
                    <Input
                        label="Last name"
                        placeholder="Enter your last name"
                        {...register("lastName")}
                        error={errors.lastName?.message}
                    />
                    <Input
                        label="Email*"
                        placeholder="Enter your email address"
                        {...register("email")}
                        error={errors.email?.message}
                    />
                    <Input
                        label="Password*"
                        type="password"
                        placeholder="Create a password"
                        {...register("password")}
                        error={errors.password?.message}
                    />
                </>
            }
        />
    );
};

export default Signup;