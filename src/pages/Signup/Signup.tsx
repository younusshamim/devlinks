import SignupLoginForm from "@/components/Forms/SignupLoginForm/SignupLoginForm";
import { Input } from "@/components/ui/input";
import { signupSchema, signupType } from "@/validators/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Signup = () => {
    const methods = useForm<signupType>({
        resolver: zodResolver(signupSchema),
    });
    const { register, formState: { errors } } = methods;

    const onSave = (data: signupType) => {
        console.log(data);
    };

    return (
        <SignupLoginForm<signupType>
            formType="signup"
            methods={methods}
            onSave={onSave}
            formFields={
                <>
                    <Input
                        label="First name" placeholder="Write first name"
                        {...register("firstName")}
                        error={errors.firstName?.message}
                    />
                    <Input
                        label="Last name" placeholder="Write last name"
                        {...register("lastName")}
                        error={errors.lastName?.message}
                    />
                    <Input
                        label="Email*" placeholder="Write email address"
                        {...register("email")}
                        error={errors.email?.message}
                    />
                    <Input
                        label="Password*" type="password" placeholder="Write password"
                        {...register("password")}
                        error={errors.password?.message}
                    />
                </>
            }
        />
    );
};

export default Signup;