import { Tabs as AntdTabs } from "antd";
import React from "react";

import type { SSTabsProps } from "@/components/ss-tabs/ss-tabs.props";

/**
 * SSTabs Component
 *
 * A themed wrapper around Ant Design's `Tabs` component.
 *
 * Usage:
 *
 * ```tsx
 * <SSTabs.Tabs
 *   items={[{ key: '1', label: 'Tab 1', children: <div>Content 1</div> }]}
 * />
 * ```
 *
 * @param {SSTabsProps} props - Props for the SSTabs component.
 * @returns {JSX.Element} The themed Tabs control.
 */

const SSTabsComponent: React.FC<SSTabsProps> = ({ ...props }) => {
  return <AntdTabs {...props} />;
};

export default React.memo(SSTabsComponent);
