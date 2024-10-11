import { cn } from "@/lib/utils";
import { PlatformDataType } from "@/types/platform.type";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const LinkPreviewButton = ({ platform, link, className }: { platform: PlatformDataType, link: string, className: string }) => {
    return (
        <Link to={link}>
            <Button
                className={cn(`w-full active:opacity-90`, className)}
                style={{ backgroundColor: platform.background, color: platform.foreground }}
                iconBefore={<platform.Icon />}
                iconAfter={<FaArrowRight className="text-[10px]" />}
            >
                {platform.name}
            </Button>
        </Link>
    );
};

export default LinkPreviewButton;