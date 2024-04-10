import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";

const meta = {
    title: "Example/Layout",
    component: Layout,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    args: {
 
    },
} satisfies Meta<typeof Layout>;

export default meta;
  type Story = StoryObj<typeof meta>;

export const LayoutStory: Story = {
    args: {
        header: (
            <div className="h-full w-full bg-cyan-300">
                Hello
            </div>
        ),
        sidebar: (
            <div className="w-full bg-orange-300">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="h-16 w-full bg-gray-300 mb-2">
                        Test
                    </div>
                ))}
            </div>
        ),
        main: (
            <div className="h-full w-full bg-fuchsia-300">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="h-16 w-full bg-gray-300 mb-2">
                        Test
                    </div>
                ))}
            </div>
        ),
        footer: (
            <div className="h-full w-full bg-emerald-300">
                Hello
            </div>
        )
    }
};
