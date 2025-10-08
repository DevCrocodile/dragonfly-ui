import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, type DialogProps, DialogTrigger, DialogContent, DialogClose } from './dialog';
import { Button } from '../button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../card';
import { useState } from 'react';

const meta: Meta<DialogProps> = {
    title: 'Components/Dialog',
    component: Dialog
};

export default meta;
type Story = StoryObj<DialogProps>;

export const Default: Story = {
    args: {
        open: false,
        children: (
            <>
                <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                    <Card>
                        <CardHeader>
                            <CardTitle>Dialog Title</CardTitle>
                            <CardDescription>Dialog Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>This is the content of the dialog.</p>
                        </CardContent>
                        <CardFooter>
                            <DialogClose asChild>
                                <Button>Close</Button>
                            </DialogClose>
                        </CardFooter>
                    </Card>
                </DialogContent>
            </>
        )
    }
};

const DialogWithExternalControl = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => { setIsOpen(prev => !prev) }}>Open Dialog</Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                    <Card>
                        <CardHeader>
                            <CardTitle>Dialog Title</CardTitle>
                            <CardDescription>Dialog Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>This is the content of the dialog.</p>
                        </CardContent>
                    </Card>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export const Controlled: Story = {
    render: () => <DialogWithExternalControl />
};