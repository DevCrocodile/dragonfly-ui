export interface FieldProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    type: string;
    required?: boolean;
}

export interface ElementWithOnClick {
    onClick?: (e: React.MouseEvent) => void;
}

export interface CheckboxFieldProps extends FieldProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}