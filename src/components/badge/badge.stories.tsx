import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge, type BadgeProps } from './badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const Primary: Story = {
    args: {
        children: 'Default Badge',
        variants: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Badge',
        variants: 'secondary',
    }
}

export const Positive: Story = {
    args: {
        children: 'Positive Badge',
        variants: 'positive',
    }
}

export const Negative: Story = {
    args: {
        children: 'Negative Badge',
        variants: 'negative',
    }
}    

export const Warning: Story = {
    args: {
        children: 'Warning Badge',
        variants: 'warning',
    }
}