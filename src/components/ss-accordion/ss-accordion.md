# SSAccordion

`SSAccordion` is a customizable wrapper around Ant Design's `Collapse` component, designed to support theming and consistent usage across your design system. It allows advanced configuration such as custom styling, class names, icon behaviors, and collapsibility settings per panel.

---

## ✨ Features

- Built on top of Ant Design's `Collapse`
- Fine-grained panel-level customization (styles, classNames, icons, collapsibility)
- Support for custom expand icons and force-rendering of content

---

## Installation

In your consumer application:

```bash
pnpm install sixthsense-ui-component-library
```

---

## Usage

### Basic Example

```tsx
<SSAccordion
  items={[
    {
      key: "1",
      label: "Panel Header",
      children: <p>Panel content goes here.</p>,
    },
  ]}
/>
```

---

### Full Demo

```tsx
<SSAccordion
  items={[
    {
      key: "panel-1",
      label: "Default Panel",
      children: <p>Basic usage with no customization.</p>,
    },
    {
      key: "panel-2",
      label: "Custom Class Names",
      classNames: {
        header: "bg-blue-100 text-blue-800 font-semibold",
        body: "bg-blue-50 text-blue-900",
      },
      children: <p>This panel has custom classNames for header and body.</p>,
    },
    {
      key: "panel-3",
      label: "Custom Styles",
      styles: {
        header: {
          backgroundColor: "#fef9c3",
          color: "#92400e",
        },
        content: {
          backgroundColor: "#fffbeb",
          padding: "12px",
          color: "#78350f",
        },
      },
      children: <p>This panel uses inline styles for header and body.</p>,
    },
    {
      key: "panel-9",
      label: "No Arrow",
      showArrow: false,
      children: <p>No expand/collapse arrow shown.</p>,
    },
  ]}
/>
```

---

## Props

### `SSAccordionProps`

Extends: [`CollapseProps`](https://ant.design/components/collapse/#Collapse)

| Prop                 | Type                                    | Description                                                                |
| -------------------- | --------------------------------------- | -------------------------------------------------------------------------- |
| `items`              | `CollapsePanelProps[]`                  | List of collapsible panels. `children` should be used instead of `content` |
| `expandIcon`         | `(panelProps: PanelProps) => ReactNode` | Custom expand/collapse icon.                                               |
| `className`          | `string`                                | Custom class name for the root component.                                  |
| `expandIconPosition` | `"start"` \| `"end"`                    | Position of the expand/collapse icon.                                      |
| `bordered`           | `boolean`                               | Whether the panels have borders.                                           |
| `ghost`              | `boolean`                               | Makes accordion background transparent if true.                            |
| `size`               | `"small"` \| `"middle"` \| `"large"`    | Size of the panel.                                                         |

---

### Collapse Panel Item Props (`items[]`)

Each item in `items` can have:

| Key           | Type                                                  | Description                                                     |
| ------------- | ----------------------------------------------------- | --------------------------------------------------------------- |
| `key`         | `string`                                              | Unique identifier for the panel.                                |
| `label`       | `ReactNode`                                           | Content shown as panel header.                                  |
| `children`    | `ReactNode`                                           | Panel content (required, replaces AntD’s `content` prop).       |
| `classNames`  | `{ header?: string, body?: string }`                  | Custom class names for header/body.                             |
| `styles`      | `{ header?: CSSProperties, content?: CSSProperties }` | Inline styles for header/body.                                  |
| `collapsible` | `"header"` \| `"icon"` \| `"disabled"`                | Controls collapsibility interaction area.                       |
| `showArrow`   | `boolean`                                             | Whether to show the expand/collapse arrow.                      |
| `forceRender` | `boolean`                                             | Whether to render content on mount. Useful for SEO/performance. |
| `extra`       | `ReactNode`                                           | Extra content shown on the right of the header.                 |

---

## Theming

The component supports theming via the Ant Design `ConfigProvider`.

### Default Theme (`accordionConfig`)

```ts
const accordionConfig: AccordionThemeType = {
  headerBg: "var(--color-background-gray-bg-intense)",
  contentBg: "var(--color-background-gray-bg-intense)",
  colorTextHeading: "var(--color-text-base-text-base)",
  colorBgContainer: "var(--color-background-gray-bg-intense)",
  colorText: "var(--color-text-base-text-base)",
  colorBorder: "var(--color-border-gray-border-intense)",
};
```
