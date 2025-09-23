import type { FieldProps } from "@/types";
import { Input } from "../input";
import { Search } from "lucide-react";
import { cn } from "@utils/classes";

export interface SearchbarProps {
    placeholder?: string;
    field: FieldProps;
    className?: string;
}

export function Searchbar({ placeholder, field, className }: SearchbarProps) {
    return (
        <div className="df:relative df:w-full">
            <Search className="df:absolute df:left-3 df:top-1/2 df:h-4 df:w-4 df:-translate-y-1/2 df:text-[var(--muted)]" />
            <Input placeholder={placeholder} field={field} className={cn('df:pl-10', className)} />
        </div>
    )
}