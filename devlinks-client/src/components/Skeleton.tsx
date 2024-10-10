import { cn } from "@/lib/utils";
import React from 'react';

interface SkeletonProps {
    type?: 'rectangle' | 'rounded' | 'input' | 'title' | 'subtitle' | 'text' | 'button';
    className?: string;
    repeat?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({
    type = 'text',
    className,
    repeat = 1
}) => {
    const baseClasses = "bg-gray-200 dark:bg-gray-700 rounded-lg";


    const renderSkeleton = () => {
        switch (type) {
            case 'rounded':
                return <div className={cn(baseClasses, "h-[90px] w-[90px] rounded-full", className)} />;
            case 'rectangle':
                return <div className={cn(baseClasses, "h-24 w-24", className)} />;
            case 'button':
                return <div className={cn(baseClasses, "h-9 w-full", className)} />;
            case 'input':
                return (
                    <div className="space-y-2">
                        <div className={cn(baseClasses, "h-4 w-1/4", className)} />
                        <div className={cn(baseClasses, "h-10 w-3/4", className)} />
                    </div>
                );
            case 'title':
                return <div className={cn(baseClasses, "h-4", className)} />;
            case 'subtitle':
                return <div className={cn(baseClasses, "h-[10px]", className)} />;
            default:
                return <div className={baseClasses} />;
        }
    };

    return (
        <>
            {[...Array(repeat)].map((_, index) => (
                <div key={index}>
                    {renderSkeleton()}
                </div>
            ))}
        </>
    );
};

export default Skeleton;