import { createContext, useContext, useState, useRef, useEffect, isValidElement, cloneElement } from "react";
import { cn } from "@utils/classes";
import type { ElementWithOnClick } from "@/types";

interface DropdownContext {
    showDropdown: boolean;
    setShowDropdown: (show: boolean) => void;
    toggleDropdown: () => void;
}

const DropdownContext = createContext<DropdownContext | undefined>(undefined);

function useDropdown() {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error("useDropdown must be used within a DropdownProvider");
    }

    return context;
}

export interface DropdownProps {
    children: React.ReactNode;
}

export function Dropdown({ children }: DropdownProps) {
    const [showDropdown, setShowDropdown] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return (
        <DropdownContext.Provider value={{ showDropdown, setShowDropdown, toggleDropdown }}>
            <div ref={containerRef}>
                {children}
            </div>
        </DropdownContext.Provider>
    )
}

interface DropdownTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export function DropdownTrigger({ children, asChild }: DropdownTriggerProps) {
    const { toggleDropdown } = useDropdown();

    if (asChild && isValidElement(children)) {
        const originalProps = children.props as ElementWithOnClick;
        const originalOnClick = 'onClick' in originalProps ? originalProps.onClick : undefined;
        const newProps = {
            ...originalProps,
            onClick: (e: React.MouseEvent) => {
                if (originalOnClick) {
                    originalOnClick(e);
                }
                toggleDropdown();
            }
        }
        return cloneElement(children, newProps);
    }

    return (
        <div onClick={toggleDropdown} className="df:cursor-pointer">
            {children}
        </div>
    )
}

interface DropdownContentProps {
    children: React.ReactNode;
    className?: string;
}

export function DropdownContent({ children, className = '' }: DropdownContentProps) {
    const { showDropdown } = useDropdown();

    const baseStyles = 'df:gap-1 df:mt-1 df:text-start df:top-full df:bg-[var(--card)] df:z-50 df:w-fit df:overflow-hidden df:rounded-md df:border-[var(--border)] df:shadow-md df:flex df:flex-col df:gap-1 df:p-1 df:transition-transform df:duration-100 df:ease-out df:origin-top';
    return (
        <div className={cn(showDropdown ? 'df:scale-y-100 df:opacity-100' : 'df:scale-y-0 df:opacity-0', baseStyles, className)}>
            {children}
        </div>
    )
}

interface DropdownItemProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export function DropdownItem({ children, className, onClick }: DropdownItemProps) {
    const { setShowDropdown } = useDropdown();

    const handleClick = () => {
        if (onClick) onClick();

        setShowDropdown(false);
    }
    const baseStyles = 'df:cursor-pointer df:hover:bg-[var(--card-hover)] df:px-2 df:py-1.5 df:font-normal df:text-sm df:rounded-sm df:text-[var(--card-foreground)]';
    return (
        <div className={cn(baseStyles, className)} onClick={handleClick}>
            {children}
        </div>
    )
}