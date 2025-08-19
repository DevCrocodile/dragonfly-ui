import { cn } from "@utils/classes";
import type { FieldProps } from "@/types";

export interface InputProps {
    placeholder?: string;
    field: FieldProps;
    label?: string;
    className?: string;
    errorMessage?: string;
}

export function Input({ placeholder, label, className, errorMessage, field }:InputProps){
    const handleChange = field.onChange;
    const baseStyles = 'df:m-0 df:flex df:h-10 df:w-full df:rounded-md df:border df:border-border df:px-3 df:py-2 df:text-sm df:file:border-0 df:file:bg-transparent df:file:text-sm df:file:font-medium df:placeholder:text-description df:focus-visible:outline-none df:focus-visible:ring-2 df:focus-visible:ring-blue-500 df:focus-visible:ring-offset-2 df:disabled:cursor-not-allowed df:disabled:opacity-50'
    return (
        <div className={cn(label !== undefined && 'df:flex df:flex-col df:gap-1')}>
            {label !== undefined && (<label className="df:text-sm df:font-medium">{label}</label>)}
            <input placeholder={placeholder} className={cn(baseStyles, className)} {...field} onChange={handleChange}/>
            <div className={cn(errorMessage !== undefined ? 'df:h-3.5' : 'df:h-0', 'df:transition-all df:duration-200')}>
                {errorMessage !== undefined && <span className="df:text-sm df:text-red-300">{errorMessage}</span>}
            </div>
        </div>
    )
}