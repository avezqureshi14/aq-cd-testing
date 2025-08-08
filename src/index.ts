/**
 * Entry point for shared UI components and theme utilities.
 *
 */

import type { ButtonUnionProps } from "@/components/ss-button/ss-button.props";

import "@/index.css";

/* Props accepted by the components. */
export type SSButtonProps = ButtonUnionProps;

/* Reusable components. */
export { default as SSButton } from "@/components/ss-button";

/* Provider for injecting theme configuration and state into the app. */
export { default as ThemeConfigProvider } from "@/providers/ThemeConfigProvider";

/* Hook for accessing and updating the current theme. */
export { default as useTheme } from "@/theme/use-theme";
