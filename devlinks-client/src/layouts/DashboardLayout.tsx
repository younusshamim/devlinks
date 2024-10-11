import DashboardHeader from "@/components/DashboardHeader";
import PhoneMockup from "@/components/PhoneMockup/PhoneMockup";
import Section from "@/components/Section";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="p-4 space-y-4">
            <DashboardHeader />

            <div className="flex space-x-4">
                <Section className="w-[45%] hidden md:block">
                    <PhoneMockup />
                </Section>

                <Section className="w-full md:w-[55%] px-0 py-7" ><Outlet /></Section>
            </div>
        </div>
    );
};

export default DashboardLayout;