import type { Meta, StoryObj } from '@storybook/react-vite';
import { Combobox, type ComboboxProps, ComboboxTrigger, ComboboxContent, ComboboxSearch, ComboboxList, ComboboxSeparator } from './combobox';
import { useState } from 'react';
import { Button } from '../button';

const meta: Meta<ComboboxProps> = {
    title: 'Components/Combobox',
    component: Combobox,
};

export default meta;

type Story = StoryObj<typeof meta>;

const ComboboxWithHook = () => {
    const [value, setValue] = useState("");

    return (
        <div className='dark'>
            <Combobox options={["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"]} value={value} setValue={setValue}>
                <ComboboxTrigger asChild>
                    <Button className='df:min-w-[150px] df:flex df:justify-start'>
                        {value !== "" ? value : "Select an option"}
                    </Button>
                </ComboboxTrigger>
                <ComboboxContent>
                    <ComboboxSearch />
                    <ComboboxSeparator />
                    <ComboboxList />
                </ComboboxContent>
            </Combobox>
            <div>El valor actual es: {value}</div>
        </div>
    )
}

export const Default: Story = {
    render: () => <ComboboxWithHook />
};