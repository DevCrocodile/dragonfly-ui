import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, type CardProps } from './card';
import { Button } from '../button';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
  argTypes:{
    children:{
      control: 'text'
    },
    className: {
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj<CardProps>;

export const Primary: Story = {
  args: {
    children: (
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the content of the card.</p>
        </CardContent>
        <CardFooter>
          <Button>Call to Action</Button>
        </CardFooter>
      </Card>
    ),
  },
};