import { cn } from "@/lib/utils";
import { RiLinksLine } from "react-icons/ri";

const Icon = ({ className }: { className?: string }) => {
    return (
        <div className={cn("bg-primary text-white px-[2px] py-[1px] rounded-md", className)}>
            <RiLinksLine className="text-xl rotate-45" />
        </div>
    );
};

export default Icon;