import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

    core: {
        disableTelemetry: true
    },

    addons: [
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@chromatic-com/storybook"),
        getAbsolutePath("@storybook/addon-interactions"),
    ],

    framework: {
        name: getAbsolutePath("@storybook/react-vite"),
        options: {},
    },

    docs: {},

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};
export default config;

function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, "package.json")));
}
