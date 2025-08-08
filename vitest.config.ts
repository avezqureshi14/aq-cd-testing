import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      include: ["**/**.spec.ts", "**/**.test.ts", "**/**.spec.tsx", "**/**.test.tsx"],
      coverage: {
        include: [
          // TODO: Add regex/blob of the file names which are supposed to be passed through unit tests
        ],
        thresholds: {
          lines: 90,
          functions: 90,
          branches: 90,
          statements: 90,
        },
      },
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
    },
  }),
);
