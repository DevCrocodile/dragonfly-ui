import { cn } from "@/utils/classes";

export interface TableProps {
    children: React.ReactNode;
    className?: string;
}

interface TableComponentProps {
    children: React.ReactNode;
    className?: string;
}

export function TableHeader({ children, className }: TableComponentProps) {
    return (
        <thead className={cn("df:border-b df:border-b-[var(--border)] df:bg-[var(--card)]", className)}>
            <tr className="df:transition-colors df:hover:bg-[var(--card)]">
                {children}
            </tr>
        </thead>
    )
}

export function TableHead({ children, className }: TableComponentProps) {
    return (
        <th className={cn("df:h-12 df:px-4 df:text-left df:align-middle df:font-medium df:text-[var(--muted)]", className)}>
            {children}
        </th>
    )
}

export function TableBody({ children, className }: TableComponentProps) {
    return (
        <tbody className={cn("df:[&_tr:last-child]:border-0", className)}>
            {children}
        </tbody>
    )
}

export function TableRow({ children, className }: TableComponentProps) {
    return (
        <tr className={cn("df:border-b df:border-b-[var(--border)] df:transition-colors df:bg-[var(--card)] df:text-sm", className)}>
            {children}
        </tr>
    )
}

export function TableCell({ children, className }: TableComponentProps) {
    return (
        <td className={cn("df:p-4 df:text-[var(--text)]", className)}>
            {children}
        </td>
    )
}

export function Table({ children, className }: TableProps) {
    return (
        <div className={cn("df:rounded-md df:border df:border-[var(--border)] df:overflow-hidden", className)}>
            <table className="df:relative df:w-full df:overflow-auto">
                {children}
            </table>
        </div>
    )
}