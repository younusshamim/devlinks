import PageLoader from "@/components/PageLoader";
import PageRoutes from "@/config/page-routes";
import { showErrorToast } from "@/config/toast-options";
import { useProfile } from "@/context/ProfileContext";
import { useCheckSession } from "@/hooks/user-hooks";
import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { data, isLoading, error } = useCheckSession();
    const { fetching } = useProfile()
    const isSession = data?.data?.isSession

    useEffect(() => {
        if (error) {
            if (error instanceof Error) {
                showErrorToast(`${error.message}`);
            } else {
                showErrorToast('An unknown error occurred');
            }
        }
    }, [error]);

    if (isLoading || fetching) {
        return <PageLoader />;
    }

    return isSession ? <>{children}</> : <Navigate to={PageRoutes.login} />;
};

export default PrivateRoute;