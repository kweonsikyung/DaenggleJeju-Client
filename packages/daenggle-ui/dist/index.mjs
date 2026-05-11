var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/atoms/AvatarPicker/AvatarPicker.tsx
import React2, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// src/atoms/AvatarPicker/AvatarPicker.css.ts
import { style } from "@vanilla-extract/css";
var wrapper = style({
  position: "relative",
  display: "block",
  width: 94,
  height: 94
});
var avatarImg = style({
  width: 94,
  height: 94,
  borderRadius: "9999px",
  objectFit: "cover",
  display: "block"
});
var cameraBtn = style({
  position: "absolute",
  right: -2,
  bottom: -2,
  width: 28,
  height: 28,
  display: "grid",
  placeItems: "center",
  cursor: "pointer"
});
var visuallyHidden = style({
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  border: 0
});

// src/atoms/AvatarPicker/AvatarPicker.tsx
function AvatarPicker({
  size: size2 = 94,
  value,
  defaultValue = null,
  onChange,
  accept = "image/*",
  disabled,
  className,
  placeholderImageSrc,
  cameraIconSrc
}) {
  var _a;
  const fileRef = useRef(null);
  const [innerUrl, setInnerUrl] = useState(defaultValue);
  const previewUrl = (_a = value != null ? value : innerUrl) != null ? _a : null;
  useEffect(() => {
    return () => {
      if (innerUrl) URL.revokeObjectURL(innerUrl);
    };
  }, [innerUrl]);
  const openPicker = () => {
    var _a2;
    if (disabled) return;
    (_a2 = fileRef.current) == null ? void 0 : _a2.click();
  };
  const handlePick = (e) => {
    var _a2;
    const file = (_a2 = e.target.files) == null ? void 0 : _a2[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (value === void 0) {
      if (innerUrl) URL.revokeObjectURL(innerUrl);
      setInnerUrl(url);
    }
    onChange == null ? void 0 : onChange(file, url);
    e.currentTarget.value = "";
  };
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      className: [wrapper, className].filter(Boolean).join(" "),
      style: { width: size2, height: size2 },
      "aria-label": "\uC544\uBC14\uD0C0 \uC120\uD0DD"
    },
    previewUrl ? /* @__PURE__ */ React2.createElement("img", { src: previewUrl, alt: "\uC544\uBC14\uD0C0", className: avatarImg }) : placeholderImageSrc ? /* @__PURE__ */ React2.createElement(
      Image,
      {
        src: placeholderImageSrc,
        alt: "",
        width: size2,
        height: size2,
        className: avatarImg,
        priority: true
      }
    ) : null,
    /* @__PURE__ */ React2.createElement(
      "input",
      {
        ref: fileRef,
        type: "file",
        accept,
        className: visuallyHidden,
        onChange: handlePick,
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    /* @__PURE__ */ React2.createElement("div", { className: cameraBtn, onClick: openPicker, "aria-label": "\uC544\uBC14\uD0C0 \uBCC0\uACBD" }, cameraIconSrc && /* @__PURE__ */ React2.createElement(Image, { src: cameraIconSrc, alt: "", width: 28, height: 28 }))
  );
}

// src/atoms/BottomSheet/BottomSheet.tsx
import { Drawer } from "vaul";

// src/styles/typography.css.ts
var TYPO = {
  DISPLAY: {
    fontFamily: "var(--font-laundry)",
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: "32px",
    letterSpacing: "-1.2%"
  },
  HEADING1: {
    fontSize: "22px",
    fontWeight: 700,
    lineHeight: "32px",
    letterSpacing: "-1.2%"
  },
  HEADING2: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "auto",
    letterSpacing: "0"
  },
  HEADLINE1: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0"
  },
  HEADLINE2: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "22px",
    letterSpacing: "0"
  },
  BODY1B: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "22px",
    letterSpacing: "0"
  },
  BODY1M: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "22px",
    letterSpacing: "0"
  },
  BODY2B: {
    fontSize: "15px",
    fontWeight: 700,
    lineHeight: "22px",
    letterSpacing: "0"
  },
  BODY2M: {
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: "22px",
    letterSpacing: "0"
  },
  BODY3: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "-1.2%"
  },
  LABEL1B: {
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "18px",
    letterSpacing: "0"
  },
  LABEL1M: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "18px",
    letterSpacing: "0"
  },
  LABEL1R: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "18px",
    letterSpacing: "0"
  },
  LABEL2B: {
    fontSize: "13px",
    fontWeight: 600,
    lineHeight: "auto",
    letterSpacing: "0"
  },
  LABEL2M: {
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: "auto",
    letterSpacing: "0"
  },
  CAPTION1B: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "16px",
    letterSpacing: "0"
  },
  CAPTION1M: {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: "0"
  },
  CAPTION2B: {
    fontSize: "11px",
    fontWeight: 700,
    lineHeight: "auto",
    letterSpacing: "0"
  },
  CAPTION2M: {
    fontSize: "11px",
    fontWeight: 500,
    lineHeight: "auto",
    letterSpacing: "0"
  }
};

// src/atoms/BottomSheet/BottomSheet.css.ts
import { style as style2 } from "@vanilla-extract/css";
var overlay = style2({
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  zIndex: "999"
});
var content = style2({
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  margin: "0 auto",
  width: "100%",
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  background: "#fff",
  boxShadow: "0px 4px 20px 0px #00000033",
  display: "grid",
  gridTemplateRows: "auto auto 1fr",
  overflow: "hidden",
  zIndex: "9999"
});
var handle = style2({
  height: 16,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  selectors: {
    "&::before": {
      content: '""',
      display: "block",
      width: 48,
      height: 4,
      borderRadius: 4,
      background: "#D6D8DC"
    }
  }
});
var header = style2({
  position: "sticky",
  top: 0,
  zIndex: 1,
  display: "grid",
  gridTemplateColumns: "1fr auto",
  alignItems: "center",
  padding: "16px 18px",
  background: "#fff",
  margin: 0
});
var title = style2(__spreadProps(__spreadValues({}, TYPO.HEADLINE1), {
  color: "#262626"
}));
var close = style2({
  inlineSize: 24,
  blockSize: 24,
  display: "grid",
  placeItems: "center",
  backgroundColor: "transparent",
  border: "none",
  color: "#222",
  cursor: "pointer"
});
var body = style2({
  overflowY: "auto",
  minHeight: "60vh",
  maxHeight: "80vh",
  WebkitOverflowScrolling: "touch"
});

// src/atoms/BottomSheet/BottomSheet.tsx
import Image2 from "next/image";
function BottomSheet({ open, onOpenChange, title: title13, children }) {
  return /* @__PURE__ */ React.createElement(Drawer.Root, { open, onOpenChange, shouldScaleBackground: true }, /* @__PURE__ */ React.createElement(Drawer.Portal, null, /* @__PURE__ */ React.createElement(Drawer.Overlay, { className: overlay, onClick: () => onOpenChange(false) }), /* @__PURE__ */ React.createElement(Drawer.Content, { className: content }, /* @__PURE__ */ React.createElement("div", { className: handle }), /* @__PURE__ */ React.createElement("div", { className: header }, /* @__PURE__ */ React.createElement(Drawer.Title, { style: { display: "none" } }), /* @__PURE__ */ React.createElement("div", { className: title }, title13), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      "aria-label": "\uB2EB\uAE30",
      className: close,
      onClick: () => onOpenChange(false)
    },
    /* @__PURE__ */ React.createElement(Image2, { src: "/assets/icon24/x_line.svg", alt: "\uB4A4\uB85C\uAC00\uAE30", width: 24, height: 24 })
  )), /* @__PURE__ */ React.createElement("div", { className: body }, children))));
}

// src/atoms/Buttons/Location/Location.tsx
import React3 from "react";

// src/atoms/Buttons/Location/Location.css.ts
import { style as style3, styleVariants } from "@vanilla-extract/css";

// src/styles/colors.css.ts
var COLORS = {
  GREEN50: "#F0FDF4",
  GREEN100: "#E3FFEE",
  GREEN200: "#C6F9DA",
  GREEN300: "#9EF3C3",
  GREEN400: "#7EECAA",
  GREEN500: "#26E278",
  GREEN600: "#00A63E",
  GREEN700: "#159B4D",
  GREEN800: "#0E6F36",
  GREEN900: "#0B5A2C",
  LIME50: "#FAFFE9",
  LIME100: "#F2FFD0",
  LIME200: "#E6F58C",
  LIME300: "#D9F04F",
  LIME400: "#C7EC1E",
  LIME500: "#A6D114",
  LIME600: "#7FAD16",
  LIME700: "#6B8F17",
  LIME800: "#5A7619",
  LIME900: "#4C651B",
  NEUTRAL0: "#FFFFFF",
  NEUTRAL50: "#F6F6F6",
  NEUTRAL100: "#F5F5F5",
  NEUTRAL200: "#DCDCDC",
  NEUTRAL300: "#CFCFCF",
  NEUTRAL400: "#9A9A9A",
  NEUTRAL500: "#737373",
  NEUTRAL600: "#4C4C4C",
  NEUTRAL700: "#333333",
  NEUTRAL800: "#1F1F1F",
  NEUTRAL900: "#171717"
};

// src/atoms/Buttons/Location/Location.css.ts
var root = style3({
  minWidth: "162px",
  width: "100%",
  borderRadius: "12px",
  padding: "12px 16px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  textAlign: "left",
  background: COLORS.NEUTRAL50,
  border: `1px solid ${COLORS.NEUTRAL200}`
});
var state = styleVariants({
  default: {
    background: COLORS.NEUTRAL50,
    border: `1px solid ${COLORS.NEUTRAL200}`
  },
  selected: {
    background: COLORS.GREEN50,
    boxShadow: `inset 0 0 0 2px ${COLORS.GREEN600}`
  },
  disabled: {
    background: COLORS.NEUTRAL100,
    border: `1px solid ${COLORS.NEUTRAL200}`,
    cursor: "not-allowed"
  }
});
var title2 = style3(__spreadProps(__spreadValues({}, TYPO.BODY2M), {
  color: COLORS.NEUTRAL900
}));
var desc = style3(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
  color: COLORS.NEUTRAL500
}));

// src/atoms/Buttons/Location/Location.tsx
function Location(_a) {
  var _b = _a, {
    title: title13,
    desc: desc4,
    selected = false,
    disabled = false,
    className,
    onClick
  } = _b, rest = __objRest(_b, [
    "title",
    "desc",
    "selected",
    "disabled",
    "className",
    "onClick"
  ]);
  const classes = [
    root,
    selected ? state.selected : state.default,
    disabled ? state.disabled : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ React3.createElement(
    "button",
    __spreadValues({
      type: "button",
      className: classes,
      disabled,
      onClick,
      role: "checkbox",
      "aria-checked": selected,
      "data-selected": selected || void 0
    }, rest),
    /* @__PURE__ */ React3.createElement("span", { className: title2 }, title13),
    desc4 ? /* @__PURE__ */ React3.createElement("span", { className: desc }, desc4) : null
  );
}

// src/atoms/Buttons/Button/Button.tsx
import React4 from "react";

// src/atoms/Buttons/Button/Button.css.ts
import { style as style4, styleVariants as styleVariants2 } from "@vanilla-extract/css";
var root2 = style4({
  border: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "12px",
  width: "100%",
  textAlign: "center"
});
var size = styleVariants2({
  large: { height: "56px", padding: "0 20px" },
  medium: { height: "48px", padding: "0 16px" }
});
var state2 = styleVariants2({
  default: __spreadProps(__spreadValues({}, TYPO.BODY1M), {
    background: COLORS.NEUTRAL0,
    color: COLORS.NEUTRAL800,
    boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL200}`
  }),
  active: __spreadProps(__spreadValues({}, TYPO.BODY1M), {
    background: COLORS.NEUTRAL800,
    color: COLORS.NEUTRAL0
  }),
  disabled: __spreadProps(__spreadValues({}, TYPO.BODY1M), {
    background: COLORS.NEUTRAL200,
    color: COLORS.NEUTRAL500
  }),
  selected: __spreadProps(__spreadValues({}, TYPO.BODY1M), {
    background: COLORS.GREEN50,
    color: COLORS.GREEN700,
    boxShadow: `inset 0 0 0 2px ${COLORS.GREEN600}`
  }),
  primary: __spreadProps(__spreadValues({}, TYPO.BODY1B), {
    background: COLORS.GREEN600,
    color: COLORS.NEUTRAL0
  })
});
var label = style4(__spreadValues({}, TYPO.BODY1B));

// src/atoms/Buttons/Button/Button.tsx
var STATUS_KEY = {
  ["active" /* ACTIVE */]: "active",
  ["disabled" /* DISABLED */]: "disabled",
  ["default" /* DEFAULT */]: "default",
  ["selected" /* SELECTED */]: "selected",
  ["primary" /* PRIMARY */]: "primary"
};
var SIZE_KEY = {
  ["medium" /* MEDIUM */]: "medium",
  ["large" /* LARGE */]: "large"
};
function Button(_a) {
  var _b = _a, { size: size2, status, text: text3, className, disabled } = _b, rest = __objRest(_b, ["size", "status", "text", "className", "disabled"]);
  const sizeKey = SIZE_KEY[size2];
  const statusKey = STATUS_KEY[status];
  const classes = [root2, size[sizeKey], state2[statusKey], className].filter(Boolean).join(" ");
  const isDisabled = disabled || statusKey === "disabled";
  return /* @__PURE__ */ React4.createElement(
    "button",
    __spreadValues({
      type: "button",
      className: classes,
      disabled: isDisabled || void 0,
      "data-size": sizeKey,
      "data-status": statusKey
    }, rest),
    /* @__PURE__ */ React4.createElement("span", { className: label }, text3)
  );
}

// src/atoms/Buttons/LoginButton/LoginButton.tsx
import Image3 from "next/image";

// src/atoms/Buttons/LoginButton/LoginButton.css.ts
import { style as style5, styleVariants as styleVariants3 } from "@vanilla-extract/css";
var root3 = style5({
  width: "100%",
  height: "56px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
  cursor: "pointer",
  border: "1px solid transparent"
});
var icon = style5({
  width: "24px",
  height: "24px"
});
var kind = styleVariants3({
  kakao: {
    background: "#FEE102",
    color: "#191600",
    borderColor: "#FEE102"
  },
  naver: {
    background: "#06BE34",
    color: COLORS.NEUTRAL0,
    borderColor: "#06BE34"
  },
  google: {
    background: COLORS.NEUTRAL0,
    color: "#1C1C1C",
    boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL200}`
  }
});
var label2 = style5(__spreadProps(__spreadValues({}, TYPO.BODY1M), {
  lineHeight: "24px",
  textAlign: "left"
}));

// src/atoms/Buttons/LoginButton/LoginButton.tsx
function LoginButton(_a) {
  var _b = _a, { provider, title: title13, iconSrc, className } = _b, rest = __objRest(_b, ["provider", "title", "iconSrc", "className"]);
  return /* @__PURE__ */ React.createElement(
    "button",
    __spreadValues({
      type: "button",
      className: [root3, kind[provider], className].filter(Boolean).join(" "),
      "aria-label": title13
    }, rest),
    /* @__PURE__ */ React.createElement(
      Image3,
      {
        src: iconSrc,
        alt: "",
        width: 24,
        height: 24,
        className: icon,
        priority: true
      }
    ),
    /* @__PURE__ */ React.createElement("span", { className: label2 }, title13)
  );
}

// src/atoms/Chat/AiProfileHeader/AiProfileHeader.tsx
import React5 from "react";
import Image4 from "next/image";

// src/atoms/Chat/AiProfileHeader/AiProfileHeader.css.ts
import { style as style6 } from "@vanilla-extract/css";
var container = style6({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 18px"
});
var imageWrapper = style6({
  flexShrink: 0
});
var profileImage = style6({});
var textContainer = style6({
  display: "flex",
  flexDirection: "column",
  gap: "2px"
});
var title3 = style6(__spreadProps(__spreadValues({}, TYPO.LABEL1B), {
  margin: 0,
  color: "#262626"
}));
var subtitle = style6(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
  color: "#737373",
  margin: 0
}));

