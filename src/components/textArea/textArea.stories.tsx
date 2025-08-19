import type { Meta, StoryObj } from '@storybook/react';
import { TextArea, type TextAreaProps } from './textArea';
import { useField } from '@/hooks/useField';

const meta: Meta<TextAreaProps> = {
    title: 'Components/TextArea',
    component: TextArea,
    argTypes: {
        field: { control: 'object' },
        label: { control: 'text' },
        className: { control: 'text' },
        errorMessage: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<TextAreaProps>;

const TextAreaWithHook = () => {
    const field = useField({ type: 'text' });
    return <TextArea field={field} label='Text Area' placeholder='Enter text here...' errorMessage='Este es un mensaje de error'/>;
}
export const Default: Story = {
    render: () => <TextAreaWithHook/>
};
