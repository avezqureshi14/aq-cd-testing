import { Progress as AntdProgress } from "antd";
import React from "react";

import type { SSProgressBarProps } from "@/components/ss-progress-bar/ss-progress-bar.props";

const SSProgressBar: React.FC<SSProgressBarProps> = ({ className, testId, ...restProps }) => {
  return <AntdProgress data-testid={testId} className={className} {...restProps} />;
};

SSProgressBar.displayName = "SSProgressBar";

/**
 * SSProgressBar - A themed wrapper around Ant Design's Progress component,
 * maintaining all original Ant Design Progress functionality while adding
 *
 * @component
 * @param props - The component props extending Ant Design's ProgressProps
 * @returns The rendered progress bar component
 */
export default React.memo(SSProgressBar);
