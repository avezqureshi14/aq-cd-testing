import { Segmented } from "antd";
import React from "react";

import type { SSSegmentedProps } from "@/components/ss-tabs/ss-tabs.props";

import { cn } from "@/utils/cn";

/**
 * SSSegmented Component
 *
 * A themed wrapper around Ant Design's `Segmented` component.
 * Applies custom theme styles via ConfigProvider and uses utility class merging.
 *
 * Usage:
 *
 * ```tsx
 * <SSTabs.Segmented
 *   options={['Daily', 'Weekly', 'Monthly']}
 * />
 * ```
 *
 * @param {SSSegmentedProps} props - Props for the SSSegmented component.
 * @param {string} [props.className] - Additional CSS class names to apply.
 * @returns {JSX.Element} The themed Segmented control.
 */

const SSSegmented: React.FC<SSSegmentedProps> = ({ className, ...props }) => {
  return (
    <Segmented
      {...props}
      className={cn(
        "bg-background-base-bg-page-body-intense border border-background-gray-bg-moderate p-0",
        className,
      )}
    />
  );
};

export default React.memo(SSSegmented);
