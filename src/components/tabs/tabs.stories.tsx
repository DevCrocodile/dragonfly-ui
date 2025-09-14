import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, type TabsProps, TabList, TabTrigger, TabContent } from './tabs';

const meta: Meta<TabsProps> = {
    title: 'Components/Tabs',
    component: Tabs
};

export default meta;

type Story = StoryObj<TabsProps>;

export const Default: Story = {
    args: {
        children: (
            <div>
                <TabList>
                    <TabTrigger value="tab1">Tab 1</TabTrigger>
                    <TabTrigger value="tab2">Tab 2</TabTrigger>
                    <TabTrigger value="tab3">Tab 3</TabTrigger>
                </TabList>
                <TabContent value="tab1">Content for Tab 1</TabContent>
                <TabContent value="tab2">Content for Tab 2</TabContent>
                <TabContent value="tab3">Content for Tab 3</TabContent>
            </div>
        )
    }
};

export const DarkMode: Story = {
    args: {
        children: (
            <div className='dark'>
                <TabList>
                    <TabTrigger value="tab1">Tab 1</TabTrigger>
                    <TabTrigger value="tab2">Tab 2</TabTrigger>
                    <TabTrigger value="tab3">Tab 3</TabTrigger>
                </TabList>
                <TabContent value="tab1">Content for Tab 1</TabContent>
                <TabContent value="tab2">Content for Tab 2</TabContent>
                <TabContent value="tab3">Content for Tab 3</TabContent>
            </div>
        )
    }
}