// src/atoms/Chat/AiProfileHeader/AiProfileHeader.tsx
function AiProfileHeader({ imageUrl, title: title13, subtitle: subtitle3 }) {
  return /* @__PURE__ */ React5.createElement("div", { className: container }, /* @__PURE__ */ React5.createElement("div", { className: imageWrapper }, /* @__PURE__ */ React5.createElement(Image4, { src: imageUrl, alt: title13, width: 40, height: 40, className: profileImage })), /* @__PURE__ */ React5.createElement("div", { className: textContainer }, /* @__PURE__ */ React5.createElement("h1", { className: title3 }, title13), /* @__PURE__ */ React5.createElement("p", { className: subtitle }, subtitle3)));
}

// src/atoms/Chat/ChatInput/ChatInput.tsx
import React6, { useState as useState2 } from "react";
import Image5 from "next/image";

// src/atoms/Chat/ChatInput/style.css.ts
import { style as style7 } from "@vanilla-extract/css";
var wrapper2 = style7({
  width: "100%",
  backgroundColor: COLORS.NEUTRAL0,
  padding: "8px 16px 24px",
  boxSizing: "border-box",
  borderTop: `1px solid ${COLORS.NEUTRAL100}`
});
var container2 = style7({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  backgroundColor: COLORS.NEUTRAL100,
  borderRadius: "30px",
  padding: "8px 8px 8px 16px"
});
var input = style7(__spreadProps(__spreadValues({
  flex: 1,
  border: "none",
  background: "none",
  outline: "none"
}, TYPO.BODY2M), {
  color: COLORS.NEUTRAL900,
  "::placeholder": {
    color: COLORS.NEUTRAL400
  },
  ":disabled": {
    backgroundColor: "transparent",
    cursor: "not-allowed"
  }
}));
var sendButton = style7({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: COLORS.GREEN500,
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  flexShrink: 0,
  ":disabled": {
    backgroundColor: COLORS.NEUTRAL200,
    cursor: "not-allowed"
  }
});

// src/atoms/Chat/ChatInput/ChatInput.tsx
function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState2("");
  const handleSend = () => {
    if (value.trim() && !disabled) {
      onSend(value);
      setValue("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSend();
    }
  };
  return /* @__PURE__ */ React6.createElement("div", { className: wrapper2 }, /* @__PURE__ */ React6.createElement("div", { className: container2 }, /* @__PURE__ */ React6.createElement(
    "input",
    {
      className: input,
      placeholder: disabled ? "AI\uAC00 \uB2F5\uBCC0 \uC911\uC785\uB2C8\uB2E4" : "\uAD81\uAE08\uD55C \uB0B4\uC6A9\uC744 \uC9C8\uBB38\uD574\uBCF4\uC138\uC694",
      value,
      onChange: (e) => setValue(e.target.value),
      onKeyDown: handleKeyDown,
      disabled
    }
  ), /* @__PURE__ */ React6.createElement(
    "button",
    {
      className: sendButton,
      onClick: handleSend,
      disabled: disabled || !value.trim(),
      "aria-label": "\uC804\uC1A1"
    },
    /* @__PURE__ */ React6.createElement(Image5, { src: "/assets/icon24/send.svg", alt: "\uC804\uC1A1", width: 24, height: 24 })
  )));
}

// src/atoms/Chat/MessageBox/MessageBox.tsx
import React7 from "react";

// src/atoms/Chat/MessageBox/MessageBox.css.ts
import { style as style8 } from "@vanilla-extract/css";
var wrapper3 = style8({
  display: "flex",
  width: "100%",
  padding: "8px 18px"
});
var baseMessageBox = style8(__spreadProps(__spreadValues({}, TYPO.BODY3), {
  padding: "12px 16px",
  maxWidth: "80%",
  whiteSpace: "pre-wrap"
}));
var aiMessageBox = style8([
  baseMessageBox,
  {
    backgroundColor: COLORS.NEUTRAL100,
    borderRadius: "0 16px 16px 16px",
    color: "#000",
    marginRight: "auto"
  }
]);
var userMessageBox = style8([
  baseMessageBox,
  {
    backgroundColor: "#00A63E",
    borderRadius: "16px 0 16px 16px",
    color: "#fff",
    marginLeft: "auto"
  }
]);

// src/atoms/Chat/MessageBox/MessageBox.tsx
function MessageBox({ children, variant = "ai" }) {
  const messageClass = variant === "user" ? userMessageBox : aiMessageBox;
  return /* @__PURE__ */ React7.createElement("div", { className: wrapper3 }, /* @__PURE__ */ React7.createElement("div", { className: messageClass }, children));
}

// src/atoms/Chat/ThinkingBubble/ThinkingBubble.tsx
import React8 from "react";

// src/atoms/Chat/ThinkingBubble/ThinkingBubble.css.ts
import { style as style9, keyframes } from "@vanilla-extract/css";
var bounce = keyframes({
  "0%, 80%, 100%": { transform: "scale(0)" },
  "40%": { transform: "scale(1.0)" }
});
var wrapper4 = style9({
  display: "flex",
  width: "100%",
  padding: "8px 18px",
  justifyContent: "flex-start"
});
var bubble = style9({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "16px 20px",
  backgroundColor: COLORS.NEUTRAL100,
  borderRadius: "0 16px 16px 16px"
});
var dot = style9({
  width: "8px",
  height: "8px",
  backgroundColor: "#34C759",
  borderRadius: "50%",
  animation: `${bounce} 1.4s infinite ease-in-out both`
});

// src/atoms/Chat/ThinkingBubble/ThinkingBubble.tsx
function ThinkingBubble() {
  return /* @__PURE__ */ React8.createElement("div", { className: wrapper4 }, /* @__PURE__ */ React8.createElement("div", { className: bubble }, /* @__PURE__ */ React8.createElement("div", { className: dot, style: { animationDelay: "0s" } }), /* @__PURE__ */ React8.createElement("div", { className: dot, style: { animationDelay: "0.2s" } }), /* @__PURE__ */ React8.createElement("div", { className: dot, style: { animationDelay: "0.4s" } })));
}

// src/atoms/Chat/TopicSelector/TopicSelector.tsx
import React9 from "react";

// src/atoms/Chat/TopicSelector/TopicSelector.css.ts
import { style as style10 } from "@vanilla-extract/css";
var container3 = style10({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  padding: "16px 18px"
});
var topicButton = style10(__spreadProps(__spreadValues({
  padding: "8px 12px",
  backgroundColor: "#fff",
  border: "1px solid #e0e0e0",
  borderRadius: "12px"
}, TYPO.LABEL1M), {
  color: COLORS.NEUTRAL600,
  cursor: "pointer",
  transition: "background-color 0.2s, border-color 0.2s",
  ":hover": {
    backgroundColor: "#f5f5f5",
    borderColor: "#ccc"
  }
}));

// src/atoms/Chat/TopicSelector/TopicSelector.tsx
function TopicSelector({ topics, onSelectTopic }) {
  return /* @__PURE__ */ React9.createElement("div", { className: container3 }, topics.map((topic) => /* @__PURE__ */ React9.createElement("button", { key: topic, className: topicButton, onClick: () => onSelectTopic(topic) }, topic)));
}

// src/atoms/Chip/Chip/Chip.tsx
import React10 from "react";

// src/atoms/Chip/Chip/Chip.css.ts
import { style as style11 } from "@vanilla-extract/css";
var root4 = style11(__spreadProps(__spreadValues({}, TYPO.HEADLINE2), {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 16px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  backgroundColor: COLORS.LIME300,
  color: COLORS.NEUTRAL800
}));

// src/atoms/Chip/Chip/Chip.tsx
function Chip({ label: label6, onClick, className }) {
  return /* @__PURE__ */ React10.createElement(
    "button",
    {
      type: "button",
      className: [root4, className].filter(Boolean).join(" "),
      onClick
    },
    label6
  );
}

// src/atoms/Chip/ChipKeyword/ChipKeyword.tsx
import React11 from "react";
import Image6 from "next/image";

// src/atoms/Chip/ChipKeyword/ChipKeyword.css.ts
import { style as style12, styleVariants as styleVariants4 } from "@vanilla-extract/css";
var baseChip = style12(__spreadProps(__spreadValues({}, TYPO.LABEL1M), {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 12px",
  borderRadius: "12px",
  border: "1px solid #ccc",
  backgroundColor: COLORS.NEUTRAL50,
  cursor: "pointer",
  whiteSpace: "nowrap",
  gap: "4px"
}));
var chip = styleVariants4({
  selected: [
    baseChip,
    __spreadValues({
      borderColor: COLORS.NEUTRAL50,
      backgroundColor: "#fff",
      color: "#262626"
    }, TYPO.LABEL1R)
  ],
  default: [
    baseChip,
    __spreadValues({
      borderColor: COLORS.GREEN50,
      backgroundColor: COLORS.GREEN50,
      color: COLORS.GREEN700
    }, TYPO.LABEL1M)
  ]
});
var closeButton = style12({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

// src/atoms/Chip/ChipKeyword/ChipKeyword.tsx
function ChipKeyword({ text: text3, selected = false, onClose, onClick }) {
  return /* @__PURE__ */ React11.createElement("div", { className: chip[selected ? "selected" : "default"], onClick, role: "button" }, /* @__PURE__ */ React11.createElement("span", null, text3), selected && /* @__PURE__ */ React11.createElement("button", { className: closeButton, onClick: onClose, "aria-label": "\uB2EB\uAE30" }, /* @__PURE__ */ React11.createElement(Image6, { src: "/assets/icon16/x_line.svg", alt: "\uB2EB\uAE30", width: 16, height: 16 })));
}

// src/atoms/Chip/ChipMapList/ChipMapList.tsx
import React12 from "react";
import Image7 from "next/image";

// src/atoms/Chip/ChipMapList/ChipMapList.css.ts
import { style as style13 } from "@vanilla-extract/css";
var locationListButton = style13({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 16px",
  backgroundColor: COLORS.NEUTRAL700,
  borderRadius: "99px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  border: "none",
  cursor: "pointer"
});
var locationListText = style13(__spreadProps(__spreadValues({}, TYPO.LABEL2M), {
  color: COLORS.NEUTRAL50,
  paddingRight: "4px"
}));
var locationListCount = style13(__spreadProps(__spreadValues({}, TYPO.LABEL2B), {
  color: COLORS.LIME400
}));

// src/atoms/Chip/ChipMapList/ChipMapList.tsx
function ChipMapList({ text: text3, cnt, onLocationListClick }) {
  return /* @__PURE__ */ React12.createElement("button", { className: locationListButton, onClick: onLocationListClick }, /* @__PURE__ */ React12.createElement("span", null, /* @__PURE__ */ React12.createElement(Image7, { src: "/assets/icon12/bullet-list_line-white.svg", alt: "\uBAA9\uB85D", width: 12, height: 12 })), /* @__PURE__ */ React12.createElement("div", null, /* @__PURE__ */ React12.createElement("span", { className: locationListText }, text3), /* @__PURE__ */ React12.createElement("span", { className: locationListCount }, cnt)));
}

// src/atoms/Dangle/DangleCard/DangleCard.tsx
import React13 from "react";
import Image8 from "next/image";

// src/atoms/Dangle/DangleCard/DangleCard.css.ts
import { style as style14 } from "@vanilla-extract/css";
var root5 = style14({
  width: "280px",
  height: "377px",
  borderRadius: "28px",
  overflow: "hidden",
  position: "relative",
  border: "none",
  padding: "0",
  boxSizing: "border-box",
  cursor: "pointer",
  transition: "transform 0.2s",
  ":hover": {
    transform: "scale(1.02)"
  }
});
var imageWrapper2 = style14({
  width: "100%",
  height: "100%",
  position: "relative"
});
var overlay2 = style14({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "27px 24px",
  boxSizing: "border-box",
  background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.5) 100%)"
});
var views = style14({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  fontWeight: "700",
  color: "#fff"
});
var bottom = style14({
  width: "100%",
  color: "#fff",
  textAlign: "left"
});
var title4 = style14(__spreadProps(__spreadValues({}, TYPO.DISPLAY), {
  whiteSpace: "pre-wrap",
  margin: 0,
  paddingBottom: "16px"
}));
var hashtag = style14(__spreadProps(__spreadValues({}, TYPO.CAPTION1M), {
  display: "inline-block",
  padding: "4px 8px",
  backgroundColor: "#FFFFFF33",
  borderRadius: "30px"
}));
var image = style14({
  width: "100%",
  height: "100%",
  objectFit: "cover"
});

// src/atoms/Dangle/DangleCard/DangleCard.tsx
function DangleCard({
  imageUrl,
  views: views2 = 0,
  viewIconSrc,
  title: title13,
  hashtag: hashtag2,
  onClick
}) {
  return /* @__PURE__ */ React13.createElement("button", { className: root5, onClick }, /* @__PURE__ */ React13.createElement("div", { className: imageWrapper2 }, /* @__PURE__ */ React13.createElement(Image8, { src: imageUrl, alt: title13, width: 280, height: 377, className: image }), /* @__PURE__ */ React13.createElement("div", { className: overlay2 }, views2 > 0 && /* @__PURE__ */ React13.createElement("div", { className: views }, viewIconSrc && /* @__PURE__ */ React13.createElement(Image8, { src: viewIconSrc, alt: "\uC870\uD68C\uC218", width: 24, height: 24 }), /* @__PURE__ */ React13.createElement("span", null, views2.toLocaleString())), /* @__PURE__ */ React13.createElement("div", { className: bottom }, /* @__PURE__ */ React13.createElement("h3", { className: title4 }, title13), /* @__PURE__ */ React13.createElement("span", { className: hashtag }, hashtag2)))));
}

// src/atoms/Dangle/DangleItem/DangleItem.tsx
import React14 from "react";
import Image9 from "next/image";

