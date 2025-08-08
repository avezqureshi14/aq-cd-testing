import type { ThemeConfig } from "antd/es/config-provider/context";

import accordionConfig from "@/components/ss-accordion/ss-accordion.theme";
import notificationsConfig from "@/components/ss-notifications/ss-notifications.theme";
import progressConfig from "@/components/ss-progress-bar/ss-progress-bar.theme";
import segmentedConfig from "@/components/ss-tabs/components/ss-segmented.theme";
import tabConfig from "@/components/ss-tabs/components/ss-tabs.theme";

const env = import.meta.env.MODE;
const antdDefaultTheme: ThemeConfig = {
  cssVar: env === "development",
  token: {},
  components: {
    Button: {},
    Radio: {},
    Progress: progressConfig,
    Tabs: tabConfig,
    Segmented: segmentedConfig,
    Collapse: accordionConfig,
    Notification: notificationsConfig,
  },
};

export default antdDefaultTheme;
