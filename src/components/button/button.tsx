import { cn } from "@utils/classes";

const VARIANTS = {
    primary: 'df:bg-[var(--primary)] df:text-[var(--primary-foreground)] df:hover:bg-[var(--primary-hover)]',
    secondary: 'df:bg-[var(--secondary)] df:text-[var(--secondary-foreground)] df:hover:bg-[var(--secondary-hover)]',
    ghost: 'df:bg-[var(--ghost)] df:hover:bg-[var(--ghost-hover)] df:text-[var(--ghost-foreground)] df:hover:text-[var(--ghost-foreground)] df:border-border df:text-shadow-none',
}

const SIZES = {
    small: 'df:text-xs df:px-2 df:py-1 df:rounded-sm',
    medium: 'df:text-sm df:px-3 df:py-2 df:rounded-md',
    large: 'df:text-lg df:px-4 df:py-2 df:rounded-lg',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: keyof typeof VARIANTS;
    size?: keyof typeof SIZES;
    onClick?: () => void;
}


export function Button({ children, className = '', variant = "primary", size = "medium", onClick = undefined, ...props }: ButtonProps) {
    const baseStyles = 'df:flex df:items-center df:cursor-pointer df:justify-center df:gap-2 df:transition-colors df:border df:border-[var(--border)] df:font-medium df:px-4 df:py-2 df:disabled:pointer-events-none df:disabled:opacity-50 df:text-shadow-xs'

    return <button className={cn(baseStyles, VARIANTS[variant], SIZES[size], className)} onClick={onClick} {...props}>{children}</button>;
}