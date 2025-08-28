import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox, type CheckboxProps } from "./checkbox";
import { useCheckbox } from "@/hooks/useCheckbox";
import { Label } from "../label/label";

const meta: Meta<CheckboxProps> = {
    title: "Components/Checkbox",
    component: Checkbox
};

export default meta;

type Story = StoryObj<CheckboxProps>;

const CheckboxWithField = () => {
    const field = useCheckbox({ required: true, id: "checkbox-id" });
    return (
        <Checkbox field={field} errorMessage="This field is required">
            <Label htmlFor={field.id}>Default Checkbox</Label>
        </Checkbox>
    );
}

export const Default: Story = {
    render: () => <CheckboxWithField />
};