// src/atoms/Dangle/DangleItem/DangleItem.css.ts
import { style as style15, styleVariants as styleVariants5 } from "@vanilla-extract/css";
var root6 = style15({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "84px",
  height: "110px",
  justifyContent: "space-between",
  border: "none",
  background: "none",
  padding: "0",
  cursor: "pointer",
  transition: "transform 0.2s",
  selectors: {
    "&:hover": {
      transform: "scale(1.05)"
    }
  }
});
var baseImageContainer = style15({
  width: "84px",
  height: "84px",
  borderRadius: "50%",
  overflow: "hidden",
  borderWidth: "2px",
  borderStyle: "solid",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
var imageContainer = styleVariants5({
  after: [
    baseImageContainer,
    {
      borderColor: "#eee"
    }
  ],
  before: [
    baseImageContainer,
    {
      borderColor: COLORS.GREEN600
    }
  ]
});
var image2 = style15({
  width: "70px",
  height: "70px",
  objectFit: "cover",
  borderRadius: "50%"
});
var text = style15(__spreadProps(__spreadValues({}, TYPO.LABEL1M), {
  textAlign: "center",
  color: "#333"
}));

// src/atoms/Dangle/DangleItem/DangleItem.tsx
function DangleItem({ state: state5, imageUrl, text: text3, onClick }) {
  return /* @__PURE__ */ React14.createElement("button", { type: "button", className: root6, onClick, "aria-label": `${text3} \uC544\uC774\uD15C` }, /* @__PURE__ */ React14.createElement("div", { className: imageContainer[state5] }, /* @__PURE__ */ React14.createElement(Image9, { src: imageUrl, alt: text3, width: 70, height: 70, className: image2 })), /* @__PURE__ */ React14.createElement("span", { className: text }, text3));
}

// src/atoms/Dangle/DanglePlace/DanglePlace.tsx
import React15, { useState as useState3, useEffect as useEffect2, useMemo } from "react";
import Image10 from "next/image";

// src/atoms/Dangle/DanglePlace/DanglePlace.css.ts
import { style as style16, styleVariants as styleVariants6 } from "@vanilla-extract/css";
var baseCard = style16({
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  backgroundColor: "#fff",
  cursor: "pointer",
  textAlign: "left"
});
var root7 = styleVariants6({
  default: [baseCard],
  isExpanded: [baseCard, { height: "auto" }]
});
var headerContainer = style16({
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  position: "relative"
});
var thumbnailWrapper = style16({
  width: "80px",
  height: "80px",
  borderRadius: "8px",
  overflow: "hidden",
  flexShrink: 0
});
var thumbnail = style16({
  width: "100%",
  height: "100%",
  objectFit: "cover"
});
var contentWrapper = style16({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "2px"
});
var bookmarkButton = style16({
  position: "absolute",
  top: 0,
  right: 0,
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer"
});
var locationCategory = style16(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
  color: COLORS.NEUTRAL500
}));
var name = style16(__spreadProps(__spreadValues({}, TYPO.BODY2B), {
  margin: 0
}));
var stats = style16({
  display: "flex",
  alignItems: "center",
  gap: "4px"
});
var statItem = style16(__spreadProps(__spreadValues({
  display: "flex",
  gap: "4px"
}, TYPO.CAPTION1B), {
  color: "#888",
  alignItems: "center"
}));
var statValue = style16(__spreadProps(__spreadValues({}, TYPO.CAPTION1M), {
  color: COLORS.NEUTRAL500
}));
var tags = style16({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  paddingTop: "4px"
});
var tag = style16(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
  backgroundColor: COLORS.NEUTRAL100,
  color: COLORS.NEUTRAL500,
  padding: "2px 4px",
  borderRadius: "1px"
}));
var expandedContent = style16({});
var details = style16({
  display: "flex",
  flexDirection: "column",
  gap: "2px"
});
var detailsTop = style16(__spreadProps(__spreadValues({
  display: "flex",
  justifyContent: "space-between"
}, TYPO.CAPTION1B), {
  color: COLORS.NEUTRAL500
}));
var detailItem = style16({
  display: "flex",
  alignItems: "center",
  gap: "8px"
});
var detailLabel = style16(__spreadValues({}, TYPO.CAPTION1M));
var detailValue = style16(__spreadProps(__spreadValues({
  width: "100%",
  textAlign: "right"
}, TYPO.HEADLINE2), {
  color: COLORS.NEUTRAL800,
  fontWeight: "bold"
}));

// src/atoms/Dangle/DanglePlace/DanglePlace.tsx
function DanglePlace({
  thumbnailUrl,
  fallbackImageUrl,
  locationCategory: locationCategory3,
  name: name4,
  distance,
  playCount,
  bookmarkCount,
  isExpanded = false,
  tags: tags3 = [],
  details: details3,
  detailsBaseLabel = "Per day",
  detailsPriceUnit = "",
  onClick,
  isBookmarked = false,
  onBookmarkClick,
  icons = {}
}) {
  var _a, _b;
  const initialImageSrc = useMemo(() => {
    let decoded = thumbnailUrl;
    if (typeof thumbnailUrl === "string" && thumbnailUrl.includes("%")) {
      try {
        decoded = decodeURIComponent(thumbnailUrl);
      } catch (e) {
        decoded = null;
      }
    }
    if (typeof decoded === "string" && /^https?:\/\//i.test(decoded)) {
      return decoded;
    }
    return fallbackImageUrl != null ? fallbackImageUrl : null;
  }, [thumbnailUrl, fallbackImageUrl]);
  const [currentImageSrc, setCurrentImageSrc] = useState3(initialImageSrc);
  useEffect2(() => {
    setCurrentImageSrc(initialImageSrc);
  }, [initialImageSrc]);
  const handleImageError = () => {
    if (fallbackImageUrl) setCurrentImageSrc(fallbackImageUrl);
  };
  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    if (onBookmarkClick) {
      onBookmarkClick();
    }
  };
  return /* @__PURE__ */ React15.createElement("div", { className: root7[isExpanded ? "isExpanded" : "default"], onClick }, /* @__PURE__ */ React15.createElement("div", { className: headerContainer }, /* @__PURE__ */ React15.createElement("div", { className: thumbnailWrapper }, currentImageSrc && /* @__PURE__ */ React15.createElement(
    Image10,
    {
      src: currentImageSrc,
      alt: "\uC774\uBBF8\uC9C0",
      width: 80,
      height: 80,
      className: thumbnail,
      onError: handleImageError
    }
  )), /* @__PURE__ */ React15.createElement("div", { className: contentWrapper }, /* @__PURE__ */ React15.createElement("span", { className: locationCategory }, locationCategory3), /* @__PURE__ */ React15.createElement("h3", { className: name }, name4), /* @__PURE__ */ React15.createElement("div", { className: stats }, distance && /* @__PURE__ */ React15.createElement("span", { className: statValue }, distance, "km"), distance && (typeof playCount === "number" || typeof bookmarkCount === "number") && /* @__PURE__ */ React15.createElement("div", { className: statItem }, "\xB7"), typeof playCount === "number" && /* @__PURE__ */ React15.createElement("div", { className: statItem }, icons.play && /* @__PURE__ */ React15.createElement(Image10, { alt: "\uC7AC\uC0DD \uC218", width: 12, height: 12, src: icons.play }), /* @__PURE__ */ React15.createElement("span", { className: statValue }, playCount)), typeof playCount === "number" && typeof bookmarkCount === "number" && /* @__PURE__ */ React15.createElement("div", { className: statItem }, "\xB7"), typeof bookmarkCount === "number" && /* @__PURE__ */ React15.createElement("div", { className: statItem }, icons.bookmark && /* @__PURE__ */ React15.createElement(Image10, { alt: "\uBD81\uB9C8\uD06C", width: 12, height: 12, src: icons.bookmark }), /* @__PURE__ */ React15.createElement("span", { className: statValue }, bookmarkCount))), /* @__PURE__ */ React15.createElement("div", { className: tags }, tags3.map((tag5, index) => /* @__PURE__ */ React15.createElement("span", { key: `${tag5}-${index}`, className: tag }, tag5)))), onBookmarkClick && /* @__PURE__ */ React15.createElement("button", { className: bookmarkButton, onClick: handleBookmarkClick }, (icons.bookmarkFilled || icons.bookmarkLine) && /* @__PURE__ */ React15.createElement(
    Image10,
    {
      alt: "\uBD81\uB9C8\uD06C",
      width: 24,
      height: 24,
      src: isBookmarked ? (_a = icons.bookmarkFilled) != null ? _a : "" : (_b = icons.bookmarkLine) != null ? _b : ""
    }
  ))), isExpanded && /* @__PURE__ */ React15.createElement("div", { className: expandedContent }, details3 && /* @__PURE__ */ React15.createElement("div", { className: details }, /* @__PURE__ */ React15.createElement("div", { className: detailsTop }, /* @__PURE__ */ React15.createElement("div", null, detailsBaseLabel), /* @__PURE__ */ React15.createElement("div", { className: detailLabel }, details3.time)), /* @__PURE__ */ React15.createElement("div", { className: detailValue }, details3.price, detailsPriceUnit && /* @__PURE__ */ React15.createElement("span", { className: detailLabel }, detailsPriceUnit)))));
}

// src/atoms/Dangle/DanglePlay/DanglePlay.tsx
import React16 from "react";
import Image11 from "next/image";

