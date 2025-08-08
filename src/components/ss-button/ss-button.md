# SSButton Documentation

## Overview

SSButton is a versatile, customizable button component built on top of Ant Design's Button component. It provides a comprehensive set of styling options, hierarchy variants, and icon support to meet various UI requirements in modern web applications.

## Installation

```bash
pnpm install sixthsense-ui-component-library
```

## Import

```jsx
import { SSButton } from "sixthsense-ui-component-library/SSButton";
```

## Basic Usage

```jsx
function App() {
  return (
    <SSButton iconOnly={false} onClick={() => console.log("Button clicked!")}>
      Click Me
    </SSButton>
  );
}
```

## Props

| Prop          | Type              | Default     | Description                                                        |
| ------------- | ----------------- | ----------- | ------------------------------------------------------------------ |
| `hierarchy`   | `ButtonHierarchy` | `'primary'` | Visual hierarchy of the button                                     |
| `size`        | `'sm' \| 'md'`    | `'sm'`      | Size of the button                                                 |
| `iconOnly`    | `boolean`         | ``          | Whether the button should only display an icon only(required prop) |
| `leftIcon`    | `ReactNode`       | -           | Icon element to display on the left side                           |
| `rightIcon`   | `ReactNode`       | -           | Icon element to display on the right side                          |
| `children`    | `ReactNode`       | -           | Button content                                                     |
| `isDisabled`  | `boolean`         | `false`     | Whether the button is disabled                                     |
| `handleClick` | `boolean`         | `false`     | For handling click events                                          |
| `className`   | `string`          | `''`        | Additional CSS class names                                         |
| `isLoading`   | `boolean`         | `false`     | Whether the button is loading                                      |
| `className`   | `string`          | `''`        | Additional CSS class names                                         |
| `type`        | `ButtonType`      | -           | Button type (from Ant Design)                                      |

Plus all other props from Ant Design's Button component.

## Hierarchy Variants

SSButton offers 8 hierarchy variants to match different UI contexts:

```jsx
// Primary (Default)
<SSButton iconOnly={false} hierarchy="primary">Primary Button</SSButton>

// Secondary Color
<SSButton iconOnly={false} hierarchy="secondaryColor">Secondary Color</SSButton>

// Secondary Gray
<SSButton iconOnly={false} hierarchy="secondaryGray">Secondary Gray</SSButton>

// Secondary Gray 2
<SSButton iconOnly={false} hierarchy="secondaryGray2">Secondary Gray 2</SSButton>

// Tertiary Color
<SSButton iconOnly={false} hierarchy="tertiaryColor">Tertiary Color</SSButton>

// Tertiary Gray
<SSButton iconOnly={false} hierarchy="tertiaryGray">Tertiary Gray</SSButton>

// Link Color
<SSButton iconOnly={false} hierarchy="linkColor">Link Color</SSButton>

// Link Gray
<SSButton iconOnly={false} hierarchy="linkGray">Link Gray</SSButton>
```

## Size Variants

SSButton supports two sizes:

```jsx
// Small (Default)
<SSButton iconOnly={false} size="sm">Small Button</SSButton>

// Medium
<SSButton iconOnly={false} size="md">Medium Button</SSButton>
```

## Icon Support

SSButton provides flexible icon placement options:

```jsx
import { UserOutlined, ArrowRightOutlined } from '@ant-design/icons';

// Left Icon
<SSButton iconOnly={false} leftIcon={<UserOutlined />}>
  With Left Icon
</SSButton>

// Right Icon
<SSButton iconOnly={false} rightIcon={<ArrowRightOutlined />}>
  With Right Icon
</SSButton>

// Both Icons
<SSButton
  leftIcon={<UserOutlined />}
  rightIcon={<ArrowRightOutlined />}
>
  Both Icons
</SSButton>

// Icon Only
<SSButton
  iconOnly
  leftIcon={<UserOutlined />}
  aria-label="User profile"
/>
```

## States

### Disabled State

```jsx
<SSButton disabled>Disabled Button</SSButton>
```

### Interactive States

SSButton has built-in hover and focus states that are automatically applied.

## Examples

### Basic Button Variants

