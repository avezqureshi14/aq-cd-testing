import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

import type { ThemeConfigProviderProps } from "@/theme/theme-types";

import antdDefaultTheme from "@/providers/ThemeConfig";
import { ThemeProvider } from "@/theme";
import { themeMerger } from "@/theme/theme-utils";

export default function ThemeConfigProvider({
  theme,
  currentThemeName,
  children,
}: ThemeConfigProviderProps) {
  const { mergedTheme } = themeMerger(antdDefaultTheme, theme);
  return (
    <StyleProvider layer>
      <ThemeProvider currentThemeName={currentThemeName}>
        <ConfigProvider theme={mergedTheme}>{children}</ConfigProvider>
      </ThemeProvider>
    </StyleProvider>
  );
}
