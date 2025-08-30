import { style } from "@vanilla-extract/css";
import { TYPO } from "@/styles/typography.css";

export const root = style({
  position: "absolute",
  width: "100%",
  maxWidth: "500px",
  height: "60px",
  bottom: "0px",
  left: 0,
  padding: "0 16px",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 11,
});

export const gpsButton = style({
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  border: "none",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 0.2s",
  ":active": {
    transform: "scale(0.95)",
  },
});
