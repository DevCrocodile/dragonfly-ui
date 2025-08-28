import type { Meta, StoryObj } from '@storybook/react';
import { TextArea, type TextAreaProps } from './textArea';
import { useField } from '@/hooks/useField';
import { Label } from '../label';

const meta: Meta<TextAreaProps> = {
    title: 'Components/TextArea',
    component: TextArea,
    argTypes: {
        field: { control: 'object' },
        className: { control: 'text' },
        errorMessage: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<TextAreaProps>;

const TextAreaWithHook = () => {
    const field = useField({ type: 'text', id: 'text-area-id' });
    return (
        <>
            <Label htmlFor={field.id}>Text Area</Label>
            <TextArea field={field} placeholder='Enter text here...' errorMessage='Este es un mensaje de error' />
        </>
    );
}
export const Default: Story = {
    render: () => <TextAreaWithHook />
};
