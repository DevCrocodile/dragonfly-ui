import type { FieldProps } from '@/types';
import { cn } from '@utils/classes';
import { ChevronsUpDownIcon } from 'lucide-react';

interface Option {
    value?: string;
    label?: string;
}

export interface SelectProps {
    options: Option[];
    field: FieldProps;
    className?: string;
    errorMessage?: string;
}

export function Select({ options, field, className, errorMessage }: SelectProps) {
    const baseStyles = 'df:m-0 df:flex df:h-10 df:w-full df:rounded-md df:border df:border-[var(--border)] df:px-3 df:py-2 df:text-sm df:focus-visible:outline-none df:focus-visible:ring-2 df:focus-visible:ring-[var(--ring)] df:focus-visible:ring-offset-2 df:bg-[var(--card)] df:text-[var(--text)] df:placeholder:text-[var(--muted)] df:disabled:cursor-not-allowed df:disabled:opacity-50 df:shadow-sm df:appearance-none';
    return (
        <>
            <div className='df:relative'>
                <select className={cn(baseStyles, className)} {...field}>
                    {
                        options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))
                    }
                </select>
                <ChevronsUpDownIcon width={16} height={16} className='df:absolute df:right-3 df:top-1/2 df:-translate-y-1/2 df:text-[var(--muted)]' />
            </div>
            <div className={cn(errorMessage !== undefined ? 'df:h-3.5' : 'df:h-0', 'df:transition-all df:duration-200')}>
                {errorMessage !== undefined && <span className='df:text-sm df:text-red-300'>{errorMessage}</span>}
            </div>
        </>
    )
}