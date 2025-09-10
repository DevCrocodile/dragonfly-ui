import { cn } from '@utils/classes'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function Card({ children, className = '', ...props }: CardProps) {
    const baseStyles = 'df:rounded-lg df:border df:border-[var(--border)] df:shadow-sm df:transition-shadow df:bg-[var(--card)]'
    return (
        <div className={cn(baseStyles, className)} {...props}>
            {children}
        </div>
    );
}

export function CardHeader({ children, className = '', ...props }: CardProps) {
    const baseStyles = 'df:p-6'
    return (
        <div className={cn(baseStyles, className)} {...props}>
            {children}
        </div>
    );
}

export function CardTitle({ children, className = '', ...props }: CardProps) {
    const baseStyles = 'df:text-text df:text-2xl df:font-semibold df:text-[var(--card-foreground)]'
    return (
        <div className={cn(baseStyles, className)} {...props}>
            {children}
        </div>
    );
}

export function CardDescription({ children, className = '', ...props }: CardProps) {
    const baseStyles = 'df:text-muted df:text-sm df:font-normal df:text-[var(--card-muted-foreground)]'
    return (
        <div className={cn(baseStyles, className)} {...props}>
            {children}
        </div>
    );
}

export function CardContent({ children, className = '', ...props }: CardProps) {
    const baseStyles = 'df:p-6 df:pt-0'
    return (
        <div className={cn(baseStyles, className)} {...props}>
            {children}
        </div>
    )
}

export function CardFooter({ children, className = '', ...props }: CardProps) {
    const baseStyles = 'df:p-6 df:pt-0'
    return (
        <div className={cn(baseStyles, className)} {...props}>
            {children}
        </div>
    );
}