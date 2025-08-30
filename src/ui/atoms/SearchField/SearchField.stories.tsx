"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn, userEvent, within } from "@storybook/test";
import { SearchField } from "./SearchField";

const meta = {
  title: "Input/SearchField",
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375, padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
  },
} satisfies Meta<typeof SearchField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "제주 지역 또는 장소명 검색" },
};

export const Focused: Story = {
  args: { placeholder: "제주 지역 또는 장소명 검색" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.click(input);
  },
};

export const Typing: Story = {
  args: { placeholder: "제주 지역 또는 장소명 검색", defaultValue: "애월" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "애월");
  },
};

export const Pressed: Story = {
  args: { placeholder: "제주 지역 또는 장소명 검색" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.pointer({ keys: "[MouseLeft]", target: input });
  },
};

export const Filled: Story = {
  args: { placeholder: "제주 지역 또는 장소명 검색", defaultValue: "애월" },
};
