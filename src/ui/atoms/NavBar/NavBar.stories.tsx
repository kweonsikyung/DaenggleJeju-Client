import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavBar } from "./NavBar";

const meta = {
  title: "Navigation/NavBar",
  component: NavBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    activePage: {
      control: "radio",
      options: ["near", "dangle", "ai", "search", "my"],
    },
  },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Near: Story = {
  args: { activePage: "near" },
};

export const Dangle: Story = {
  args: { activePage: "dangle" },
};

export const AI: Story = {
  args: { activePage: "ai" },
};

export const Search: Story = {
  args: { activePage: "search" },
};

export const My: Story = {
  args: { activePage: "my" },
};
