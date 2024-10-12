import { cn } from "@/lib/utils";
import { PlatformDataType } from "@/types/platform.type";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";

const LinkPreviewButton = ({ platform, link, className }: { platform: PlatformDataType, link: string, className: string }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Button
                className={cn(`w-full active:opacity-90`, className)}
                style={{ backgroundColor: platform.background, color: platform.foreground }}
                iconBefore={<platform.Icon />}
                iconAfter={<FaArrowRight className="text-[10px]" />}
            >
                {platform.name}
            </Button>
        </a>
    );
};

export default LinkPreviewButton;