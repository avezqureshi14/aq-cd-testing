import { fireEvent, render, screen } from "@testing-library/react";

import SSTabs from "@/components/ss-tabs";

describe("ss-tabs exports", () => {
  it("exposes Tabs and Segmented components", () => {
    expect(SSTabs.Tabs).toBeDefined();
    expect(SSTabs.Segmented).toBeDefined();
  });

  it("can render both components without crashing", () => {
    render(
      <>
        <SSTabs.Tabs items={[{ key: "1", label: "A", children: <div>Tab A</div> }]} />
        <SSTabs.Segmented options={["1", "2"]} />
      </>,
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});

describe("ss-tabs - Segmented", () => {
  it("renders segmented control with options", () => {
    render(<SSTabs.Segmented options={["A", "B", "C"]} />);
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.getByText("C")).toBeInTheDocument();
  });

  it("handles empty options", () => {
    render(<SSTabs.Segmented options={[]} />);
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("selects value on click", () => {
    const onChange = vi.fn();
    render(<SSTabs.Segmented options={["One", "Two"]} onChange={onChange} />);
    fireEvent.click(screen.getByText("Two"));
    expect(onChange).toHaveBeenCalledWith("Two");
  });

  it("respects defaultValue", () => {
    render(<SSTabs.Segmented options={["One", "Two", "Three"]} defaultValue="Three" />);
    expect(screen.getByText("Three")).toBeInTheDocument();
  });
});

describe("ss-tabs - Tabs", () => {
  it("renders tabs with given items", () => {
    render(
      <SSTabs.Tabs
        items={[
          { key: "1", label: "Tab 1", children: <div>Content 1</div> },
          { key: "2", label: "Tab 2", children: <div>Content 2</div> },
        ]}
      />,
    );
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("renders default active tab content", () => {
    render(
      <SSTabs.Tabs
        defaultActiveKey="2"
        items={[
          { key: "1", label: "Tab 1", children: <div>Content 1</div> },
          { key: "2", label: "Tab 2", children: <div>Content 2</div> },
        ]}
      />,
    );
    expect(screen.getByText("Content 2")).toBeVisible();
  });

  it("handles empty items", () => {
    render(<SSTabs.Tabs items={[]} />);
    expect(screen.queryByRole("tab")).toBeNull();
  });

  it("handles missing children in tab", () => {
    render(<SSTabs.Tabs items={[{ key: "1", label: "Tab 1" }]} />);
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
  });

  it("switches tab on click", () => {
    render(
      <SSTabs.Tabs
        items={[
          { key: "1", label: "Tab 1", children: <div>Content 1</div> },
          { key: "2", label: "Tab 2", children: <div>Content 2</div> },
        ]}
      />,
    );
    fireEvent.click(screen.getByText("Tab 2"));
    expect(screen.getByText("Content 2")).toBeVisible();
  });
});