// src/atoms/Dangle/DanglePlay/DanglePlay.css.ts
import { style as style17, styleVariants as styleVariants7 } from "@vanilla-extract/css";
var baseRoot = style17({
  position: "relative",
  border: "none",
  padding: "0",
  boxSizing: "border-box",
  cursor: "pointer",
  transition: "transform 0.2s",
  ":hover": { transform: "scale(1.02)" }
});
var root8 = styleVariants7({
  short: [
    baseRoot,
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "266px",
      overflow: "hidden",
      gap: 8
    }
  ],
  small: [
    baseRoot,
    {
      height: "225px",
      borderRadius: "15px",
      overflow: "hidden"
    }
  ],
  medium: [
    baseRoot,
    {
      height: "356px",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      borderRadius: "15px"
    }
  ]
});
var baseImageWrapper = style17({
  width: "100%",
  position: "relative",
  borderRadius: "15px",
  overflow: "hidden",
  flexShrink: 0
});
var imageWrapper3 = styleVariants7({
  short: [baseImageWrapper, { height: "242px" }],
  small: [baseImageWrapper, { height: "100%" }],
  medium: [baseImageWrapper, { height: "242px" }]
});
var image3 = style17({
  width: "100%",
  height: "100%",
  objectFit: "cover"
});
var profileOverlay = style17({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 25%)",
  padding: "12px",
  boxSizing: "border-box"
});
var profileContainer = style17({
  display: "flex",
  alignItems: "center",
  gap: "8px"
});
var profileImage2 = style17({
  objectFit: "cover",
  borderRadius: "50%",
  border: "1px solid #fff"
});
var name2 = style17(__spreadProps(__spreadValues({}, TYPO.LABEL2M), {
  color: "#fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}));
var content2 = style17({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  justifyContent: "space-between",
  flex: 1
});
var textInfo = style17({
  display: "flex",
  flexDirection: "column",
  gap: "4px"
});
var location = style17(__spreadProps(__spreadValues({}, TYPO.CAPTION1B), {
  color: COLORS.NEUTRAL700
}));
var address = style17(__spreadProps(__spreadValues({}, TYPO.CAPTION1B), {
  color: COLORS.NEUTRAL500
}));
var title5 = style17(__spreadProps(__spreadValues({}, TYPO.LABEL1B), {
  textAlign: "left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}));
var tagWrapper = style17({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  maxHeight: "40px",
  overflow: "hidden"
});
var tag2 = style17(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
  backgroundColor: COLORS.NEUTRAL100,
  borderRadius: "1px",
  padding: "2px 4px",
  color: COLORS.NEUTRAL500
}));
var stats2 = style17({
  display: "flex",
  alignItems: "center",
  gap: "4px"
});
var statItem2 = style17(__spreadProps(__spreadValues({
  display: "flex",
  alignItems: "center",
  gap: "4px"
}, TYPO.CAPTION1B), {
  color: "#888"
}));
var statValue2 = style17(__spreadValues({}, TYPO.CAPTION1M));
var timeAgo = style17(__spreadProps(__spreadValues({}, TYPO.CAPTION1M), {
  color: "#888"
}));

// src/atoms/Dangle/DanglePlay/DanglePlay.tsx
function DanglePlay({
  type,
  width = "100%",
  imageUrl,
  fallbackImageUrl,
  profileImageUrl,
  name: name4,
  location: location3,
  address: address2,
  title: title13,
  views: views2,
  comments,
  timeAgo: timeAgo3,
  tags: tags3,
  viewIconSrc,
  commentIconSrc,
  onClick
}) {
  const isSmall = type === "small";
  const isMedium = type === "medium";
  const isShort = type === "short";
  let imageWidth = 150;
  let imageHeight = 225;
  if (isMedium || isShort) {
    imageWidth = 162;
    imageHeight = 242;
  }
  const isValidImageUrl = typeof imageUrl === "string" && /^https?:\/\//i.test(imageUrl);
  const imageSrc = isValidImageUrl ? imageUrl : fallbackImageUrl != null ? fallbackImageUrl : null;
  return /* @__PURE__ */ React16.createElement("div", { className: root8[type], style: { width }, onClick }, /* @__PURE__ */ React16.createElement("div", { className: imageWrapper3[type] }, imageSrc && /* @__PURE__ */ React16.createElement(
    Image11,
    {
      src: imageSrc,
      alt: "\uC774\uBBF8\uC9C0",
      width: imageWidth,
      height: imageHeight,
      className: image3
    }
  ), !isShort && profileImageUrl && /* @__PURE__ */ React16.createElement("div", { className: profileOverlay }, /* @__PURE__ */ React16.createElement("div", { className: profileContainer }, /* @__PURE__ */ React16.createElement(
    Image11,
    {
      src: profileImageUrl,
      alt: name4 ? `${name4}\uC758 \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0` : "\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0",
      width: 22,
      height: 22,
      className: profileImage2
    }
  ), /* @__PURE__ */ React16.createElement("span", { className: name2 }, name4)))), isMedium && /* @__PURE__ */ React16.createElement("div", { className: content2 }, /* @__PURE__ */ React16.createElement("div", { className: textInfo }, /* @__PURE__ */ React16.createElement("div", { className: location }, location3, address2 && /* @__PURE__ */ React16.createElement(React16.Fragment, null, " \xB7 ", /* @__PURE__ */ React16.createElement("span", { className: address }, address2))), /* @__PURE__ */ React16.createElement("div", { className: title5 }, title13), /* @__PURE__ */ React16.createElement("div", { className: tagWrapper }, tags3 == null ? void 0 : tags3.map((tag5) => /* @__PURE__ */ React16.createElement("span", { key: tag5, className: tag2 }, tag5)))), views2 && /* @__PURE__ */ React16.createElement("div", { className: stats2 }, /* @__PURE__ */ React16.createElement("div", { className: statItem2 }, viewIconSrc && /* @__PURE__ */ React16.createElement(Image11, { src: viewIconSrc, alt: "\uC870\uD68C\uC218", width: 12, height: 12 }), /* @__PURE__ */ React16.createElement("span", { className: statValue2 }, views2 == null ? void 0 : views2.toLocaleString())), /* @__PURE__ */ React16.createElement("div", { className: statItem2 }, "\xB7"), /* @__PURE__ */ React16.createElement("div", { className: statItem2 }, commentIconSrc && /* @__PURE__ */ React16.createElement(Image11, { alt: "\uB313\uAE00", width: 12, height: 12, src: commentIconSrc }), /* @__PURE__ */ React16.createElement("span", { className: statValue2 }, comments == null ? void 0 : comments.toLocaleString())), /* @__PURE__ */ React16.createElement("div", { className: statItem2 }, "\xB7"), /* @__PURE__ */ React16.createElement("div", { className: timeAgo }, timeAgo3))), isShort && /* @__PURE__ */ React16.createElement("div", { className: content2 }, /* @__PURE__ */ React16.createElement("div", { className: location }, location3, address2 && /* @__PURE__ */ React16.createElement(React16.Fragment, null, " \xB7 ", /* @__PURE__ */ React16.createElement("span", { className: address }, address2)))));
}

// src/atoms/Dangle/DangleReview/DangleReview.tsx
import React17 from "react";
import Image12 from "next/image";

// src/atoms/Dangle/DangleReview/DangleReview.css.ts
import { style as style18 } from "@vanilla-extract/css";
var root9 = style18({
  backgroundColor: "#FAFAFA",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "16px",
  borderRadius: "12px"
});
var userInfo = style18({
  display: "flex",
  alignItems: "center",
  gap: "8px"
});
var placeInfo = style18({
  display: "flex",
  flexDirection: "column",
  gap: "2px"
});
var locationCategory2 = style18([TYPO.CAPTION2M, { color: COLORS.NEUTRAL500 }]);
var placeName = style18([TYPO.BODY2B, { color: "#262626" }]);
var profileImage3 = style18({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  objectFit: "cover"
});
var userInfoText = style18({
  display: "flex",
  flexDirection: "column"
});
var userName = style18(TYPO.LABEL1B);
var dogInfo = style18([TYPO.CAPTION2M, { color: COLORS.NEUTRAL500 }]);
var reviewHeader = style18({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});
var stars = style18({
  display: "flex"
});
var date = style18([TYPO.CAPTION1M, { color: COLORS.NEUTRAL400 }]);
var reviewDetails = style18({
  display: "flex",
  flexDirection: "column",
  gap: "8px"
});
var detailItem2 = style18({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});
var detailLabel2 = style18([TYPO.LABEL1M, { color: COLORS.NEUTRAL500 }]);
var detailValue2 = style18([
  TYPO.CAPTION2B,
  {
    backgroundColor: COLORS.GREEN50,
    color: COLORS.GREEN500,
    padding: "4px 8px",
    borderRadius: "6px",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px"
  }
]);
var reviewContent = style18([TYPO.BODY2M, { color: COLORS.NEUTRAL700 }]);

// src/atoms/Dangle/DangleReview/DangleReview.tsx
var RatingDisplay = ({
  rating,
  filledIconSrc,
  emptyIconSrc
}) => {
  return /* @__PURE__ */ React17.createElement("div", { className: stars }, [...Array(5)].map(
    (_, index) => filledIconSrc || emptyIconSrc ? /* @__PURE__ */ React17.createElement(
      Image12,
      {
        key: index,
        alt: index < rating ? "rating-filled" : "rating-empty",
        width: 16,
        height: 16,
        src: index < rating ? filledIconSrc != null ? filledIconSrc : "" : emptyIconSrc != null ? emptyIconSrc : ""
      }
    ) : /* @__PURE__ */ React17.createElement("span", { key: index }, index < rating ? "\u2605" : "\u2606")
  ));
};
function DangleReview({
  profileImageUrl,
  fallbackProfileImageUrl,
  userName: userName3,
  userSubInfo,
  locationCategory: locationCategory3,
  placeName: placeName2,
  isMine,
  rating,
  filledRatingIconSrc,
  emptyRatingIconSrc,
  date: date2,
  chips,
  chipLabels,
  content: content4,
  onClick
}) {
  const resolvedProfileSrc = profileImageUrl || fallbackProfileImageUrl;
  return /* @__PURE__ */ React17.createElement("div", { className: root9, onClick }, isMine ? /* @__PURE__ */ React17.createElement("div", { className: placeInfo }, /* @__PURE__ */ React17.createElement("span", { className: locationCategory2 }, locationCategory3), /* @__PURE__ */ React17.createElement("div", { className: placeName }, placeName2)) : /* @__PURE__ */ React17.createElement("div", { className: userInfo }, resolvedProfileSrc && /* @__PURE__ */ React17.createElement(
    Image12,
    {
      src: resolvedProfileSrc,
      alt: userName3 || "user",
      width: 24,
      height: 24,
      className: profileImage3
    }
  ), /* @__PURE__ */ React17.createElement("div", { className: userInfoText }, /* @__PURE__ */ React17.createElement("span", { className: userName }, userName3), userSubInfo && /* @__PURE__ */ React17.createElement("span", { className: dogInfo }, userSubInfo))), /* @__PURE__ */ React17.createElement("div", { className: reviewDetails }, /* @__PURE__ */ React17.createElement("div", { className: reviewHeader }, /* @__PURE__ */ React17.createElement(
    RatingDisplay,
    {
      rating,
      filledIconSrc: filledRatingIconSrc,
      emptyIconSrc: emptyRatingIconSrc
    }
  ), /* @__PURE__ */ React17.createElement("span", { className: date }, date2)), chips.map((chipValue, index) => {
    const label6 = chipLabels == null ? void 0 : chipLabels[index];
    if (!label6) return null;
    return /* @__PURE__ */ React17.createElement("div", { key: label6, className: detailItem2 }, /* @__PURE__ */ React17.createElement("span", { className: detailLabel2 }, label6), /* @__PURE__ */ React17.createElement("span", { className: detailValue2 }, chipValue));
  })), /* @__PURE__ */ React17.createElement("p", { className: reviewContent }, content4));
}

// src/atoms/Dangle/DangleVideo/DangleVideo.tsx
import React18 from "react";
import Image13 from "next/image";

// src/atoms/Dangle/DangleVideo/DangleVideo.css.ts
import { style as style19 } from "@vanilla-extract/css";
var root10 = style19({
  width: "100%",
  height: "90px",
  display: "flex",
  alignItems: "center",
  gap: "16px",
  border: "none",
  background: "#fff",
  boxSizing: "border-box",
  cursor: "pointer"
});
var thumbnailWrapper2 = style19({
  width: "70px",
  height: "90px",
  borderRadius: "6px",
  overflow: "hidden",
  flexShrink: 0
});
var thumbnail2 = style19({
  width: "100%",
  height: "100%",
  objectFit: "cover"
});
var contentWrapper2 = style19({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  minWidth: 0
});
var title6 = style19(__spreadProps(__spreadValues({}, TYPO.LABEL1M), {
  margin: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}));
var stats3 = style19({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: COLORS.NEUTRAL500
});
var statItem3 = style19({
  display: "flex",
  alignItems: "center",
  gap: "2px"
});
var statValue3 = style19(__spreadValues({}, TYPO.CAPTION1B));
var divider = style19(__spreadProps(__spreadValues({}, TYPO.CAPTION1B), {
  margin: "0 2px"
}));
var timeAgo2 = style19(__spreadValues({}, TYPO.CAPTION1M));
var playButtonWrapper = style19({
  width: "32px",
  height: "32px",
  flexShrink: "0"
});
var tagWrapper2 = style19({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  maxHeight: "40px",
  overflow: "hidden"
});
var tag3 = style19(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
  backgroundColor: COLORS.NEUTRAL100,
  borderRadius: "1px",
  padding: "2px 4px",
  color: COLORS.NEUTRAL500
}));

// src/atoms/Dangle/DangleVideo/DangleVideo.tsx
function DangleVideo({
  thumbnailUrl,
  title: title13,
  views: views2 = 0,
  comments = 0,
  timeAgo: timeAgo3,
  tags: tags3,
  onClick,
  viewIconSrc,
  commentIconSrc,
  playIconSrc
}) {
  return /* @__PURE__ */ React18.createElement("div", { className: root10, onClick }, /* @__PURE__ */ React18.createElement("div", { className: thumbnailWrapper2 }, /* @__PURE__ */ React18.createElement(
    Image13,
    {
      src: thumbnailUrl,
      alt: "\uBE44\uB514\uC624 \uC378\uB124\uC77C",
      width: 70,
      height: 90,
      className: thumbnail2
    }
  )), /* @__PURE__ */ React18.createElement("div", { className: contentWrapper2 }, /* @__PURE__ */ React18.createElement("h3", { className: title6 }, title13), tags3 && /* @__PURE__ */ React18.createElement("div", { className: tagWrapper2 }, tags3 == null ? void 0 : tags3.map((tag5) => /* @__PURE__ */ React18.createElement("span", { key: tag5, className: tag3 }, tag5))), /* @__PURE__ */ React18.createElement("div", { className: stats3 }, /* @__PURE__ */ React18.createElement("div", { className: statItem3 }, viewIconSrc && /* @__PURE__ */ React18.createElement(Image13, { src: viewIconSrc, alt: "\uC870\uD68C\uC218", width: 12, height: 12 }), /* @__PURE__ */ React18.createElement("span", { className: statValue3 }, views2.toLocaleString())), /* @__PURE__ */ React18.createElement("span", { className: divider }, "\xB7"), /* @__PURE__ */ React18.createElement("div", { className: statItem3 }, commentIconSrc && /* @__PURE__ */ React18.createElement(Image13, { alt: "\uB313\uAE00", width: 12, height: 12, src: commentIconSrc }), /* @__PURE__ */ React18.createElement("span", { className: statValue3 }, comments.toLocaleString())), timeAgo3 && /* @__PURE__ */ React18.createElement(React18.Fragment, null, /* @__PURE__ */ React18.createElement("span", { className: divider }, "\xB7"), /* @__PURE__ */ React18.createElement("span", { className: timeAgo2 }, timeAgo3)))), playIconSrc && /* @__PURE__ */ React18.createElement("div", { className: playButtonWrapper }, /* @__PURE__ */ React18.createElement(Image13, { src: playIconSrc, alt: "\uC7AC\uC0DD", width: 32, height: 32 })));
}

// src/atoms/Dropdown/Dropdown.tsx
import React19, { useState as useState4, useEffect as useEffect3, useRef as useRef2 } from "react";
import Image14 from "next/image";

// src/atoms/Dropdown/Dropdown.css.ts
import { style as style20 } from "@vanilla-extract/css";
var container4 = style20({
  position: "relative",
  width: "fit-content"
});
var button = style20(__spreadProps(__spreadValues({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: COLORS.NEUTRAL50
}, TYPO.BODY1B), {
  padding: "8px 0"
}));
var chevronIcon = style20({
  filter: "brightness(0) invert(1)",
  transition: "transform 0.2s ease-in-out"
});
var chevronIconUp = style20({
  transform: "rotate(180deg)"
});
var list = style20({
  position: "absolute",
  top: "calc(100% + 8px)",
  left: "0",
  background: "rgba(29, 29, 31, 0.8)",
  backdropFilter: "blur(10px)",
  borderRadius: "8px",
  listStyle: "none",
  padding: "8px",
  margin: "0",
  width: "max-content",
  minWidth: "100%",
  color: COLORS.NEUTRAL50,
  zIndex: 100,
  border: `1px solid ${COLORS.NEUTRAL700}`
});
var listItem = style20(__spreadProps(__spreadValues({
  padding: "10px 12px",
  cursor: "pointer",
  borderRadius: "4px"
}, TYPO.BODY2M), {
  transition: "background-color 0.1s ease-in-out",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  }
}));

// src/atoms/Dropdown/Dropdown.tsx
function Dropdown({
  options,
  selectedValue,
  onSelect,
  placeholder = "\uC635\uC158\uC744 \uC120\uD0DD\uD558\uC138\uC694"
}) {
  var _a;
  const [isOpen, setIsOpen] = useState4(false);
  const dropdownRef = useRef2(null);
  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };
  useEffect3(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const selectedLabel = ((_a = options.find((opt) => opt.value === selectedValue)) == null ? void 0 : _a.label) || placeholder;
  return /* @__PURE__ */ React19.createElement("div", { className: container4, ref: dropdownRef }, /* @__PURE__ */ React19.createElement(
    "button",
    {
      className: button,
      onClick: () => setIsOpen((prev) => !prev),
      "aria-haspopup": "listbox",
      "aria-expanded": isOpen
    },
    /* @__PURE__ */ React19.createElement("span", null, selectedLabel),
    /* @__PURE__ */ React19.createElement(
      Image14,
      {
        src: "/assets/icon24/chevron-down.svg",
        alt: "\uB4DC\uB86D\uB2E4\uC6B4 \uD1A0\uAE00",
        width: 24,
        height: 24,
        className: `${chevronIcon} ${isOpen ? chevronIconUp : ""}`
      }
    )
  ), isOpen && /* @__PURE__ */ React19.createElement("ul", { className: list, role: "listbox" }, options.map((option) => /* @__PURE__ */ React19.createElement(
    "li",
    {
      key: option.value,
      className: listItem,
      onClick: () => handleSelect(option.value),
      role: "option",
      "aria-selected": selectedValue === option.value
    },
    option.label
  ))));
}

// src/atoms/EmptyState/EmptyState.tsx
import React20 from "react";
import Image15 from "next/image";

// src/atoms/EmptyState/EmptyState.css.ts
import { style as style21 } from "@vanilla-extract/css";
var root11 = style21({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "100%",
  gap: "4px"
});
var imageWrapper4 = style21({});
var image4 = style21({
  objectFit: "contain"
});
var title7 = style21(__spreadProps(__spreadValues({}, TYPO.LABEL1B), {
  color: COLORS.NEUTRAL600
}));
var description = style21(__spreadProps(__spreadValues({}, TYPO.LABEL2M), {
  color: COLORS.NEUTRAL500
}));

// src/atoms/EmptyState/EmptyState.tsx
function EmptyState({
  imageUrl,
  title: title13 = "\uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
  description: description4 = "\uC870\uAC74\uC744 \uBCC0\uACBD\uD558\uAC70\uB098 \uB2E4\uB978 \uAC80\uC0C9\uC5B4\uB85C \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uBCF4\uC138\uC694."
}) {
  return /* @__PURE__ */ React20.createElement("div", { className: root11 }, imageUrl && /* @__PURE__ */ React20.createElement("div", { className: imageWrapper4 }, /* @__PURE__ */ React20.createElement(Image15, { src: imageUrl, alt: "empty", width: 160, height: 160, className: image4 })), /* @__PURE__ */ React20.createElement("h3", { className: title7 }, title13), /* @__PURE__ */ React20.createElement("p", { className: description }, description4));
}

// src/atoms/Fab/Fab.tsx
import React21 from "react";
import Image16 from "next/image";

// src/atoms/Fab/Fab.css.ts
import { style as style22 } from "@vanilla-extract/css";
var root12 = style22({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "transparent",
  padding: 0,
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  transition: "transform 0.2s",
  ":active": {
    transform: "scale(0.95)"
  }
});

// src/atoms/Fab/Fab.tsx
function Fab({ imageSrc, imageAlt = "", onClick, className }) {
  const combinedClassName = [root12, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ React21.createElement("button", { className: combinedClassName, onClick }, imageSrc && /* @__PURE__ */ React21.createElement(Image16, { src: imageSrc, alt: imageAlt, width: 60, height: 60 }));
}

// src/atoms/FilterChip/FilterChip.tsx
import React22 from "react";
import Image17 from "next/image";

// src/atoms/FilterChip/FilterChip.css.ts
import { style as style23, styleVariants as styleVariants8 } from "@vanilla-extract/css";
var baseChip2 = style23({
  display: "inline-flex",
  alignItems: "center",
  height: "32px",
  padding: "8px 12px",
  gap: "4px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  whiteSpace: "nowrap"
});
var chip2 = styleVariants8({
  selected: [
    baseChip2,
    {
      backgroundColor: "#1C2025",
      color: "#fff"
    }
  ],
  default: [
    baseChip2,
    {
      backgroundColor: "#f0f0f4",
      color: "#404040"
    }
  ]
});
var text2 = styleVariants8({
  selected: {
    color: "#fff"
  },
  default: {
    color: "#404040"
  }
});
var icon2 = styleVariants8({
  selected: {
    filter: "brightness(0) invert(1)"
  },
  default: {
    filter: "none"
  }
});

// src/atoms/FilterChip/FilterChip.tsx
function FilterChip({ text: text3, iconUrl, selected = false, onClick }) {
  return /* @__PURE__ */ React22.createElement("button", { className: chip2[selected ? "selected" : "default"], onClick, role: "button" }, iconUrl && /* @__PURE__ */ React22.createElement("div", { className: icon2[selected ? "selected" : "default"] }, /* @__PURE__ */ React22.createElement(Image17, { src: iconUrl, alt: "", width: 16, height: 16 })), /* @__PURE__ */ React22.createElement("span", { className: text2[selected ? "selected" : "default"] }, text3));
}

// src/atoms/FilterChipExpand/FilterChipExpand.tsx
import React23 from "react";

// src/atoms/FilterChipExpand/FilterChipExpand.css.ts
import { style as style24, styleVariants as styleVariants9 } from "@vanilla-extract/css";
var baseChip3 = style24(__spreadProps(__spreadValues({}, TYPO.LABEL1M), {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 12px",
  borderRadius: "12px",
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  cursor: "pointer",
  whiteSpace: "nowrap"
}));
var root13 = styleVariants9({
  selected: [
    baseChip3,
    {
      borderColor: COLORS.GREEN600,
      backgroundColor: COLORS.GREEN600,
      color: "#fff"
    }
  ],
  default: [
    baseChip3,
    {
      borderColor: COLORS.NEUTRAL200,
      backgroundColor: "#fff",
      color: "#262626"
    }
  ]
});
var textWrapper = style24({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2px"
});
var title8 = style24({
  fontWeight: "bold"
});
var caption = style24(__spreadProps(__spreadValues({}, TYPO.CAPTION1M), {
  selectors: {
    [`${root13.selected} &`]: {
      color: "#fff"
    },
    [`${root13.default} &`]: {
      color: COLORS.NEUTRAL500
    }
  }
}));

// src/atoms/FilterChipExpand/FilterChipExpand.tsx
function FilterChipExpand({
  title: title13,
  caption: caption2,
  selected = false,
  onClick
}) {
  return /* @__PURE__ */ React23.createElement("button", { className: root13[selected ? "selected" : "default"], onClick, role: "button" }, /* @__PURE__ */ React23.createElement("div", { className: textWrapper }, /* @__PURE__ */ React23.createElement("span", { className: title8 }, title13), caption2 && /* @__PURE__ */ React23.createElement("span", { className: caption }, caption2)));
}

// src/atoms/Header/Header.tsx
import React24 from "react";

// src/atoms/Header/Header.css.ts
import { style as style25 } from "@vanilla-extract/css";
var root14 = style25({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "16px 18px"
});
var titleWrapper = style25({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%"
});
var title9 = style25(__spreadProps(__spreadValues({}, TYPO.HEADLINE1), {
  margin: 0,
  color: "#262626"
}));
var desc2 = style25({
  fontSize: "16px",
  fontWeight: 500,
  color: "#1F2329",
  margin: 0,
  paddingTop: "8px"
});
var iconButton = style25({
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  flexShrink: 0
});

// src/atoms/Header/Header.tsx
import Image18 from "next/image";
function Header({ title: title13, desc: desc4, onArrowClick, onReClick, marginTop }) {
  const hasRightIcon = onArrowClick || onReClick;
  return /* @__PURE__ */ React24.createElement("div", { className: root14, style: { marginTop } }, /* @__PURE__ */ React24.createElement("div", { className: titleWrapper }, /* @__PURE__ */ React24.createElement("h2", { className: title9 }, title13), hasRightIcon && /* @__PURE__ */ React24.createElement(
    "button",
    {
      className: iconButton,
      onClick: onArrowClick || onReClick,
      "aria-label": onArrowClick ? "\uB354\uBCF4\uAE30" : "\uC0C8\uB85C\uACE0\uCE68"
    },
    /* @__PURE__ */ React24.createElement(
      Image18,
      {
        src: onArrowClick ? "/assets/icon24/chevron-right.svg" : "/assets/icon24/rotate-cw.svg",
        alt: onArrowClick ? "\uD654\uC0B4\uD45C \uC544\uC774\uCF58" : "\uC0C8\uB85C\uACE0\uCE68 \uC544\uC774\uCF58",
        width: 24,
        height: 24
      }
    )
  )), desc4 && /* @__PURE__ */ React24.createElement("p", { className: desc2 }, desc4));
}

// src/atoms/LoadingSpinner/style.css.ts
import { style as style26 } from "@vanilla-extract/css";
var overlay3 = style26({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1e3
});
var spinner = style26({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
});

// src/atoms/LoadingSpinner/LoadingSpinner.tsx
var LoadingSpinner = () => {
  return /* @__PURE__ */ React.createElement("div", { className: overlay3 }, /* @__PURE__ */ React.createElement("div", { className: spinner }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: "40",
      height: "40",
      viewBox: "0 0 50 50",
      xmlns: "http://www.w3.org/2000/svg",
      stroke: "#00A63E"
    },
    /* @__PURE__ */ React.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ React.createElement("g", { transform: "translate(1 1)", strokeWidth: "4" }, /* @__PURE__ */ React.createElement("circle", { strokeOpacity: ".5", cx: "24", cy: "24", r: "22" }), /* @__PURE__ */ React.createElement("path", { d: "M46 24c0-12.15-9.85-22-22-22" }, /* @__PURE__ */ React.createElement(
      "animateTransform",
      {
        attributeName: "transform",
        type: "rotate",
        from: "0 24 24",
        to: "360 24 24",
        dur: "1s",
        repeatCount: "indefinite"
      }
    ))))
  )));
};

