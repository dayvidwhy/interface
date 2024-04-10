import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";

const meta = {
    title: "Example/Navigation",
    component: Navigation,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
 
    },
} satisfies Meta<typeof Navigation>;

export default meta;
  type Story = StoryObj<typeof meta>;

export const NavigationStory: Story = {
    args: {
        routes: [
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
        ],
        activeRoute: { label: "Home", path: "/" }
    }
};
