import { render, screen } from "@testing-library/react";

import SSProgressBar from "@/components/ss-progress-bar";
import { PROGRESS_BAR_TEST_IDS } from "@/components/ss-progress-bar/ss-progress-bar.constants";

describe("ss-progress-bar Component", () => {
  // Tests for Basic rendering
  it("renders without crashing", () => {
    render(<SSProgressBar percent={50} testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />);
    expect(screen.getByTestId(PROGRESS_BAR_TEST_IDS.CONTAINER)).toBeInTheDocument();
  });

  it("renders with default props", () => {
    render(<SSProgressBar testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />);
    const container = screen.getByTestId(PROGRESS_BAR_TEST_IDS.CONTAINER);
    expect(container).toBeInTheDocument();
  });

  // Tests for Percentage display
  it("displays correct percentage", () => {
    render(<SSProgressBar percent={75} testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />);
    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("displays 0% when percent is 0", () => {
    render(<SSProgressBar percent={0} testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  it("displays 100% when percent is 100", () => {
    render(<SSProgressBar percent={100} testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />);
    const progressElement = document.querySelector("[aria-valuenow=\"100\"]");
    expect(progressElement).toBeInTheDocument();
  });

  it("handles undefined percent by defaulting to 0", () => {
    render(<SSProgressBar testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  // Tests for Percentage clamping
  it("clamps percentage below 0 to 0", () => {
    render(<SSProgressBar percent={-10} testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  it("handles decimal percentages", () => {
    render(<SSProgressBar percent={33.5} testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />);
    expect(screen.getByText("33.5%")).toBeInTheDocument();
  });

  it("applies small size using Antd size prop", () => {
    render(<SSProgressBar percent={50} size="small" testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />);
    const container = screen.getByTestId(PROGRESS_BAR_TEST_IDS.CONTAINER);
    expect(container).toHaveClass("ant-progress-small");
  });

  it("applies default size using Antd size prop", () => {
    render(<SSProgressBar percent={50} size="default" testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />);
    const container = screen.getByTestId(PROGRESS_BAR_TEST_IDS.CONTAINER);
    expect(container).toHaveClass("ant-progress-default");
  });

  it("maintains consistent stroke width scaling across all sizes", () => {
    render(
      <SSProgressBar
        percent={50}
        size="small"
        type="circle"
        testId={PROGRESS_BAR_TEST_IDS.CONTAINER}
      />,
    );
    const container = screen.getByTestId(PROGRESS_BAR_TEST_IDS.CONTAINER);
    const progressCircle = container.querySelector(".ant-progress-circle");
    expect(progressCircle?.querySelector("circle")).toHaveAttribute("stroke-width", "6");
  });

  // Tests for Custom className
  it("applies custom className", () => {
    render(
      <SSProgressBar
        className="custom-progress"
        percent={50}
        testId={PROGRESS_BAR_TEST_IDS.CONTAINER}
      />,
    );
    const progressElement = document.querySelector(".custom-progress");
    expect(progressElement).toBeInTheDocument();
  });

  // Tests for Additional props
  it("supports showInfo prop", () => {
    render(
      <SSProgressBar percent={50} showInfo={false} testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />,
    );
    expect(screen.queryByText("50%")).not.toBeInTheDocument();
  });

  it("supports strokeColor prop", () => {
    render(
      <SSProgressBar percent={50} strokeColor="#ff0000" testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />,
    );
    const container = screen.getByTestId(PROGRESS_BAR_TEST_IDS.CONTAINER);
    expect(container).toBeInTheDocument();
  });

  it("supports trailColor prop", () => {
    render(
      <SSProgressBar percent={50} trailColor="#cccccc" testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />,
    );
    const container = screen.getByTestId(PROGRESS_BAR_TEST_IDS.CONTAINER);
    expect(container).toBeInTheDocument();
  });

  it("supports format prop for custom percentage display", () => {
    const customFormat = (percent?: number) => `${percent} out of 100`;
    render(
      <SSProgressBar percent={75} format={customFormat} testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />,
    );
    expect(screen.getByText("75 out of 100")).toBeInTheDocument();
  });

  // Accessibility Tests
  it("has proper ARIA attributes for screen readers", () => {
    render(<SSProgressBar percent={50} testId={PROGRESS_BAR_TEST_IDS.CONTAINER} />);
    const progressElement = document.querySelector("[role=\"progressbar\"]");
    expect(progressElement).toBeInTheDocument();
    expect(progressElement).toHaveAttribute("aria-valuenow", "50");
    expect(progressElement).toHaveAttribute("aria-valuemin", "0");
    expect(progressElement).toHaveAttribute("aria-valuemax", "100");
  });
});
