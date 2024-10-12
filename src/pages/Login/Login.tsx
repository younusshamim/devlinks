import SignupLoginForm from "@/components/Forms/SignupLoginForm/SignupLoginForm";
import { Input } from "@/components/ui/input";
import PageRoutes from "@/config/page-routes";
import { showErrorToast } from "@/config/toast-options";
import { useLogin } from "@/hooks/user-hooks";
import { loginSchema, loginType } from "@/validators/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigation = useNavigate();
    const login = useLogin();

    const methods = useForm<loginType>({
        resolver: zodResolver(loginSchema),
    });
    const { register, formState: { errors } } = methods;

    const onLogin = async (data: loginType) => {
        try {
            const result = await login.mutateAsync(data);
            if (result.success) {
                localStorage.setItem('token', result.data!.token);
                localStorage.setItem('userId', result.data!.user._id as string);
                navigation(PageRoutes.customizeLinks);
            } else {
                showErrorToast(result.message || 'User login failed');
            }
        } catch (error) {
            if (error instanceof Error) {
                showErrorToast(`User login error: ${error.message}`);
            } else {
                showErrorToast('An unknown error occurred');
            }
        }
    };

    return (
        <SignupLoginForm<loginType>
            formType="login"
            methods={methods}
            onSave={onLogin}
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
