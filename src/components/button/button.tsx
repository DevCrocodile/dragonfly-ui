import { cn } from "@utils/classes";

export interface ButtonProps{
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
}

const VARIANTS ={
    primary: 'df:bg-[var(--primary)] df:text-[var(--primary-foreground)] df:hover:bg-[var(--primary-hover)]',
    secondary: 'df:bg-[var(--secondary)] df:text-[var(--secondary-foreground)] df:hover:bg-[var(--secondary-hover)]',
    ghost: 'df:bg-transparent df:hover:bg-slate-100 df:text-slate-900 df:hover:text-slate-700 df:border-border df:text-shadow-none',
}

const SIZES = {
    small: 'df:text-xs df:px-2 df:py-1 df:rounded-sm',
    medium: 'df:text-sm df:px-3 df:py-2 df:rounded-md',
    large: 'df:text-lg df:px-4 df:py-2 df:rounded-lg',
}

export function Button({ children, className, variant = "primary", size = "medium", type, onClick, disabled }: ButtonProps) {
    const baseStyles = 'df:flex df:items-center df:cursor-pointer df:justify-center df:gap-2 df:transition-colors df:border df:font-medium df:px-4 df:py-2 df:disabled:pointer-events-none df:disabled:opacity-50 df:text-shadow-xs'

    return <button className={cn(baseStyles, VARIANTS[variant], SIZES[size], className)} type={type} onClick={onClick} disabled={disabled}>{children}</button>;
}