import PageLoader from "@/components/PageLoader";
import PageRoutes from "@/config/page-routes";
import { useProfile } from "@/context/ProfileContext";
import { useCheckSession } from "@/hooks/user-hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { data, isLoading, } = useCheckSession();
    const { fetching } = useProfile()
    const isSession = data?.data?.isSession
    const token = localStorage.getItem('token')

    if (isLoading || fetching) {
        return <PageLoader />;
    }

    return isSession && token ? <>{children}</> : <Navigate to={PageRoutes.login} />;
};

export default PrivateRoute;