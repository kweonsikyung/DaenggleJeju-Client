import { style } from "@vanilla-extract/css";
import { TYPO } from "@/styles/typography.css";

export const root = style({
  width: "100%",
  padding: "16px 18px",
});

export const titleButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  textAlign: "left",
});

export const title = style({
  ...TYPO.HEADLINE1,
  margin: 0,
  color: "#262626",
});

export const desc = style({
  fontSize: "16px",
  fontWeight: 500,
  color: "#1F2329",
  margin: 0,
  paddingTop: "8px",
});
