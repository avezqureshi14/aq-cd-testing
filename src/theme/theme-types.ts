import type { ThemeConfig } from "antd";
import type { ReactNode } from "react";

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Theme = "light" | "dark";

export type ThemeProviderProps = {
  children: ReactNode;
  currentThemeName?: Theme;
};

export type ThemeConfigProviderProps = ThemeProviderProps & {
  theme?: ThemeConfig;
};

export type CreateThemeType<T extends keyof NonNullable<ThemeConfig["components"]>> = NonNullable<
  ThemeConfig["components"]
>[T];
