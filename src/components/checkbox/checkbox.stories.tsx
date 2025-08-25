import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox, type CheckboxProps } from "./checkbox";
import { useCheckbox } from "@/hooks/useCheckbox";
const meta: Meta<CheckboxProps> = {
    title: "Components/Checkbox",
    component: Checkbox
};

export default meta;

type Story = StoryObj<CheckboxProps>;

const CheckboxWithField = () => {
    const field = useCheckbox({ required: true });
    return <Checkbox label="Default Checkbox" field={field} errorMessage="This field is required" />;
}

export const Default: Story = {
    render: () => <CheckboxWithField />
};
