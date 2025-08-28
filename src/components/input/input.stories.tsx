import type { Meta, StoryObj } from '@storybook/react';
import { Input, type InputProps } from './input';
import { useField } from '@/hooks/useField';
import { Label } from '../label/label';

const meta: Meta<InputProps> = {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        placeholder: {
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
    const field = useField({ type: 'text', id: 'username' });
    return (
        <div className='df:flex df:flex-col df:gap-1'>
            <Label htmlFor={field.id}>Username</Label>
            <Input field={field} placeholder='John' errorMessage='Esto es un mensaje de error' />
        </div>
    );
}

export const Default: Story = {
    render: () => <InputWithField />
};