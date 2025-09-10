import { cn } from "@utils/classes";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor: string;
    children: React.ReactNode;
    className?: string;
}

export function Label({ htmlFor, children, className, ...props }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className={cn('df:text-sm df:font-medium df:text-[var(--text)]', className)} {...props}>
            {children}
        </label>
    );
}