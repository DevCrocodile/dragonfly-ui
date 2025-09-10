import { cn } from "@utils/classes";

export interface SwitchProps {
    value: boolean;
    setValue: (value: boolean) => void;
    className?: string;
    color?: string;
}

export function Switch({ value, setValue, className, color }: SwitchProps) {
    return (
        <div className={cn("df:flex df:items-center df:w-fit df:h-fit", className)}>
            <div
                className={cn("df:w-10 df:h-6 df:rounded-full df:relative df:cursor-pointer", {
                    "df:bg-blue-500": value,
                })}
                onClick={() => { setValue(!value) }}
                style={{ backgroundColor: value ? color : 'var(--border)' }}
            >
                <div
                    className={cn("df:w-4 df:h-4 df:rounded-full df:bg-white df:absolute df:top-1 df:left-1 df:transition-transform", {
                        "df:translate-x-4": value,
                    })}
                />
            </div>
        </div>
    );
}