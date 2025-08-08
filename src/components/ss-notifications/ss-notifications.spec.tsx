/* eslint-disable react-hooks/exhaustive-deps */
import type { MockInstance } from "vitest";

import { render, screen } from "@testing-library/react";
import { notification } from "antd";
import React from "react";

import type { SSNotificationOptions } from "@/components/ss-notifications/ss-notifications.props";

import SSNotificationsProvider, { useNotification } from "@/components/ss-notifications";

// Mock notification API
vi.mock("antd", async (importOriginal) => {
  const antd = await importOriginal<typeof import("antd")>();
  return {
    ...antd,
    notification: {
      useNotification: vi.fn(() => {
        return [
          {
            success: vi.fn(),
            error: vi.fn(),
            info: vi.fn(),
            warning: vi.fn(),
          },
          <div data-testid="mock-context-holder" key="ctx" />,
        ];
      }),
    },
  };
});

describe("ss-notificationsProvider", () => {
  let notificationApi: {
    success: MockInstance;
    error: MockInstance;
    info: MockInstance;
    warning: MockInstance;
  };

  beforeEach(() => {
    // @ts-expect-error: `useNotification` is mocked above using vi.mock. TypeScript cannot infer the correct type here
    const mockedUseNotification = notification.useNotification as unknown as vi.Mock;
    const mockSuccess = vi.fn();
    const mockError = vi.fn();
    const mockInfo = vi.fn();
    const mockWarning = vi.fn();

    notificationApi = {
      success: mockSuccess,
      error: mockError,
      info: mockInfo,
      warning: mockWarning,
    };

    mockedUseNotification.mockReturnValue([
      notificationApi,
      <div data-testid="mock-context-holder" key="ctx" />,
    ]);
  });

  it("renders provider and contextHolder", () => {
    render(
      <SSNotificationsProvider>
        <div data-testid="child">Child</div>
      </SSNotificationsProvider>,
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByTestId("mock-context-holder")).toBeInTheDocument();
  });

  it("calls notification.info by default when type is not provided", () => {
    const TestComponent = () => {
      const { show } = useNotification();
      React.useEffect(() => {
        show({ message: "Default Type Test" });
      }, [show]);
      return null;
    };

    render(
      <SSNotificationsProvider>
        <TestComponent />
      </SSNotificationsProvider>,
    );

    expect(notificationApi.info).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Default Type Test",
        icon: expect.anything(),
      }),
    );
  });

  it("calls notification.success with correct icon and content", () => {
    const options: SSNotificationOptions = {
      type: "success",
      message: "Success!",
      description: "Success description",
    };

    const TestComponent = () => {
      const { show } = useNotification();
      React.useEffect(() => show(options), []);
      return null;
    };

    render(
      <SSNotificationsProvider>
        <TestComponent />
      </SSNotificationsProvider>,
    );

    expect(notificationApi.success).toHaveBeenCalledWith(
      expect.objectContaining({
        message: options.message,
        description: options.description,
        icon: expect.anything(),
      }),
    );
  });

  it("calls notification.error, info, and warning with correct data", () => {
    const map = {
      error: notificationApi.error,
      warning: notificationApi.warning,
      info: notificationApi.info,
    };

    (["error", "info", "warning"] as const).forEach((type) => {
      const TestComponent = () => {
        const { show } = useNotification();
        React.useEffect(() => {
          show({ type, message: `${type} msg` });
        }, []);
        return null;
      };

      render(
        <SSNotificationsProvider>
          <TestComponent />
        </SSNotificationsProvider>,
      );

      expect(map[type]).toHaveBeenCalledWith(
        expect.objectContaining({ message: `${type} msg`, icon: expect.anything() }),
      );
    });
  });

  it("allows overriding the default icon", () => {
    const CustomIcon = () => <div data-testid="custom-icon" />;
    const options: SSNotificationOptions = {
      type: "info",
      message: "Custom Icon",
      icon: <CustomIcon />,
    };

    const TestComponent = () => {
      const { show } = useNotification();
      React.useEffect(() => show(options), []);
      return null;
    };

    render(
      <SSNotificationsProvider>
        <TestComponent />
      </SSNotificationsProvider>,
    );

    expect(notificationApi.info).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Custom Icon",
        icon: <CustomIcon />,
      }),
    );
  });

  it("throws error if useNotification is used outside provider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    const BrokenComponent = () => {
      useNotification(); // Should throw
      return null;
    };

    expect(() => render(<BrokenComponent />)).toThrowError(
      /useNotification must be used within a SSNotificationsProvider/,
    );

    consoleError.mockRestore();
  });
});
