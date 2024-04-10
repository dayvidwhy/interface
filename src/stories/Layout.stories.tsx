import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";
import { Navigation } from "./Navigation";
import { Card } from "./Card";
import { Footer } from "./Footer";
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
            <Navigation
                orientation="vertical"
                routes={
                    Array.from({ length: 30 }).map((_, i) => (
                        { label: `Link ${i}`, icon: Home, path: `/link-${i}` }
                    ))
                }
                activeRoute={{ label: "Link 1", path: "/link-1" }}
            />
        ),
        main: (
            <div className="bg-slate-50">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div className="mx-2 mb-2">
                        <Card title="Header" description="Description" footer="Footer" key={i} />
                    </div>
                ))}
            </div>
        ),
        footer: (
            <Footer />
        )
    }
};
