import DashboardHeader from "@/components/Headers/DashboardHeader";
import PhoneMockup from "@/components/PhoneMockup/PhoneMockup";
import Section from "@/components/Section";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="p-4 space-y-4">
            <DashboardHeader />

            <div className="flex space-x-4 h-[calc(100vh-116px)]">
                <Section className="w-[45%]">
                    <PhoneMockup />
                </Section>

                <Section className="w-[55%]"><Outlet /></Section>
            </div>
        </div>
    );
};

export default DashboardLayout;