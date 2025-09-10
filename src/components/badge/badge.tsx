import { cn } from "@utils/classes";

const VARIANTS = {
    positive: 'df:bg-green-300 df:text-green-800 df:border-green-500',
    negative: 'df:bg-red-300 df:text-red-800 df:border-red-500',
    warning: 'df:bg-amber-300 df:text-amber-800 df:border-amber-500',
    ghost: 'df:bg-[var(--ghost)] df:text-[var(--ghost-foreground)]',
    primary: 'df:bg-[var(--primary-surface)] df:text-[var(--primary)] df:border-[var(--primary)]',
    secondary: 'df:bg-[var(--secondary-surface)] df:text-[var(--secondary)] df:border-[var(--secondary)]'
}

export interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    variants?: keyof typeof VARIANTS;
}

export function Badge({ children, className = '', variants = 'warning' }: BadgeProps) {
    const baseStyles = 'df:inline-flex df:items-center df:rounded-full df:border df:border-[var(--border)] df:px-2.5 df:py-0.5 df:text-xs df:font-semibold df:transition-colors df:text-[var(--text)]'
    return (
        <span className={cn(baseStyles, VARIANTS[variants], className)}>
            {children}
        </span>
    );
}