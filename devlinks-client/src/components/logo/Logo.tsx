import { cn } from "@/lib/utils";
import Icon from "./Icon";

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center gap-[6px]", className)}>
            <Icon className="mt-[2px]" />
            <h1 className="text-2xl font-bold">devlinks</h1>
        </div>
    );
};

export default Logo;