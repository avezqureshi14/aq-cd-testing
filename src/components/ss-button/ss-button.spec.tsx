import { fireEvent, render, screen } from "@testing-library/react";

import { SSButton } from "@/components/ss-button";
import { BUTTON_CONSTANTS } from "@/components/ss-button/ss-button.constants";

describe("sSButton", () => {
  it("renders with default props", () => {
    render(<SSButton>Click me</SSButton>);
    const button = screen.getByTestId(BUTTON_CONSTANTS.TEST_ID);
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });

  it("applies correct hierarchy classes for all variants", () => {
    const { rerender } = render(<SSButton hierarchy="primary">Primary</SSButton>);
    let button = screen.getByTestId(BUTTON_CONSTANTS.TEST_ID);
    expect(button.className).toContain("bg-primary-button-bg");
    expect(button.className).toContain("text-primary-text-button");

    const variants = [
      {
        key: "secondaryColor",
        expected: ["bg-inherit", "text-secondary-button-border", "border-secondary-button-border"],
      },
      {
        key: "secondaryGray",
        expected: ["bg-secondary-gray-button-bg", "text-secondary-gray-button-text"],
      },
      {
        key: "secondaryGray2",
        expected: [
          "bg-transparent",
          "text-secondary-gray-button-text",
          "border-secondary-gray-button-bg",
        ],
      },
      {
        key: "tertiaryColor",
        expected: ["bg-transparent", "text-tertiary-button-text"],
      },
      {
        key: "tertiaryGray",
        expected: ["bg-transparent", "text-tertiary-gray-button-text"],
      },
      {
        key: "linkColor",
        expected: ["text-tertiary-button-text", "p-0", "h-auto"],
      },
      {
        key: "linkGray",
        expected: ["bg-transparent", "text-tertiary-gray-button-text", "p-0", "h-auto"],
      },
    ] as const;

    variants.forEach(({ key, expected }) => {
      rerender(<SSButton hierarchy={key}>{key}</SSButton>);
      button = screen.getByTestId(BUTTON_CONSTANTS.TEST_ID);
      expected.forEach(cls => expect(button.className).toContain(cls));
    });
  });

  it("renders with right icon", () => {
    const mockIcon = <span data-testid="right-icon">icon</span>;
    render(<SSButton rightIcon={mockIcon}>With Icon</SSButton>);
    const button = screen.getByTestId(BUTTON_CONSTANTS.TEST_ID);
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
    expect(button).toHaveTextContent("With Icon");
  });

  it("renders in icon-only mode", () => {
    const mockIcon = <span data-testid="icon-only">icon</span>;
    render(
      <SSButton iconOnly={true} icon={mockIcon}>
        Should be hidden
      </SSButton>,
    );
    const button = screen.getByTestId(BUTTON_CONSTANTS.TEST_ID);
    expect(screen.getByTestId("icon-only")).toBeInTheDocument();
    expect(button).not.toHaveTextContent("Should be hidden");
  });

  it("renders with left icon", () => {
    const mockIcon = <span data-testid="left-icon">icon</span>;
    render(<SSButton leftIcon={mockIcon}>With Left Icon</SSButton>);
    const button = screen.getByTestId(BUTTON_CONSTANTS.TEST_ID);
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(button).toHaveTextContent("With Left Icon");
  });

  it("renders icon-only button with just the icon", () => {
    const mockIcon = <span data-testid="icon-only">only-icon</span>;
    render(
      <SSButton iconOnly={true} icon={mockIcon}>
        Hidden Text
      </SSButton>,
    );
    const button = screen.getByTestId(BUTTON_CONSTANTS.TEST_ID);
    expect(screen.getByTestId("icon-only")).toBeInTheDocument();
    expect(button).not.toHaveTextContent("Hidden Text");
  });

  it("renders iconOnly mode correctly ignoring children text", () => {
    const icon = <span data-testid="icon-only">icon</span>;

    render(
      <SSButton iconOnly={true} icon={icon}>
        Hidden Text
      </SSButton>,
    );

    expect(screen.getByTestId("icon-only")).toBeInTheDocument();
    expect(screen.queryByText("Hidden Text")).toBeNull();
  });

  it("renders left and right icons when iconOnly is false", () => {
    const leftIcon = <span data-testid="left-icon">left</span>;
    const rightIcon = <span data-testid="right-icon">right</span>;

    render(
      <SSButton leftIcon={leftIcon} rightIcon={rightIcon}>
        Button Text
      </SSButton>,
    );

    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
    expect(screen.getByText("Button Text")).toBeInTheDocument();
  });

  it("calls handleClick when clicked", () => {
    const handleClick = vi.fn();
    render(<SSButton onClick={handleClick}>Click Me</SSButton>);
    const button = screen.getByTestId(BUTTON_CONSTANTS.TEST_ID);
    fireEvent.click(button);
    // eslint-disable-next-line no-magic-numbers
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call handleClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <SSButton onClick={handleClick} disabled={true}>
        Disabled
      </SSButton>,
    );
    const button = screen.getByTestId(BUTTON_CONSTANTS.TEST_ID);
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("shows loading spinner when isLoading is true", () => {
    render(<SSButton loading>Loading</SSButton>);
    const button = screen.getByTestId(BUTTON_CONSTANTS.TEST_ID);
    expect(button).toHaveClass("ant-btn-loading"); // AntD adds this class when loading
  });
});
