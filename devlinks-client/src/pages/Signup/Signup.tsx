import Logo from "@/components/Logo/Logo";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageRoutes from "@/routes/page-routes";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="flex justify-center items-center min-h-screen w-screen">
            <Section className='w-full sm:w-[400px] sm:m-10 p-10 space-y-4 flex flex-col items-center'>
                <Logo className="scale-125 mb-3" />

                <Input label="First name" placeholder="Write first name" />
                <Input label="Last name" placeholder="Write last name" />
                <Input label="Email" placeholder="Write email address" />
                <Input label="Password" type="password" placeholder="Write password" />

                <Button className="w-full">Create new account</Button>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
                    <p>Already have an account?</p>
                    <Link to={PageRoutes.login} className="text-primary underline font-semibold">Login</Link>
                </div>
            </Section>
        </div>
    );
};

export default Signup;