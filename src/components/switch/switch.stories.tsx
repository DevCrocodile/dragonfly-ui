import type { Meta, StoryObj } from '@storybook/react';
import { Switch, type SwitchProps } from './switch';
import { useState } from 'react';

const meta: Meta<SwitchProps> = {
    title: 'Components/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
    }
};

export default meta;

type Story = StoryObj<SwitchProps>;

const SwitchWithState = () => {
    const [value, setValue] = useState(false);
    return <Switch value={value} setValue={setValue} color='var(--primary)' />;
};

const SwitchDarkWithState = () => {
    const [value, setValue] = useState(false);
    return <div className="dark"><Switch value={value} setValue={setValue} color='var(--primary)' /></div>;
}

export const Default: Story = {
    render: () => <SwitchWithState />
};

export const Dark: Story = {
    render: () => <SwitchDarkWithState />
};