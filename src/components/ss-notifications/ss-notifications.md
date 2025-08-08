# **SSNotifications Component**

A React Context Provider component that offers a custom notification system built on top of Ant Design's notification API, enabling consistent and themed notifications across your app.

---

## Component Description

`SSNotificationsProvider` wraps your app (or a part of it) to provide notification functionality via React Context. It leverages Ant Design's [`notification.useNotification`](https://ant.design/components/notification/#API) hook internally for notification display, while allowing:

- Default icons for notification types (success, error, info, warning)
- Custom theming using Ant Design's `ConfigProvider` theme overrides
- A simple `useNotification()` hook to access the notification show method anywhere inside the provider

This enables you to call notifications from components with consistent style and behavior, without manually handling Ant Design's notification API or context.

---

## Installation

```bash
pnpm install sixthsense-ui-component-library
```

---

## Props

| Prop Name  | Type              | Description                                                               | Default  |
| ---------- | ----------------- | ------------------------------------------------------------------------- | -------- |
| `children` | `React.ReactNode` | React children elements that will have access to the notification context | Required |

---

## Context & Hook

- `useNotification()`: React hook to consume the notification context, returning an object with:

  | Property | Type                                       | Description                                                                                     |
  | -------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
  | `show`   | `(options: SSNotificationOptions) => void` | Function to display a notification. Accepts options like type, message, description, icon, etc. |

- Throws an error if used outside a `SSNotificationsProvider`.

---

## Types

- `SSNotificationOptions`: Extends Ant Design's notification [`ArgsProps`](https://ant.design/components/notification/#API) with optional customizations.
- `SSNotificationsProps`: Props accepted by `SSNotificationsProvider`, including optional theming.

---

## Usage Examples

### Basic usage

```tsx
import React from "react";
import SSNotificationsProvider, {
  useNotification,
} from "sixthsense-ui-component-library/SSNotifications";

function App() {
  return (
    <SSNotificationsProvider>
      <MyComponent />
    </SSNotificationsProvider>
  );
}

function MyComponent() {
  const { show } = useNotification();

  React.useEffect(() => {
    show({
      type: "success",
      message: "Welcome!",
      description: "You have successfully logged in.",
    });
  }, [show]);

  return <div>Hello world</div>;
}
```

## Notes

- **Icons:** Default icons are provided internally for `success`, `error`, `info`, and `warning`. Override the icon per notification by passing the `icon` property in `show()` options.
- **Context:** The `show` method exposed by `useNotification` allows triggering notifications anywhere inside the provider.
- **Error handling:** Using `useNotification` outside the provider results in a runtime error to prevent misuse.
