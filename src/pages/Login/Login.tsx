import SignupLoginForm from "@/components/Forms/SignupLoginForm/SignupLoginForm";
import { Input } from "@/components/ui/input";
import PageRoutes from "@/config/page-routes";
import { showErrorToast } from "@/config/toast-options";
import { useProfile } from "@/context/ProfileContext";
import { useLogin } from "@/hooks/user-hooks";
import { setUserToLocalStorage } from "@/lib/localStorage";
import { handleLoginError } from "@/lib/utils";
import { loginSchema, loginType } from "@/validators/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { updateUserDetails } = useProfile()
    const navigation = useNavigate();
    const login = useLogin();
    const methods = useForm<loginType>({ resolver: zodResolver(loginSchema) });
    const { register, formState: { errors } } = methods;

    const onLogin = async (data: loginType) => {
        try {
            const result = await login.mutateAsync(data);
            if (result.success) {
                setUserToLocalStorage(result);
                updateUserDetails(result.data!.user);
                navigation(PageRoutes.customizeLinks);
            } else {
                showErrorToast(result.message || 'User login failed');
            }
        } catch (error) {
            handleLoginError(error);
        }
    };

    return (
        <SignupLoginForm<loginType>
            formType="login"
            methods={methods}
            onSave={onLogin}
            loading={login.isPending}
            formFields={
                <>
                    <Input
                        label="Email" placeholder="Write email address"
                        {...register("email")}
                        error={errors.email?.message}
                    />
                    <Input
                        label="Password" type="password" placeholder="Write password"
                        {...register("password")}
                        error={errors.password?.message}
                    />
                </>
            }
        />
    );
};

export default Login;
