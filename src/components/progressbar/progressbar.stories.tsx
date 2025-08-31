import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar, type ProgressBarProps } from './progressbar';

const meta: Meta<ProgressBarProps> = {
    title: 'Components/ProgressBar',
    component: ProgressBar
};

export default meta;

type Story = StoryObj<ProgressBarProps>;

export const Default: Story = {
    args: {
        progress: 50,
        className: '',
        color: '#001B99'
    },
};
