import { style, keyframes } from "@vanilla-extract/css";
import { TYPO } from "@/styles/typography.css";
import { COLORS } from "@/styles/colors.css";

const fadeInUp = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(-16px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

/* --- Layout --- */
export const page = style({
  width: "100%",
  height: "100dvh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  background: COLORS.GREEN50,
});

export const container = style({
  flex: 1,
  width: "100%",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 24px 24px 24px",
});

export const detail_container = style({
  flex: 1,
  width: "100%",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 24px 24px 24px",
  gap: "16px",
});

/* --- Main Page --- */
export const title = style({
  padding: "18px 0px 28px 0px",
  ...TYPO.HEADING1,
  textAlign: "center",
  width: "100%",
});

export const box_container = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
});

export const box = style({
  backgroundColor: "#fff",
  borderRadius: "16px",
  border: "1px solid #FAFAFA",
  width: "100%",
  padding: "16px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",

  opacity: 0,
  animationName: fadeInUp,
  animationDuration: "0.5s",
  animationTimingFunction: "ease-out",
  animationFillMode: "forwards",

  transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
  cursor: "pointer",

  ":hover": {
    transform: "scale(1.1)",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
  },
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const top = style({
  ...TYPO.HEADLINE2,
});

export const desc = style({
  ...TYPO.LABEL1M,
  color: "#A1A1A1",
});

/* --- Detail Page --- */

export const detailHeader = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  padding: "16px 0px",
});

export const detailTitle = style({
  ...TYPO.HEADING1,
});

export const detailDesc = style({
  ...TYPO.HEADLINE2,
  color: COLORS.NEUTRAL500,
});

export const detailImageWrapper = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const detailImage = style({
  width: "100%",
  height: "auto",
  borderRadius: "16px",
  backgroundColor: COLORS.GREEN100,
});
