import PageLoader from "@/components/PageLoader";
import PageRoutes from "@/config/page-routes";
import { useProfile } from "@/context/ProfileContext";
import { useCheckSession } from "@/hooks/user-hooks";
import { getLocalStorage } from "@/lib/localStorage";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { data, isLoading, } = useCheckSession();
    const { fetching } = useProfile()
    const isSession = data?.data?.isSession
    const token = getLocalStorage('token')
    const { pathname } = useLocation()

    const isLoadingOrFetching = isLoading || fetching;

    if (isLoadingOrFetching) {
        return <PageLoader />;
    }

    if (pathname === '/') {
        return <Navigate to={PageRoutes.customizeLinks} />;
    }

    if (!isSession || !token) {
        return <Navigate to={PageRoutes.login} />;
    }

    return <>{children}</>;
};

export default PrivateRoute;