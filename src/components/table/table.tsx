export interface TableProps {
    children: React.ReactNode;
}

interface TableComponentProps {
    children: React.ReactNode;
}

export function TableHeader({ children }: TableComponentProps) {
    return (
        <thead className="df:border-b df:border-b-slate-500/20 df:bg-gray-200/50">
            <tr className="df:transition-colors df:hover:bg-gray-200/70">
                {children}
            </tr>
        </thead>
    )
}

export function TableHead({ children }: TableComponentProps) {
    return (
        <th className="df:h-12 df:px-4 df:text-left df:align-middle df:font-medium df:text-slate-500/80">
            {children}
        </th>
    )
}

export function TableBody({ children }: TableComponentProps) {
    return (
        <tbody className="df:[&_tr:last-child]:border-0">
            {children}
        </tbody>
    )
}

export function TableRow({ children }: TableComponentProps) {
    return (
        <tr className="df:border-b df:border-b-slate-500/20 df:transition-colors df:bg-white">
            {children}
        </tr>
    )
}

export function TableCell({ children }: TableComponentProps) {
    return (
        <td className="df:p-4">
            {children}
        </td>
    )
}

export function Table({ children }: TableProps) {
    return (
        <div className="df:rounded-md df:border df:border-slate-500/20 df:overflow-hidden">
            <table className="df:relative df:w-full df:overflow-auto">
                {children}
            </table>
        </div>
    )
}