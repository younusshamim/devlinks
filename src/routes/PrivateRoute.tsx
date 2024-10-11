import { useProfile } from "@/context/ProfileContext";
import { ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { loading, saving } = useProfile();
    const isLoading = loading || saving;

    // if (isLoading) {
    //     return <PageLoader />;
    // }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;