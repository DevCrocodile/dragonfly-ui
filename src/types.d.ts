export interface FiledProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    required?: boolean;
}