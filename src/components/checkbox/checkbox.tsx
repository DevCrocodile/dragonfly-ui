import type { CheckboxFieldProps } from "@/types";
import { cn } from "@utils/classes";

export interface CheckboxProps {
    field: CheckboxFieldProps;
    className?: string;
    children: React.ReactNode;
    errorMessage?: string;
}

export function Checkbox({ className, errorMessage, field, children }: CheckboxProps) {
    return (
        <div className="df:flex df:gap-1 df:flex-col">
            <div className="df:flex df:items-center df:gap-2">
                <input
                    {...field}
                    className={cn("df:h-4 df:w-4 df:rounded-sm df:border df:border-border df:bg-background df:checked:bg-blue-500 df:focus-visible:outline-none df:focus-visible:ring-2 df:focus-visible:ring-blue-500 df:focus-visible:ring-offset-2", className)}
                />
                {children}
            </div>
            {errorMessage && <span className="df:text-sm df:text-red-300">{errorMessage}</span>}
        </div>
    );
}