// src/atoms/Modal/Modal.tsx
import React25 from "react";
import Image19 from "next/image";

// src/atoms/Modal/Modal.css.ts
import { style as style27 } from "@vanilla-extract/css";
var overlay4 = style27({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999
});
var modalContainer = style27({
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "24px",
  width: "calc(100% - 48px)",
  maxWidth: "400px",
  maxHeight: "80vh",
  overflowY: "auto",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column"
});
var modalHeader = style27({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px"
});
var modalTitle = style27(__spreadProps(__spreadValues({}, TYPO.HEADING2), {
  margin: 0,
  flexGrow: 1
}));
var closeButton2 = style27({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "16px"
});
var modalContent = style27({
  flexGrow: 1
});

// src/atoms/Modal/Modal.tsx
function Modal({ isOpen, onClose, children, title: title13 }) {
  if (!isOpen) {
    return null;
  }
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return /* @__PURE__ */ React25.createElement("div", { className: overlay4, onClick: handleBackdropClick }, /* @__PURE__ */ React25.createElement("div", { className: modalContainer }, /* @__PURE__ */ React25.createElement("div", { className: modalHeader }, title13 && /* @__PURE__ */ React25.createElement("h2", { className: modalTitle }, title13), /* @__PURE__ */ React25.createElement("button", { className: closeButton2, onClick: onClose, "aria-label": "\uB2EB\uAE30" }, /* @__PURE__ */ React25.createElement(Image19, { src: "/assets/icon24/x_line.svg", alt: "\uB2EB\uAE30", width: 24, height: 24 }))), /* @__PURE__ */ React25.createElement("div", { className: modalContent }, children)));
}

// src/atoms/NavBar/NavBar.tsx
import React26 from "react";
import Image20 from "next/image";

// src/atoms/NavBar/NavBar.css.ts
import { style as style28 } from "@vanilla-extract/css";
var root15 = style28({
  width: "100%",
  height: "56px",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
});
var navItem = style28({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2px",
  background: "none",
  border: "none",
  cursor: "pointer"
});
var bottomNavTextBase = style28(__spreadValues({}, TYPO.CAPTION2M));
var navText = style28([bottomNavTextBase, { color: COLORS.NEUTRAL400 }]);
var navTextSelected = style28([bottomNavTextBase, { color: "#262626" }]);

// src/atoms/NavBar/NavBar.tsx
function NavBar({ activeId, items, onNavigate }) {
  return /* @__PURE__ */ React26.createElement("nav", { className: root15 }, items.map((item) => /* @__PURE__ */ React26.createElement("button", { key: item.id, className: navItem, onClick: () => onNavigate(item.path) }, /* @__PURE__ */ React26.createElement(
    Image20,
    {
      src: activeId === item.id ? item.activeIconSrc : item.inactiveIconSrc,
      alt: item.text,
      width: 24,
      height: 24
    }
  ), /* @__PURE__ */ React26.createElement("span", { className: activeId === item.id ? navTextSelected : navText }, item.text))));
}

// src/atoms/NoticeBox/NoticeBox.tsx
import React27 from "react";

// src/atoms/NoticeBox/NoticeBox.css.ts
import { style as style29, keyframes as keyframes2 } from "@vanilla-extract/css";
var YELLOW_COLORS = {
  background: "#FEFCE8",
  text: "#D08700"
};
var BLUE_COLORS = {
  background: "#EFF6FF",
  text: "#525252"
};
var slideDown = keyframes2({
  "0%": { opacity: 0, transform: "translateY(-10px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideUp = keyframes2({
  "0%": { opacity: 1, transform: "translateY(0)" },
  "100%": { opacity: 0, transform: "translateY(-10px)" }
});
var animateIn = style29({
  animation: `${slideDown} 0.4s ease-out`
});
var animateOut = style29({
  animation: `${slideUp} 0.4s ease-out forwards`
});
var container5 = style29({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  padding: "12px",
  borderRadius: "16px"
});
var iconWrapper = style29({
  flexShrink: 0,
  width: "20px",
  height: "20px",
  marginTop: "1px"
});
var content3 = style29(__spreadProps(__spreadValues({
  flexGrow: 1
}, TYPO.CAPTION1M), {
  margin: 0
}));
var closeButton3 = style29({
  flexShrink: 0,
  width: "20px",
  height: "20px",
  padding: 0,
  background: "transparent",
  border: "none",
  cursor: "pointer",
  marginTop: "1px"
});
var yellowTheme = style29({
  backgroundColor: YELLOW_COLORS.background,
  color: YELLOW_COLORS.text
});
var blueTheme = style29({
  backgroundColor: BLUE_COLORS.background,
  color: BLUE_COLORS.text
});

// src/atoms/NoticeBox/NoticeBox.tsx
import Image21 from "next/image";
var NoticeBox = ({
  shouldRender,
  animation,
  onClose,
  children,
  variant = "yellow"
}) => {
  if (!shouldRender) {
    return null;
  }
  const animationClass = animation === "in" ? animateIn : animation === "out" ? animateOut : "";
  const themeClass = variant === "blue" ? blueTheme : yellowTheme;
  const emphasisIconSrc = variant === "blue" ? "/assets/icon16/circle-emphasis_line_blue.svg" : "/assets/icon16/circle-emphasis_line_yellow.svg";
  const closeIconSrc = variant === "blue" ? "/assets/icon16/x_line.svg" : "/assets/icon16/x_line_yellow.svg";
  return /* @__PURE__ */ React27.createElement("div", { className: `${container5} ${themeClass} ${animationClass}`, role: "alert" }, /* @__PURE__ */ React27.createElement("div", { className: iconWrapper }, /* @__PURE__ */ React27.createElement(Image21, { src: emphasisIconSrc, alt: "icon", width: 16, height: 16 })), /* @__PURE__ */ React27.createElement("p", { className: content3 }, children), /* @__PURE__ */ React27.createElement("button", { type: "button", className: closeButton3, onClick: onClose, "aria-label": "\uC54C\uB9BC \uB2EB\uAE30" }, /* @__PURE__ */ React27.createElement(Image21, { src: closeIconSrc, alt: "close icon", width: 16, height: 16 })));
};

// src/atoms/Pagination/Pagination.tsx
import React28 from "react";

// src/atoms/Pagination/Pagination.css.ts
import { style as style30 } from "@vanilla-extract/css";
var root16 = style30({
  display: "flex",
  alignItems: "center",
  gap: "4px"
});
var page = style30({
  cursor: "pointer",
  backgroundColor: "#ccc",
  border: "none",
  borderRadius: "50%",
  width: "8px",
  height: "8px",
  padding: 0
});
var active = style30({
  backgroundColor: "#000"
});

// src/atoms/Pagination/Pagination.tsx
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return /* @__PURE__ */ React28.createElement("nav", { className: root16, "aria-label": "\uD398\uC774\uC9C0\uB124\uC774\uC158" }, pages.map((page2) => /* @__PURE__ */ React28.createElement(
    "button",
    {
      key: page2,
      className: `${page} ${currentPage === page2 ? active : ""}`,
      onClick: () => onPageChange(page2),
      "aria-current": currentPage === page2 ? "page" : void 0
    }
  )));
}

// src/atoms/ProfileCard/ProfileCard.tsx
import React29 from "react";
import Image22 from "next/image";

