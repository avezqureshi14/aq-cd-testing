import { fireEvent, render, screen } from "@testing-library/react";

import SSAccordion from "@/components/ss-accordion";

describe("ss-accordion - Additional Cases", () => {
  it("renders with a single panel", () => {
    render(<SSAccordion items={[{ key: "1", label: "Panel 1", children: "Content 1" }]} />);
    expect(screen.getByText("Panel 1")).toBeInTheDocument();
  });

  it("respects defaultActiveKey", () => {
    render(
      <SSAccordion
        defaultActiveKey={["1"]}
        items={[{ key: "1", label: "Panel 1", children: "Content 1" }]}
      />,
    );
    expect(screen.getByText("Content 1")).toBeVisible();
  });

  it("calls onChange when panel is toggled", () => {
    const onChange = vi.fn();
    render(
      <SSAccordion
        onChange={onChange}
        items={[{ key: "1", label: "Panel 1", children: "Content 1" }]}
      />,
    );
    fireEvent.click(screen.getByText("Panel 1"));
    expect(onChange).toHaveBeenCalled();
  });

  it("does not crash when items are empty", () => {
    render(<SSAccordion items={[]} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("supports keyboard interaction (Enter key)", () => {
    render(<SSAccordion items={[{ key: "1", label: "Key Panel", children: "Key Content" }]} />);
    const header = screen.getByText("Key Panel");
    header.focus();
    fireEvent.keyDown(header, { key: "Enter", code: "Enter" });
    expect(screen.getByText("Key Content")).toBeVisible();
  });

  it("renders nested accordions correctly", () => {
    render(
      <SSAccordion
        items={[
          {
            key: "1",
            label: "Outer Panel",
            children: (
              <SSAccordion
                items={[{ key: "1-1", label: "Inner Panel", children: "Inner Content" }]}
              />
            ),
          },
        ]}
      />,
    );
    fireEvent.click(screen.getByText("Outer Panel"));
    fireEvent.click(screen.getByText("Inner Panel"));
    expect(screen.getByText("Inner Content")).toBeVisible();
  });
});
