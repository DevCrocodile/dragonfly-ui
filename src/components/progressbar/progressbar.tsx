import { cn } from "@utils/classes";

export interface ProgressBarProps {
    progress: number;
    className?: string;
    color?: string;
}

export function ProgressBar({ progress, className, color }: ProgressBarProps) {
    return (
        <div className={cn("df:relative df:w-full df:h-2 df:bg-gray-200 df:rounded", className)}>
            <div
                className={cn("df:absolute df:top-0 df:left-0 df:h-full df:bg-blue-500 df:rounded-full", {
                    "df:transition-all df:duration-300": progress < 100,
                })}
                style={{ width: `${progress.toString()}%`, backgroundColor: color }}
            />
        </div>
    )
}