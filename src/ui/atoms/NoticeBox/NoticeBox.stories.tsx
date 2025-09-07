import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React, { useState, useEffect } from "react";
import NoticeBox from "./NoticeBox";

const meta = {
  title: "Common/NoticeBox",
  component: NoticeBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: "text",
      description: "알림 상자 내부에 표시될 내용입니다. ",
    },
  },
  args: {
    shouldRender: true,
    children:
      "제공된 정보는 실제 운영 상황과 다를 수 있으므로, 예약 및 탑승 전 반드시 해당 업체의 최신 규정과 조건을 확인해 주시기 바랍니다.",
    onClose: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NoticeBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    animation: "idle",
  },
};
