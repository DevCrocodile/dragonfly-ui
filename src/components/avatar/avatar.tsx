import { cn } from "@/utils/classes";

const SIZES = {
    small: 'df:w-8 df:h-8 df:text-sm',
    medium: 'df:w-12 df:h-12 df:text-base',
    large: 'df:w-16 df:h-16 df:text-lg',
}

export interface AvatarProps {
    src?: string;
    userName?: string;
    size?: keyof typeof SIZES;
    className?: string;
}

export function Avatar({ src, userName = '', size = "medium", className = ''}: AvatarProps) {
    const initials = userName.split(' ').map((name) => name[0]).join('').toUpperCase()
    const baseStyles = 'df:flex df:items-center df:justify-center df:rounded-full df:bg-[var(--primary-surface)] df:text-[var(--primary)]'
    return (
        <div className={cn(baseStyles, SIZES[size], className)}>
            {src ? <img src={src} alt={userName} className="df:w-full df:h-full df:rounded-full df:object-cover"/> : <div>{initials}</div>}
        </div>
    );
}