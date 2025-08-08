import type { Meta, StoryFn } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { SSButton } from ".";

const meta = {
  title: "ss-components/ss-button",
  component: SSButton,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/xJgR0lMrtzBLvTw7atIeXP/SixthSense-New-Design-System--Components-?node-id=3857-98238&p=f&t=e61Q4irwfmiGaQLf-0",
    },
  },
} satisfies Meta<typeof SSButton>;

export default meta;

const Template: StoryFn<typeof SSButton> = args => <SSButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Click me",
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  hierarchy: "secondaryColor",
  children: "Click me",
};

export const SecondaryGray = Template.bind({});
SecondaryGray.args = {
  hierarchy: "secondaryGray",
  children: "Click me",
};

export const SecondaryGray2 = Template.bind({});
SecondaryGray2.args = {
  hierarchy: "secondaryGray2",
  children: "Click me",
};

export const TertiaryColor = Template.bind({});
TertiaryColor.args = {
  hierarchy: "tertiaryColor",
  children: "Click me",
};

export const TertiaryGray = Template.bind({});
TertiaryGray.args = {
  hierarchy: "tertiaryGray",
  children: "Click me",
};

export const LinkColor = Template.bind({});
LinkColor.args = {
  hierarchy: "linkColor",
  children: "Click me",
};

export const LinkGray = Template.bind({});
LinkGray.args = {
  hierarchy: "linkGray",
  children: "Click me",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: "small",
  children: "Click me",
};

export const MiddleButton = Template.bind({});
MiddleButton.args = {
  size: "middle",
  children: "Click me",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  size: "large",
  children: "Click me",
};

export const IconOnlyButton = Template.bind({});
IconOnlyButton.args = {
  iconOnly: true,
  icon: <span>✔️</span>,
};

export const LeftIconButton = Template.bind({});
LeftIconButton.args = {
  leftIcon: <span className="mr-2">✔️</span>,
  children: "Click me",
};

export const RightIconButton = Template.bind({});
RightIconButton.args = {
  rightIcon: <span className="ml-2">✔️</span>,
  children: "Click me",
};

export const IconBothSideButton = Template.bind({});
IconBothSideButton.args = {
  leftIcon: <span className="mr-2">✔️</span>,
  rightIcon: <span className="ml-2">✔️</span>,
  children: "Click me",
};
