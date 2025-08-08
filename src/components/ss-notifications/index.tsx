import { notification } from "antd";
import React, { createContext, use, useCallback, useMemo } from "react";

import type { SSNotificationOptions } from "@/components/ss-notifications/ss-notifications.props";

import NotificationError from "@/components/svgs/NotificationError";
import NotificationInfo from "@/components/svgs/NotificationInfo";
import NotificationSuccess from "@/components/svgs/NotificationSuccess";
import NotificationWarning from "@/components/svgs/NotificationWarning";

const DEFAULT_ICONS = {
  success: <NotificationSuccess />,
  error: <NotificationError />,
  info: <NotificationInfo />,
  warning: <NotificationWarning />,
};

type NotificationContextProps = {
  show: (options: SSNotificationOptions) => void;
};

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

const SSNotificationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  const show = useCallback(
    (options: SSNotificationOptions) => {
      const { type = "info", icon, ...config } = options;
      api[type]({
        icon: icon ?? DEFAULT_ICONS[type],
        ...config,
      });
    },
    [api],
  );

  const contextValue = useMemo(() => ({ show }), [show]);

  return (
    <NotificationContext value={contextValue}>
      {contextHolder}
      {children}
    </NotificationContext>
  );
};

/**
 * Custom hook to consume the notification context.
 *
 * @returns {NotificationContextProps} The notification context.
 * @throws {Error} If used outside of a SSNotificationsProvider component.
 */
export function useNotification(): NotificationContextProps {
  const context = use(NotificationContext);

  if (!context) {
    throw new Error("useNotification must be used within a SSNotificationsProvider");
  }

  return context;
}

/**
 * SSNotificationsProvider Component (Context Provider)
 *
 * Uses the Compound Components pattern with a custom hook for consumption.
 *
 * @param {React.ReactNode} props.children - The children components.
 * @returns {JSX.Element} A ConfigProvider wrapped notification context.
 */
export default React.memo(SSNotificationsProvider);
