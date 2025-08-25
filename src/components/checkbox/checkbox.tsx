import type { CheckboxFieldProps } from "@/types";
import { cn } from "@utils/classes";

export interface CheckboxProps {
    label: string;
    field: CheckboxFieldProps;
    className?: string;
    errorMessage?: string;
}

export function Checkbox({ label, className, errorMessage, field }: CheckboxProps) {
    return (
        <div className={cn("df:flex df:gap-1 df:flex-col", className)}>
            <div className="df:flex df:items-center df:gap-2">
                <input
                    {...field}
                />
                <label className="df:text-sm df:font-medium">
                    {label}
                </label>
            </div>
            {errorMessage && <span className="df:text-sm df:text-red-300">{errorMessage}</span>}
        </div>
    );
}
