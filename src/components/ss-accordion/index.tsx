import { Collapse as AntdCollapse } from "antd";
import React, { memo } from "react";

import type { SSAccordionProps } from "@/components/ss-accordion/ss-accordion.props";

const SSAccordion: React.FC<SSAccordionProps> = ({ ...props }) => {
  return <AntdCollapse {...props} />;
};

/**
 * SSAccordion - A memoized wrapper component for Ant Design's Collapse component
 *
 * @component
 * @description
 * This component provides an accordion/collapsible panel interface by wrapping
 * Ant Design's Collapse component. It maintains all the functionality of the
 * original Collapse component while being optimized with React.memo for
 * performance improvements.
 *
 * @param {SSAccordionProps} props - All props passed through to the underlying Ant Design Collapse component
 *
 * @returns {React.ReactElement} A memoized Ant Design Collapse component
 *
 * @example
 * // Basic usage with items prop
 * const allItems = [
 *   {
 *     key: "panel-1",
 *     label: "Default Panel",
 *     content: <p>Basic usage with no customization.</p>,
 *   },
 * ] as const;
 *
 * <SSAccordion
 *   items={allItems.map(item => ({
 *     ...item,
 *     children: item.content,
 *   }))}
 *   expandIconPosition="end"
 *   ghost={false}
 *   size="small"
 * />
 */
export default memo(SSAccordion);
