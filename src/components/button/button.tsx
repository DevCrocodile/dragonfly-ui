export interface ButtonProps{
    children: React.ReactNode;
}
export function Button({ children }: ButtonProps) {
    return <button className="df:bg-blue-600 df:p-4">{children}</button>;
}