import { TYPO } from "@/styles/typography.css";
import { style, globalStyle } from "@vanilla-extract/css";

export const page = style({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const container = style({
  width: "100%",
  height: "calc(100vh - 56px)",
  backgroundColor: "#000",
  position: "relative",
  overflow: "hidden",
});

export const top_bg = style({
  background: "transparent",
});

export const swiperContainer = style({
  width: "100%",
  height: "100%",
  cursor: "pointer",
});

export const swiperSlide = style({
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
});

export const playerBackground = style({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  overflow: "hidden",
});

globalStyle(`${playerBackground} > iframe`, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const staticThumbnail = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  zIndex: 1,
});

export const playButtonContainer = style({
  position: "absolute",
  inset: 0,
  zIndex: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});

export const playIcon = style({
  filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.5))",
  transition: "transform 0.2s ease",
  selectors: {
    [`${playButtonContainer}:hover &`]: {
      transform: "scale(1.1)",
    },
  },
});

export const header = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 20px",
  width: "100%",
  boxSizing: "border-box",
});

export const paginationContainer = style({
  display: "flex",
  gap: "4px",
  width: "100%",
  padding: "0 16px",
});

export const paginationBar = style({
  flex: 1,
  height: "4px",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  borderRadius: "4px",
});

export const paginationBarActive = style({
  backgroundColor: "rgba(255, 255, 255, 1)",
});

export const sideActions = style({
  position: "absolute",
  right: "18px",
  bottom: "250px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

export const actionButton = style({
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  padding: 0,
  ...TYPO.CAPTION1B,
});

export const bottom = style({
  paddingBottom: "20px",
  "@media": {
    "(min-height: 670px)": {
      paddingBottom: "50px",
    },
  },
});