// src/atoms/ProfileCard/style.css.ts
import { style as style31 } from "@vanilla-extract/css";
var container6 = style31({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "16px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxSizing: "border-box",
  border: "1px solid #E5E5E5"
});
var profileInfo = style31({
  display: "flex",
  alignItems: "center",
  gap: "12px"
});
var avatar = style31({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  objectFit: "cover"
});
var textInfo2 = style31({
  display: "flex",
  flexDirection: "column",
  gap: "2px"
});
var nameLine = style31({
  display: "flex",
  alignItems: "center",
  gap: "4px"
});
var name3 = style31(__spreadProps(__spreadValues({}, TYPO.BODY1B), {
  color: COLORS.NEUTRAL900
}));
var description2 = style31(__spreadProps(__spreadValues({}, TYPO.BODY2M), {
  color: COLORS.NEUTRAL700
}));
var details2 = style31(__spreadProps(__spreadValues({}, TYPO.CAPTION1M), {
  color: COLORS.NEUTRAL500
}));
var editButton = style31({
  background: "#F5F5F5",
  border: "none",
  borderRadius: "50px",
  padding: "16px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

// src/atoms/ProfileCard/ProfileCard.tsx
var ProfileCard = ({
  imageUrl,
  name: name4,
  description: description4,
  details: details3,
  onEditClick,
  className
}) => {
  return /* @__PURE__ */ React29.createElement("div", { className: `${container6} ${className}` }, /* @__PURE__ */ React29.createElement("div", { className: profileInfo }, /* @__PURE__ */ React29.createElement(Image22, { src: imageUrl, alt: name4, width: 48, height: 48, className: avatar }), /* @__PURE__ */ React29.createElement("div", { className: textInfo2 }, /* @__PURE__ */ React29.createElement("div", { className: nameLine }, /* @__PURE__ */ React29.createElement("span", { className: name3 }, name4), /* @__PURE__ */ React29.createElement("span", { className: description2 }, description4)), /* @__PURE__ */ React29.createElement("span", { className: details2 }, details3))), /* @__PURE__ */ React29.createElement("button", { className: editButton, onClick: onEditClick }, /* @__PURE__ */ React29.createElement(Image22, { src: "/assets/icon16/pencil_line.svg", alt: "\uC218\uC815", width: 16, height: 16 })));
};

// src/atoms/ProgressCircle/ProgressCircle.tsx
import React30 from "react";

// src/atoms/ProgressCircle/style.css.ts
import { style as style32, keyframes as keyframes3 } from "@vanilla-extract/css";
var fillAnim = keyframes3({
  "0%": { strokeDashoffset: 63 },
  "100%": { strokeDashoffset: 0 }
});
var circleBase = style32({
  transform: "rotate(-90deg)",
  overflow: "visible"
});
var progressRing = style32({
  transition: "stroke-dashoffset 0.4s ease"
});
var active2 = style32({
  animation: `${fillAnim} 0.4s ease forwards`
});

// src/atoms/ProgressCircle/ProgressCircle.tsx
function ProgressCircle({
  size: size2 = 24,
  color = "#00A63E",
  progress = 0,
  active: active4 = false,
  className = ""
}) {
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;
  return /* @__PURE__ */ React30.createElement("svg", { className: `${circleBase} ${className}`, width: size2, height: size2, viewBox: "0 0 24 24" }, /* @__PURE__ */ React30.createElement("circle", { cx: "12", cy: "12", r: radius, stroke: "#E0E0E0", strokeWidth: "3", fill: "none" }), /* @__PURE__ */ React30.createElement(
    "circle",
    {
      className: `${progressRing} ${active4 ? active2 : ""}`,
      cx: "12",
      cy: "12",
      r: radius,
      stroke: color,
      strokeWidth: "4",
      fill: "none",
      strokeLinecap: "round",
      strokeDasharray: circumference,
      strokeDashoffset: offset
    }
  ));
}

// src/atoms/RadioGroup/RadioGroup.tsx
import React31 from "react";

// src/atoms/RadioGroup/style.css.ts
import { style as style33, globalStyle } from "@vanilla-extract/css";
var fieldset = style33({
  border: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "12px"
});
var legend = style33(__spreadProps(__spreadValues({}, TYPO.BODY1B), {
  color: "#000",
  padding: "20px 0px",
  width: "100%"
}));
var optionsContainer = style33({
  display: "flex",
  flexDirection: "column",
  gap: "16px"
});
var label3 = style33({
  display: "flex",
  alignItems: "center",
  cursor: "pointer"
});
var radioInput = style33({
  position: "absolute",
  opacity: 0,
  width: 0,
  height: 0
});
var radioVisual = style33({
  width: "18px",
  height: "18px",
  borderRadius: "50%",
  border: `2px solid ${COLORS.NEUTRAL300}`,
  marginRight: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "border-color 0.2s ease, background-color 0.2s ease",
  selectors: {
    [`${radioInput}:checked + &`]: {
      borderColor: COLORS.GREEN500,
      backgroundColor: COLORS.GREEN500
    },
    [`${label3}:hover &`]: {
      borderColor: COLORS.GREEN500
    }
  }
});
globalStyle(`${radioInput}:checked + ${radioVisual}::after`, {
  content: '""',
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "white"
});
var labelText = style33(__spreadProps(__spreadValues({}, TYPO.LABEL1M), {
  color: COLORS.NEUTRAL700
}));

// src/atoms/RadioGroup/RadioGroup.tsx
function RadioGroup({
  label: label6,
  options,
  selectedValue,
  onSelect,
  disabled = false
}) {
  return /* @__PURE__ */ React31.createElement("fieldset", { className: fieldset, disabled }, /* @__PURE__ */ React31.createElement("legend", { className: legend }, label6), /* @__PURE__ */ React31.createElement("div", { className: optionsContainer }, options.map((option) => /* @__PURE__ */ React31.createElement("label", { key: option.value, className: label3 }, /* @__PURE__ */ React31.createElement(
    "input",
    {
      type: "radio",
      name: label6,
      value: option.value,
      checked: selectedValue === option.value,
      onChange: () => onSelect(option.value),
      className: radioInput
    }
  ), /* @__PURE__ */ React31.createElement("span", { className: radioVisual }), /* @__PURE__ */ React31.createElement("span", { className: labelText }, option.label)))));
}

// src/atoms/SearchField/SearchField.tsx
import React32, { useId, useMemo as useMemo2, useState as useState5, forwardRef } from "react";
import Image23 from "next/image";

// src/atoms/SearchField/SearchField.css.ts
import { style as style34, styleVariants as styleVariants10, keyframes as keyframes4 } from "@vanilla-extract/css";
var rotateAnimation = keyframes4({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" }
});
var wrapper5 = style34({
  width: "100%"
});
var field = style34({
  display: "flex",
  alignItems: "center",
  borderRadius: "99px",
  padding: "11px 16px",
  background: COLORS.NEUTRAL0,
  boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL200}`,
  transition: "box-shadow .12s ease, background-color .12s ease",
  gap: "8px"
});
var state3 = styleVariants10({
  default: {},
  focused: { boxShadow: `inset 0 0 0 1.5px ${COLORS.GREEN600}` },
  typing: { boxShadow: `inset 0 0 0 1.5px ${COLORS.GREEN600}` },
  pressed: {
    background: COLORS.NEUTRAL50,
    boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL200}`
  },
  filled: {},
  error: {
    boxShadow: `inset 0 0 0 1.5px #E5484D`,
    background: "#FFF5F5"
  },
  disabled: {
    background: COLORS.NEUTRAL50,
    boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL200}`,
    opacity: 0.6
  }
});
var icon3 = style34({
  width: "16px",
  height: "16px",
  flexShrink: 0
});
var rotate = style34({
  animation: `${rotateAnimation} 1s linear infinite`
});
var input2 = style34(__spreadProps(__spreadValues({
  flex: 1,
  width: "100%",
  border: "none",
  outline: "none",
  background: "transparent"
}, TYPO.LABEL1M), {
  selectors: {
    "&::placeholder": {
      color: COLORS.NEUTRAL400
    },
    "&:disabled": {
      color: COLORS.NEUTRAL400
    }
  }
}));
var clearButton = style34({
  background: "none",
  border: "none",
  padding: "0",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
});
var errorMessage = style34(__spreadProps(__spreadValues({}, TYPO.CAPTION1M), {
  color: "#E5484D",
  marginTop: "4px",
  paddingLeft: "12px"
}));

// src/atoms/SearchField/SearchField.tsx
var SearchField = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      placeholder = "placeholder",
      value,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      disabled,
      onClear,
      error,
      loading,
      className,
      id
    } = _b, rest = __objRest(_b, [
      "placeholder",
      "value",
      "defaultValue",
      "onChange",
      "onBlur",
      "onFocus",
      "disabled",
      "onClear",
      "error",
      "loading",
      "className",
      "id"
    ]);
    const generatedId = useId();
    const inputId = id != null ? id : generatedId;
    const isControlled = value != null;
    const [inner, setInner] = useState5(defaultValue != null ? defaultValue : "");
    const currentValue = isControlled ? String(value) : String(inner);
    const [focused, setFocused] = useState5(false);
    const [pressed, setPressed] = useState5(false);
    const [isTyping, setIsTyping] = useState5(false);
    const filled = currentValue.trim().length > 0;
    const isDisabled = Boolean(disabled);
    const stateClass = useMemo2(() => {
      const stateKey = isDisabled ? "disabled" : error ? "error" : isTyping ? "typing" : focused ? "focused" : pressed ? "pressed" : filled ? "filled" : "default";
      return state3[stateKey];
    }, [focused, pressed, filled, isDisabled, isTyping, error]);
    const handleChange = (e) => {
      if (!isControlled) {
        setInner(e.target.value);
      }
      onChange == null ? void 0 : onChange(e);
      setIsTyping(e.target.value.length > 0);
    };
    const handleFocus = (e) => {
      setFocused(true);
      onFocus == null ? void 0 : onFocus(e);
    };
    const handleBlur = (e) => {
      setFocused(false);
      onBlur == null ? void 0 : onBlur(e);
    };
    const handleClear = () => {
      if (!isControlled) setInner("");
      onClear == null ? void 0 : onClear();
    };
    return /* @__PURE__ */ React32.createElement("div", { className: [wrapper5, className].filter(Boolean).join(" ") }, /* @__PURE__ */ React32.createElement("div", { className: [field, stateClass].join(" "), "aria-disabled": isDisabled || void 0 }, /* @__PURE__ */ React32.createElement(
      Image23,
      {
        src: loading ? "/assets/icon16/loading.svg" : "/assets/icon16/search_line.svg",
        alt: "\uAC80\uC0C9",
        width: 16,
        height: 16,
        className: [icon3, loading && rotate].filter(Boolean).join(" ")
      }
    ), /* @__PURE__ */ React32.createElement(
      "input",
      __spreadValues({
        ref,
        id: inputId,
        className: input2,
        type: "text",
        placeholder,
        value: currentValue,
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onMouseDown: () => setPressed(true),
        onMouseUp: () => setPressed(false),
        onKeyDown: () => setPressed(true),
        onKeyUp: () => setPressed(false),
        disabled: isDisabled
      }, rest)
    ), filled && !disabled && !loading && /* @__PURE__ */ React32.createElement("button", { className: clearButton, onClick: handleClear, type: "button" }, /* @__PURE__ */ React32.createElement(Image23, { src: "/assets/icon16/x-circle.svg", alt: "\uC9C0\uC6B0\uAE30", width: 16, height: 16 }))), error && /* @__PURE__ */ React32.createElement("p", { className: errorMessage }, error));
  }
);
SearchField.displayName = "SearchField";

// src/atoms/SegmentedControl/SegmentedControl.tsx
import React33, { useState as useState6, useRef as useRef3, useEffect as useEffect4 } from "react";

// src/atoms/SegmentedControl/style.css.ts
import { style as style35 } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
var container7 = style35({
  position: "relative",
  display: "flex",
  width: "100%",
  backgroundColor: "#F4F4F4",
  borderRadius: "30px",
  padding: "4px"
});
var optionButton = recipe({
  base: __spreadProps(__spreadValues({}, TYPO.LABEL1M), {
    padding: "10px 16px",
    flex: "1",
    textAlign: "center",
    border: "none",
    background: "none",
    color: "#A1A1A1",
    cursor: "pointer",
    transition: "color 0.3s ease",
    position: "relative",
    zIndex: 1,
    whiteSpace: "nowrap"
  }),
  variants: {
    active: {
      true: {
        color: "#000000"
      }
    }
  }
});
var activeIndicator = style35({
  flex: "1",
  position: "absolute",
  top: "4px",
  bottom: "4px",
  backgroundColor: COLORS.NEUTRAL0,
  borderRadius: "30px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
  transition: "left 0.3s ease, width 0.3s ease",
  zIndex: 0
});

// src/atoms/SegmentedControl/SegmentedControl.tsx
var SegmentedControl = ({
  options,
  activeOption,
  onSelect,
  className
}) => {
  const [indicatorStyle, setIndicatorStyle] = useState6({});
  const containerRef = useRef3(null);
  const optionRefs = useRef3([]);
  useEffect4(() => {
    const activeIndex = options.findIndex((option) => option.id === activeOption);
    const activeOptionElement = optionRefs.current[activeIndex];
    if (activeOptionElement) {
      const { offsetLeft, clientWidth } = activeOptionElement;
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${clientWidth}px`
      });
    }
  }, [activeOption, options, typeof window !== "undefined" ? window.innerWidth : 0]);
  return /* @__PURE__ */ React33.createElement("div", { ref: containerRef, className: `${container7} ${className}` }, /* @__PURE__ */ React33.createElement("div", { className: activeIndicator, style: indicatorStyle }), options.map((option, index) => /* @__PURE__ */ React33.createElement(
    "button",
    {
      key: option.id,
      ref: (el) => {
        optionRefs.current[index] = el;
      },
      className: optionButton({ active: activeOption === option.id }),
      onClick: () => onSelect(option.id)
    },
    option.label
  )));
};

// src/atoms/SelectField/SelectField.tsx
import React34, { useId as useId2, useMemo as useMemo3 } from "react";

