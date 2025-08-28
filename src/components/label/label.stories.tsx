import type { Meta, StoryObj } from '@storybook/react';
import { Label, type LabelProps } from './label';

const meta: Meta<LabelProps> = {
    title: 'Components/Label',
    component: Label
};

export default meta;
type Story = StoryObj<LabelProps>;

export const Default: Story = {
    args: {
        htmlFor: 'input-id',
        children: 'Label'
    },
};
