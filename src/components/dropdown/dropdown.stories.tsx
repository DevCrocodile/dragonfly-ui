import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown, type DropdownProps, DropdownTrigger, DropdownContent, DropdownItem } from './dropdown';
import { Button } from '../button';

const meta: Meta<DropdownProps> = {
    title: 'Components/Dropdown',
    component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <div className='dark'>
                <DropdownTrigger asChild>
                    <Button variant='ghost'>Open Dropdown</Button>
                </DropdownTrigger>
                <DropdownContent>
                    <DropdownItem onClick={() => { alert('Item 1 clicked') }} className='df:bg-red-500 df:text-white df:hover:bg-red-700'>Item 1</DropdownItem>
                    <DropdownItem onClick={() => { alert('Item 2 clicked') }}>Item 2</DropdownItem>
                    <DropdownItem onClick={() => { alert('Item 3 clicked') }}>Item 3</DropdownItem>
                </DropdownContent>
            </div>
        )
    },
};