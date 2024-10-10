import DashboardHeader from "@/components/headers/DashboardHeader";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
            <DashboardHeader />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;