import { cn } from "@utils/classes";
import type { FieldProps } from "@/types";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    field: FieldProps;
    className?: string;
    errorMessage?: string;
}

export function Input({ placeholder, className, errorMessage, field, ...props }: InputProps) {
    const baseStyles = 'df:text-[var(--text)] df:m-0 df:flex df:h-10 df:w-full df:rounded-md df:border df:border-[var(--border)] df:px-3 df:py-2 df:text-sm df:file:border-0 df:file:bg-transparent df:file:text-sm df:file:font-medium df:placeholder:text-[var(--muted)] df:focus-visible:outline-none df:focus-visible:ring-2 df:focus-visible:ring-[var(--ring)] df:disabled:cursor-not-allowed df:disabled:opacity-50'
    return (
        <>
            <input placeholder={placeholder} className={cn(baseStyles, className)} {...field} {...props} />
            <div className={cn(errorMessage !== undefined ? 'df:h-3.5' : 'df:h-0', 'df:transition-all df:duration-200')}>
                {errorMessage !== undefined && <span className="df:text-sm df:text-red-300">{errorMessage}</span>}
            </div>
        </>
    )
}