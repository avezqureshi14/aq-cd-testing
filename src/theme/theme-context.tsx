import { createContext } from "react";

import type { Theme } from "@/theme/theme-types";

export type ThemeContextType = {
  currentThemeName: Theme;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
