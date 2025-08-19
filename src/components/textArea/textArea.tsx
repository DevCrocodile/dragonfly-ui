import type { FieldProps } from '@/types'
import { cn } from '@utils/classes'

export interface TextAreaProps {
    field: FieldProps;
    label?: string;
    className?: string;
    errorMessage?: string;
    placeholder?: string;
}

export function TextArea({ field, label, className, errorMessage, placeholder }: TextAreaProps) {
    const baseStyles = 'df:m-0 df:flex df:h-24 df:w-full df:rounded-md df:border df:border-border df:px-3 df:py-2 df:text-sm df:focus-visible:outline-none df:focus-visible:ring-2 df:focus-visible:ring-blue-500 df:focus-visible:ring-offset-2'
    return (
        <div className={cn(label !== undefined && 'df:flex df:flex-col df:gap-1')}>
            {label !== undefined && <label className='df:text-sm df:font-medium'>{label}</label>}
            <textarea className={cn(baseStyles, className)} {...field} placeholder={placeholder} />
            <div className={cn(errorMessage !== undefined ? 'df:h-3.5' : 'df:h-0', 'df:transition-all df:duration-200')}>
                {errorMessage !== undefined && <span className='df:text-sm df:text-red-300'>{errorMessage}</span>}
            </div>
        </div>
    )
}