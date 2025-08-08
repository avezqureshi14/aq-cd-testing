const ThemeConstants = {
  LOCAL_STORAGE_KEY: "app-theme",
  PREFERS_DARK_MEDIA_QUERY: "(prefers-color-scheme: dark)",
  VALID_THEMES: ["light", "dark"] as const,
  MERGER_ERROR_MSG: "Invalid theme: missing or malformed theme property.",
} as const;

export const { LOCAL_STORAGE_KEY, PREFERS_DARK_MEDIA_QUERY, VALID_THEMES, MERGER_ERROR_MSG }
  = ThemeConstants;
