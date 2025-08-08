import type { Decorator, Preview } from "@storybook/react-vite";

import { withThemeByDataAttribute } from "@storybook/addon-themes";

import "../src/index.css";
import ThemeConfigProvider from "../src/providers/ThemeConfigProvider";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      codePanel: true,
    },
  },
};

export default preview;

export const decorators: Decorator[] = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
  Story => (
    <ThemeConfigProvider>
      <Story />
    </ThemeConfigProvider>
  ),
];
