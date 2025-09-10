import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow, type TableProps } from "./table";


const meta: Meta<TableProps> = {
    title: "Components/Table",
    component: Table,
    subcomponents: {
        TableHeader,
        TableHead,
        TableBody,
        TableCell,
        TableRow
    },
    argTypes: {
        className: { control: "text" }
    }
}

export default meta;

type Story = StoryObj<TableProps>;

const usersExample = [
    { name: "John Doe", age: 30, location: "New York" },
    { name: "Jane Smith", age: 25, location: "London" }
];

export const Default: Story = {
    args: {
        children: (
            <>
                <TableHeader>
                    <TableHead>Name</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Location</TableHead>
                </TableHeader>
                <TableBody>
                    {usersExample.map((user, index) => (
                        <TableRow key={index}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.age}</TableCell>
                            <TableCell>{user.location}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </>
        )
    }
};
