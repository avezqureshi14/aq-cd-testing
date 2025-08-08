import type { ThemeConfig } from "antd";

import merge from "lodash.merge";

import type { DeepPartial, Theme } from "@/theme/theme-types";

import {
  LOCAL_STORAGE_KEY,
  MERGER_ERROR_MSG,
  PREFERS_DARK_MEDIA_QUERY,
  VALID_THEMES,
} from "@/theme/theme-constants";

export function getSystemTheme(): Theme {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia(PREFERS_DARK_MEDIA_QUERY).matches ? "dark" : "light";
  }
  return "light";
}

export function getStoredTheme(): Theme | null {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (VALID_THEMES.includes(stored as Theme)) {
      return stored as Theme;
    }
  }
  return null;
}

export function storeTheme(theme: Theme): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCAL_STORAGE_KEY, theme);
  }
}

export function themeMerger(baseTheme: ThemeConfig, externalTheme?: DeepPartial<ThemeConfig>) {
  const mergedTheme = externalTheme ? merge({}, baseTheme, externalTheme) : baseTheme;
  if (!mergedTheme || typeof mergedTheme !== "object") {
    throw new Error(MERGER_ERROR_MSG);
  }

  return {
    mergedTheme,
  };
}

export function cast<T>(value: unknown): T {
  return value as T;
}
