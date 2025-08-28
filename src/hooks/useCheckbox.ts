import { useState } from "react";

export function useCheckbox({ id, required = false }: { id: string; required?: boolean }) {
    const [checked, setChecked] = useState(false);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setChecked(event.target.checked);
    };
    return {
        checked,
        onChange,
        required,
        type: "checkbox",
        value: checked ? "on" : "off",
        id
    };
}
