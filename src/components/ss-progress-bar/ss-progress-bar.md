# SSProgressBar Component Documentation

## Overview

The `SSProgressBar` component is a customizable progress bar built on top of Ant Design's `Progress` component. It supports various sizes & types, making it suitable for different use cases.

---

## Installation

```bash
pnpm install sixthsense-ui-component-library
```

## Usage

````tsx
import SSProgressBar from 'sixthsense-ui-component-library/SSProgressBar'

```tsx
<SSProgressBar percent={50} size="small" type="line" />;
````

---

## Props

| Prop Name   | Type                                                                                                | Default     | Description                                                             |
| ----------- | --------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------- |
| `percent`   | `number`                                                                                            | `0`         | The progress percentage.                                                |
| `size`      | `number \| [number \| string, number] \| { width: number, height: number } \| "small" \| "default"` | `"default"` | The size of the progress bar.                                           |
| `type`      | `"line" \| "circle" \| "dashboard"`                                                                 | `"line"`    | The type of the progress bar.                                           |
| `className` | `string`                                                                                            | `""`        | Additional class names for the component.                               |
| `status`    | `"success" \| "exception" \| "normal" \| "active"`                                                  | `"normal"`  | The status of the progress bar, indicating its current state.           |
| `showInfo`  | `boolean`                                                                                           | `true`      | Whether to display the progress percentage or status icon.              |
| `color`     | `string`                                                                                            | `"primary"` | The primary color of the progress bar, derived from Ant Design's theme. |

---

## Features

- **Multiple Types**: Choose between `line`, `circle`, and `dashboard` types.
- **Completion Callback**: Trigger actions when progress reaches 100%.

---
