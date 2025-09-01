import { style } from "@vanilla-extract/css";
import { TYPO } from "@/styles/typography.css";
import { COLORS } from "@/styles/colors.css";

export const page = style({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const container = style({
  flex: 1,
  padding: "16px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

export const section = style({});

export const sectionTitle = style({
  ...TYPO.BODY1B,
  fontWeight: "bold",
  margin: "0",
  paddingBottom: "16px",
});

export const filterChipsContainer = style({
  display: "flex",
  gap: "8px",
});

export const recentKeywordsWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const noHistory = style({
  ...TYPO.LABEL1B,
  color: COLORS.NEUTRAL500,
  textAlign: "center",
  margin: "45px 0",
});

export const keywordsWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const videoList = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});
