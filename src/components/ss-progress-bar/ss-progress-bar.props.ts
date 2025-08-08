import type { ProgressProps } from "antd";

import type { CreateThemeType } from "@/theme/theme-types";

/**
 * Props interface for the SSProgressBar component.
 * Extends Ant Design's ProgressProps.
 */
export type SSProgressBarProps = {
  testId: string;
} & ProgressProps;

/**
 * Complete theme override type for the Progress component.
 */
export type ProgressThemeType = CreateThemeType<"Progress">;
