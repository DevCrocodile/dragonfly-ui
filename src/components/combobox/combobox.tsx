import { useField } from "@/hooks/useField"
import { useState, createContext, useContext, isValidElement, cloneElement } from "react";
import { cn } from "@/utils/classes";
import { Search, Check } from "lucide-react";
import type { ElementWithOnClick, FieldProps } from "@/types";

interface ComboboxContext {
    searchTerm: FieldProps
    showCombobox: boolean
    value: string
    filteredOptions: string[]
    toggleCombobox: () => void
    handleOptionClick: (option: string) => void
}

const ComboboxContext = createContext<ComboboxContext | undefined>(undefined);

function useCombobox() {
    const context = useContext(ComboboxContext);
    if (!context) {
        throw new Error("useCombobox must be used within a ComboboxProvider");
    }
    return context;
}

export interface ComboboxProps {
    children: React.ReactNode;
    options: string[];
    value: string;
    setValue: (value: string) => void;
}

export function Combobox({ children, options, value, setValue }: ComboboxProps) {
    const searchTerm = useField({ type: "text", id: "search" });
    const [showCombobox, setShowCombobox] = useState(false);
    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.value.toLowerCase())
    );

    const toggleCombobox = () => {
        setShowCombobox(!showCombobox);
    }

    const handleOptionClick = (option: string) => {
        setValue(option);
        setShowCombobox(false);
    }

    return (
        <ComboboxContext.Provider value={{
            searchTerm,
            showCombobox,
            value,
            filteredOptions,
            toggleCombobox,
            handleOptionClick
        }}>
            {children}
        </ComboboxContext.Provider>
    );
}

interface ComboboxTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export function ComboboxTrigger({ children, asChild }: ComboboxTriggerProps) {
    const { toggleCombobox, value } = useCombobox();

    if (asChild && isValidElement(children)) {
        const originalProps = children.props as ElementWithOnClick;
        const originalOnClick = 'onClick' in originalProps ? originalProps.onClick : undefined;
        const newProps = {
            ...originalProps,
            onClick: (e: React.MouseEvent) => {
                if (originalOnClick) {
                    originalOnClick(e);
                }
                toggleCombobox();
            }
        };
        return cloneElement(children, newProps);
    }

    return (
        <div className="df:cursor-pointer" onClick={toggleCombobox}>
            {value !== "" ? value : children}
        </div>
    );
}

interface ComboboxContentProps {
    children: React.ReactNode;
    className?: string;
}

export function ComboboxContent({ children, className }: ComboboxContentProps) {
    const { showCombobox } = useCombobox();

    return (
        <div className={cn(showCombobox ? "df:scale-y-100 df:opacity-100" : "df:scale-y-0 df:opacity-0", "df:border df:border-[var(--border)] df:w-fit df:p-1 df:rounded-md df:transition-transform df:duration-100 df:ease-out df:origin-top df:absolute df:mt-1 df:bg-[var(--card)]", className)}>
            {children}
        </div>
    )
}

export function ComboboxSearch() {
    const { searchTerm } = useCombobox();
    return (
        <div className="df:relative">
            <Search className="df:absolute df:left-2 df:top-1/2 df:-translate-y-1/2 df:text-gray-400" width={16} height={16} />
            <input placeholder="Search..." {...searchTerm} className="df:pl-8 df:py-1 df:focus:outline-none df:placeholder:text-[var(--muted)] df:text-[var(--text)]" />
        </div>
    )
}

export function ComboboxList() {
    const { filteredOptions, handleOptionClick, value } = useCombobox();
    return (
        <ul className="df:flex df:flex-col df:gap-1 df:max-h-40 df:overflow-y-auto df:mt-1">
            {filteredOptions.map(option => (
                <li key={option} className="df:py-1 df:hover:bg-[var(--card-hover)] df:text-[var(--muted)] df:px-1.5 df:rounded-sm df:flex df:justify-between df:items-center df:cursor-pointer" onClick={() => { handleOptionClick(option) }}>{option}
                    {value === option && <Check className="df:opacity-80" width={18} height={18} />}
                </li>
            ))}
        </ul>
    )
}

export function ComboboxSeparator() {
    return (
        <span className="df:before:content-[''] df:before:block df:before:w-full df:before:h-[1px] df:before:bg-border df:before:rounded-full df:before:mr-2" />
    )
}