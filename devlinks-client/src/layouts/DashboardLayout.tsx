import DashboardHeader from "@/components/Headers/DashboardHeader";
import PhoneMockup from "@/components/PhoneMockup/PhoneMockup";
import Section from "@/components/Section";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="px-4 pt-4 space-y-4">
            <DashboardHeader />

            <div className="flex space-x-4 ">
                <Section className="w-[45%]">
                    <PhoneMockup />
                </Section>

                <Section className="w-[55%]"><Outlet /></Section>
            </div>
        </div>
    );
};

export default DashboardLayout;