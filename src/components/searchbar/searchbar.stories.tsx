import type { Meta, StoryObj } from '@storybook/react';
import { Searchbar, type SearchbarProps } from './Searchbar';
import { useField } from '@/hooks/useField';

const meta: Meta<SearchbarProps> = {
    title: 'Components/Searchbar',
    component: Searchbar,
    argTypes: {
        placeholder: { control: 'text' },
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<SearchbarProps>;

const Template: Story = {
    render: (args) => {
        const field = useField({ type: 'text', id: 'search' });
        return <Searchbar {...args} field={field} />;
    },
};

export const Default: Story = {
    ...Template,
    args: {
        placeholder: 'Search...',
        className: '',
    },
};

export const FilterList: Story = {
    render: (args) => {
        const field = useField({ type: 'text', id: 'search-filter' });
        const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
        const value = field.value.toLowerCase() || '';
        const filtered = items.filter(item => item.toLowerCase().includes(value));
        return (
            <div>
                <Searchbar {...args} field={field} placeholder="Filter fruits..." />
                <ul>
                    {filtered.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    },
};