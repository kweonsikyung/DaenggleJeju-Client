import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "@storybook/test";
import MapFloatingButtons from "./MapFloatingButtons";

const meta = {
  title: "Molecules/MapFloatingButtons",
  component: MapFloatingButtons,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    onGpsClick: fn(),
    chipMapListProps: {
      text: "장소 목록",
      cnt: 7,
      onLocationListClick: fn(),
    },
    fabProps: {
      onClick: fn(),
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 375,
          height: 200,
          position: "relative",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MapFloatingButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