```jsx
import { SSButton } from "sixthsense-ui-component-library/SSButton";

function ButtonVariants() {
  return (
    <div className="flex gap-4">
      <SSButton iconOnly={false} hierarchy="primary">
        Primary
      </SSButton>
      <SSButton iconOnly={false} hierarchy="secondaryColor">
        Secondary
      </SSButton>
      <SSButton iconOnly={false} hierarchy="tertiaryColor">
        Tertiary
      </SSButton>
      <SSButton iconOnly={false} hierarchy="linkColor">
        Link
      </SSButton>
    </div>
  );
}
```

### Buttons with Icons

```jsx
import { DownloadOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { SSButton } from "sixthsense-ui-component-library/SSButton";

function IconButtons() {
  return (
    <div className="flex gap-4">
      <SSButton iconOnly={false} leftIcon={<DownloadOutlined />}>
        Download
      </SSButton>

      <SSButton iconOnly={false} rightIcon={<UserOutlined />}>
        Profile
      </SSButton>

      <SSButton iconOnly={false} leftIcon={<SearchOutlined />} hierarchy="secondaryColor">
        Search
      </SSButton>

      <SSButton iconOnly icon={<DownloadOutlined />} aria-label="Download" />
    </div>
  );
}
```

### Size Comparison

```jsx
import { DownloadOutlined } from "@ant-design/icons";
import { SSButton } from "sixthsense-ui-component-library/SSButton";

function ButtonSizes() {
  return (
    <div className="flex items-center gap-4">
      <SSButton iconOnly={false} size="sm" leftIcon={<DownloadOutlined />}>
        Small Button
      </SSButton>

      <SSButton iconOnly={false} size="md" leftIcon={<DownloadOutlined />}>
        Medium Button
      </SSButton>
    </div>
  );
}
```

### Form Submission Example

```jsx
import { CloseOutlined, SaveOutlined } from "@ant-design/icons";
import { SSButton } from "sixthsense-ui-component-library/SSButton";

function FormActions() {
  return (
    <div className="flex justify-end gap-4 mt-6">
      <SSButton
        hierarchy="secondaryGray"
        iconOnly={false}
        leftIcon={<CloseOutlined />}
        onClick={() => console.log("Cancel clicked")}
      >
        Cancel
      </SSButton>

      <SSButton
        hierarchy="primary"
        iconOnly={false}
        leftIcon={<SaveOutlined />}
        onClick={() => console.log("Save clicked")}
      >
        Save Changes
      </SSButton>
    </div>
  );
}
```

### Custom Styling with Tailwind

```jsx
import { SSButton } from "sixthsense-ui-component-library/SSButton";

function CustomStyledButtons() {
  return (
    <div className="flex gap-4">
      <SSButton iconOnly={false} className="bg-purple-600 hover:bg-purple-700 text-white">
        Custom Purple
      </SSButton>

      <SSButton
        iconOnly={false}
        className="bg-transparent border border-green-500 text-green-500 hover:bg-green-50"
      >
        Custom Green
      </SSButton>

      <SSButton
        iconOnly={false}
        className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white"
      >
        Gradient Button
      </SSButton>
    </div>
  );
}
```

### Loading State

```jsx
import { LoadingOutlined } from "@ant-design/icons";
import { SSButton } from "sixthsense-ui-component-library/SSButton";
import { useState } from "react";

function LoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <SSButton
      loading={loading}
      onClick={handleClick}
      iconOnly={false}
      leftIcon={loading ? <LoadingOutlined /> : null}
    >
      {loading ? "Processing..." : "Submit"}
    </SSButton>
  );
}
```

### Button Group Example

```jsx
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { SSButton } from "sixthsense-ui-component-library/SSButton";

function PaginationButtons() {
  return (
    <div className="flex gap-2">
      <SSButton
        hierarchy="secondaryGray"
        iconOnly={false}
        leftIcon={<LeftOutlined />}
        iconOnly
        aria-label="Previous page"
      />

      <SSButton iconOnly={false} hierarchy="secondaryGray">
        1
      </SSButton>
      <SSButton iconOnly={false} hierarchy="primary">
        2
      </SSButton>
      <SSButton iconOnly={false} hierarchy="secondaryGray">
        3
      </SSButton>

      <SSButton
        hierarchy="secondaryGray"
        iconOnly={false}
        leftIcon={<RightOutlined />}
        iconOnly
        aria-label="Next page"
      />
    </div>
  );
}
```
