# SSTabs Component Library Documentation

`SSTabs` is a custom React component library that provides two themed UI controls built on top of Ant Design's `Tabs` and `Segmented` components:

- `SSTabs.Tabs`: A fully controlled tabs component using the modern `items` prop API.
- `SSTabs.Segmented`: A segmented control for toggling between options with theme support.

Both components integrate your design system’s theming via Ant Design’s `ConfigProvider` and Tailwind/CVA style utilities.

---

## Features

- Fully typed React components with support for Ant Design props.
- Modern Tabs component with `items` prop (no deprecated `TabPane`).
- Themed styling integration via custom `theme` prop.
- Utility function for merging custom and default styles.
- Customizable via your design tokens and CSS variables.

---

## Installation

```bash
pnpm install sixthsense-ui-component-library

```

Import in your React components:

```tsx
import SSTabs from "sixthsense-ui-component-library/SSTabs";
```

---

## API and Props

### SSTabs.Tabs

A themed Tabs component wrapping Ant Design’s `Tabs`.

| Prop               | Type                       | Default | Description                                                                       |
| ------------------ | -------------------------- | ------- | --------------------------------------------------------------------------------- |
| `items`            | `Array<Tabs.TabPaneProps>` | —       | List of tabs to render; each item defines `key`, `label`, and `children` content. |
| `activeKey`        | `string`                   | —       | Controlled active tab key.                                                        |
| `defaultActiveKey` | `string`                   | —       | Default active tab key (uncontrolled mode).                                       |
| `onChange`         | `(key: string) => void`    | —       | Callback when active tab changes.                                                 |
| `...rest`          | `TabsProps`                | —       | All other props forwarded to Ant Design’s `Tabs` component.                       |

> **Note:** Tabs are defined using the modern `items` prop with objects instead of `TabPane` components.

---

### SSTabs.Segmented

A themed Segmented control wrapping Ant Design’s `Segmented` component.

| Prop           | Type                                                             | Default | Description                                                      |
| -------------- | ---------------------------------------------------------------- | ------- | ---------------------------------------------------------------- |
| `options`      | `Array<string \| { label: ReactNode, value: string \| number }>` | —       | List of options displayed in the segmented control.              |
| `value`        | `string \| number`                                               | —       | Controlled selected value.                                       |
| `defaultValue` | `string \| number`                                               | —       | Default selected value (uncontrolled).                           |
| `onChange`     | `(value: string \| number) => void`                              | —       | Callback when selection changes.                                 |
| `className`    | `string`                                                         | —       | Additional CSS class names to merge with default styles.         |
| `...rest`      | `SegmentedProps`                                                 | —       | All other props forwarded to Ant Design’s `Segmented` component. |

---

## Usage

### Using SSTabs.Tabs with `items` API

```tsx
const tabItems = [
  { key: "1", label: "Tab 1", children: <div>Content for Tab 1</div> },
  { key: "2", label: "Tab 2", children: <div>Content for Tab 2</div> },
];

export default function Example() {
  return <SSTabs.Tabs items={tabItems} defaultActiveKey="1" />;
}
```

---

### Using SSTabs.Segmented with options

```tsx
export default function Example() {
  const [value, setValue] = useState("daily");
  return (
    <SSTabs.Segmented
      options={[
        { label: "Daily", value: "daily" },
        { label: "Weekly", value: "weekly" },
        { label: "Monthly", value: "monthly" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}
```

---

## Summary

| Component          | Purpose                         | Key Features                             |
| ------------------ | ------------------------------- | ---------------------------------------- |
| `SSTabs.Tabs`      | Themed tab navigation           | Uses `items` API, full theming, memoized |
| `SSTabs.Segmented` | Themed segmented toggle control | Custom theming, utility class merging    |
