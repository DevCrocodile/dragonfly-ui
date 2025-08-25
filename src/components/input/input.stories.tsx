import type { Meta, StoryObj } from '@storybook/react';
import { Input, type InputProps } from './input';
import { useField } from '@/hooks/useField';

const meta: Meta<InputProps> = {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        placeholder: {
            control: {
                type: 'text'
            }
        },
        label: {
            control: {
                type: 'text'
            }
        },
        className: {
            control: {
                type: 'text'
            }
        },
        errorMessage: {
            control: {
                type: 'text'
            }
        }
    }
};

export default meta;

type Story = StoryObj<InputProps>;

const InputWithField = () => {
    const field = useField({ type: 'text' });
    return <Input field={field} label='Nombre de usuario' placeholder='John' errorMessage='Esto es un mensaje de error' />;
}

export const Default: Story = {
    render: () => <InputWithField />
};