// src/atoms/SelectField/SelectField.css.ts
import { style as style36, styleVariants as styleVariants11 } from "@vanilla-extract/css";
var root17 = style36({
  display: "flex",
  flexDirection: "column",
  width: "100%"
});
var label4 = style36(__spreadProps(__spreadValues({}, TYPO.LABEL1B), {
  color: COLORS.NEUTRAL600,
  marginBottom: "8px"
}));
var fieldBase = style36({
  height: "56px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "12px",
  padding: "0 16px",
  border: "none",
  width: "100%",
  textAlign: "left",
  cursor: "pointer",
  transition: "box-shadow .12s ease, background-color .12s ease"
});
var fieldState = styleVariants11({
  default: {
    background: COLORS.NEUTRAL0,
    boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL300}`
  },
  filled: {
    background: COLORS.NEUTRAL50,
    boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL200}`
  },
  disabled: {
    background: COLORS.NEUTRAL200,
    boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL300}`,
    cursor: "not-allowed"
  }
});
var valueText = style36(__spreadProps(__spreadValues({}, TYPO.BODY1M), {
  color: COLORS.NEUTRAL800
}));
var placeholderText = style36(__spreadProps(__spreadValues({}, TYPO.BODY1M), {
  color: COLORS.NEUTRAL400
}));

// src/atoms/SelectField/SelectField.tsx
import Image24 from "next/image";
function SelectField({
  label: label6,
  placeholder = "\uC120\uD0DD\uD574\uC8FC\uC138\uC694",
  value,
  disabled,
  onClick,
  className,
  id
}) {
  const generatedId = useId2();
  const fieldId = id != null ? id : generatedId;
  const hasValue = value != null && value.trim().length > 0;
  const isDisabled = Boolean(disabled);
  const fieldClass = useMemo3(() => {
    const stateClass = isDisabled ? fieldState.disabled : hasValue ? fieldState.filled : fieldState.default;
    return [fieldBase, stateClass, className].filter(Boolean).join(" ");
  }, [hasValue, isDisabled, className]);
  return /* @__PURE__ */ React34.createElement("div", { className: root17 }, label6 && /* @__PURE__ */ React34.createElement("label", { htmlFor: fieldId, className: label4 }, label6), /* @__PURE__ */ React34.createElement(
    "button",
    {
      id: fieldId,
      type: "button",
      className: fieldClass,
      onClick,
      disabled: isDisabled,
      "aria-haspopup": "listbox"
    },
    /* @__PURE__ */ React34.createElement("span", { className: hasValue ? valueText : placeholderText }, hasValue ? value : placeholder),
    /* @__PURE__ */ React34.createElement(Image24, { src: "/assets/icon24/chevron-down.svg", alt: "\uC120\uD0DD", width: 24, height: 24 })
  ));
}

// src/atoms/ShortsBottomInfo/ShortsBottomInfo.tsx
import React35 from "react";
import Image25 from "next/image";

// src/atoms/ShortsBottomInfo/ShortsBottomInfo.css.ts
import { style as style37 } from "@vanilla-extract/css";
var bottomInfo = style37({
  width: "100%",
  display: "flex",
  gap: "8px",
  padding: "24px 18px"
});
var userInfo2 = style37({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px"
});
var profileImage4 = style37({
  borderRadius: "50%"
});
var userName2 = style37(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
  width: "60px",
  textAlign: "center",
  overflow: "ellipse"
}));
var locInfo = style37({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "8px"
});
var location2 = style37(__spreadProps(__spreadValues({}, TYPO.LABEL2B), {
  padding: "6px 15px",
  borderRadius: "39px",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  display: "flex",
  gap: "4px",
  alignItems: "center"
}));
var description3 = style37(__spreadProps(__spreadValues({}, TYPO.BODY2M), {
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical"
}));
var tags2 = style37({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  maxHeight: "70px"
});
var tag4 = style37(__spreadProps(__spreadValues({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  padding: "4px 10px",
  borderRadius: "99px"
}, TYPO.BODY3), {
  color: "#FFF"
}));

// src/atoms/ShortsBottomInfo/ShortsBottomInfo.tsx
function ShortsBottomInfo({ video, locationIconSrc }) {
  return /* @__PURE__ */ React35.createElement("div", { className: bottomInfo }, /* @__PURE__ */ React35.createElement("div", { className: userInfo2 }, /* @__PURE__ */ React35.createElement(
    Image25,
    {
      src: video.profileImageUrl,
      alt: "\uBE44\uB514\uC624 \uC815\uBCF4",
      width: 40,
      height: 40,
      className: profileImage4
    }
  ), /* @__PURE__ */ React35.createElement("div", { className: userName2 }, video.userName)), /* @__PURE__ */ React35.createElement("div", { className: locInfo }, /* @__PURE__ */ React35.createElement("div", { className: location2 }, locationIconSrc && /* @__PURE__ */ React35.createElement(Image25, { alt: "location", width: 12, height: 12, src: locationIconSrc }), video.loc), /* @__PURE__ */ React35.createElement("p", { className: description3 }, video.description), /* @__PURE__ */ React35.createElement("div", { className: tags2 }, video.tags.map((tag5) => /* @__PURE__ */ React35.createElement("span", { key: tag5, className: tag4 }, "#", tag5)))));
}

// src/atoms/Skeleton/Skeleton.tsx
import React36 from "react";

// src/atoms/Skeleton/Skeleton.css.ts
import { style as style38, keyframes as keyframes5 } from "@vanilla-extract/css";
var shimmer = keyframes5({
  "0%": {
    backgroundPosition: "-1000px 0"
  },
  "100%": {
    backgroundPosition: "1000px 0"
  }
});
var skeleton = style38({
  display: "inline-block",
  width: "100%",
  height: "100%",
  backgroundColor: "#f0f0f0",
  borderRadius: "4px",
  backgroundImage: "linear-gradient(to right, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)",
  backgroundSize: "2000px 100%",
  backgroundRepeat: "no-repeat",
  animation: `${shimmer} 2s linear infinite`
});

// src/atoms/Skeleton/Skeleton.tsx
function Skeleton({ width = "100%", height = "1em", className, style: style50 }) {
  return /* @__PURE__ */ React36.createElement(
    "span",
    {
      className: `${skeleton} ${className || ""}`,
      style: __spreadValues({
        width,
        height,
        verticalAlign: "middle"
      }, style50)
    }
  );
}

// src/atoms/Tabs/Tabs.tsx
import React37 from "react";

// src/atoms/Tabs/style.css.ts
import { style as style39 } from "@vanilla-extract/css";
import { recipe as recipe2 } from "@vanilla-extract/recipes";
var container8 = style39({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
  overflowX: "auto",
  padding: "0 20px",
  borderBottom: `1px solid ${COLORS.NEUTRAL100}`,
  "::-webkit-scrollbar": {
    display: "none"
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none"
});
var tab = recipe2({
  base: __spreadProps(__spreadValues({}, TYPO.BODY2B), {
    padding: "12px 4px",
    flexShrink: 0,
    background: "none",
    border: "none",
    borderBottom: "2px solid transparent",
    cursor: "pointer",
    color: COLORS.NEUTRAL400,
    transition: "color 0.2s, border-color 0.2s"
  }),
  variants: {
    active: {
      true: {
        color: COLORS.NEUTRAL900,
        borderColor: COLORS.NEUTRAL900
      },
      false: {
        ":hover": {
          color: COLORS.NEUTRAL600
        }
      }
    }
  }
});

// src/atoms/Tabs/Tabs.tsx
var Tabs = ({ tabs, activeTab, onTabClick, className }) => {
  return /* @__PURE__ */ React37.createElement("div", { className: `${container8} ${className}` }, tabs.map((tab2) => /* @__PURE__ */ React37.createElement(
    "button",
    {
      key: tab2.id,
      className: tab({ active: activeTab === tab2.id }),
      onClick: () => onTabClick(tab2.id)
    },
    tab2.label
  )));
};

// src/atoms/TextField/TextField.tsx
import React38, { useId as useId3, useMemo as useMemo4, useState as useState7 } from "react";

// src/atoms/TextField/TextField.css.ts
import { style as style40, styleVariants as styleVariants12 } from "@vanilla-extract/css";
var root18 = style40({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  width: "100%"
});
var label5 = style40(__spreadProps(__spreadValues({}, TYPO.LABEL1B), {
  color: COLORS.NEUTRAL600,
  marginBottom: "8px"
}));
var fieldBase2 = {
  height: "56px",
  display: "flex",
  alignItems: "center",
  borderRadius: "12px",
  padding: "0 16px",
  background: COLORS.NEUTRAL0,
  boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL200}`,
  transition: "box-shadow .12s ease, background-color .12s ease"
};
var state4 = styleVariants12({
  default: __spreadProps(__spreadValues({}, fieldBase2), { boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL300}` }),
  focused: __spreadProps(__spreadValues({}, fieldBase2), { boxShadow: `inset 0 0 0 2px ${COLORS.GREEN600}` }),
  pressed: __spreadProps(__spreadValues({}, fieldBase2), {
    background: COLORS.GREEN100,
    boxShadow: `inset 0 0 0 1px ${COLORS.GREEN200}`
  }),
  filled: __spreadProps(__spreadValues({}, fieldBase2), {
    background: COLORS.NEUTRAL50,
    boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL200}`
  }),
  error: __spreadProps(__spreadValues({}, fieldBase2), {
    boxShadow: `inset 0 0 0 2px #E5484D`
    // RED 토큰 없어서 임시. 팔레트 생기면 교체
  }),
  disabled: __spreadProps(__spreadValues({}, fieldBase2), {
    background: COLORS.NEUTRAL200,
    boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL300}`
  })
});
var input3 = style40(__spreadValues({
  flex: 1,
  width: "100%",
  border: "none",
  outline: "none",
  background: "transparent",
  color: COLORS.NEUTRAL800,
  selectors: {
    "&::placeholder": {
      color: COLORS.NEUTRAL400
    },
    "&:disabled": {
      color: COLORS.NEUTRAL500
    }
  }
}, TYPO.BODY1M));
var helperText = style40(__spreadProps(__spreadValues({}, TYPO.CAPTION2B), {
  color: COLORS.NEUTRAL500,
  padding: "0 4px"
}));
var helperError = style40(__spreadProps(__spreadValues({}, TYPO.CAPTION2B), {
  color: "#E5484D",
  // RED 토큰 나오면 교체
  padding: "0 4px"
}));

// src/atoms/TextField/TextField.tsx
function TextField(_a) {
  var _b = _a, {
    label: label6,
    placeholder = "Placeholder",
    value,
    defaultValue,
    onChange,
    onBlur,
    onFocus,
    disabled,
    validator,
    errorText: errorText2,
    helperText: helperText2,
    className,
    id
  } = _b, rest = __objRest(_b, [
    "label",
    "placeholder",
    "value",
    "defaultValue",
    "onChange",
    "onBlur",
    "onFocus",
    "disabled",
    "validator",
    "errorText",
    "helperText",
    "className",
    "id"
  ]);
  const generatedId = useId3();
  const inputId = id != null ? id : generatedId;
  const descId = `${inputId}-desc`;
  const [focused, setFocused] = useState7(false);
  const [pressed, setPressed] = useState7(false);
  const isControlled = value != null;
  const [inner, setInner] = useState7(defaultValue != null ? defaultValue : "");
  const currentValue = isControlled ? String(value) : inner;
  const [innerError, setInnerError] = useState7(void 0);
  const filled = currentValue.trim().length > 0;
  const hasError = Boolean(errorText2 != null ? errorText2 : innerError);
  const isDisabled = Boolean(disabled);
  const rootClass = useMemo4(() => {
    const stateClass = hasError ? state4.error : isDisabled ? state4.disabled : focused ? state4.focused : pressed ? state4.pressed : filled ? state4.filled : state4.default;
    return [root18, stateClass, className].filter(Boolean).join(" ");
  }, [focused, pressed, filled, hasError, isDisabled, className]);
  const handleChange = (e) => {
    if (!isControlled) setInner(e.target.value);
    onChange == null ? void 0 : onChange(e);
  };
  const runValidate = (v) => {
    if (!validator) return;
    const msg = validator(v);
    setInnerError(msg != null ? msg : void 0);
  };
  const handleBlur = (e) => {
    setFocused(false);
    runValidate(e.currentTarget.value);
    onBlur == null ? void 0 : onBlur(e);
  };
  const handleFocus = (e) => {
    setFocused(true);
    onFocus == null ? void 0 : onFocus(e);
  };
  const helper = hasError ? errorText2 != null ? errorText2 : innerError : helperText2;
  return /* @__PURE__ */ React38.createElement("div", { className: root18 }, label6 && /* @__PURE__ */ React38.createElement("label", { htmlFor: inputId, className: label5 }, label6), /* @__PURE__ */ React38.createElement("div", { className: rootClass, "aria-disabled": isDisabled || void 0 }, /* @__PURE__ */ React38.createElement(
    "input",
    __spreadValues({
      id: inputId,
      className: input3,
      placeholder,
      value: currentValue,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
      onKeyDown: () => setPressed(true),
      onKeyUp: () => setPressed(false),
      "aria-invalid": hasError || void 0,
      "aria-describedby": helper ? descId : void 0,
      disabled: isDisabled
    }, rest)
  )), helper ? /* @__PURE__ */ React38.createElement("div", { id: descId, className: hasError ? helperError : helperText }, helper) : null);
}

// src/atoms/Tooltip/Tooltip.tsx
import React39 from "react";

// src/atoms/Tooltip/Tooltip.css.ts
import { style as style41, styleVariants as styleVariants13, globalStyle as globalStyle2 } from "@vanilla-extract/css";
var arrowSize = 8;
var gap = 10;
var tooltipBackgroundColor = "#fff";
var tooltipColor = COLORS.GREEN700;
var tooltipZIndex = 50;
var tooltipMaxWidth = "280px";
var tooltipWrapper = style41({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  backgroundColor: tooltipBackgroundColor,
  color: tooltipColor,
  borderRadius: "8px",
  padding: "16px",
  zIndex: tooltipZIndex,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  transition: "opacity 0.2s ease, visibility 0.2s ease",
  maxWidth: tooltipMaxWidth,
  width: 180,
  textAlign: "left"
});
var headerContainer2 = style41({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  marginBottom: "8px"
});
var tooltipTitle = style41(__spreadProps(__spreadValues({}, TYPO.BODY1B), {
  fontFamily: "var(--font-laundry)",
  color: tooltipColor,
  flexGrow: 1,
  marginRight: "8px",
  whiteSpace: "pre-wrap"
}));
var closeButton4 = style41({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 1,
  flexShrink: 0,
  ":hover": {
    opacity: 0.8
  }
});
var tooltipText = style41({
  fontSize: "11px",
  fontWeight: 500,
  color: COLORS.NEUTRAL500,
  whiteSpace: "pre-wrap",
  width: "100%"
});
var tooltipArrow = style41({
  position: "absolute",
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderColor: "transparent"
});
var positionVariants = styleVariants13({
  top: {
    bottom: `calc(100% + ${gap}px)`,
    left: "-40%",
    transform: "translateX(-50%)"
  },
  bottom: {
    top: `calc(100% + ${gap}px)`,
    left: "50%",
    transform: "translateX(-50%)"
  },
  left: {
    right: `calc(100% + ${gap}px)`,
    top: "50%",
    transform: "translateY(-50%)"
  },
  right: {
    left: `calc(100% + ${gap}px)`,
    top: "50%",
    transform: "translateY(-50%)"
  }
});
globalStyle2(`${positionVariants.top} .${tooltipArrow}`, {
  top: "100%",
  left: "80%",
  transform: "translateX(-50%)",
  borderWidth: `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`,
  borderTopColor: tooltipBackgroundColor
});
globalStyle2(`${positionVariants.bottom} .${tooltipArrow}`, {
  bottom: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  borderWidth: `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`,
  borderBottomColor: tooltipBackgroundColor
});
globalStyle2(`${positionVariants.left} .${tooltipArrow}`, {
  top: "50%",
  left: "100%",
  transform: "translateY(-50%)",
  borderWidth: `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`,
  borderLeftColor: tooltipBackgroundColor
});
globalStyle2(`${positionVariants.right} .${tooltipArrow}`, {
  top: "50%",
  right: "100%",
  transform: "translateY(-50%)",
  borderWidth: `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`,
  borderRightColor: tooltipBackgroundColor
});

// src/atoms/Tooltip/Tooltip.tsx
import Image26 from "next/image";
function Tooltip({ title: title13, text: text3, onClose, isVisible, position = "top" }) {
  if (!isVisible) return null;
  return /* @__PURE__ */ React39.createElement("div", { className: `${tooltipWrapper} ${positionVariants[position]}` }, /* @__PURE__ */ React39.createElement("div", { className: headerContainer2 }, /* @__PURE__ */ React39.createElement("span", { className: tooltipTitle }, title13), /* @__PURE__ */ React39.createElement("button", { className: closeButton4, onClick: onClose, "aria-label": "\uD234\uD301 \uB2EB\uAE30" }, /* @__PURE__ */ React39.createElement(Image26, { src: "/assets/icon12/x.svg", alt: "\uB2EB\uAE30", width: 16, height: 16 }))), text3 && /* @__PURE__ */ React39.createElement("span", { className: tooltipText }, text3), /* @__PURE__ */ React39.createElement("div", { className: tooltipArrow }));
}

// src/atoms/TopBar/TopBar.tsx
import Image27 from "next/image";

// src/atoms/TopBar/TopBar.css.ts
import { style as style42 } from "@vanilla-extract/css";
var root19 = style42({
  width: "100%",
  background: "#fff",
  padding: "16px 18px",
  display: "grid",
  gridTemplateColumns: "24px 1fr auto",
  alignItems: "center",
  gap: 8
});
var sticky = style42({
  position: "sticky",
  top: 0,
  zIndex: 50
});
var transparent = style42({
  background: "transparent"
});
var whiteIcon = style42({
  filter: "brightness(0) invert(1)"
});
var iconBox = style42({
  width: 24,
  height: 24,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});
var iconButton2 = style42({
  width: 24,
  height: 24,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  selectors: {
    "&:disabled": { cursor: "default", opacity: 0.5 }
  }
});
var sideLeft = style42([
  iconButton2,
  {
    justifySelf: "start"
  }
]);
var center = style42({
  minWidth: 0,
  overflow: "hidden",
  textAlign: "left",
  justifySelf: "start",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
var title10 = style42(__spreadProps(__spreadValues({}, TYPO.HEADLINE1), {
  lineHeight: "24px",
  color: COLORS.NEUTRAL600,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}));
var sideRight = style42({
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  gap: 16
});

// src/atoms/TopBar/TopBar.tsx
function TopBar({
  backIconHandler,
  backIconSrc,
  title: title13,
  isShowLogo = false,
  logoSrc,
  logoAlt = "",
  rightIcons = [],
  sticky: sticky2 = false,
  transparent: transparent2 = false,
  whiteIcon: whiteIcon2 = false,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "header",
    {
      className: [root19, sticky2 && sticky, transparent2 && transparent, className].filter(Boolean).join(" "),
      role: "banner"
    },
    /* @__PURE__ */ React.createElement("div", { className: sideLeft }, backIconHandler ? /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: [iconButton2, whiteIcon2 && whiteIcon].filter(Boolean).join(" "),
        onClick: backIconHandler,
        "aria-label": "\uB4A4\uB85C\uAC00\uAE30"
      },
      backIconSrc && /* @__PURE__ */ React.createElement(Image27, { src: backIconSrc, alt: "\uB4A4\uB85C\uAC00\uAE30", width: 24, height: 24 })
    ) : null),
    /* @__PURE__ */ React.createElement("div", { className: center, "aria-live": "polite" }, isShowLogo && logoSrc ? /* @__PURE__ */ React.createElement(Image27, { src: logoSrc, alt: logoAlt, width: 72.56, height: 24 }) : title13 ? /* @__PURE__ */ React.createElement("div", { className: title10, title: title13 }, title13) : null),
    /* @__PURE__ */ React.createElement("nav", { className: sideRight, "aria-label": "topbar-actions" }, rightIcons.map(({ icon: icon5, onClick }, idx) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: idx,
        type: "button",
        className: [iconButton2, whiteIcon2 && whiteIcon].filter(Boolean).join(" "),
        onClick,
        "aria-label": `action-${idx + 1}`
      },
      icon5
    )))
  );
}

// src/molecules/Carousel/Carousel.tsx
import React40 from "react";
import useEmblaCarousel from "embla-carousel-react";

// src/molecules/Carousel/Carousel.css.ts
import { style as style43 } from "@vanilla-extract/css";
var embla = style43({
  overflow: "hidden",
  // 네이티브 스크롤 숨김
  width: "100%"
});
var embla__container = style43({
  display: "flex",
  padding: "16px 0"
  // 기존 상하 패딩 유지
});
var embla__slide = style43({
  position: "relative",
  flexShrink: 0,
  // 아이템이 줄어들지 않도록 설정
  minWidth: 0
  // flex-basis가 올바르게 작동하도록 설정
});

// src/molecules/Carousel/Carousel.tsx
function Carousel({
  children,
  gap: gap2 = 16,
  itemHeight,
  itemWidth,
  paddingHoriz,
  loop = false
}) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
    loop
  });
  return /* @__PURE__ */ React40.createElement("div", { className: embla, ref: emblaRef }, /* @__PURE__ */ React40.createElement(
    "div",
    {
      className: embla__container,
      style: {
        gap: `${gap2}px`,
        paddingLeft: paddingHoriz,
        paddingRight: paddingHoriz
      }
    },
    React40.Children.map(children, (child) => /* @__PURE__ */ React40.createElement(
      "div",
      {
        className: embla__slide,
        style: __spreadValues(__spreadValues({}, itemHeight ? { height: `${itemHeight}px` } : { height: "auto" }), itemWidth ? { flex: `0 0 ${itemWidth}px` } : { flex: "0 0 auto" })
      },
      child
    ))
  ));
}

// src/molecules/FilterSection/FilterSection.tsx
import React41 from "react";

// src/molecules/FilterSection/FilterSection.css.ts
import { style as style44 } from "@vanilla-extract/css";
var root20 = style44({
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column"
});
var title11 = style44(__spreadProps(__spreadValues({}, TYPO.BODY1B), {
  color: "#000",
  padding: "12px 0px"
}));
var desc3 = style44(__spreadProps(__spreadValues({
  paddingLeft: "4px"
}, TYPO.CAPTION1M), {
  color: COLORS.GREEN700
}));
var chipsContainer = style44({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px"
});

// src/molecules/FilterSection/FilterSection.tsx
function FilterSection({
  title: title13,
  chips,
  multiSelect,
  selectedChips,
  onChipClick
}) {
  return /* @__PURE__ */ React41.createElement("div", { className: root20 }, /* @__PURE__ */ React41.createElement("div", { className: title11 }, title13, /* @__PURE__ */ React41.createElement("span", { className: desc3 }, " ", multiSelect ? "\uC911\uBCF5 \uAC00\uB2A5" : void 0)), /* @__PURE__ */ React41.createElement("div", { className: chipsContainer }, chips.map((chip3) => /* @__PURE__ */ React41.createElement(
    FilterChipExpand,
    {
      key: chip3.id,
      title: chip3.title,
      caption: chip3.caption,
      selected: selectedChips.includes(chip3.id),
      onClick: () => onChipClick(chip3.id)
    }
  ))));
}

// src/molecules/Grid/Grid.tsx
import React42 from "react";

// src/molecules/Grid/Grid.css.ts
import { style as style45 } from "@vanilla-extract/css";
var root21 = style45({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(162px, 1fr))",
  gap: "16px",
  boxSizing: "border-box"
});

// src/molecules/Grid/Grid.tsx
function Grid({ children, className }) {
  const combinedClassName = [root21, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ React42.createElement("div", { className: combinedClassName }, children);
}

// src/molecules/MapFloatingButtons/MapFloatingButtons.tsx
import React43 from "react";
import Image28 from "next/image";

// src/molecules/MapFloatingButtons/MapFloatingButtons.css.ts
import { style as style46, keyframes as keyframes6 } from "@vanilla-extract/css";
var root22 = style46({
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
  zIndex: 11
});
var gpsButton = style46({
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
    transform: "scale(0.95)"
  }
});
var pulseAnimation = keyframes6({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.1)" },
  "100%": { transform: "scale(1)" }
});
var fabPulse = style46({
  animationName: pulseAnimation,
  animationDuration: "0.7s",
  animationIterationCount: 3,
  animationTimingFunction: "ease-in-out"
});
var fabWithTooltipContainer = style46({
  position: "relative"
});

// src/molecules/MapFloatingButtons/MapFloatingButtons.tsx
function MapFloatingButtons({
  onGpsClick,
  gpsIconSrc,
  chipMapListProps,
  fabProps,
  tooltipProps
}) {
  const animatedFabProps = __spreadProps(__spreadValues({}, fabProps), {
    className: [fabProps.className, fabPulse].filter(Boolean).join(" ")
  });
  return /* @__PURE__ */ React43.createElement("div", { className: root22 }, /* @__PURE__ */ React43.createElement("div", null, /* @__PURE__ */ React43.createElement("button", { className: gpsButton, onClick: onGpsClick }, gpsIconSrc && /* @__PURE__ */ React43.createElement(Image28, { src: gpsIconSrc, alt: "\uD604\uC7AC \uC704\uCE58", width: 24, height: 24 }))), /* @__PURE__ */ React43.createElement("div", null, /* @__PURE__ */ React43.createElement(ChipMapList, __spreadValues({}, chipMapListProps))), /* @__PURE__ */ React43.createElement("div", { className: fabWithTooltipContainer }, /* @__PURE__ */ React43.createElement(Fab, __spreadValues({}, animatedFabProps)), /* @__PURE__ */ React43.createElement(Tooltip, __spreadValues({}, tooltipProps))));
}

// src/molecules/SearchHeader/SearchHeader.tsx
import React44 from "react";
import Image29 from "next/image";

// src/molecules/SearchHeader/SearchHeader.css.ts
import { style as style47, styleVariants as styleVariants14 } from "@vanilla-extract/css";
var root23 = style47({
  width: "100%",
  padding: "8px 18px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  gap: "12px"
});
var backButton = style47({
  background: "none",
  border: "none",
  padding: "0",
  cursor: "pointer",
  flexShrink: 0
});
var searchFieldWrapperBase = style47({
  flex: 1,
  position: "relative"
});
var searchFieldWrapper = styleVariants14({
  fullWidth: [searchFieldWrapperBase, { width: "100%" }],
  withBackButton: [searchFieldWrapperBase, { width: "calc(100% - 48px)" }]
});
var clickOverlay = style47({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  cursor: "pointer",
  background: "transparent"
});

// src/molecules/SearchHeader/SearchHeader.tsx
function SearchHeader({
  backIconHandler,
  backIconColor = "black",
  searchFieldProps,
  onClick
}) {
  const iconSrc = backIconColor === "white" ? "/assets/icon24/arrow-left_line_white.svg" : "/assets/icon24/arrow-left_line.svg";
  return /* @__PURE__ */ React44.createElement("div", { className: root23 }, backIconHandler && /* @__PURE__ */ React44.createElement("button", { className: backButton, onClick: backIconHandler }, /* @__PURE__ */ React44.createElement(Image29, { src: iconSrc, alt: "\uB4A4\uB85C\uAC00\uAE30", width: 24, height: 24 })), /* @__PURE__ */ React44.createElement("div", { className: searchFieldWrapper[backIconHandler ? "withBackButton" : "fullWidth"] }, /* @__PURE__ */ React44.createElement(SearchField, __spreadProps(__spreadValues({}, searchFieldProps), { readOnly: !!onClick })), onClick && /* @__PURE__ */ React44.createElement("div", { className: clickOverlay, onClick })));
}

// src/molecules/ShortsOverlay/ShortsOverlay.tsx
import React45 from "react";

// src/molecules/ShortsOverlay/ShortsOverlay.css.ts
import { style as style48 } from "@vanilla-extract/css";
var overlayContainer = style48({
  position: "absolute",
  inset: 0,
  zIndex: 10,
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 40%)"
});

// src/molecules/ShortsOverlay/ShortsOverlay.tsx
function ShortsOverlay({ children }) {
  return /* @__PURE__ */ React45.createElement("div", { className: overlayContainer }, children);
}

// src/molecules/WelcomeOverlay/WelcomeOverlay.tsx
import React46, { useEffect as useEffect5, useState as useState8 } from "react";

// src/molecules/WelcomeOverlay/style.css.ts
import { style as style49, keyframes as keyframes7 } from "@vanilla-extract/css";
var fadeIn = keyframes7({
  "0%": { opacity: 0, transform: "scale(0.9)" },
  "100%": { opacity: 1, transform: "scale(1)" }
});
var overlay5 = style49({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(255, 255, 255, 0.35)",
  backdropFilter: "blur(3px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1e3,
  animation: `${fadeIn} 0.4s ease`
});
var modalCard = style49({
  background: COLORS.NEUTRAL0,
  borderRadius: "20px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
  width: "320px",
  padding: "28px 20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});
var title12 = style49(__spreadProps(__spreadValues({}, TYPO.HEADING1), {
  color: COLORS.NEUTRAL800,
  marginBottom: "6px"
}));
var subtitle2 = style49(__spreadProps(__spreadValues({}, TYPO.BODY2M), {
  color: COLORS.NEUTRAL500,
  marginBottom: "20px"
}));
var checkList = style49({
  listStyle: "none",
  padding: 0,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginBottom: "24px"
});
var listItem2 = style49(__spreadProps(__spreadValues({}, TYPO.BODY3), {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  background: COLORS.NEUTRAL50,
  borderRadius: "10px",
  padding: "10px 14px",
  color: COLORS.NEUTRAL500,
  transition: "all 0.3s ease",
  fontWeight: 600
}));
var active3 = style49({
  background: COLORS.GREEN50,
  color: COLORS.GREEN700,
  fontWeight: 600
});
var icon4 = style49({
  width: "24px",
  height: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
var startButton = style49({
  width: "100%",
  borderRadius: "12px",
  padding: "12px 0",
  fontSize: "16px",
  fontWeight: 600,
  border: "none",
  transition: "all 0.3s ease"
});
var buttonDisabled = style49({
  background: COLORS.NEUTRAL200,
  color: COLORS.NEUTRAL500,
  cursor: "not-allowed",
  opacity: 0.6
});
var buttonActive = style49({
  background: COLORS.GREEN600,
  color: COLORS.NEUTRAL0,
  cursor: "pointer",
  ":hover": { opacity: 0.85 }
});
var errorText = style49({
  marginTop: "10px",
  fontSize: "12px",
  fontWeight: 600,
  color: "#E74C3C"
});

// src/molecules/WelcomeOverlay/WelcomeOverlay.tsx
import Image30 from "next/image";
function WelcomeOverlay({
  onFetchLocation,
  latitude,
  longitude,
  isLoading,
  error,
  logoImageSrc,
  logoAlt = "",
  title: title13 = "\u{1F389} \uD658\uC601\uD569\uB2C8\uB2E4",
  subtitle: subtitle3,
  steps,
  ctaText = "\uC2DC\uC791\uD558\uAE30",
  loadingText = "\uC704\uCE58 \uCC3E\uB294 \uC911..."
}) {
  const [currentStep, setCurrentStep] = useState8(0);
  const [completed, setCompleted] = useState8(new Array(steps.length).fill(false));
  const [isVisible, setIsVisible] = useState8(true);
  const [isReadyToAnimate, setIsReadyToAnimate] = useState8(false);
  useEffect5(() => {
    const timer = setTimeout(() => {
      setIsReadyToAnimate(true);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  useEffect5(() => {
    if (!isReadyToAnimate) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length) {
          setCompleted((old) => {
            const updated = [...old];
            updated[prev] = true;
            return updated;
          });
          return prev + 1;
        }
        return prev;
      });
    }, 500);
    return () => clearInterval(interval);
  }, [isReadyToAnimate, steps.length]);
  useEffect5(() => {
    if (currentStep === steps.length) {
      onFetchLocation().catch(() => {
      });
    }
  }, [currentStep, onFetchLocation, steps.length]);
  if (!isVisible) return null;
  const isButtonEnabled = currentStep === steps.length && !isLoading;
  const buttonText = isLoading && currentStep === steps.length ? loadingText : ctaText;
  const buttonStatus = isButtonEnabled ? "primary" /* PRIMARY */ : "disabled" /* DISABLED */;
  return /* @__PURE__ */ React46.createElement("div", { className: overlay5 }, /* @__PURE__ */ React46.createElement("div", { className: modalCard }, /* @__PURE__ */ React46.createElement(Image30, { src: logoImageSrc, alt: logoAlt, width: 150, height: 150 }), /* @__PURE__ */ React46.createElement("h2", { className: title12 }, title13), subtitle3 && /* @__PURE__ */ React46.createElement("p", { className: subtitle2 }, subtitle3), /* @__PURE__ */ React46.createElement("ul", { className: checkList }, steps.map((text3, i) => /* @__PURE__ */ React46.createElement(
    "li",
    {
      key: i,
      className: `${listItem2} ${(completed[i] || i === currentStep && isLoading) && isReadyToAnimate ? active3 : ""}`
    },
    /* @__PURE__ */ React46.createElement("div", { className: icon4 }, /* @__PURE__ */ React46.createElement(
      ProgressCircle,
      {
        size: 18,
        color: "#00A63E",
        progress: isReadyToAnimate ? completed[i] ? 1 : i === currentStep ? 0.7 : 0 : 0,
        active: isReadyToAnimate && i === currentStep
      }
    )),
    text3
  ))), /* @__PURE__ */ React46.createElement(
    Button,
    {
      size: "medium" /* MEDIUM */,
      status: buttonStatus,
      text: buttonText,
      onClick: () => {
        setIsVisible(false);
      }
    }
  ), error && /* @__PURE__ */ React46.createElement("p", { className: errorText }, "\u{1F4CD} ", error)));
}
export {
  AiProfileHeader,
  AvatarPicker,
  BottomSheet,
  Button,
  Carousel,
  ChatInput,
  Chip,
  ChipKeyword,
  ChipMapList,
  DangleCard,
  DangleItem,
  DanglePlace,
  DanglePlay,
  DangleReview,
  DangleVideo,
  Dropdown,
  EmptyState,
  Fab,
  FilterChip,
  FilterChipExpand,
  FilterSection,
  Grid,
  Header,
  LoadingSpinner,
  Location,
  LoginButton,
  MapFloatingButtons,
  MessageBox,
  Modal,
  NavBar,
  NoticeBox,
  Pagination,
  ProfileCard,
  ProgressCircle,
  RadioGroup,
  SearchField,
  SearchHeader,
  SegmentedControl,
  SelectField,
  ShortsBottomInfo,
  ShortsOverlay,
  Skeleton,
  Tabs,
  TextField,
  ThinkingBubble,
  Tooltip,
  TopBar,
  TopicSelector,
  WelcomeOverlay
};
