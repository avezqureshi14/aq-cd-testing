import type { SegmentedProps, TabsProps } from "antd";

import type { CreateThemeType } from "@/theme/theme-types";

/**
 * Props for the SSTabs component.
 */
export type SSTabsProps = TabsProps;

/**
 * Props for the SSSegmented component.
 */
export type SSSegmentedProps = SegmentedProps;

/**
 * Theme type for Tabs.
 *
 * Defines the expected structure of the Tabs theme configuration.
 */
export type TabsThemeType = CreateThemeType<"Tabs">;

/**
 * Theme type for Segmented.
 *
 * Defines the expected structure of the Segmented theme configuration.
 */
export type SegmentedThemeType = CreateThemeType<"Segmented">;
