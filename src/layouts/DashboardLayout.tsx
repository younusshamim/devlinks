import DashboardHeader from "@/components/DashboardHeader";
import PhoneMockup from "@/components/PhoneMockup/PhoneMockup";
import Section from "@/components/Section";
import { useProfile } from "@/context/ProfileContext";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const { fetching, userDetails } = useProfile();

    return (
        <div className="p-4 space-y-4">
            <DashboardHeader />

            <div className="flex md:space-x-4">
                <Section className="w-[45%] hidden md:block">
                    <PhoneMockup />
                </Section>

                <Section className="w-full md:w-[55%] px-0 py-7" >
                    {!fetching && userDetails?.email && <Outlet />}
                </Section>
            </div>
        </div>
    );
};

export default DashboardLayout;