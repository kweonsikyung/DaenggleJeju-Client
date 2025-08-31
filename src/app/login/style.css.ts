import { style } from "@vanilla-extract/css";

export const page = style({
  minHeight: "100vh",
  maxHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "0px 20px",
  gap: "100px",
});

export const btns = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
});

export const span = style({
  fontWeight: 500,
  fontSize: 14,
  color: "#6A6A6A",
  textDecoration: "underline",
  cursor: "pointer",
  paddingTop: "32px",
});
