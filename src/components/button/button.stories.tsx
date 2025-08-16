import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, type ButtonProps } from './button';

const meta: Meta<ButtonProps> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        children: {
            control: 'text',
        }
    },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        variant: 'secondary',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled Button',
        variant: 'ghost',
    },
};