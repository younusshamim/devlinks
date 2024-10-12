import Logo from "@/components/Logo/Logo";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import PageRoutes from "@/config/page-routes";
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";
import { AiOutlineLoading } from 'react-icons/ai'; // Import a loading icon from react-icons
import { Link } from "react-router-dom";

interface FormProps<T extends FieldValues> {
    formType: "login" | "signup";
    formFields: React.ReactNode;
    methods: UseFormReturn<T>;
    onSave: SubmitHandler<T>;
    loading: boolean;
}

const SignupLoginForm = <T extends FieldValues>({
    formType,
    formFields,
    methods,
    onSave,
    loading
}: FormProps<T>) => {
    const buttonText = formType === "login" ? "Login" : "Create new account";
    const link = formType === "login" ? PageRoutes.signup : PageRoutes.login;
    const linkText = formType === "login" ? "Create new account" : "Login";
    const accountText = formType === "login" ? "Don't have an account?" : "Already have an account?";

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSave)}>
                <div className="flex justify-center items-center min-h-screen w-screen">
                    <Section className='w-full sm:w-[400px] sm:m-10 p-10 space-y-4 flex flex-col items-center'>
                        <Logo logoText={true} className="scale-125 mb-3" />

                        {formFields}

                        <Button className="w-full" type="submit" disabled={loading} iconBefore={loading ? <AiOutlineLoading className="animate-spin" /> : null}>{buttonText}</Button>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
                            <p>{accountText}</p>
                            <Link to={link} className="text-primary underline font-semibold">{linkText}</Link>
                        </div>
                    </Section>
                </div>
            </form>
        </FormProvider>
    )
};

export default SignupLoginForm;