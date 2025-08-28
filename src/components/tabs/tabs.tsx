import { cn } from "@utils/classes";
import { useState, createContext, useContext } from "react";
import { Button } from "../button";

interface TabContextProps {
    activeTab: string;
    setActiveTab: (key: string) => void;
    handleTabClick: (key: string) => void;
    handleKeyDown: (e: React.KeyboardEvent, key: string) => void;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

function useTabContext() {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error('useTabContext must be used within a TabProvider');
    }
    return context;
}

export interface TabsProps {
    defaultTab: string;
    children: React.ReactNode;
}

export function Tabs({ defaultTab, children }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleTabClick = (key: string) => {
        setActiveTab(key);
    }
    const handleKeyDown = (e: React.KeyboardEvent, key: string) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleTabClick(key);
        }
    }
    return (
        <TabContext.Provider value={{ activeTab, setActiveTab, handleTabClick, handleKeyDown }}>
            {children}
        </TabContext.Provider>
    )
}

interface TabListProps {
    children: React.ReactNode;
    className?: string;
}

export function TabList({ children, className }: TabListProps) {
    return (
        <div role="tablist" className={cn("df:flex df:items-center df:justify-center df:rounded-md df:bg-slate-100 df:p-1 df:gap-1 df:w-fit", className)}>
            {children}
        </div>
    )
}

interface TabTriggerProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

export function TabTrigger({ value, children, className }: TabTriggerProps) {
    const { activeTab, handleTabClick, handleKeyDown } = useTabContext();

    return (
        <Button
            role="tab"
            variant="ghost"
            aria-selected={activeTab === value}
            aria-controls={`tabpanel-${value}`}
            tabIndex={activeTab === value ? 0 : -1}
            onClick={() => { handleTabClick(value) }}
            onKeyDown={(e) => { handleKeyDown(e, value) }}
            className={cn(activeTab === value ? 'df:border-border df:font-semibold df:bg-white df:hover:bg-white/90' : 'df:border-transparent df:text-muted-foreground df:hover:bg-slate-200', 'df:px-3 df:py-1.5', className)}
        >
            {children}
        </Button>
    )
}

interface TabContentProps {
    value: string;
    children: React.ReactNode;
}

export function TabContent({ value, children }: TabContentProps) {
    const { activeTab } = useTabContext();

    if (activeTab !== value) return null;

    return (
        <div
            role="tabpanel"
            id={`tabpanel-${value}`}
            aria-labelledby={`tab-${value}`}
        >
            {children}
        </div>
    )
}
