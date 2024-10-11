import PageRoutes from "@/config/page-routes";
import { screens } from "@/config/theme";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const Logo = ({ className }: { className?: string }) => {
    const smDevice = useMediaQuery(`(min-width: ${screens.sm})`);

    return (
        <Link to={PageRoutes.customizeLinks}>
            <div className={cn("flex items-center gap-[6px]", className)}>
                <Icon className={cn("", {
                    'mt-[2px]': smDevice,
                    'scale-125': !smDevice
                })} />
                {smDevice && <h1 className="text-2xl font-bold">devlinks</h1>}
            </div>
        </Link>
    );
};

export default Logo;