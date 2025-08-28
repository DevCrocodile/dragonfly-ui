import { cn } from "@/utils/classes";

export interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
    return (
        <div className={cn("df:animate-pulse df:bg-slate-200", className)} />
    )
}