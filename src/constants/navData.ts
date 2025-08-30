export const NAV_ITEMS = [
  {
    id: "near",
    text: "내근처",
    iconFill: "/assets/nav/map_active.svg",
    iconLine: "/assets/nav/map.svg",
    path: "/map",
  },
  {
    id: "dangle",
    text: "댕글영상",
    iconFill: "/assets/nav/video_active.svg",
    iconLine: "/assets/nav/video.svg",
    path: "/dangle",
  },
  {
    id: "ai",
    text: "AI여행케어",
    iconFill: "/assets/nav/ai_active.svg",
    iconLine: "/assets/nav/ai.svg",
    path: "/ai",
  },
  {
    id: "search",
    text: "장소이동",
    iconFill: "/assets/nav/move_active.svg",
    iconLine: "/assets/nav/move.svg",
    path: "/search?param=내근처",
  },
  {
    id: "my",
    text: "마이",
    iconFill: "/assets/nav/my_active.svg",
    iconLine: "/assets/nav/my.svg",
    path: "/my",
  },
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number]["id"];
