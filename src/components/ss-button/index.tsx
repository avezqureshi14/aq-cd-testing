import { Button } from "antd";
import React from "react";

import type { ButtonIconProps, SSButtonProps } from "@/components/ss-button/ss-button.props";

import { BUTTON_CONSTANTS } from "@/components/ss-button/ss-button.constants";
import { buttonVariants } from "@/components/ss-button/ss-button.variants";

/**
 * SSButton Component
 *
 * A customizable button built on top of Ant Design's `Button` component.
 * It supports multiple visual `hierarchy` variants and allows icon-only or icon-enhanced usage.
 * The component applies custom theming via Ant Design's `ConfigProvider` and CVA-based utility classes.
 *
 * All standard Ant Design Button props are supported **except** the following, which are handled internally:
 * - `icon`
 * - `iconPosition`
 * - `danger`
 * - `ghost`
 * - `type`
 * - `color`
 * - `variant`
 *
 * ### Usage:
 *
 * ```tsx
 * // Regular button
 * <SSButton
 *   hierarchy="secondaryGray"
 *   leftIcon={<Icon />}
 * >
 *   Click Me
 * </SSButton>
 *
 * // Icon-only button
 * <SSButton
 *   iconOnly={true}
 *   icon={<Icon />}
 * />
 * ```
 *
 * @param {SSButtonProps & ButtonIconProps} props - Button props including hierarchy, theme, children, and icon configuration.
 * @param {HierarchyVariants} [props.hierarchy] - Controls the button's visual hierarchy (e.g., `primary`, `secondaryGray`, etc.).
 * @param {string} [props.className] - Optional utility or CSS classes to apply.
 * @param {React.ReactNode} props.children - The button’s label/content (ignored if `iconOnly` is true).
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @param {boolean} props.iconOnly - If true, renders a button containing only the provided `icon`.
 * @param {React.ReactNode} [props.icon] - The icon to display when `iconOnly` is true.
 * @param {React.ReactNode} [props.leftIcon] - Optional icon rendered before the button text (ignored if `iconOnly` is true).
 * @param {React.ReactNode} [props.rightIcon] - Optional icon rendered after the button text (ignored if `iconOnly` is true).
 * @returns {JSX.Element} A styled and themed button component.
 */

export function SSButton({
  hierarchy,
  className,
  children,
  ...props
}: SSButtonProps & ButtonIconProps) {
  const buttonClasses = buttonVariants({ hierarchy, className });
  const {
    iconOnly = BUTTON_CONSTANTS.DEFAULT_ICON_ONLY,
    leftIcon,
    rightIcon,
    ...restProps
  } = props;

  return (
    /**
     * StyleProvider with `layer` ensures that any CSS-in-JS styles are injected inside a cascade layer.
     * This prevents unintended overrides from Tailwind or global styles,
     * and ensures Tailwind’s utility classes apply correctly due to predictable layer ordering.
     * It is essential when using `@layer` system in combination with Ant Design and custom themes.
     *
     */
    <Button
      className={buttonClasses}
      data-testid={BUTTON_CONSTANTS.TEST_ID}
      {...restProps}
      icon={iconOnly ? props.icon : undefined}
    >
      {!iconOnly && (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </Button>
  );
}

SSButton.displayName = "SSButton";
export default React.memo(SSButton);
