import { cn } from '@utils/classes'

export interface CardProps {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void;
}

export function Card ({ children, className, onClick }: CardProps) {
    const baseStyles = 'df:rounded-lg df:border df:border-border df:shadow-sm df:transition-shadow'
    return (
        <div className={cn(baseStyles, className)} onClick={onClick}>
            {children}
        </div>
    );
}

export function CardHeader ({ children, className }: CardProps) {
    const baseStyles = 'df:p-6'
    return (
        <div className={cn(baseStyles, className)}>
            {children}
        </div>
    );
}

export function CardTitle ({ children, className }: CardProps) {
    const baseStyles = 'df:text-text df:text-2xl df:font-semibold'
    return (
        <div className={cn(baseStyles, className)}>
            {children}
        </div>
    );
}

export function CardDescription ({ children, className }: CardProps) {
    const baseStyles = 'df:text-muted df:text-sm df:font-normal'
    return (
        <div className={cn(baseStyles, className)}>
            {children}
        </div>
    );
}

export function CardContent ({ children, className }: CardProps){
    const baseStyles = 'df:p-6 df:pt-0'
    return(
        <div className={cn(baseStyles, className)}>
            {children}
        </div>
    )
}

export function CardFooter ({ children, className }: CardProps) {
    const baseStyles = 'df:p-6 df:pt-0'
    return (
        <div className={cn(baseStyles, className)}>
            {children}
        </div>
    );
}