import SignupLoginForm from "@/components/Forms/SignupLoginForm/SignupLoginForm";
import { Input } from "@/components/ui/input";
import { loginSchema, loginType } from "@/validators/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Login = () => {
    const methods = useForm<loginType>({
        resolver: zodResolver(loginSchema),
    });
    const { register, formState: { errors } } = methods;

    const onSave = (data: loginType) => {
        console.log(data);
    };

    return (
        <SignupLoginForm<loginType>
            formType="login"
            methods={methods}
            onSave={onSave}
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
