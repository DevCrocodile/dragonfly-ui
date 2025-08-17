import { cn } from "@utils/classes";

export interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    variants?: 'primary' | 'secondary' | 'ghost' | 'positive' | 'negative' | 'warning'
}

const VARIANTS = {
    positive: 'df:bg-green-300 df:text-green-800 df:border-green-500',
    negative: 'df:bg-red-300 df:text-red-800 df:border-red-500',
    warning: 'df:bg-amber-300 df:text-amber-800 df:border-amber-500',
    ghost: 'df:bg-transparent df:text-text',
    primary: 'df:bg-[var(--primary-surface)] df:text-[var(--primary)] df:border-[var(--primary)]',
    secondary: 'df:bg-[var(--secondary-surface)] df:text-[var(--secondary)] df:border-[var(--secondary)]'
}
export function Badge ({ children, className = '', variants = 'warning' }: BadgeProps) {
    const baseStyles = 'df:inline-flex df:items-center df:rounded-full df:border df:border-border df:px-2.5 df:py-0.5 df:text-xs df:font-semibold df:transition-colors df:focus:outline-none df:focus:ring-2 df:text-text df:focus:ring-offset-2'
    return (
        <span className={cn(baseStyles, VARIANTS[variants] ,className)}>
            {children}
        </span>
    );
}