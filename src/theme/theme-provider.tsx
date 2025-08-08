import { useEffect, useMemo, useState } from "react";

import type { Theme, ThemeProviderProps } from "@/theme/theme-types";

import { ThemeContext } from "@/theme/theme-context";
import { getStoredTheme, getSystemTheme, storeTheme } from "@/theme/theme-utils";

export function ThemeProvider({
  children,
  currentThemeName: initialThemeName,
}: ThemeProviderProps) {
  const [currentThemeName, setCurrentThemeName] = useState<Theme>(() => {
    return getStoredTheme() ?? getSystemTheme() ?? initialThemeName ?? "light";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentThemeName);
    storeTheme(currentThemeName);
  }, [currentThemeName]);

  const value = useMemo(() => ({ currentThemeName, setCurrentThemeName }), [currentThemeName]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
}
