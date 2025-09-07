import { style, keyframes } from "@vanilla-extract/css";
import { TYPO } from "@/styles/typography.css";

const NOTICE_COLORS = {
  background: "#FEFCE8",
  text: "#D08700",
};

const slideDown = keyframes({
  "0%": { opacity: 0, transform: "translateY(-10px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideUp = keyframes({
  "0%": { opacity: 1, transform: "translateY(0)" },
  "100%": { opacity: 0, transform: "translateY(-10px)" },
});

export const animateIn = style({
  animation: `${slideDown} 0.4s ease-out`,
});

export const animateOut = style({
  animation: `${slideUp} 0.4s ease-out forwards`,
});

export const container = style({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  padding: "12px",
  backgroundColor: NOTICE_COLORS.background,
  borderRadius: "16px",
});

export const iconWrapper = style({
  flexShrink: 0,
  width: "20px",
  height: "20px",
});

export const content = style({
  flexGrow: 1,
  ...TYPO.CAPTION1M,
  color: NOTICE_COLORS.text,
});

export const closeButton = style({
  flexShrink: 0,
  width: "20px",
  height: "20px",
  padding: 0,
  background: "transparent",
  border: "none",
  cursor: "pointer",
});
