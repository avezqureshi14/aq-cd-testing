import type { ArgsProps } from "antd/es/notification";

import type { CreateThemeType } from "@/theme/theme-types";

/**
 * Options for SSNotification, extending the default Ant Design notification ArgsProps.
 * Can be extended with custom properties as needed.
 *
 * @typedef {ArgsProps & {}} SSNotificationOptions
 */
export type SSNotificationOptions = ArgsProps & {};

/**
 * Notifications theme type.
 */
export type NotificationsThemeType = CreateThemeType<"Notification">;
