export interface FiledProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    type: string;
    required?: boolean;
}