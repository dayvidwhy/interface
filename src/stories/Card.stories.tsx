import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@interface/card";

const meta = {
    title: "Interface/Card",
    component: Card,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
 
    },
} satisfies Meta<typeof Card>;

export default meta;
  type Story = StoryObj<typeof meta>;

export const CardStory: Story = {
    args: {
        title: "Header",
        description: "Description",
        footer: "Footer"
    }
};
