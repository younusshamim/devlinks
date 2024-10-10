import { cn } from "@/lib/utils";

type PropsType = {
    children: React.ReactNode;
    className?: string;
}

const Section = ({ children, className }: PropsType) => {
    return (
        <div className={cn('p-5 bg-white rounded-lg', className)}>
            {children}
        </div>
    );
};

export default Section;