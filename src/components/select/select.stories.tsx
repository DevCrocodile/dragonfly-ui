import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select, type SelectProps } from "./select";
import { useField } from "@/hooks/useField";
import { Label } from "../label/label";

const meta: Meta<SelectProps> = {
    title: "Components/Select",
    component: Select,
    argTypes: {
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
    const field = useField({ type: "select", id: 'select-option' });
    return (
        <div className='df:flex df:flex-col df:gap-1' >
            <Label htmlFor={field.id}>Select an option</Label>
            <Select
                options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                ]}
                field={field}
                errorMessage="Hola"
            />
        </div>
    );
};

export const Default: Story = {
    render: () => <SelectWithField />
};