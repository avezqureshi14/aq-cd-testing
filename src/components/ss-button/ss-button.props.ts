import type { ButtonProps as AntButtonProps } from "antd";
import type { VariantProps } from "class-variance-authority";

import type { buttonVariants } from "@/components/ss-button/ss-button.variants";

/**
 * List of Ant Design Button props to omit because they are controlled by SSButton.
 */
type OmittedAntProps = "icon" | "iconPosition" | "danger" | "ghost" | "type" | "color" | "variant";

/**
 * Props for the SSButton component.
 *
 * Extends Ant Design's ButtonProps but omits some props that are internally handled.
 * Adds optional `hierarchy` variant.
 *
 * @property {HierarchyVariants} [hierarchy] - Button visual style variant.
 */
export type SSButtonProps = {} & Omit<AntButtonProps, OmittedAntProps> &
  VariantProps<typeof buttonVariants>;

/**
 * Props when rendering an icon-only button.
 */
type IconOnlyProps = {
  iconOnly?: true;
  icon: React.ReactNode;
  leftIcon?: never;
  rightIcon?: never;
};

/**
 * Props when rendering a regular button with optional left and right icons.
 */
type RegularProps = {
  iconOnly?: false;
  icon?: never;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

/**
 * Union type for all possible icon-related props for the Button Component.
 */
export type ButtonIconProps = IconOnlyProps | RegularProps;

export type ButtonUnionProps = ButtonIconProps & SSButtonProps;
