import { style, globalStyle } from "@vanilla-extract/css";

export const wrapper = style({
  width: "100%",
  overflowX: "auto",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
});

globalStyle(`${wrapper}::-webkit-scrollbar`, {
  display: "none",
});

export const container = style({
  display: "flex",
  padding: "16px 0",
});

export const item = style({
  flexShrink: 0,
});
