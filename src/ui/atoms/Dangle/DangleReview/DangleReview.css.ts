import { style, styleVariants } from "@vanilla-extract/css";
import { TYPO } from "@/styles/typography.css";
import { COLORS } from "@/styles/colors.css";

export const root = style({
  backgroundColor: "#FAFAFA",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "16px",
  borderRadius: "12px",
});

export const userInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const profileImage = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  objectFit: "cover",
});

export const userInfoText = style({
  display: "flex",
  flexDirection: "column",
});

export const userName = style(TYPO.LABEL1B);
export const dogInfo = style([TYPO.CAPTION2M, { color: COLORS.NEUTRAL500 }]);

export const reviewHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const stars = style({
  display: "flex",
});

export const date = style([TYPO.CAPTION1M, { color: COLORS.NEUTRAL400 }]);

export const reviewDetails = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const detailItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const detailLabel = style([TYPO.LABEL1M, { color: COLORS.NEUTRAL500 }]);

export const detailValue = style([
  TYPO.CAPTION2B,
  {
    backgroundColor: COLORS.GREEN50,
    color: COLORS.GREEN500,
    padding: "4px 8px",
    borderRadius: "6px",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
  },
]);

export const reviewContent = style([TYPO.BODY2M, { color: COLORS.NEUTRAL700 }]);
