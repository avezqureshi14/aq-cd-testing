import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex gap-4 items-center justify-center rounded-md font-medium transition-colors disabled:pointer-events-none disabled:cursor-not-allowed",
  {
    variants: {
      hierarchy: {
        primary:
          "bg-primary-button-bg text-primary-text-button hover:bg-primary-button-hover-bg disabled:bg-primary-button-disabled-bg disabled:text-primary-text-button-disabled disabled:border-primary-text-button-disabled hover:border-0 border-0",
        secondaryColor:
          "bg-inherit text-secondary-button-border border border-secondary-button-border disabled:text-secondary-button-disabled disabled:border-secondary-button-disabled",
        secondaryGray:
          "bg-secondary-gray-button-bg text-secondary-gray-button-text hover:bg-secondary-gray-button-hovered disabled:bg-inherit disabled:text-secondary-gray-button-disabled-text disabled:border disabled:border-secondary-gray-button-disabled hover:border-0 border-0",
        secondaryGray2:
          "bg-transparent text-secondary-gray-button-text border border-secondary-gray-button-bg hover:border-secondary-gray2-button-hover-bg disabled:text-secondary-gray-button-disabled",
        tertiaryColor:
          "bg-transparent text-tertiary-button-text disabled:text-tertiary-button-text-disabled border-0 shadow-none",
        tertiaryGray:
          "bg-transparent text-tertiary-gray-button-text disabled:text-tertiary-gray-button-text-disabled border-0 shadow-none",
        linkColor:
          "text-tertiary-button-text hover:text-tertiary-button-text underline p-0 h-auto disabled:text-tertiary-button-text-disabled bg-inherit border-0 shadow-none",
        linkGray:
          "bg-transparent text-tertiary-gray-button-text hover:text-tertiary-gray-button-text underline p-0 h-auto disabled:text-tertiary-gray-button-text-disabled border-0 shadow-none",
      },
    },
    defaultVariants: {
      hierarchy: "primary",
    },
  },
);
