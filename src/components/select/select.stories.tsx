import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select, type SelectProps } from "./select";
import { useField } from "@/hooks/useField";

const meta: Meta<SelectProps> = {
    title: "Components/Select",
    component: Select,
    argTypes: {
        label: {
            control: {
                type: "text",
            },
        },
        errorMessage: {
            control: {
                type: "text",
            },
        },
    },
};

export default meta;

type Story = StoryObj<SelectProps>;

const SelectWithField = () => {
    const field = useField({ type: "select" });
    return (
        <Select
            options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
            ]}
            label="Select an option"
            field={field}
            errorMessage="Hola"
        />
    );
};

export const Default: Story = {
    render: () => <SelectWithField />
};