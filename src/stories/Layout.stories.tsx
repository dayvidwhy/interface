import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";
import { Navigation } from "./Navigation";
import { Home } from "lucide-react";

const meta = {
    title: "Interface/Layout",
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
            <Navigation 
                routes={[
                    { label: "Home", icon: Home, path: "/" },
                    { label: "About", icon: Home, path: "/about" },
                    { label: "Contact", icon: Home, path: "/contact" },
                ]}
                activeRoute={{ label: "Home", path: "/" }}
            />
        ),
        sidebar: (
            <div className="w-full">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="h-16 w-full bg-gray-300 mb-2">
                        Test
                    </div>
                ))}
            </div>
        ),
        main: (
            <div className="h-full w-full">
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
