import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, type AvatarProps } from './avatar';   

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
        src: { control: 'text' },
        userName: { control: 'text' },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
};

export default meta;

type Story = StoryObj<AvatarProps>;

export const Default: Story = {
    args: {
        userName: 'John Doe',
        size: 'medium',
    },
};

export const WithImage: Story = {
    args: {
        userName: 'John Doe',
        size: 'medium',
        src: 'https://i.pinimg.com/474x/55/7d/0c/557d0c257c193e8d1f93ebe2c5bff1a4.jpg',
    },
};