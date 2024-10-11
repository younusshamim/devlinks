import { PlatformDataType } from "@/types/platform.type";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";

const LinkPreviewButton = ({ platform }: { platform: PlatformDataType }) => {
    return (
        <Button

            className={`w-full active:opacity-90`}
            style={{ backgroundColor: platform.background, color: platform.foreground }}
            iconBefore={<platform.Icon />}
            iconAfter={<FaArrowRight className="text-[10px]" />}
        >
            {platform.name}
        </Button>
    );
};

export default LinkPreviewButton;