import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DangleReview } from "./DangleReview";

const meta = {
  title: "Dangle/DangleReview",
  component: DangleReview,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    rating: {
      control: { type: "range", min: 0, max: 5, step: 1 },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 375 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DangleReview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    profileImageUrl: "/assets/dangle/dog_profile1.png",
    userName: "해투 견주님",
    dogInfo: "골든리트리버 · 7살 · 대형견 · 20kg 이상",
    rating: 5,
    date: "2025.03.14",
    reviewItems: [
      { label: "출입가능여부", value: "실내 모든 곳 이용 가능" },
      { label: "동반 조건", value: "목줄 착용 필수" },
      { label: "반려견 친화도", value: "매우 친절" },
    ],
    content:
      "대형견도 편하게 머물 수 있었어요 깔끔하고 깨끗한 방, 실내 전 구역 출입 가능해요 우디플레이트엔 매우 다양한 디저트가 있어 입도 즐거웠어요. 주변에 맛집도 있고 산책...",
  },
};

export const FourStars: Story = {
  args: {
    ...Default.args,
    profileImageUrl: "/assets/dangle/dog_profile2.png",
    userName: "댕댕이 견주님",
    dogInfo: "푸들 · 3살 · 소형견 · 5kg 미만",
    rating: 4,
    date: "2025.03.12",
    reviewItems: [
      { label: "출입가능여부", value: "실내 일부만 가능" },
      { label: "동반 조건", value: "이동가방 필수" },
      { label: "반려견 친화도", value: "친절" },
    ],
    content:
      "사장님이 친절하셨어요. 소형견 친구들이 놀기 좋은 곳 같아요. 공간이 넓지는 않지만 아기자기하게 잘 꾸며져 있습니다.",
  },
};
