"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name4 in all)
    __defProp(target, name4, { get: all[name4], enumerable: true });
};
var __copyProps = (to, from, except, desc4) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc4 = __getOwnPropDesc(from, key)) || desc4.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AiProfileHeader: () => AiProfileHeader,
  AvatarPicker: () => AvatarPicker_default,
  BottomSheet: () => BottomSheet,
  Button: () => Button,
  Carousel: () => Carousel_default,
  ChatInput: () => ChatInput,
  Chip: () => Chip,
  ChipKeyword: () => ChipKeyword_default,
  ChipMapList: () => ChipMapList,
  DangleCard: () => DangleCard,
  DangleItem: () => DangleItem,
  DanglePlace: () => DanglePlace_default,
  DanglePlay: () => DanglePlay,
  DangleReview: () => DangleReview,
  DangleVideo: () => DangleVideo_default,
  Dropdown: () => Dropdown,
  EmptyState: () => EmptyState_default,
  Fab: () => Fab,
  FilterChip: () => FilterChip,
  FilterChipExpand: () => FilterChipExpand_default,
  FilterSection: () => FilterSection_default,
  Grid: () => Grid_default,
  Header: () => Header_default,
  LoadingSpinner: () => LoadingSpinner,
  Location: () => Location_default,
  LoginButton: () => LoginButton,
  MapFloatingButtons: () => MapFloatingButtons_default,
  MessageBox: () => MessageBox,
  Modal: () => Modal,
  NavBar: () => NavBar_default,
  NoticeBox: () => NoticeBox_default,
  Pagination: () => Pagination,
  ProfileCard: () => ProfileCard_default,
  ProgressCircle: () => ProgressCircle,
  RadioGroup: () => RadioGroup,
  SearchField: () => SearchField_default,
  SearchHeader: () => SearchHeader_default,
  SegmentedControl: () => SegmentedControl_default,
  SelectField: () => SelectField,
  ShortsBottomInfo: () => ShortsBottomInfo,
  ShortsOverlay: () => ShortsOverlay,
  Skeleton: () => Skeleton,
  Tabs: () => Tabs_default,
  TextField: () => TextField,
  ThinkingBubble: () => ThinkingBubble,
  Tooltip: () => Tooltip,
  TopBar: () => TopBar_default,
  TopicSelector: () => TopicSelector,
  WelcomeOverlay: () => WelcomeOverlay
});
module.exports = __toCommonJS(index_exports);

// src/atoms/AvatarPicker/AvatarPicker.tsx
var import_react = __toESM(require("react"));
var import_image = __toESM(require("next/image"));

// src/atoms/AvatarPicker/AvatarPicker.css.ts
var import_css = require("@vanilla-extract/css");
var wrapper = (0, import_css.style)({
  position: "relative",
  display: "block",
  width: 94,
  height: 94
});
var avatarImg = (0, import_css.style)({
  width: 94,
  height: 94,
  borderRadius: "9999px",
  objectFit: "cover",
  display: "block"
});
var cameraBtn = (0, import_css.style)({
  position: "absolute",
  right: -2,
  bottom: -2,
  width: 28,
  height: 28,
  display: "grid",
  placeItems: "center",
  cursor: "pointer"
});
var visuallyHidden = (0, import_css.style)({
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
  className
}) {
  var _a;
  const fileRef = (0, import_react.useRef)(null);
  const [innerUrl, setInnerUrl] = (0, import_react.useState)(defaultValue);
  const previewUrl = (_a = value != null ? value : innerUrl) != null ? _a : null;
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: [wrapper, className].filter(Boolean).join(" "),
      style: { width: size2, height: size2 },
      "aria-label": "\uC544\uBC14\uD0C0 \uC120\uD0DD"
    },
    previewUrl ? /* @__PURE__ */ import_react.default.createElement("img", { src: previewUrl, alt: "\uC544\uBC14\uD0C0", className: avatarImg }) : /* @__PURE__ */ import_react.default.createElement(
      import_image.default,
      {
        src: "/assets/curation/avatar.svg",
        alt: "",
        width: size2,
        height: size2,
        className: avatarImg,
        priority: true
      }
    ),
    /* @__PURE__ */ import_react.default.createElement(
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
    /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: cameraBtn,
        onClick: openPicker,
        "aria-label": "\uC544\uBC14\uD0C0 \uBCC0\uACBD"
      },
      /* @__PURE__ */ import_react.default.createElement(
        import_image.default,
        {
          src: "/assets/curation/camera.svg",
          alt: "",
          width: 28,
          height: 28
        }
      )
    )
  );
}
var AvatarPicker_default = AvatarPicker;

// src/atoms/BottomSheet/BottomSheet.tsx
var import_vaul = require("vaul");

// ../../src/styles/typography.css.ts
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
var import_css2 = require("@vanilla-extract/css");
var overlay = (0, import_css2.style)({
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  zIndex: "999"
});
var content = (0, import_css2.style)({
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
var handle = (0, import_css2.style)({
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
var header = (0, import_css2.style)({
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
var title = (0, import_css2.style)(__spreadProps(__spreadValues({}, TYPO.HEADLINE1), {
  color: "#262626"
}));
var close = (0, import_css2.style)({
  inlineSize: 24,
  blockSize: 24,
  display: "grid",
  placeItems: "center",
  backgroundColor: "transparent",
  border: "none",
  color: "#222",
  cursor: "pointer"
});
var body = (0, import_css2.style)({
  overflowY: "auto",
  minHeight: "60vh",
  maxHeight: "80vh",
  WebkitOverflowScrolling: "touch"
});

// src/atoms/BottomSheet/BottomSheet.tsx
var import_image2 = __toESM(require("next/image"));
function BottomSheet({
  open,
  onOpenChange,
  title: title13,
  children
}) {
  return /* @__PURE__ */ React.createElement(import_vaul.Drawer.Root, { open, onOpenChange, shouldScaleBackground: true }, /* @__PURE__ */ React.createElement(import_vaul.Drawer.Portal, null, /* @__PURE__ */ React.createElement(
    import_vaul.Drawer.Overlay,
    {
      className: overlay,
      onClick: () => onOpenChange(false)
    }
  ), /* @__PURE__ */ React.createElement(import_vaul.Drawer.Content, { className: content }, /* @__PURE__ */ React.createElement("div", { className: handle }), /* @__PURE__ */ React.createElement("div", { className: header }, /* @__PURE__ */ React.createElement(import_vaul.Drawer.Title, { style: { display: "none" } }), /* @__PURE__ */ React.createElement("div", { className: title }, title13), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      "aria-label": "\uB2EB\uAE30",
      className: close,
      onClick: () => onOpenChange(false)
    },
    /* @__PURE__ */ React.createElement(
      import_image2.default,
      {
        src: "/assets/icon24/x_line.svg",
        alt: "\uB4A4\uB85C\uAC00\uAE30",
        width: 24,
        height: 24
      }
    )
  )), /* @__PURE__ */ React.createElement("div", { className: body }, children))));
}

// src/atoms/Buttons/Location/Location.tsx
var import_react2 = __toESM(require("react"));

// src/atoms/Buttons/Location/Location.css.ts
var import_css3 = require("@vanilla-extract/css");

// ../../src/styles/colors.css.ts
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
var root = (0, import_css3.style)({
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
var state = (0, import_css3.styleVariants)({
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
var title2 = (0, import_css3.style)(__spreadProps(__spreadValues({}, TYPO.BODY2M), {
  color: COLORS.NEUTRAL900
}));
var desc = (0, import_css3.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
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
  return /* @__PURE__ */ import_react2.default.createElement(
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
    /* @__PURE__ */ import_react2.default.createElement("span", { className: title2 }, title13),
    desc4 ? /* @__PURE__ */ import_react2.default.createElement("span", { className: desc }, desc4) : null
  );
}
var Location_default = Location;

// src/atoms/Buttons/Button/Button.tsx
var import_react3 = __toESM(require("react"));

// src/atoms/Buttons/Button/Button.css.ts
var import_css4 = require("@vanilla-extract/css");
var root2 = (0, import_css4.style)({
  border: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "12px",
  width: "100%",
  textAlign: "center"
});
var size = (0, import_css4.styleVariants)({
  large: { height: "56px", padding: "0 20px" },
  medium: { height: "48px", padding: "0 16px" }
});
var state2 = (0, import_css4.styleVariants)({
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
var label = (0, import_css4.style)(__spreadValues({}, TYPO.BODY1B));

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
  var _b = _a, {
    size: size2,
    status,
    text: text3,
    className,
    disabled
  } = _b, rest = __objRest(_b, [
    "size",
    "status",
    "text",
    "className",
    "disabled"
  ]);
  const sizeKey = SIZE_KEY[size2];
  const statusKey = STATUS_KEY[status];
  const classes = [root2, size[sizeKey], state2[statusKey], className].filter(Boolean).join(" ");
  const isDisabled = disabled || statusKey === "disabled";
  return /* @__PURE__ */ import_react3.default.createElement(
    "button",
    __spreadValues({
      type: "button",
      className: classes,
      disabled: isDisabled || void 0,
      "data-size": sizeKey,
      "data-status": statusKey
    }, rest),
    /* @__PURE__ */ import_react3.default.createElement("span", { className: label }, text3)
  );
}

// src/atoms/Buttons/LoginButton/LoginButton.tsx
var import_image3 = __toESM(require("next/image"));

// src/atoms/Buttons/LoginButton/LoginButton.css.ts
var import_css5 = require("@vanilla-extract/css");
var root3 = (0, import_css5.style)({
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
var icon = (0, import_css5.style)({
  width: "24px",
  height: "24px"
});
var kind = (0, import_css5.styleVariants)({
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
var label2 = (0, import_css5.style)(__spreadProps(__spreadValues({}, TYPO.BODY1M), {
  lineHeight: "24px",
  textAlign: "left"
}));

// src/atoms/Buttons/LoginButton/LoginButton.tsx
function LoginButton(_a) {
  var _b = _a, {
    provider,
    title: title13,
    className
  } = _b, rest = __objRest(_b, [
    "provider",
    "title",
    "className"
  ]);
  return /* @__PURE__ */ React.createElement(
    "button",
    __spreadValues({
      type: "button",
      className: [root3, kind[provider], className].filter(Boolean).join(" "),
      "aria-label": title13
    }, rest),
    /* @__PURE__ */ React.createElement(
      import_image3.default,
      {
        src: `/assets/login/${provider}.svg`,
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
var import_react4 = __toESM(require("react"));
var import_image4 = __toESM(require("next/image"));

// src/atoms/Chat/AiProfileHeader/AiProfileHeader.css.ts
var import_css6 = require("@vanilla-extract/css");
var container = (0, import_css6.style)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 18px"
});
var imageWrapper = (0, import_css6.style)({
  flexShrink: 0
});
var profileImage = (0, import_css6.style)({});
var textContainer = (0, import_css6.style)({
  display: "flex",
  flexDirection: "column",
  gap: "2px"
});
var title3 = (0, import_css6.style)(__spreadProps(__spreadValues({}, TYPO.LABEL1B), {
  margin: 0,
  color: "#262626"
}));
var subtitle = (0, import_css6.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
  color: "#737373",
  margin: 0
}));

// src/atoms/Chat/AiProfileHeader/AiProfileHeader.tsx
function AiProfileHeader({
  imageUrl,
  title: title13,
  subtitle: subtitle3
}) {
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: container }, /* @__PURE__ */ import_react4.default.createElement("div", { className: imageWrapper }, /* @__PURE__ */ import_react4.default.createElement(
    import_image4.default,
    {
      src: imageUrl,
      alt: title13,
      width: 40,
      height: 40,
      className: profileImage
    }
  )), /* @__PURE__ */ import_react4.default.createElement("div", { className: textContainer }, /* @__PURE__ */ import_react4.default.createElement("h1", { className: title3 }, title13), /* @__PURE__ */ import_react4.default.createElement("p", { className: subtitle }, subtitle3)));
}

// src/atoms/Chat/ChatInput/ChatInput.tsx
var import_react5 = __toESM(require("react"));
var import_image5 = __toESM(require("next/image"));

// src/atoms/Chat/ChatInput/style.css.ts
var import_css7 = require("@vanilla-extract/css");
var wrapper2 = (0, import_css7.style)({
  width: "100%",
  backgroundColor: COLORS.NEUTRAL0,
  padding: "8px 16px 24px",
  boxSizing: "border-box",
  borderTop: `1px solid ${COLORS.NEUTRAL100}`
});
var container2 = (0, import_css7.style)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  backgroundColor: COLORS.NEUTRAL100,
  borderRadius: "30px",
  padding: "8px 8px 8px 16px"
});
var input = (0, import_css7.style)(__spreadProps(__spreadValues({
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
var sendButton = (0, import_css7.style)({
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
  const [value, setValue] = (0, import_react5.useState)("");
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
  return /* @__PURE__ */ import_react5.default.createElement("div", { className: wrapper2 }, /* @__PURE__ */ import_react5.default.createElement("div", { className: container2 }, /* @__PURE__ */ import_react5.default.createElement(
    "input",
    {
      className: input,
      placeholder: disabled ? "AI\uAC00 \uB2F5\uBCC0 \uC911\uC785\uB2C8\uB2E4" : "\uAD81\uAE08\uD55C \uB0B4\uC6A9\uC744 \uC9C8\uBB38\uD574\uBCF4\uC138\uC694",
      value,
      onChange: (e) => setValue(e.target.value),
      onKeyDown: handleKeyDown,
      disabled
    }
  ), /* @__PURE__ */ import_react5.default.createElement(
    "button",
    {
      className: sendButton,
      onClick: handleSend,
      disabled: disabled || !value.trim(),
      "aria-label": "\uC804\uC1A1"
    },
    /* @__PURE__ */ import_react5.default.createElement(
      import_image5.default,
      {
        src: "/assets/icon24/send.svg",
        alt: "\uC804\uC1A1",
        width: 24,
        height: 24
      }
    )
  )));
}

// src/atoms/Chat/MessageBox/MessageBox.tsx
var import_react6 = __toESM(require("react"));

// src/atoms/Chat/MessageBox/MessageBox.css.ts
var import_css8 = require("@vanilla-extract/css");
var wrapper3 = (0, import_css8.style)({
  display: "flex",
  width: "100%",
  padding: "8px 18px"
});
var baseMessageBox = (0, import_css8.style)(__spreadProps(__spreadValues({}, TYPO.BODY3), {
  padding: "12px 16px",
  maxWidth: "80%",
  whiteSpace: "pre-wrap"
}));
var aiMessageBox = (0, import_css8.style)([
  baseMessageBox,
  {
    backgroundColor: COLORS.NEUTRAL100,
    borderRadius: "0 16px 16px 16px",
    color: "#000",
    marginRight: "auto"
  }
]);
var userMessageBox = (0, import_css8.style)([
  baseMessageBox,
  {
    backgroundColor: "#00A63E",
    borderRadius: "16px 0 16px 16px",
    color: "#fff",
    marginLeft: "auto"
  }
]);

// src/atoms/Chat/MessageBox/MessageBox.tsx
function MessageBox({
  children,
  variant = "ai"
}) {
  const messageClass = variant === "user" ? userMessageBox : aiMessageBox;
  return /* @__PURE__ */ import_react6.default.createElement("div", { className: wrapper3 }, /* @__PURE__ */ import_react6.default.createElement("div", { className: messageClass }, children));
}

// src/atoms/Chat/ThinkingBubble/ThinkingBubble.tsx
var import_react7 = __toESM(require("react"));

// src/atoms/Chat/ThinkingBubble/ThinkingBubble.css.ts
var import_css9 = require("@vanilla-extract/css");
var bounce = (0, import_css9.keyframes)({
  "0%, 80%, 100%": { transform: "scale(0)" },
  "40%": { transform: "scale(1.0)" }
});
var wrapper4 = (0, import_css9.style)({
  display: "flex",
  width: "100%",
  padding: "8px 18px",
  justifyContent: "flex-start"
});
var bubble = (0, import_css9.style)({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "16px 20px",
  backgroundColor: COLORS.NEUTRAL100,
  borderRadius: "0 16px 16px 16px"
});
var dot = (0, import_css9.style)({
  width: "8px",
  height: "8px",
  backgroundColor: "#34C759",
  borderRadius: "50%",
  animation: `${bounce} 1.4s infinite ease-in-out both`
});

// src/atoms/Chat/ThinkingBubble/ThinkingBubble.tsx
function ThinkingBubble() {
  return /* @__PURE__ */ import_react7.default.createElement("div", { className: wrapper4 }, /* @__PURE__ */ import_react7.default.createElement("div", { className: bubble }, /* @__PURE__ */ import_react7.default.createElement("div", { className: dot, style: { animationDelay: "0s" } }), /* @__PURE__ */ import_react7.default.createElement("div", { className: dot, style: { animationDelay: "0.2s" } }), /* @__PURE__ */ import_react7.default.createElement("div", { className: dot, style: { animationDelay: "0.4s" } })));
}

// src/atoms/Chat/TopicSelector/TopicSelector.tsx
var import_react8 = __toESM(require("react"));

// src/atoms/Chat/TopicSelector/TopicSelector.css.ts
var import_css10 = require("@vanilla-extract/css");
var container3 = (0, import_css10.style)({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  padding: "16px 18px"
});
var topicButton = (0, import_css10.style)(__spreadProps(__spreadValues({
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
function TopicSelector({
  topics,
  onSelectTopic
}) {
  return /* @__PURE__ */ import_react8.default.createElement("div", { className: container3 }, topics.map((topic) => /* @__PURE__ */ import_react8.default.createElement(
    "button",
    {
      key: topic,
      className: topicButton,
      onClick: () => onSelectTopic(topic)
    },
    topic
  )));
}

// src/atoms/Chip/Chip/Chip.tsx
var import_react9 = __toESM(require("react"));

// src/atoms/Chip/Chip/Chip.css.ts
var import_css11 = require("@vanilla-extract/css");
var root4 = (0, import_css11.style)(__spreadProps(__spreadValues({}, TYPO.HEADLINE2), {
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
  return /* @__PURE__ */ import_react9.default.createElement(
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
var import_react10 = __toESM(require("react"));
var import_image6 = __toESM(require("next/image"));

// src/atoms/Chip/ChipKeyword/ChipKeyword.css.ts
var import_css12 = require("@vanilla-extract/css");
var baseChip = (0, import_css12.style)(__spreadProps(__spreadValues({}, TYPO.LABEL1M), {
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
var chip = (0, import_css12.styleVariants)({
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
var closeButton = (0, import_css12.style)({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

// src/atoms/Chip/ChipKeyword/ChipKeyword.tsx
function ChipKeyword({
  text: text3,
  selected = false,
  onClose,
  onClick
}) {
  return /* @__PURE__ */ import_react10.default.createElement(
    "div",
    {
      className: chip[selected ? "selected" : "default"],
      onClick,
      role: "button"
    },
    /* @__PURE__ */ import_react10.default.createElement("span", null, text3),
    selected && /* @__PURE__ */ import_react10.default.createElement("button", { className: closeButton, onClick: onClose, "aria-label": "\uB2EB\uAE30" }, /* @__PURE__ */ import_react10.default.createElement(
      import_image6.default,
      {
        src: "/assets/icon16/x_line.svg",
        alt: "\uB2EB\uAE30",
        width: 16,
        height: 16
      }
    ))
  );
}
var ChipKeyword_default = ChipKeyword;

// src/atoms/Chip/ChipMapList/ChipMapList.tsx
var import_react11 = __toESM(require("react"));
var import_image7 = __toESM(require("next/image"));

// src/atoms/Chip/ChipMapList/ChipMapList.css.ts
var import_css13 = require("@vanilla-extract/css");
var locationListButton = (0, import_css13.style)({
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
var locationListText = (0, import_css13.style)(__spreadProps(__spreadValues({}, TYPO.LABEL2M), {
  color: COLORS.NEUTRAL50,
  paddingRight: "4px"
}));
var locationListCount = (0, import_css13.style)(__spreadProps(__spreadValues({}, TYPO.LABEL2B), {
  color: COLORS.LIME400
}));

// src/atoms/Chip/ChipMapList/ChipMapList.tsx
function ChipMapList({
  text: text3,
  cnt,
  onLocationListClick
}) {
  return /* @__PURE__ */ import_react11.default.createElement("button", { className: locationListButton, onClick: onLocationListClick }, /* @__PURE__ */ import_react11.default.createElement("span", null, /* @__PURE__ */ import_react11.default.createElement(
    import_image7.default,
    {
      src: "/assets/icon12/bullet-list_line-white.svg",
      alt: "\uBAA9\uB85D",
      width: 12,
      height: 12
    }
  )), /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("span", { className: locationListText }, text3), /* @__PURE__ */ import_react11.default.createElement("span", { className: locationListCount }, cnt)));
}

// src/atoms/Dangle/DangleCard/DangleCard.tsx
var import_react12 = __toESM(require("react"));
var import_image8 = __toESM(require("next/image"));

// src/atoms/Dangle/DangleCard/DangleCard.css.ts
var import_css14 = require("@vanilla-extract/css");
var root5 = (0, import_css14.style)({
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
var imageWrapper2 = (0, import_css14.style)({
  width: "100%",
  height: "100%",
  position: "relative"
});
var overlay2 = (0, import_css14.style)({
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
var views = (0, import_css14.style)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  fontWeight: "700",
  color: "#fff"
});
var bottom = (0, import_css14.style)({
  width: "100%",
  color: "#fff",
  textAlign: "left"
});
var title4 = (0, import_css14.style)(__spreadProps(__spreadValues({}, TYPO.DISPLAY), {
  whiteSpace: "pre-wrap",
  margin: 0,
  paddingBottom: "16px"
}));
var hashtag = (0, import_css14.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION1M), {
  display: "inline-block",
  padding: "4px 8px",
  backgroundColor: "#FFFFFF33",
  borderRadius: "30px"
}));
var image = (0, import_css14.style)({
  width: "100%",
  height: "100%",
  objectFit: "cover"
});

// src/atoms/Dangle/DangleCard/DangleCard.tsx
function DangleCard({
  imageUrl,
  views: views2 = 0,
  title: title13,
  hashtag: hashtag2,
  onClick
}) {
  return /* @__PURE__ */ import_react12.default.createElement("button", { className: root5, onClick }, /* @__PURE__ */ import_react12.default.createElement("div", { className: imageWrapper2 }, /* @__PURE__ */ import_react12.default.createElement(
    import_image8.default,
    {
      src: imageUrl,
      alt: title13,
      width: 280,
      height: 377,
      className: image
    }
  ), /* @__PURE__ */ import_react12.default.createElement("div", { className: overlay2 }, views2 > 0 && /* @__PURE__ */ import_react12.default.createElement("div", { className: views }, /* @__PURE__ */ import_react12.default.createElement(
    import_image8.default,
    {
      src: "/assets/icon24/eye-outlined-white.svg",
      alt: "\uC870\uD68C\uC218",
      width: 24,
      height: 24
    }
  ), /* @__PURE__ */ import_react12.default.createElement("span", null, views2.toLocaleString())), /* @__PURE__ */ import_react12.default.createElement("div", { className: bottom }, /* @__PURE__ */ import_react12.default.createElement("h3", { className: title4 }, title13), /* @__PURE__ */ import_react12.default.createElement("span", { className: hashtag }, hashtag2)))));
}

// src/atoms/Dangle/DangleItem/DangleItem.tsx
var import_react13 = __toESM(require("react"));
var import_image9 = __toESM(require("next/image"));

// src/atoms/Dangle/DangleItem/DangleItem.css.ts
var import_css15 = require("@vanilla-extract/css");
var root6 = (0, import_css15.style)({
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
var baseImageContainer = (0, import_css15.style)({
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
var imageContainer = (0, import_css15.styleVariants)({
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
var image2 = (0, import_css15.style)({
  width: "70px",
  height: "70px",
  objectFit: "cover",
  borderRadius: "50%"
});
var text = (0, import_css15.style)(__spreadProps(__spreadValues({}, TYPO.LABEL1M), {
  textAlign: "center",
  color: "#333"
}));

// src/atoms/Dangle/DangleItem/DangleItem.tsx
function DangleItem({
  state: state5,
  imageUrl,
  text: text3,
  onClick
}) {
  return /* @__PURE__ */ import_react13.default.createElement(
    "button",
    {
      type: "button",
      className: root6,
      onClick,
      "aria-label": `${text3} \uC544\uC774\uD15C`
    },
    /* @__PURE__ */ import_react13.default.createElement("div", { className: imageContainer[state5] }, /* @__PURE__ */ import_react13.default.createElement(
      import_image9.default,
      {
        src: imageUrl,
        alt: text3,
        width: 70,
        height: 70,
        className: image2
      }
    )),
    /* @__PURE__ */ import_react13.default.createElement("span", { className: text }, text3)
  );
}

// src/atoms/Dangle/DanglePlace/DanglePlace.tsx
var import_react14 = __toESM(require("react"));
var import_image10 = __toESM(require("next/image"));

// src/atoms/Dangle/DanglePlace/DanglePlace.css.ts
var import_css16 = require("@vanilla-extract/css");
var baseCard = (0, import_css16.style)({
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  backgroundColor: "#fff",
  cursor: "pointer",
  textAlign: "left"
});
var root7 = (0, import_css16.styleVariants)({
  default: [baseCard],
  isExpanded: [baseCard, { height: "auto" }]
});
var headerContainer = (0, import_css16.style)({
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  position: "relative"
});
var thumbnailWrapper = (0, import_css16.style)({
  width: "80px",
  height: "80px",
  borderRadius: "8px",
  overflow: "hidden",
  flexShrink: 0
});
var thumbnail = (0, import_css16.style)({
  width: "100%",
  height: "100%",
  objectFit: "cover"
});
var contentWrapper = (0, import_css16.style)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "2px"
});
var bookmarkButton = (0, import_css16.style)({
  position: "absolute",
  top: 0,
  right: 0,
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer"
});
var locationCategory = (0, import_css16.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
  color: COLORS.NEUTRAL500
}));
var name = (0, import_css16.style)(__spreadProps(__spreadValues({}, TYPO.BODY2B), {
  margin: 0
}));
var stats = (0, import_css16.style)({
  display: "flex",
  alignItems: "center",
  gap: "4px"
});
var statItem = (0, import_css16.style)(__spreadProps(__spreadValues({
  display: "flex",
  gap: "4px"
}, TYPO.CAPTION1B), {
  color: "#888",
  alignItems: "center"
}));
var statValue = (0, import_css16.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION1M), {
  color: COLORS.NEUTRAL500
}));
var tags = (0, import_css16.style)({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  paddingTop: "4px"
});
var tag = (0, import_css16.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
  backgroundColor: COLORS.NEUTRAL100,
  color: COLORS.NEUTRAL500,
  padding: "2px 4px",
  borderRadius: "1px"
}));
var expandedContent = (0, import_css16.style)({});
var details = (0, import_css16.style)({
  display: "flex",
  flexDirection: "column",
  gap: "2px"
});
var detailsTop = (0, import_css16.style)(__spreadProps(__spreadValues({
  display: "flex",
  justifyContent: "space-between"
}, TYPO.CAPTION1B), {
  color: COLORS.NEUTRAL500
}));
var detailItem = (0, import_css16.style)({
  display: "flex",
  alignItems: "center",
  gap: "8px"
});
var detailLabel = (0, import_css16.style)(__spreadValues({}, TYPO.CAPTION1M));
var detailValue = (0, import_css16.style)(__spreadProps(__spreadValues({
  width: "100%",
  textAlign: "right"
}, TYPO.HEADLINE2), {
  color: COLORS.NEUTRAL800,
  fontWeight: "bold"
}));

// src/atoms/Dangle/DanglePlace/DanglePlace.tsx
function DanglePlace({
  thumbnailUrl,
  locationCategory: locationCategory3,
  name: name4,
  distance,
  playCount,
  bookmarkCount,
  isExpanded = false,
  tags: tags3 = [],
  details: details3,
  onClick,
  isBookmarked = false,
  onBookmarkClick
}) {
  const initialImageSrc = (0, import_react14.useMemo)(() => {
    let decodedThumbnailUrl = thumbnailUrl;
    if (typeof thumbnailUrl === "string" && thumbnailUrl.includes("%")) {
      try {
        decodedThumbnailUrl = decodeURIComponent(thumbnailUrl);
      } catch (e) {
        console.error("URL \uB514\uCF54\uB529 \uC2E4\uD328:", thumbnailUrl, e);
        decodedThumbnailUrl = null;
      }
    }
    if (typeof decodedThumbnailUrl === "string" && decodedThumbnailUrl !== "\uC0AC\uC9C4 \uC5C6\uC74C" && /^https?:\/\//i.test(decodedThumbnailUrl)) {
      return decodedThumbnailUrl;
    }
    return "/assets/jeju.png";
  }, [thumbnailUrl]);
  const [currentImageSrc, setCurrentImageSrc] = (0, import_react14.useState)(initialImageSrc);
  (0, import_react14.useEffect)(() => {
    setCurrentImageSrc(initialImageSrc);
  }, [initialImageSrc]);
  const handleImageError = () => {
    setCurrentImageSrc("/assets/jeju.png");
  };
  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    if (onBookmarkClick) {
      onBookmarkClick();
    }
  };
  return /* @__PURE__ */ import_react14.default.createElement(
    "div",
    {
      className: root7[isExpanded ? "isExpanded" : "default"],
      onClick
    },
    /* @__PURE__ */ import_react14.default.createElement("div", { className: headerContainer }, /* @__PURE__ */ import_react14.default.createElement("div", { className: thumbnailWrapper }, /* @__PURE__ */ import_react14.default.createElement(
      import_image10.default,
      {
        src: currentImageSrc,
        alt: "\uC774\uBBF8\uC9C0",
        width: 80,
        height: 80,
        className: thumbnail,
        onError: handleImageError
      }
    )), /* @__PURE__ */ import_react14.default.createElement("div", { className: contentWrapper }, /* @__PURE__ */ import_react14.default.createElement("span", { className: locationCategory }, locationCategory3), /* @__PURE__ */ import_react14.default.createElement("h3", { className: name }, name4), /* @__PURE__ */ import_react14.default.createElement("div", { className: stats }, distance && /* @__PURE__ */ import_react14.default.createElement("span", { className: statValue }, distance, "km"), distance && (typeof playCount === "number" || typeof bookmarkCount === "number") && /* @__PURE__ */ import_react14.default.createElement("div", { className: statItem }, "\xB7"), typeof playCount === "number" && /* @__PURE__ */ import_react14.default.createElement("div", { className: statItem }, /* @__PURE__ */ import_react14.default.createElement(
      import_image10.default,
      {
        alt: "\uC7AC\uC0DD \uC218",
        width: 12,
        height: 12,
        src: "/assets/icon12/play_filled.svg"
      }
    ), /* @__PURE__ */ import_react14.default.createElement("span", { className: statValue }, playCount)), typeof playCount === "number" && typeof bookmarkCount === "number" && /* @__PURE__ */ import_react14.default.createElement("div", { className: statItem }, "\xB7"), typeof bookmarkCount === "number" && /* @__PURE__ */ import_react14.default.createElement("div", { className: statItem }, /* @__PURE__ */ import_react14.default.createElement(
      import_image10.default,
      {
        alt: "\uBD81\uB9C8\uD06C",
        width: 12,
        height: 12,
        src: "/assets/icon12/bookmark_filled.svg"
      }
    ), /* @__PURE__ */ import_react14.default.createElement("span", { className: statValue }, bookmarkCount))), /* @__PURE__ */ import_react14.default.createElement("div", { className: tags }, tags3.map((tag5, index) => /* @__PURE__ */ import_react14.default.createElement("span", { key: `${tag5}-${index}`, className: tag }, tag5)))), onBookmarkClick && /* @__PURE__ */ import_react14.default.createElement("button", { className: bookmarkButton, onClick: handleBookmarkClick }, /* @__PURE__ */ import_react14.default.createElement(
      import_image10.default,
      {
        alt: "\uBD81\uB9C8\uD06C",
        width: 24,
        height: 24,
        src: isBookmarked ? "/assets/icon24/bookmark_filled.svg" : "/assets/icon24/bookmark_line.svg"
      }
    ))),
    isExpanded && /* @__PURE__ */ import_react14.default.createElement("div", { className: expandedContent }, details3 && /* @__PURE__ */ import_react14.default.createElement("div", { className: details }, /* @__PURE__ */ import_react14.default.createElement("div", { className: detailsTop }, /* @__PURE__ */ import_react14.default.createElement("div", null, "\uD558\uB8E8 \uAE30\uC900"), /* @__PURE__ */ import_react14.default.createElement("div", { className: detailLabel }, details3.time)), /* @__PURE__ */ import_react14.default.createElement("div", { className: detailValue }, details3.price, /* @__PURE__ */ import_react14.default.createElement("span", { className: detailLabel }, " \uC6D0~"))))
  );
}
var DanglePlace_default = DanglePlace;

// src/atoms/Dangle/DanglePlay/DanglePlay.tsx
var import_react15 = __toESM(require("react"));
var import_image11 = __toESM(require("next/image"));

// src/atoms/Dangle/DanglePlay/DanglePlay.css.ts
var import_css17 = require("@vanilla-extract/css");
var baseRoot = (0, import_css17.style)({
  position: "relative",
  border: "none",
  padding: "0",
  boxSizing: "border-box",
  cursor: "pointer",
  transition: "transform 0.2s",
  ":hover": { transform: "scale(1.02)" }
});
var root8 = (0, import_css17.styleVariants)({
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
var baseImageWrapper = (0, import_css17.style)({
  width: "100%",
  position: "relative",
  borderRadius: "15px",
  overflow: "hidden",
  flexShrink: 0
});
var imageWrapper3 = (0, import_css17.styleVariants)({
  short: [baseImageWrapper, { height: "242px" }],
  small: [baseImageWrapper, { height: "100%" }],
  medium: [baseImageWrapper, { height: "242px" }]
});
var image3 = (0, import_css17.style)({
  width: "100%",
  height: "100%",
  objectFit: "cover"
});
var profileOverlay = (0, import_css17.style)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 25%)",
  padding: "12px",
  boxSizing: "border-box"
});
var profileContainer = (0, import_css17.style)({
  display: "flex",
  alignItems: "center",
  gap: "8px"
});
var profileImage2 = (0, import_css17.style)({
  objectFit: "cover",
  borderRadius: "50%",
  border: "1px solid #fff"
});
var name2 = (0, import_css17.style)(__spreadProps(__spreadValues({}, TYPO.LABEL2M), {
  color: "#fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}));
var content2 = (0, import_css17.style)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  justifyContent: "space-between",
  flex: 1
});
var textInfo = (0, import_css17.style)({
  display: "flex",
  flexDirection: "column",
  gap: "4px"
});
var location = (0, import_css17.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION1B), {
  color: COLORS.NEUTRAL700
}));
var address = (0, import_css17.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION1B), {
  color: COLORS.NEUTRAL500
}));
var title5 = (0, import_css17.style)(__spreadProps(__spreadValues({}, TYPO.LABEL1B), {
  textAlign: "left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}));
var tagWrapper = (0, import_css17.style)({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  maxHeight: "40px",
  overflow: "hidden"
});
var tag2 = (0, import_css17.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
  backgroundColor: COLORS.NEUTRAL100,
  borderRadius: "1px",
  padding: "2px 4px",
  color: COLORS.NEUTRAL500
}));
var stats2 = (0, import_css17.style)({
  display: "flex",
  alignItems: "center",
  gap: "4px"
});
var statItem2 = (0, import_css17.style)(__spreadProps(__spreadValues({
  display: "flex",
  alignItems: "center",
  gap: "4px"
}, TYPO.CAPTION1B), {
  color: "#888"
}));
var statValue2 = (0, import_css17.style)(__spreadValues({}, TYPO.CAPTION1M));
var timeAgo = (0, import_css17.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION1M), {
  color: "#888"
}));

// src/atoms/Dangle/DanglePlay/DanglePlay.tsx
function DanglePlay({
  type,
  width = "100%",
  imageUrl,
  profileImageUrl,
  name: name4,
  location: location3,
  address: address2,
  title: title13,
  views: views2,
  comments,
  timeAgo: timeAgo3,
  tags: tags3,
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
  const isValidImageUrl = typeof imageUrl === "string" && imageUrl !== "\uC0AC\uC9C4 \uC5C6\uC74C" && /^https?:\/\//i.test(imageUrl);
  const imageSrc = isValidImageUrl ? imageUrl : "/assets/jeju.png";
  return /* @__PURE__ */ import_react15.default.createElement("div", { className: root8[type], style: { width }, onClick }, /* @__PURE__ */ import_react15.default.createElement("div", { className: imageWrapper3[type] }, /* @__PURE__ */ import_react15.default.createElement(
    import_image11.default,
    {
      src: imageSrc,
      alt: "\uC774\uBBF8\uC9C0",
      width: imageWidth,
      height: imageHeight,
      className: image3
    }
  ), !isShort && profileImageUrl && /* @__PURE__ */ import_react15.default.createElement("div", { className: profileOverlay }, /* @__PURE__ */ import_react15.default.createElement("div", { className: profileContainer }, /* @__PURE__ */ import_react15.default.createElement(
    import_image11.default,
    {
      src: profileImageUrl,
      alt: `${name4}\uC758 \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0`,
      width: 22,
      height: 22,
      className: profileImage2
    }
  ), /* @__PURE__ */ import_react15.default.createElement("span", { className: name2 }, name4)))), isMedium && /* @__PURE__ */ import_react15.default.createElement("div", { className: content2 }, /* @__PURE__ */ import_react15.default.createElement("div", { className: textInfo }, /* @__PURE__ */ import_react15.default.createElement("div", { className: location }, location3, address2 && /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, " \xB7 ", /* @__PURE__ */ import_react15.default.createElement("span", { className: address }, address2))), /* @__PURE__ */ import_react15.default.createElement("div", { className: title5 }, title13), /* @__PURE__ */ import_react15.default.createElement("div", { className: tagWrapper }, tags3 == null ? void 0 : tags3.map((tag5) => /* @__PURE__ */ import_react15.default.createElement("span", { key: tag5, className: tag2 }, tag5)))), views2 && /* @__PURE__ */ import_react15.default.createElement("div", { className: stats2 }, /* @__PURE__ */ import_react15.default.createElement("div", { className: statItem2 }, /* @__PURE__ */ import_react15.default.createElement(
    import_image11.default,
    {
      src: "/assets/icon12/eye-outlined.svg",
      alt: "\uC870\uD68C\uC218",
      width: 12,
      height: 12
    }
  ), /* @__PURE__ */ import_react15.default.createElement("span", { className: statValue2 }, views2 == null ? void 0 : views2.toLocaleString())), /* @__PURE__ */ import_react15.default.createElement("div", { className: statItem2 }, "\xB7"), /* @__PURE__ */ import_react15.default.createElement("div", { className: statItem2 }, /* @__PURE__ */ import_react15.default.createElement(
    import_image11.default,
    {
      alt: "\uB313\uAE00",
      width: 12,
      height: 12,
      src: "/assets/icon12/bookmark_filled.svg"
    }
  ), /* @__PURE__ */ import_react15.default.createElement("span", { className: statValue2 }, comments == null ? void 0 : comments.toLocaleString())), /* @__PURE__ */ import_react15.default.createElement("div", { className: statItem2 }, "\xB7"), /* @__PURE__ */ import_react15.default.createElement("div", { className: timeAgo }, timeAgo3))), isShort && /* @__PURE__ */ import_react15.default.createElement("div", { className: content2 }, /* @__PURE__ */ import_react15.default.createElement("div", { className: location }, location3, address2 && /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, " \xB7 ", /* @__PURE__ */ import_react15.default.createElement("span", { className: address }, address2)))));
}

// src/atoms/Dangle/DangleReview/DangleReview.tsx
var import_react16 = __toESM(require("react"));
var import_image12 = __toESM(require("next/image"));

// src/atoms/Dangle/DangleReview/DangleReview.css.ts
var import_css18 = require("@vanilla-extract/css");
var root9 = (0, import_css18.style)({
  backgroundColor: "#FAFAFA",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "16px",
  borderRadius: "12px"
});
var userInfo = (0, import_css18.style)({
  display: "flex",
  alignItems: "center",
  gap: "8px"
});
var placeInfo = (0, import_css18.style)({
  display: "flex",
  flexDirection: "column",
  gap: "2px"
});
var locationCategory2 = (0, import_css18.style)([
  TYPO.CAPTION2M,
  { color: COLORS.NEUTRAL500 }
]);
var placeName = (0, import_css18.style)([TYPO.BODY2B, { color: "#262626" }]);
var profileImage3 = (0, import_css18.style)({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  objectFit: "cover"
});
var userInfoText = (0, import_css18.style)({
  display: "flex",
  flexDirection: "column"
});
var userName = (0, import_css18.style)(TYPO.LABEL1B);
var dogInfo = (0, import_css18.style)([TYPO.CAPTION2M, { color: COLORS.NEUTRAL500 }]);
var reviewHeader = (0, import_css18.style)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});
var stars = (0, import_css18.style)({
  display: "flex"
});
var date = (0, import_css18.style)([TYPO.CAPTION1M, { color: COLORS.NEUTRAL400 }]);
var reviewDetails = (0, import_css18.style)({
  display: "flex",
  flexDirection: "column",
  gap: "8px"
});
var detailItem2 = (0, import_css18.style)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});
var detailLabel2 = (0, import_css18.style)([TYPO.LABEL1M, { color: COLORS.NEUTRAL500 }]);
var detailValue2 = (0, import_css18.style)([
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
var reviewContent = (0, import_css18.style)([TYPO.BODY2M, { color: COLORS.NEUTRAL700 }]);

// src/atoms/Dangle/DangleReview/DangleReview.tsx
var CHIP_LABELS = ["\uCD9C\uC785 \uAC00\uB2A5 \uC5EC\uBD80", "\uCD9C\uC785 \uC870\uAC74", "\uBC18\uB824\uACAC \uCE5C\uD654\uB3C4"];
var PawRating = ({ rating }) => {
  return /* @__PURE__ */ import_react16.default.createElement("div", { className: stars }, [...Array(5)].map((_, index) => /* @__PURE__ */ import_react16.default.createElement(
    import_image12.default,
    {
      key: index,
      alt: index < rating ? "paw-filled" : "paw-empty",
      width: 16,
      height: 16,
      src: index < rating ? "/assets/icon24/dogfootprint-blue.svg" : "/assets/icon24/dogfootprint-white.svg"
    }
  )));
};
function DangleReview({
  profileImageUrl,
  userName: userName3,
  dogInfo: dogInfo2,
  locationCategory: locationCategory3,
  placeName: placeName2,
  isMine,
  rating,
  date: date2,
  chips,
  content: content4,
  onClick
}) {
  return /* @__PURE__ */ import_react16.default.createElement("div", { className: root9, onClick }, isMine ? (
    // 내 리뷰일 경우 (장소 정보)
    /* @__PURE__ */ import_react16.default.createElement("div", { className: placeInfo }, /* @__PURE__ */ import_react16.default.createElement("span", { className: locationCategory2 }, locationCategory3), /* @__PURE__ */ import_react16.default.createElement("div", { className: placeName }, placeName2))
  ) : (
    // 다른 사람 리뷰일 경우 (유저 정보)
    /* @__PURE__ */ import_react16.default.createElement("div", { className: userInfo }, /* @__PURE__ */ import_react16.default.createElement(
      import_image12.default,
      {
        src: profileImageUrl || "/assets/dangle/dog.png",
        alt: userName3 || "user",
        width: 24,
        height: 24,
        className: profileImage3
      }
    ), /* @__PURE__ */ import_react16.default.createElement("div", { className: userInfoText }, /* @__PURE__ */ import_react16.default.createElement("span", { className: userName }, userName3), dogInfo2 && /* @__PURE__ */ import_react16.default.createElement("span", { className: dogInfo }, dogInfo2)))
  ), /* @__PURE__ */ import_react16.default.createElement("div", { className: reviewDetails }, /* @__PURE__ */ import_react16.default.createElement("div", { className: reviewHeader }, /* @__PURE__ */ import_react16.default.createElement(PawRating, { rating }), /* @__PURE__ */ import_react16.default.createElement("span", { className: date }, date2)), chips.map((chipValue, index) => {
    const label6 = CHIP_LABELS[index];
    if (!label6) return null;
    return /* @__PURE__ */ import_react16.default.createElement("div", { key: label6, className: detailItem2 }, /* @__PURE__ */ import_react16.default.createElement("span", { className: detailLabel2 }, label6), /* @__PURE__ */ import_react16.default.createElement("span", { className: detailValue2 }, chipValue));
  })), /* @__PURE__ */ import_react16.default.createElement("p", { className: reviewContent }, content4));
}

// src/atoms/Dangle/DangleVideo/DangleVideo.tsx
var import_react17 = __toESM(require("react"));
var import_image13 = __toESM(require("next/image"));

// src/atoms/Dangle/DangleVideo/DangleVideo.css.ts
var import_css19 = require("@vanilla-extract/css");
var root10 = (0, import_css19.style)({
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
var thumbnailWrapper2 = (0, import_css19.style)({
  width: "70px",
  height: "90px",
  borderRadius: "6px",
  overflow: "hidden",
  flexShrink: 0
});
var thumbnail2 = (0, import_css19.style)({
  width: "100%",
  height: "100%",
  objectFit: "cover"
});
var contentWrapper2 = (0, import_css19.style)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  minWidth: 0
});
var title6 = (0, import_css19.style)(__spreadProps(__spreadValues({}, TYPO.LABEL1M), {
  margin: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}));
var stats3 = (0, import_css19.style)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: COLORS.NEUTRAL500
});
var statItem3 = (0, import_css19.style)({
  display: "flex",
  alignItems: "center",
  gap: "2px"
});
var statValue3 = (0, import_css19.style)(__spreadValues({}, TYPO.CAPTION1B));
var divider = (0, import_css19.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION1B), {
  margin: "0 2px"
}));
var timeAgo2 = (0, import_css19.style)(__spreadValues({}, TYPO.CAPTION1M));
var playButtonWrapper = (0, import_css19.style)({
  width: "32px",
  height: "32px",
  flexShrink: "0"
});
var tagWrapper2 = (0, import_css19.style)({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  maxHeight: "40px",
  overflow: "hidden"
});
var tag3 = (0, import_css19.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
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
  timeAgo: timeAgo3 = "1\uAC1C\uC6D4 \uC804",
  tags: tags3,
  onClick
}) {
  return /* @__PURE__ */ import_react17.default.createElement("div", { className: root10, onClick }, /* @__PURE__ */ import_react17.default.createElement("div", { className: thumbnailWrapper2 }, /* @__PURE__ */ import_react17.default.createElement(
    import_image13.default,
    {
      src: thumbnailUrl,
      alt: "\uBE44\uB514\uC624 \uC378\uB124\uC77C",
      width: 70,
      height: 90,
      className: thumbnail2
    }
  )), /* @__PURE__ */ import_react17.default.createElement("div", { className: contentWrapper2 }, /* @__PURE__ */ import_react17.default.createElement("h3", { className: title6 }, title13), tags3 && /* @__PURE__ */ import_react17.default.createElement("div", { className: tagWrapper2 }, tags3 == null ? void 0 : tags3.map((tag5) => /* @__PURE__ */ import_react17.default.createElement("span", { key: tag5, className: tag3 }, tag5))), /* @__PURE__ */ import_react17.default.createElement("div", { className: stats3 }, /* @__PURE__ */ import_react17.default.createElement("div", { className: statItem3 }, /* @__PURE__ */ import_react17.default.createElement(
    import_image13.default,
    {
      src: "/assets/icon12/eye-outlined.svg",
      alt: "\uC870\uD68C\uC218",
      width: 12,
      height: 12
    }
  ), /* @__PURE__ */ import_react17.default.createElement("span", { className: statValue3 }, views2.toLocaleString())), /* @__PURE__ */ import_react17.default.createElement("span", { className: divider }, "\xB7"), /* @__PURE__ */ import_react17.default.createElement("div", { className: statItem3 }, /* @__PURE__ */ import_react17.default.createElement(
    import_image13.default,
    {
      alt: "\uB313\uAE00",
      width: 12,
      height: 12,
      src: "/assets/icon12/bookmark_filled.svg"
    }
  ), /* @__PURE__ */ import_react17.default.createElement("span", { className: statValue3 }, comments.toLocaleString())), /* @__PURE__ */ import_react17.default.createElement("span", { className: divider }, "\xB7"), /* @__PURE__ */ import_react17.default.createElement("span", { className: timeAgo2 }, timeAgo3))), /* @__PURE__ */ import_react17.default.createElement("div", { className: playButtonWrapper }, /* @__PURE__ */ import_react17.default.createElement(
    import_image13.default,
    {
      src: "/assets/icon32/play-btn.svg",
      alt: "\uC7AC\uC0DD",
      width: 32,
      height: 32
    }
  )));
}
var DangleVideo_default = DangleVideo;

// src/atoms/Dropdown/Dropdown.tsx
var import_react18 = __toESM(require("react"));
var import_image14 = __toESM(require("next/image"));

// src/atoms/Dropdown/Dropdown.css.ts
var import_css20 = require("@vanilla-extract/css");
var container4 = (0, import_css20.style)({
  position: "relative",
  width: "fit-content"
});
var button = (0, import_css20.style)(__spreadProps(__spreadValues({
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
var chevronIcon = (0, import_css20.style)({
  filter: "brightness(0) invert(1)",
  transition: "transform 0.2s ease-in-out"
});
var chevronIconUp = (0, import_css20.style)({
  transform: "rotate(180deg)"
});
var list = (0, import_css20.style)({
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
var listItem = (0, import_css20.style)(__spreadProps(__spreadValues({
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
  const [isOpen, setIsOpen] = (0, import_react18.useState)(false);
  const dropdownRef = (0, import_react18.useRef)(null);
  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };
  (0, import_react18.useEffect)(() => {
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
  return /* @__PURE__ */ import_react18.default.createElement("div", { className: container4, ref: dropdownRef }, /* @__PURE__ */ import_react18.default.createElement(
    "button",
    {
      className: button,
      onClick: () => setIsOpen((prev) => !prev),
      "aria-haspopup": "listbox",
      "aria-expanded": isOpen
    },
    /* @__PURE__ */ import_react18.default.createElement("span", null, selectedLabel),
    /* @__PURE__ */ import_react18.default.createElement(
      import_image14.default,
      {
        src: "/assets/icon24/chevron-down.svg",
        alt: "\uB4DC\uB86D\uB2E4\uC6B4 \uD1A0\uAE00",
        width: 24,
        height: 24,
        className: `${chevronIcon} ${isOpen ? chevronIconUp : ""}`
      }
    )
  ), isOpen && /* @__PURE__ */ import_react18.default.createElement("ul", { className: list, role: "listbox" }, options.map((option) => /* @__PURE__ */ import_react18.default.createElement(
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
var import_react19 = __toESM(require("react"));
var import_image15 = __toESM(require("next/image"));

// src/atoms/EmptyState/EmptyState.css.ts
var import_css21 = require("@vanilla-extract/css");
var root11 = (0, import_css21.style)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "100%",
  gap: "4px"
});
var imageWrapper4 = (0, import_css21.style)({});
var image4 = (0, import_css21.style)({
  objectFit: "contain"
});
var title7 = (0, import_css21.style)(__spreadProps(__spreadValues({}, TYPO.LABEL1B), {
  color: COLORS.NEUTRAL600
}));
var description = (0, import_css21.style)(__spreadProps(__spreadValues({}, TYPO.LABEL2M), {
  color: COLORS.NEUTRAL500
}));

// src/atoms/EmptyState/EmptyState.tsx
function EmptyState({
  imageUrl = "/assets/dog_bag.png",
  title: title13 = "\uC7A5\uC18C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
  description: description4 = "\uC870\uAC74\uC744 \uBCC0\uACBD\uD558\uAC70\uB098 \uB2E4\uB978 \uAC80\uC0C9\uC5B4\uB85C \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uBCF4\uC138\uC694."
}) {
  return /* @__PURE__ */ import_react19.default.createElement("div", { className: root11 }, imageUrl && /* @__PURE__ */ import_react19.default.createElement("div", { className: imageWrapper4 }, /* @__PURE__ */ import_react19.default.createElement(
    import_image15.default,
    {
      src: imageUrl,
      alt: "empty",
      width: 160,
      height: 160,
      className: image4
    }
  )), /* @__PURE__ */ import_react19.default.createElement("h3", { className: title7 }, title13), /* @__PURE__ */ import_react19.default.createElement("p", { className: description }, description4));
}
var EmptyState_default = EmptyState;

// src/atoms/Fab/Fab.tsx
var import_react20 = __toESM(require("react"));
var import_image16 = __toESM(require("next/image"));

// src/atoms/Fab/Fab.css.ts
var import_css22 = require("@vanilla-extract/css");
var root12 = (0, import_css22.style)({
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
function Fab({ onClick, className }) {
  const combinedClassName = [root12, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ import_react20.default.createElement("button", { className: combinedClassName, onClick }, /* @__PURE__ */ import_react20.default.createElement(import_image16.default, { src: "/assets/map/fab.svg", alt: "\uB315\uAE00\uCD94\uCC9C", width: 60, height: 60 }));
}

// src/atoms/FilterChip/FilterChip.tsx
var import_react21 = __toESM(require("react"));
var import_image17 = __toESM(require("next/image"));

// src/atoms/FilterChip/FilterChip.css.ts
var import_css23 = require("@vanilla-extract/css");
var baseChip2 = (0, import_css23.style)({
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
var chip2 = (0, import_css23.styleVariants)({
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
var text2 = (0, import_css23.styleVariants)({
  selected: {
    color: "#fff"
  },
  default: {
    color: "#404040"
  }
});
var icon2 = (0, import_css23.styleVariants)({
  selected: {
    filter: "brightness(0) invert(1)"
  },
  default: {
    filter: "none"
  }
});

// src/atoms/FilterChip/FilterChip.tsx
function FilterChip({
  text: text3,
  iconUrl,
  selected = false,
  onClick
}) {
  return /* @__PURE__ */ import_react21.default.createElement(
    "button",
    {
      className: chip2[selected ? "selected" : "default"],
      onClick,
      role: "button"
    },
    iconUrl && /* @__PURE__ */ import_react21.default.createElement("div", { className: icon2[selected ? "selected" : "default"] }, /* @__PURE__ */ import_react21.default.createElement(import_image17.default, { src: iconUrl, alt: "", width: 16, height: 16 })),
    /* @__PURE__ */ import_react21.default.createElement("span", { className: text2[selected ? "selected" : "default"] }, text3)
  );
}

// src/atoms/FilterChipExpand/FilterChipExpand.tsx
var import_react22 = __toESM(require("react"));

// src/atoms/FilterChipExpand/FilterChipExpand.css.ts
var import_css24 = require("@vanilla-extract/css");
var baseChip3 = (0, import_css24.style)(__spreadProps(__spreadValues({}, TYPO.LABEL1M), {
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
var root13 = (0, import_css24.styleVariants)({
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
var textWrapper = (0, import_css24.style)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2px"
});
var title8 = (0, import_css24.style)({
  fontWeight: "bold"
});
var caption = (0, import_css24.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION1M), {
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
  return /* @__PURE__ */ import_react22.default.createElement(
    "button",
    {
      className: root13[selected ? "selected" : "default"],
      onClick,
      role: "button"
    },
    /* @__PURE__ */ import_react22.default.createElement("div", { className: textWrapper }, /* @__PURE__ */ import_react22.default.createElement("span", { className: title8 }, title13), caption2 && /* @__PURE__ */ import_react22.default.createElement("span", { className: caption }, caption2))
  );
}
var FilterChipExpand_default = FilterChipExpand;

// src/atoms/Header/Header.tsx
var import_react23 = __toESM(require("react"));

// src/atoms/Header/Header.css.ts
var import_css25 = require("@vanilla-extract/css");
var root14 = (0, import_css25.style)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "16px 18px"
});
var titleWrapper = (0, import_css25.style)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%"
});
var title9 = (0, import_css25.style)(__spreadProps(__spreadValues({}, TYPO.HEADLINE1), {
  margin: 0,
  color: "#262626"
}));
var desc2 = (0, import_css25.style)({
  fontSize: "16px",
  fontWeight: 500,
  color: "#1F2329",
  margin: 0,
  paddingTop: "8px"
});
var iconButton = (0, import_css25.style)({
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  flexShrink: 0
});

// src/atoms/Header/Header.tsx
var import_image18 = __toESM(require("next/image"));
function Header({
  title: title13,
  desc: desc4,
  onArrowClick,
  onReClick,
  marginTop
}) {
  const hasRightIcon = onArrowClick || onReClick;
  return /* @__PURE__ */ import_react23.default.createElement("div", { className: root14, style: { marginTop } }, /* @__PURE__ */ import_react23.default.createElement("div", { className: titleWrapper }, /* @__PURE__ */ import_react23.default.createElement("h2", { className: title9 }, title13), hasRightIcon && /* @__PURE__ */ import_react23.default.createElement(
    "button",
    {
      className: iconButton,
      onClick: onArrowClick || onReClick,
      "aria-label": onArrowClick ? "\uB354\uBCF4\uAE30" : "\uC0C8\uB85C\uACE0\uCE68"
    },
    /* @__PURE__ */ import_react23.default.createElement(
      import_image18.default,
      {
        src: onArrowClick ? "/assets/icon24/chevron-right.svg" : "/assets/icon24/rotate-cw.svg",
        alt: onArrowClick ? "\uD654\uC0B4\uD45C \uC544\uC774\uCF58" : "\uC0C8\uB85C\uACE0\uCE68 \uC544\uC774\uCF58",
        width: 24,
        height: 24
      }
    )
  )), desc4 && /* @__PURE__ */ import_react23.default.createElement("p", { className: desc2 }, desc4));
}
var Header_default = Header;

// src/atoms/LoadingSpinner/style.css.ts
var import_css26 = require("@vanilla-extract/css");
var overlay3 = (0, import_css26.style)({
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
var spinner = (0, import_css26.style)({
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
var import_react24 = __toESM(require("react"));
var import_image19 = __toESM(require("next/image"));

// src/atoms/Modal/Modal.css.ts
var import_css27 = require("@vanilla-extract/css");
var overlay4 = (0, import_css27.style)({
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
var modalContainer = (0, import_css27.style)({
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
var modalHeader = (0, import_css27.style)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px"
});
var modalTitle = (0, import_css27.style)(__spreadProps(__spreadValues({}, TYPO.HEADING2), {
  margin: 0,
  flexGrow: 1
}));
var closeButton2 = (0, import_css27.style)({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "16px"
});
var modalContent = (0, import_css27.style)({
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
  return /* @__PURE__ */ import_react24.default.createElement("div", { className: overlay4, onClick: handleBackdropClick }, /* @__PURE__ */ import_react24.default.createElement("div", { className: modalContainer }, /* @__PURE__ */ import_react24.default.createElement("div", { className: modalHeader }, title13 && /* @__PURE__ */ import_react24.default.createElement("h2", { className: modalTitle }, title13), /* @__PURE__ */ import_react24.default.createElement("button", { className: closeButton2, onClick: onClose, "aria-label": "\uB2EB\uAE30" }, /* @__PURE__ */ import_react24.default.createElement(
    import_image19.default,
    {
      src: "/assets/icon24/x_line.svg",
      alt: "\uB2EB\uAE30",
      width: 24,
      height: 24
    }
  ))), /* @__PURE__ */ import_react24.default.createElement("div", { className: modalContent }, children)));
}

// src/atoms/NavBar/NavBar.tsx
var import_react25 = __toESM(require("react"));
var import_image20 = __toESM(require("next/image"));
var import_navigation = require("next/navigation");

// src/atoms/NavBar/NavBar.css.ts
var import_css28 = require("@vanilla-extract/css");
var root15 = (0, import_css28.style)({
  width: "100%",
  height: "56px",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
});
var navItem = (0, import_css28.style)({
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
var bottomNavTextBase = (0, import_css28.style)(__spreadValues({}, TYPO.CAPTION2M));
var navText = (0, import_css28.style)([bottomNavTextBase, { color: COLORS.NEUTRAL400 }]);
var navTextSelected = (0, import_css28.style)([bottomNavTextBase, { color: "#262626" }]);

// ../../src/constants/navData.ts
var NAV_ITEMS = [
  {
    id: "near",
    text: "\uB0B4\uADFC\uCC98",
    iconFill: "/assets/nav/map_active.svg",
    iconLine: "/assets/nav/map.svg",
    path: "/map"
  },
  {
    id: "dangle",
    text: "\uB315\uAE00\uC601\uC0C1",
    iconFill: "/assets/nav/video_active.svg",
    iconLine: "/assets/nav/video.svg",
    path: "/shorts?contextId=PLACE_jeju_si"
  },
  {
    id: "ai",
    text: "AI\uC5EC\uD589\uCF00\uC5B4",
    iconFill: "/assets/nav/ai_active.svg",
    iconLine: "/assets/nav/ai.svg",
    path: "/chat"
  },
  {
    id: "jeju",
    text: "\uC81C\uC8FC\uC774\uB3D9",
    iconFill: "/assets/nav/move_active.svg",
    iconLine: "/assets/nav/move.svg",
    path: "/jeju"
  },
  {
    id: "my",
    text: "\uB9C8\uC774",
    iconFill: "/assets/nav/my_active.svg",
    iconLine: "/assets/nav/my.svg",
    path: "/my"
  }
];

// src/atoms/NavBar/NavBar.tsx
function NavBar({ activePage }) {
  const router = (0, import_navigation.useRouter)();
  return /* @__PURE__ */ import_react25.default.createElement("nav", { className: root15 }, NAV_ITEMS.map((item) => /* @__PURE__ */ import_react25.default.createElement(
    "button",
    {
      key: item.id,
      className: navItem,
      onClick: () => router.push(item.path)
    },
    /* @__PURE__ */ import_react25.default.createElement(
      import_image20.default,
      {
        src: activePage === item.id ? item.iconFill : item.iconLine,
        alt: item.text,
        width: 24,
        height: 24
      }
    ),
    /* @__PURE__ */ import_react25.default.createElement(
      "span",
      {
        className: activePage === item.id ? navTextSelected : navText
      },
      item.text
    )
  )));
}
var NavBar_default = NavBar;

// src/atoms/NoticeBox/NoticeBox.tsx
var import_react26 = __toESM(require("react"));

// src/atoms/NoticeBox/NoticeBox.css.ts
var import_css29 = require("@vanilla-extract/css");
var YELLOW_COLORS = {
  background: "#FEFCE8",
  text: "#D08700"
};
var BLUE_COLORS = {
  background: "#EFF6FF",
  text: "#525252"
};
var slideDown = (0, import_css29.keyframes)({
  "0%": { opacity: 0, transform: "translateY(-10px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideUp = (0, import_css29.keyframes)({
  "0%": { opacity: 1, transform: "translateY(0)" },
  "100%": { opacity: 0, transform: "translateY(-10px)" }
});
var animateIn = (0, import_css29.style)({
  animation: `${slideDown} 0.4s ease-out`
});
var animateOut = (0, import_css29.style)({
  animation: `${slideUp} 0.4s ease-out forwards`
});
var container5 = (0, import_css29.style)({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  padding: "12px",
  borderRadius: "16px"
});
var iconWrapper = (0, import_css29.style)({
  flexShrink: 0,
  width: "20px",
  height: "20px",
  marginTop: "1px"
});
var content3 = (0, import_css29.style)(__spreadProps(__spreadValues({
  flexGrow: 1
}, TYPO.CAPTION1M), {
  margin: 0
}));
var closeButton3 = (0, import_css29.style)({
  flexShrink: 0,
  width: "20px",
  height: "20px",
  padding: 0,
  background: "transparent",
  border: "none",
  cursor: "pointer",
  marginTop: "1px"
});
var yellowTheme = (0, import_css29.style)({
  backgroundColor: YELLOW_COLORS.background,
  color: YELLOW_COLORS.text
});
var blueTheme = (0, import_css29.style)({
  backgroundColor: BLUE_COLORS.background,
  color: BLUE_COLORS.text
});

// src/atoms/NoticeBox/NoticeBox.tsx
var import_image21 = __toESM(require("next/image"));
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
  return /* @__PURE__ */ import_react26.default.createElement(
    "div",
    {
      className: `${container5} ${themeClass} ${animationClass}`,
      role: "alert"
    },
    /* @__PURE__ */ import_react26.default.createElement("div", { className: iconWrapper }, /* @__PURE__ */ import_react26.default.createElement(import_image21.default, { src: emphasisIconSrc, alt: "icon", width: 16, height: 16 })),
    /* @__PURE__ */ import_react26.default.createElement("p", { className: content3 }, children),
    /* @__PURE__ */ import_react26.default.createElement(
      "button",
      {
        type: "button",
        className: closeButton3,
        onClick: onClose,
        "aria-label": "\uC54C\uB9BC \uB2EB\uAE30"
      },
      /* @__PURE__ */ import_react26.default.createElement(import_image21.default, { src: closeIconSrc, alt: "close icon", width: 16, height: 16 })
    )
  );
};
var NoticeBox_default = NoticeBox;

// src/atoms/Pagination/Pagination.tsx
var import_react27 = __toESM(require("react"));

// src/atoms/Pagination/Pagination.css.ts
var import_css30 = require("@vanilla-extract/css");
var root16 = (0, import_css30.style)({
  display: "flex",
  alignItems: "center",
  gap: "4px"
});
var page = (0, import_css30.style)({
  cursor: "pointer",
  backgroundColor: "#ccc",
  border: "none",
  borderRadius: "50%",
  width: "8px",
  height: "8px",
  padding: 0
});
var active = (0, import_css30.style)({
  backgroundColor: "#000"
});

// src/atoms/Pagination/Pagination.tsx
function Pagination({
  currentPage,
  totalPages,
  onPageChange
}) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return /* @__PURE__ */ import_react27.default.createElement("nav", { className: root16, "aria-label": "\uD398\uC774\uC9C0\uB124\uC774\uC158" }, pages.map((page2) => /* @__PURE__ */ import_react27.default.createElement(
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
var import_react28 = __toESM(require("react"));
var import_image22 = __toESM(require("next/image"));

// src/atoms/ProfileCard/style.css.ts
var import_css31 = require("@vanilla-extract/css");
var container6 = (0, import_css31.style)({
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
var profileInfo = (0, import_css31.style)({
  display: "flex",
  alignItems: "center",
  gap: "12px"
});
var avatar = (0, import_css31.style)({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  objectFit: "cover"
});
var textInfo2 = (0, import_css31.style)({
  display: "flex",
  flexDirection: "column",
  gap: "2px"
});
var nameLine = (0, import_css31.style)({
  display: "flex",
  alignItems: "center",
  gap: "4px"
});
var name3 = (0, import_css31.style)(__spreadProps(__spreadValues({}, TYPO.BODY1B), {
  color: COLORS.NEUTRAL900
}));
var description2 = (0, import_css31.style)(__spreadProps(__spreadValues({}, TYPO.BODY2M), {
  color: COLORS.NEUTRAL700
}));
var details2 = (0, import_css31.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION1M), {
  color: COLORS.NEUTRAL500
}));
var editButton = (0, import_css31.style)({
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
  return /* @__PURE__ */ import_react28.default.createElement("div", { className: `${container6} ${className}` }, /* @__PURE__ */ import_react28.default.createElement("div", { className: profileInfo }, /* @__PURE__ */ import_react28.default.createElement(
    import_image22.default,
    {
      src: imageUrl,
      alt: name4,
      width: 48,
      height: 48,
      className: avatar
    }
  ), /* @__PURE__ */ import_react28.default.createElement("div", { className: textInfo2 }, /* @__PURE__ */ import_react28.default.createElement("div", { className: nameLine }, /* @__PURE__ */ import_react28.default.createElement("span", { className: name3 }, name4), /* @__PURE__ */ import_react28.default.createElement("span", { className: description2 }, description4)), /* @__PURE__ */ import_react28.default.createElement("span", { className: details2 }, details3))), /* @__PURE__ */ import_react28.default.createElement("button", { className: editButton, onClick: onEditClick }, /* @__PURE__ */ import_react28.default.createElement(
    import_image22.default,
    {
      src: "/assets/icon16/pencil_line.svg",
      alt: "\uC218\uC815",
      width: 16,
      height: 16
    }
  )));
};
var ProfileCard_default = ProfileCard;

// src/atoms/ProgressCircle/ProgressCircle.tsx
var import_react29 = __toESM(require("react"));

// src/atoms/ProgressCircle/style.css.ts
var import_css32 = require("@vanilla-extract/css");
var fillAnim = (0, import_css32.keyframes)({
  "0%": { strokeDashoffset: 63 },
  "100%": { strokeDashoffset: 0 }
});
var circleBase = (0, import_css32.style)({
  transform: "rotate(-90deg)",
  overflow: "visible"
});
var progressRing = (0, import_css32.style)({
  transition: "stroke-dashoffset 0.4s ease"
});
var active2 = (0, import_css32.style)({
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
  return /* @__PURE__ */ import_react29.default.createElement(
    "svg",
    {
      className: `${circleBase} ${className}`,
      width: size2,
      height: size2,
      viewBox: "0 0 24 24"
    },
    /* @__PURE__ */ import_react29.default.createElement(
      "circle",
      {
        cx: "12",
        cy: "12",
        r: radius,
        stroke: "#E0E0E0",
        strokeWidth: "3",
        fill: "none"
      }
    ),
    /* @__PURE__ */ import_react29.default.createElement(
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
    )
  );
}

// src/atoms/RadioGroup/RadioGroup.tsx
var import_react30 = __toESM(require("react"));

// src/atoms/RadioGroup/style.css.ts
var import_css33 = require("@vanilla-extract/css");
var fieldset = (0, import_css33.style)({
  border: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "12px"
});
var legend = (0, import_css33.style)(__spreadProps(__spreadValues({}, TYPO.BODY1B), {
  color: "#000",
  padding: "20px 0px",
  width: "100%"
}));
var optionsContainer = (0, import_css33.style)({
  display: "flex",
  flexDirection: "column",
  gap: "16px"
});
var label3 = (0, import_css33.style)({
  display: "flex",
  alignItems: "center",
  cursor: "pointer"
});
var radioInput = (0, import_css33.style)({
  position: "absolute",
  opacity: 0,
  width: 0,
  height: 0
});
var radioVisual = (0, import_css33.style)({
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
(0, import_css33.globalStyle)(`${radioInput}:checked + ${radioVisual}::after`, {
  content: '""',
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "white"
});
var labelText = (0, import_css33.style)(__spreadProps(__spreadValues({}, TYPO.LABEL1M), {
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
  return /* @__PURE__ */ import_react30.default.createElement("fieldset", { className: fieldset, disabled }, /* @__PURE__ */ import_react30.default.createElement("legend", { className: legend }, label6), /* @__PURE__ */ import_react30.default.createElement("div", { className: optionsContainer }, options.map((option) => /* @__PURE__ */ import_react30.default.createElement("label", { key: option.value, className: label3 }, /* @__PURE__ */ import_react30.default.createElement(
    "input",
    {
      type: "radio",
      name: label6,
      value: option.value,
      checked: selectedValue === option.value,
      onChange: () => onSelect(option.value),
      className: radioInput
    }
  ), /* @__PURE__ */ import_react30.default.createElement("span", { className: radioVisual }), /* @__PURE__ */ import_react30.default.createElement("span", { className: labelText }, option.label)))));
}

// src/atoms/SearchField/SearchField.tsx
var import_react31 = __toESM(require("react"));
var import_image23 = __toESM(require("next/image"));

// src/atoms/SearchField/SearchField.css.ts
var import_css34 = require("@vanilla-extract/css");
var rotateAnimation = (0, import_css34.keyframes)({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" }
});
var wrapper5 = (0, import_css34.style)({
  width: "100%"
});
var field = (0, import_css34.style)({
  display: "flex",
  alignItems: "center",
  borderRadius: "99px",
  padding: "11px 16px",
  background: COLORS.NEUTRAL0,
  boxShadow: `inset 0 0 0 1px ${COLORS.NEUTRAL200}`,
  transition: "box-shadow .12s ease, background-color .12s ease",
  gap: "8px"
});
var state3 = (0, import_css34.styleVariants)({
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
var icon3 = (0, import_css34.style)({
  width: "16px",
  height: "16px",
  flexShrink: 0
});
var rotate = (0, import_css34.style)({
  animation: `${rotateAnimation} 1s linear infinite`
});
var input2 = (0, import_css34.style)(__spreadProps(__spreadValues({
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
var clearButton = (0, import_css34.style)({
  background: "none",
  border: "none",
  padding: "0",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
});
var errorMessage = (0, import_css34.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION1M), {
  color: "#E5484D",
  marginTop: "4px",
  paddingLeft: "12px"
}));

// src/atoms/SearchField/SearchField.tsx
var SearchField = (0, import_react31.forwardRef)(
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
    const generatedId = (0, import_react31.useId)();
    const inputId = id != null ? id : generatedId;
    const isControlled = value != null;
    const [inner, setInner] = (0, import_react31.useState)(defaultValue != null ? defaultValue : "");
    const currentValue = isControlled ? String(value) : String(inner);
    const [focused, setFocused] = (0, import_react31.useState)(false);
    const [pressed, setPressed] = (0, import_react31.useState)(false);
    const [isTyping, setIsTyping] = (0, import_react31.useState)(false);
    const filled = currentValue.trim().length > 0;
    const isDisabled = Boolean(disabled);
    const stateClass = (0, import_react31.useMemo)(() => {
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
    return /* @__PURE__ */ import_react31.default.createElement("div", { className: [wrapper5, className].filter(Boolean).join(" ") }, /* @__PURE__ */ import_react31.default.createElement(
      "div",
      {
        className: [field, stateClass].join(" "),
        "aria-disabled": isDisabled || void 0
      },
      /* @__PURE__ */ import_react31.default.createElement(
        import_image23.default,
        {
          src: loading ? "/assets/icon16/loading.svg" : "/assets/icon16/search_line.svg",
          alt: "\uAC80\uC0C9",
          width: 16,
          height: 16,
          className: [icon3, loading && rotate].filter(Boolean).join(" ")
        }
      ),
      /* @__PURE__ */ import_react31.default.createElement(
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
      ),
      filled && !disabled && !loading && /* @__PURE__ */ import_react31.default.createElement("button", { className: clearButton, onClick: handleClear, type: "button" }, /* @__PURE__ */ import_react31.default.createElement(
        import_image23.default,
        {
          src: "/assets/icon16/x-circle.svg",
          alt: "\uC9C0\uC6B0\uAE30",
          width: 16,
          height: 16
        }
      ))
    ), error && /* @__PURE__ */ import_react31.default.createElement("p", { className: errorMessage }, error));
  }
);
SearchField.displayName = "SearchField";
var SearchField_default = SearchField;

// src/atoms/SegmentedControl/SegmentedControl.tsx
var import_react32 = __toESM(require("react"));

// src/atoms/SegmentedControl/style.css.ts
var import_css36 = require("@vanilla-extract/css");

// ../../node_modules/.pnpm/@vanilla-extract+recipes@0.5.7_@vanilla-extract+css@1.17.4/node_modules/@vanilla-extract/recipes/dist/vanilla-extract-recipes.esm.js
var import_recipe = require("@vanilla-extract/css/recipe");
var import_css35 = require("@vanilla-extract/css");

// ../../node_modules/.pnpm/@vanilla-extract+recipes@0.5.7_@vanilla-extract+css@1.17.4/node_modules/@vanilla-extract/recipes/dist/createRuntimeFn-62c9670f.esm.js
function toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function mapValues(input4, fn) {
  var result = {};
  for (var _key in input4) {
    result[_key] = fn(input4[_key], _key);
  }
  return result;
}
var shouldApplyCompound = (compoundCheck, selections, defaultVariants) => {
  for (var key of Object.keys(compoundCheck)) {
    var _selections$key;
    if (compoundCheck[key] !== ((_selections$key = selections[key]) !== null && _selections$key !== void 0 ? _selections$key : defaultVariants[key])) {
      return false;
    }
  }
  return true;
};
var createRuntimeFn = (config) => {
  var runtimeFn = (options) => {
    var className = config.defaultClassName;
    var selections = _objectSpread2(_objectSpread2({}, config.defaultVariants), options);
    for (var variantName in selections) {
      var _selections$variantNa;
      var variantSelection = (_selections$variantNa = selections[variantName]) !== null && _selections$variantNa !== void 0 ? _selections$variantNa : config.defaultVariants[variantName];
      if (variantSelection != null) {
        var selection = variantSelection;
        if (typeof selection === "boolean") {
          selection = selection === true ? "true" : "false";
        }
        var selectionClassName = (
          // @ts-expect-error
          config.variantClassNames[variantName][selection]
        );
        if (selectionClassName) {
          className += " " + selectionClassName;
        }
      }
    }
    for (var [compoundCheck, compoundClassName] of config.compoundVariants) {
      if (shouldApplyCompound(compoundCheck, selections, config.defaultVariants)) {
        className += " " + compoundClassName;
      }
    }
    return className;
  };
  runtimeFn.variants = () => Object.keys(config.variantClassNames);
  runtimeFn.classNames = {
    get base() {
      return config.defaultClassName.split(" ")[0];
    },
    get variants() {
      return mapValues(config.variantClassNames, (classNames) => mapValues(classNames, (className) => className.split(" ")[0]));
    }
  };
  return runtimeFn;
};

// ../../node_modules/.pnpm/@vanilla-extract+recipes@0.5.7_@vanilla-extract+css@1.17.4/node_modules/@vanilla-extract/recipes/dist/vanilla-extract-recipes.esm.js
function recipe(options, debugId) {
  var {
    variants = {},
    defaultVariants = {},
    compoundVariants = [],
    base
  } = options;
  var defaultClassName;
  if (!base || typeof base === "string") {
    var baseClassName = (0, import_css35.style)({});
    defaultClassName = base ? "".concat(baseClassName, " ").concat(base) : baseClassName;
  } else {
    defaultClassName = (0, import_css35.style)(base, debugId);
  }
  var variantClassNames = mapValues(variants, (variantGroup, variantGroupName) => (0, import_css35.styleVariants)(variantGroup, (styleRule) => typeof styleRule === "string" ? [styleRule] : styleRule, debugId ? "".concat(debugId, "_").concat(variantGroupName) : variantGroupName));
  var compounds = [];
  for (var {
    style: theStyle,
    variants: _variants
  } of compoundVariants) {
    compounds.push([_variants, typeof theStyle === "string" ? theStyle : (0, import_css35.style)(theStyle, "".concat(debugId, "_compound_").concat(compounds.length))]);
  }
  var config = {
    defaultClassName,
    variantClassNames,
    defaultVariants,
    compoundVariants: compounds
  };
  return (0, import_recipe.addRecipe)(createRuntimeFn(config), {
    importPath: "@vanilla-extract/recipes/createRuntimeFn",
    importName: "createRuntimeFn",
    // @ts-expect-error
    args: [config]
  });
}

// src/atoms/SegmentedControl/style.css.ts
var container7 = (0, import_css36.style)({
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
var activeIndicator = (0, import_css36.style)({
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
  const [indicatorStyle, setIndicatorStyle] = (0, import_react32.useState)({});
  const containerRef = (0, import_react32.useRef)(null);
  const optionRefs = (0, import_react32.useRef)([]);
  (0, import_react32.useEffect)(() => {
    const activeIndex = options.findIndex(
      (option) => option.id === activeOption
    );
    const activeOptionElement = optionRefs.current[activeIndex];
    if (activeOptionElement) {
      const { offsetLeft, clientWidth } = activeOptionElement;
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${clientWidth}px`
      });
    }
  }, [
    activeOption,
    options,
    typeof window !== "undefined" ? window.innerWidth : 0
  ]);
  return /* @__PURE__ */ import_react32.default.createElement("div", { ref: containerRef, className: `${container7} ${className}` }, /* @__PURE__ */ import_react32.default.createElement("div", { className: activeIndicator, style: indicatorStyle }), options.map((option, index) => /* @__PURE__ */ import_react32.default.createElement(
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
var SegmentedControl_default = SegmentedControl;

// src/atoms/SelectField/SelectField.tsx
var import_react33 = __toESM(require("react"));

// src/atoms/SelectField/SelectField.css.ts
var import_css37 = require("@vanilla-extract/css");
var root17 = (0, import_css37.style)({
  display: "flex",
  flexDirection: "column",
  width: "100%"
});
var label4 = (0, import_css37.style)(__spreadProps(__spreadValues({}, TYPO.LABEL1B), {
  color: COLORS.NEUTRAL600,
  marginBottom: "8px"
}));
var fieldBase = (0, import_css37.style)({
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
var fieldState = (0, import_css37.styleVariants)({
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
var valueText = (0, import_css37.style)(__spreadProps(__spreadValues({}, TYPO.BODY1M), {
  color: COLORS.NEUTRAL800
}));
var placeholderText = (0, import_css37.style)(__spreadProps(__spreadValues({}, TYPO.BODY1M), {
  color: COLORS.NEUTRAL400
}));

// src/atoms/SelectField/SelectField.tsx
var import_image24 = __toESM(require("next/image"));
function SelectField({
  label: label6,
  placeholder = "\uC120\uD0DD\uD574\uC8FC\uC138\uC694",
  value,
  disabled,
  onClick,
  className,
  id
}) {
  const generatedId = (0, import_react33.useId)();
  const fieldId = id != null ? id : generatedId;
  const hasValue = value != null && value.trim().length > 0;
  const isDisabled = Boolean(disabled);
  const fieldClass = (0, import_react33.useMemo)(() => {
    const stateClass = isDisabled ? fieldState.disabled : hasValue ? fieldState.filled : fieldState.default;
    return [fieldBase, stateClass, className].filter(Boolean).join(" ");
  }, [hasValue, isDisabled, className]);
  return /* @__PURE__ */ import_react33.default.createElement("div", { className: root17 }, label6 && /* @__PURE__ */ import_react33.default.createElement("label", { htmlFor: fieldId, className: label4 }, label6), /* @__PURE__ */ import_react33.default.createElement(
    "button",
    {
      id: fieldId,
      type: "button",
      className: fieldClass,
      onClick,
      disabled: isDisabled,
      "aria-haspopup": "listbox"
    },
    /* @__PURE__ */ import_react33.default.createElement("span", { className: hasValue ? valueText : placeholderText }, hasValue ? value : placeholder),
    /* @__PURE__ */ import_react33.default.createElement(
      import_image24.default,
      {
        src: "/assets/icon24/chevron-down.svg",
        alt: "\uC120\uD0DD",
        width: 24,
        height: 24
      }
    )
  ));
}

// src/atoms/ShortsBottomInfo/ShortsBottomInfo.tsx
var import_react34 = __toESM(require("react"));
var import_image25 = __toESM(require("next/image"));

// src/atoms/ShortsBottomInfo/ShortsBottomInfo.css.ts
var import_css38 = require("@vanilla-extract/css");
var bottomInfo = (0, import_css38.style)({
  width: "100%",
  display: "flex",
  gap: "8px",
  padding: "24px 18px"
});
var userInfo2 = (0, import_css38.style)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px"
});
var profileImage4 = (0, import_css38.style)({
  borderRadius: "50%"
});
var userName2 = (0, import_css38.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION2M), {
  width: "60px",
  textAlign: "center",
  overflow: "ellipse"
}));
var locInfo = (0, import_css38.style)({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "8px"
});
var location2 = (0, import_css38.style)(__spreadProps(__spreadValues({}, TYPO.LABEL2B), {
  padding: "6px 15px",
  borderRadius: "39px",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  display: "flex",
  gap: "4px",
  alignItems: "center"
}));
var description3 = (0, import_css38.style)(__spreadProps(__spreadValues({}, TYPO.BODY2M), {
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical"
}));
var tags2 = (0, import_css38.style)({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  maxHeight: "70px"
});
var tag4 = (0, import_css38.style)(__spreadProps(__spreadValues({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  padding: "4px 10px",
  borderRadius: "99px"
}, TYPO.BODY3), {
  color: "#FFF"
}));

// src/atoms/ShortsBottomInfo/ShortsBottomInfo.tsx
function ShortsBottomInfo({ video }) {
  return /* @__PURE__ */ import_react34.default.createElement("div", { className: bottomInfo }, /* @__PURE__ */ import_react34.default.createElement("div", { className: userInfo2 }, /* @__PURE__ */ import_react34.default.createElement(
    import_image25.default,
    {
      src: video.profileImageUrl,
      alt: "\uBE44\uB514\uC624 \uC815\uBCF4",
      width: 40,
      height: 40,
      className: profileImage4
    }
  ), /* @__PURE__ */ import_react34.default.createElement("div", { className: userName2 }, video.userName)), /* @__PURE__ */ import_react34.default.createElement("div", { className: locInfo }, /* @__PURE__ */ import_react34.default.createElement("div", { className: location2 }, /* @__PURE__ */ import_react34.default.createElement(
    import_image25.default,
    {
      alt: "location",
      width: 12,
      height: 12,
      src: "/assets/icon12/map_filled.svg"
    }
  ), video.loc), /* @__PURE__ */ import_react34.default.createElement("p", { className: description3 }, video.description), /* @__PURE__ */ import_react34.default.createElement("div", { className: tags2 }, video.tags.map((tag5) => /* @__PURE__ */ import_react34.default.createElement("span", { key: tag5, className: tag4 }, "#", tag5)))));
}

// src/atoms/Skeleton/Skeleton.tsx
var import_react35 = __toESM(require("react"));

// src/atoms/Skeleton/Skeleton.css.ts
var import_css39 = require("@vanilla-extract/css");
var shimmer = (0, import_css39.keyframes)({
  "0%": {
    backgroundPosition: "-1000px 0"
  },
  "100%": {
    backgroundPosition: "1000px 0"
  }
});
var skeleton = (0, import_css39.style)({
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
function Skeleton({
  width = "100%",
  height = "1em",
  className,
  style: style51
}) {
  return /* @__PURE__ */ import_react35.default.createElement(
    "span",
    {
      className: `${skeleton} ${className || ""}`,
      style: __spreadValues({
        width,
        height,
        verticalAlign: "middle"
      }, style51)
    }
  );
}

// src/atoms/Tabs/Tabs.tsx
var import_react36 = __toESM(require("react"));

// src/atoms/Tabs/style.css.ts
var import_css40 = require("@vanilla-extract/css");
var container8 = (0, import_css40.style)({
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
var tab = recipe({
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
  return /* @__PURE__ */ import_react36.default.createElement("div", { className: `${container8} ${className}` }, tabs.map((tab2) => /* @__PURE__ */ import_react36.default.createElement(
    "button",
    {
      key: tab2.id,
      className: tab({ active: activeTab === tab2.id }),
      onClick: () => onTabClick(tab2.id)
    },
    tab2.label
  )));
};
var Tabs_default = Tabs;

// src/atoms/TextField/TextField.tsx
var import_react37 = __toESM(require("react"));

// src/atoms/TextField/TextField.css.ts
var import_css41 = require("@vanilla-extract/css");
var root18 = (0, import_css41.style)({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  width: "100%"
});
var label5 = (0, import_css41.style)(__spreadProps(__spreadValues({}, TYPO.LABEL1B), {
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
var state4 = (0, import_css41.styleVariants)({
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
var input3 = (0, import_css41.style)(__spreadValues({
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
var helperText = (0, import_css41.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION2B), {
  color: COLORS.NEUTRAL500,
  padding: "0 4px"
}));
var helperError = (0, import_css41.style)(__spreadProps(__spreadValues({}, TYPO.CAPTION2B), {
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
  const generatedId = (0, import_react37.useId)();
  const inputId = id != null ? id : generatedId;
  const descId = `${inputId}-desc`;
  const [focused, setFocused] = (0, import_react37.useState)(false);
  const [pressed, setPressed] = (0, import_react37.useState)(false);
  const isControlled = value != null;
  const [inner, setInner] = (0, import_react37.useState)(defaultValue != null ? defaultValue : "");
  const currentValue = isControlled ? String(value) : inner;
  const [innerError, setInnerError] = (0, import_react37.useState)(void 0);
  const filled = currentValue.trim().length > 0;
  const hasError = Boolean(errorText2 != null ? errorText2 : innerError);
  const isDisabled = Boolean(disabled);
  const rootClass = (0, import_react37.useMemo)(() => {
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
  return /* @__PURE__ */ import_react37.default.createElement("div", { className: root18 }, label6 && /* @__PURE__ */ import_react37.default.createElement("label", { htmlFor: inputId, className: label5 }, label6), /* @__PURE__ */ import_react37.default.createElement("div", { className: rootClass, "aria-disabled": isDisabled || void 0 }, /* @__PURE__ */ import_react37.default.createElement(
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
  )), helper ? /* @__PURE__ */ import_react37.default.createElement("div", { id: descId, className: hasError ? helperError : helperText }, helper) : null);
}

// src/atoms/Tooltip/Tooltip.tsx
var import_react38 = __toESM(require("react"));

// src/atoms/Tooltip/Tooltip.css.ts
var import_css42 = require("@vanilla-extract/css");
var arrowSize = 8;
var gap = 10;
var tooltipBackgroundColor = "#fff";
var tooltipColor = COLORS.GREEN700;
var tooltipZIndex = 50;
var tooltipMaxWidth = "280px";
var tooltipWrapper = (0, import_css42.style)({
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
var headerContainer2 = (0, import_css42.style)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  marginBottom: "8px"
});
var tooltipTitle = (0, import_css42.style)(__spreadProps(__spreadValues({}, TYPO.BODY1B), {
  fontFamily: "var(--font-laundry)",
  color: tooltipColor,
  flexGrow: 1,
  marginRight: "8px",
  whiteSpace: "pre-wrap"
}));
var closeButton4 = (0, import_css42.style)({
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
var tooltipText = (0, import_css42.style)({
  fontSize: "11px",
  fontWeight: 500,
  color: COLORS.NEUTRAL500,
  whiteSpace: "pre-wrap",
  width: "100%"
});
var tooltipArrow = (0, import_css42.style)({
  position: "absolute",
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderColor: "transparent"
});
var positionVariants = (0, import_css42.styleVariants)({
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
(0, import_css42.globalStyle)(`${positionVariants.top} .${tooltipArrow}`, {
  top: "100%",
  left: "80%",
  transform: "translateX(-50%)",
  borderWidth: `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`,
  borderTopColor: tooltipBackgroundColor
});
(0, import_css42.globalStyle)(`${positionVariants.bottom} .${tooltipArrow}`, {
  bottom: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  borderWidth: `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`,
  borderBottomColor: tooltipBackgroundColor
});
(0, import_css42.globalStyle)(`${positionVariants.left} .${tooltipArrow}`, {
  top: "50%",
  left: "100%",
  transform: "translateY(-50%)",
  borderWidth: `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`,
  borderLeftColor: tooltipBackgroundColor
});
(0, import_css42.globalStyle)(`${positionVariants.right} .${tooltipArrow}`, {
  top: "50%",
  right: "100%",
  transform: "translateY(-50%)",
  borderWidth: `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`,
  borderRightColor: tooltipBackgroundColor
});

// src/atoms/Tooltip/Tooltip.tsx
var import_image26 = __toESM(require("next/image"));
function Tooltip({
  title: title13,
  text: text3,
  onClose,
  isVisible,
  position = "top"
}) {
  if (!isVisible) return null;
  return /* @__PURE__ */ import_react38.default.createElement("div", { className: `${tooltipWrapper} ${positionVariants[position]}` }, /* @__PURE__ */ import_react38.default.createElement("div", { className: headerContainer2 }, /* @__PURE__ */ import_react38.default.createElement("span", { className: tooltipTitle }, title13), /* @__PURE__ */ import_react38.default.createElement(
    "button",
    {
      className: closeButton4,
      onClick: onClose,
      "aria-label": "\uD234\uD301 \uB2EB\uAE30"
    },
    /* @__PURE__ */ import_react38.default.createElement(import_image26.default, { src: "/assets/icon12/x.svg", alt: "\uB2EB\uAE30", width: 16, height: 16 })
  )), text3 && /* @__PURE__ */ import_react38.default.createElement("span", { className: tooltipText }, text3), /* @__PURE__ */ import_react38.default.createElement("div", { className: tooltipArrow }));
}

// src/atoms/TopBar/TopBar.tsx
var import_image27 = __toESM(require("next/image"));

// src/atoms/TopBar/TopBar.css.ts
var import_css43 = require("@vanilla-extract/css");
var root19 = (0, import_css43.style)({
  width: "100%",
  background: "#fff",
  padding: "16px 18px",
  display: "grid",
  gridTemplateColumns: "24px 1fr auto",
  alignItems: "center",
  gap: 8
});
var sticky = (0, import_css43.style)({
  position: "sticky",
  top: 0,
  zIndex: 50
});
var transparent = (0, import_css43.style)({
  background: "transparent"
});
var whiteIcon = (0, import_css43.style)({
  filter: "brightness(0) invert(1)"
});
var iconBox = (0, import_css43.style)({
  width: 24,
  height: 24,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});
var iconButton2 = (0, import_css43.style)({
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
var sideLeft = (0, import_css43.style)([
  iconButton2,
  {
    justifySelf: "start"
  }
]);
var center = (0, import_css43.style)({
  minWidth: 0,
  overflow: "hidden",
  textAlign: "left",
  justifySelf: "start",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
var title10 = (0, import_css43.style)(__spreadProps(__spreadValues({}, TYPO.HEADLINE1), {
  lineHeight: "24px",
  color: COLORS.NEUTRAL600,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}));
var sideRight = (0, import_css43.style)({
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  gap: 16
});

// src/atoms/TopBar/TopBar.tsx
function TopBar({
  backIconHandler,
  title: title13,
  isShowLogo = false,
  rightIcons = [],
  sticky: sticky2 = false,
  transparent: transparent2 = false,
  whiteIcon: whiteIcon2 = false,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "header",
    {
      className: [
        root19,
        sticky2 && sticky,
        transparent2 && transparent,
        className
      ].filter(Boolean).join(" "),
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
      /* @__PURE__ */ React.createElement(
        import_image27.default,
        {
          src: "/assets/icon24/arrow-left_line.svg",
          alt: "\uB4A4\uB85C\uAC00\uAE30",
          width: 24,
          height: 24
        }
      )
    ) : null),
    /* @__PURE__ */ React.createElement("div", { className: center, "aria-live": "polite" }, isShowLogo ? /* @__PURE__ */ React.createElement(
      import_image27.default,
      {
        src: "/assets/logo/logo-top.svg",
        alt: "\uB315\uAE00 \uB85C\uACE0",
        width: 72.56,
        height: 24
      }
    ) : title13 ? /* @__PURE__ */ React.createElement("div", { className: title10, title: title13 }, title13) : null),
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
var TopBar_default = TopBar;

// src/molecules/Carousel/Carousel.tsx
var import_react40 = __toESM(require("react"));

// ../../node_modules/.pnpm/embla-carousel-react@8.6.0_react@19.1.0/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js
var import_react39 = require("react");

// ../../node_modules/.pnpm/embla-carousel-reactive-utils@8.6.0_embla-carousel@8.6.0/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js
function isObject(subject) {
  return Object.prototype.toString.call(subject) === "[object Object]";
}
function isRecord(subject) {
  return isObject(subject) || Array.isArray(subject);
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
  const optionsAKeys = Object.keys(optionsA);
  const optionsBKeys = Object.keys(optionsB);
  if (optionsAKeys.length !== optionsBKeys.length) return false;
  const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));
  const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));
  if (breakpointsA !== breakpointsB) return false;
  return optionsAKeys.every((key) => {
    const valueA = optionsA[key];
    const valueB = optionsB[key];
    if (typeof valueA === "function") return `${valueA}` === `${valueB}`;
    if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
    return areOptionsEqual(valueA, valueB);
  });
}
function sortAndMapPluginToOptions(plugins) {
  return plugins.concat().sort((a, b) => a.name > b.name ? 1 : -1).map((plugin) => plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
  if (pluginsA.length !== pluginsB.length) return false;
  const optionsA = sortAndMapPluginToOptions(pluginsA);
  const optionsB = sortAndMapPluginToOptions(pluginsB);
  return optionsA.every((optionA, index) => {
    const optionB = optionsB[index];
    return areOptionsEqual(optionA, optionB);
  });
}

// ../../node_modules/.pnpm/embla-carousel@8.6.0/node_modules/embla-carousel/esm/embla-carousel.esm.js
function isNumber(subject) {
  return typeof subject === "number";
}
function isString(subject) {
  return typeof subject === "string";
}
function isBoolean(subject) {
  return typeof subject === "boolean";
}
function isObject2(subject) {
  return Object.prototype.toString.call(subject) === "[object Object]";
}
function mathAbs(n) {
  return Math.abs(n);
}
function mathSign(n) {
  return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
  return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
  if (valueB === 0 || valueA === 0) return 0;
  if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
  const diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
  return mathAbs(diff / valueB);
}
function roundToTwoDecimals(num) {
  return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
  return objectKeys(array).map(Number);
}
function arrayLast(array) {
  return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
  return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
  return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
  return Array.from(Array(n), (_, i) => startAt + i);
}
function objectKeys(object) {
  return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
  return [objectA, objectB].reduce((mergedObjects, currentObject) => {
    objectKeys(currentObject).forEach((key) => {
      const valueA = mergedObjects[key];
      const valueB = currentObject[key];
      const areObjects = isObject2(valueA) && isObject2(valueB);
      mergedObjects[key] = areObjects ? objectsMergeDeep(valueA, valueB) : valueB;
    });
    return mergedObjects;
  }, {});
}
function isMouseEvent(evt, ownerWindow) {
  return typeof ownerWindow.MouseEvent !== "undefined" && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
  const predefined = {
    start,
    center: center2,
    end
  };
  function start() {
    return 0;
  }
  function center2(n) {
    return end(n) / 2;
  }
  function end(n) {
    return viewSize - n;
  }
  function measure(n, index) {
    if (isString(align)) return predefined[align](n);
    return align(viewSize, n, index);
  }
  const self = {
    measure
  };
  return self;
}
function EventStore() {
  let listeners = [];
  function add(node, type, handler, options = {
    passive: true
  }) {
    let removeListener;
    if ("addEventListener" in node) {
      node.addEventListener(type, handler, options);
      removeListener = () => node.removeEventListener(type, handler, options);
    } else {
      const legacyMediaQueryList = node;
      legacyMediaQueryList.addListener(handler);
      removeListener = () => legacyMediaQueryList.removeListener(handler);
    }
    listeners.push(removeListener);
    return self;
  }
  function clear() {
    listeners = listeners.filter((remove) => remove());
  }
  const self = {
    add,
    clear
  };
  return self;
}
function Animations(ownerDocument, ownerWindow, update, render) {
  const documentVisibleHandler = EventStore();
  const fixedTimeStep = 1e3 / 60;
  let lastTimeStamp = null;
  let accumulatedTime = 0;
  let animationId = 0;
  function init() {
    documentVisibleHandler.add(ownerDocument, "visibilitychange", () => {
      if (ownerDocument.hidden) reset();
    });
  }
  function destroy() {
    stop();
    documentVisibleHandler.clear();
  }
  function animate(timeStamp) {
    if (!animationId) return;
    if (!lastTimeStamp) {
      lastTimeStamp = timeStamp;
      update();
      update();
    }
    const timeElapsed = timeStamp - lastTimeStamp;
    lastTimeStamp = timeStamp;
    accumulatedTime += timeElapsed;
    while (accumulatedTime >= fixedTimeStep) {
      update();
      accumulatedTime -= fixedTimeStep;
    }
    const alpha = accumulatedTime / fixedTimeStep;
    render(alpha);
    if (animationId) {
      animationId = ownerWindow.requestAnimationFrame(animate);
    }
  }
  function start() {
    if (animationId) return;
    animationId = ownerWindow.requestAnimationFrame(animate);
  }
  function stop() {
    ownerWindow.cancelAnimationFrame(animationId);
    lastTimeStamp = null;
    accumulatedTime = 0;
    animationId = 0;
  }
  function reset() {
    lastTimeStamp = null;
    accumulatedTime = 0;
  }
  const self = {
    init,
    destroy,
    start,
    stop,
    update,
    render
  };
  return self;
}
function Axis(axis, contentDirection) {
  const isRightToLeft = contentDirection === "rtl";
  const isVertical = axis === "y";
  const scroll = isVertical ? "y" : "x";
  const cross = isVertical ? "x" : "y";
  const sign = !isVertical && isRightToLeft ? -1 : 1;
  const startEdge = getStartEdge();
  const endEdge = getEndEdge();
  function measureSize(nodeRect) {
    const {
      height,
      width
    } = nodeRect;
    return isVertical ? height : width;
  }
  function getStartEdge() {
    if (isVertical) return "top";
    return isRightToLeft ? "right" : "left";
  }
  function getEndEdge() {
    if (isVertical) return "bottom";
    return isRightToLeft ? "left" : "right";
  }
  function direction(n) {
    return n * sign;
  }
  const self = {
    scroll,
    cross,
    startEdge,
    endEdge,
    measureSize,
    direction
  };
  return self;
}
function Limit(min = 0, max = 0) {
  const length = mathAbs(min - max);
  function reachedMin(n) {
    return n < min;
  }
  function reachedMax(n) {
    return n > max;
  }
  function reachedAny(n) {
    return reachedMin(n) || reachedMax(n);
  }
  function constrain(n) {
    if (!reachedAny(n)) return n;
    return reachedMin(n) ? min : max;
  }
  function removeOffset(n) {
    if (!length) return n;
    return n - length * Math.ceil((n - max) / length);
  }
  const self = {
    length,
    max,
    min,
    constrain,
    reachedAny,
    reachedMax,
    reachedMin,
    removeOffset
  };
  return self;
}
function Counter(max, start, loop) {
  const {
    constrain
  } = Limit(0, max);
  const loopEnd = max + 1;
  let counter = withinLimit(start);
  function withinLimit(n) {
    return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
  }
  function get() {
    return counter;
  }
  function set(n) {
    counter = withinLimit(n);
    return self;
  }
  function add(n) {
    return clone().set(get() + n);
  }
  function clone() {
    return Counter(max, get(), loop);
  }
  const self = {
    get,
    set,
    add,
    clone
  };
  return self;
}
function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location3, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
  const {
    cross: crossAxis,
    direction
  } = axis;
  const focusNodes = ["INPUT", "SELECT", "TEXTAREA"];
  const nonPassiveEvent = {
    passive: false
  };
  const initEvents = EventStore();
  const dragEvents = EventStore();
  const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
  const snapForceBoost = {
    mouse: 300,
    touch: 400
  };
  const freeForceBoost = {
    mouse: 500,
    touch: 600
  };
  const baseSpeed = dragFree ? 43 : 25;
  let isMoving = false;
  let startScroll = 0;
  let startCross = 0;
  let pointerIsDown = false;
  let preventScroll = false;
  let preventClick = false;
  let isMouse = false;
  function init(emblaApi) {
    if (!watchDrag) return;
    function downIfAllowed(evt) {
      if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
    }
    const node = rootNode;
    initEvents.add(node, "dragstart", (evt) => evt.preventDefault(), nonPassiveEvent).add(node, "touchmove", () => void 0, nonPassiveEvent).add(node, "touchend", () => void 0).add(node, "touchstart", downIfAllowed).add(node, "mousedown", downIfAllowed).add(node, "touchcancel", up).add(node, "contextmenu", up).add(node, "click", click, true);
  }
  function destroy() {
    initEvents.clear();
    dragEvents.clear();
  }
  function addDragEvents() {
    const node = isMouse ? ownerDocument : rootNode;
    dragEvents.add(node, "touchmove", move, nonPassiveEvent).add(node, "touchend", up).add(node, "mousemove", move, nonPassiveEvent).add(node, "mouseup", up);
  }
  function isFocusNode(node) {
    const nodeName = node.nodeName || "";
    return focusNodes.includes(nodeName);
  }
  function forceBoost() {
    const boost = dragFree ? freeForceBoost : snapForceBoost;
    const type = isMouse ? "mouse" : "touch";
    return boost[type];
  }
  function allowedForce(force, targetChanged) {
    const next = index.add(mathSign(force) * -1);
    const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
    if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
    if (skipSnaps && targetChanged) return baseForce * 0.5;
    return scrollTarget.byIndex(next.get(), 0).distance;
  }
  function down(evt) {
    const isMouseEvt = isMouseEvent(evt, ownerWindow);
    isMouse = isMouseEvt;
    preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
    isMoving = deltaAbs(target.get(), location3.get()) >= 2;
    if (isMouseEvt && evt.button !== 0) return;
    if (isFocusNode(evt.target)) return;
    pointerIsDown = true;
    dragTracker.pointerDown(evt);
    scrollBody.useFriction(0).useDuration(0);
    target.set(location3);
    addDragEvents();
    startScroll = dragTracker.readPoint(evt);
    startCross = dragTracker.readPoint(evt, crossAxis);
    eventHandler.emit("pointerDown");
  }
  function move(evt) {
    const isTouchEvt = !isMouseEvent(evt, ownerWindow);
    if (isTouchEvt && evt.touches.length >= 2) return up(evt);
    const lastScroll = dragTracker.readPoint(evt);
    const lastCross = dragTracker.readPoint(evt, crossAxis);
    const diffScroll = deltaAbs(lastScroll, startScroll);
    const diffCross = deltaAbs(lastCross, startCross);
    if (!preventScroll && !isMouse) {
      if (!evt.cancelable) return up(evt);
      preventScroll = diffScroll > diffCross;
      if (!preventScroll) return up(evt);
    }
    const diff = dragTracker.pointerMove(evt);
    if (diffScroll > dragThreshold) preventClick = true;
    scrollBody.useFriction(0.3).useDuration(0.75);
    animation.start();
    target.add(direction(diff));
    evt.preventDefault();
  }
  function up(evt) {
    const currentLocation = scrollTarget.byDistance(0, false);
    const targetChanged = currentLocation.index !== index.get();
    const rawForce = dragTracker.pointerUp(evt) * forceBoost();
    const force = allowedForce(direction(rawForce), targetChanged);
    const forceFactor = factorAbs(rawForce, force);
    const speed = baseSpeed - 10 * forceFactor;
    const friction = baseFriction + forceFactor / 50;
    preventScroll = false;
    pointerIsDown = false;
    dragEvents.clear();
    scrollBody.useDuration(speed).useFriction(friction);
    scrollTo.distance(force, !dragFree);
    isMouse = false;
    eventHandler.emit("pointerUp");
  }
  function click(evt) {
    if (preventClick) {
      evt.stopPropagation();
      evt.preventDefault();
      preventClick = false;
    }
  }
  function pointerDown() {
    return pointerIsDown;
  }
  const self = {
    init,
    destroy,
    pointerDown
  };
  return self;
}
function DragTracker(axis, ownerWindow) {
  const logInterval = 170;
  let startEvent;
  let lastEvent;
  function readTime(evt) {
    return evt.timeStamp;
  }
  function readPoint(evt, evtAxis) {
    const property = evtAxis || axis.scroll;
    const coord = `client${property === "x" ? "X" : "Y"}`;
    return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
  }
  function pointerDown(evt) {
    startEvent = evt;
    lastEvent = evt;
    return readPoint(evt);
  }
  function pointerMove(evt) {
    const diff = readPoint(evt) - readPoint(lastEvent);
    const expired = readTime(evt) - readTime(startEvent) > logInterval;
    lastEvent = evt;
    if (expired) startEvent = evt;
    return diff;
  }
  function pointerUp(evt) {
    if (!startEvent || !lastEvent) return 0;
    const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
    const diffTime = readTime(evt) - readTime(startEvent);
    const expired = readTime(evt) - readTime(lastEvent) > logInterval;
    const force = diffDrag / diffTime;
    const isFlick = diffTime && !expired && mathAbs(force) > 0.1;
    return isFlick ? force : 0;
  }
  const self = {
    pointerDown,
    pointerMove,
    pointerUp,
    readPoint
  };
  return self;
}
function NodeRects() {
  function measure(node) {
    const {
      offsetTop,
      offsetLeft,
      offsetWidth,
      offsetHeight
    } = node;
    const offset = {
      top: offsetTop,
      right: offsetLeft + offsetWidth,
      bottom: offsetTop + offsetHeight,
      left: offsetLeft,
      width: offsetWidth,
      height: offsetHeight
    };
    return offset;
  }
  const self = {
    measure
  };
  return self;
}
function PercentOfView(viewSize) {
  function measure(n) {
    return viewSize * (n / 100);
  }
  const self = {
    measure
  };
  return self;
}
function ResizeHandler(container9, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
  const observeNodes = [container9].concat(slides);
  let resizeObserver;
  let containerSize;
  let slideSizes = [];
  let destroyed = false;
  function readSize(node) {
    return axis.measureSize(nodeRects.measure(node));
  }
  function init(emblaApi) {
    if (!watchResize) return;
    containerSize = readSize(container9);
    slideSizes = slides.map(readSize);
    function defaultCallback(entries) {
      for (const entry of entries) {
        if (destroyed) return;
        const isContainer = entry.target === container9;
        const slideIndex = slides.indexOf(entry.target);
        const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
        const newSize = readSize(isContainer ? container9 : slides[slideIndex]);
        const diffSize = mathAbs(newSize - lastSize);
        if (diffSize >= 0.5) {
          emblaApi.reInit();
          eventHandler.emit("resize");
          break;
        }
      }
    }
    resizeObserver = new ResizeObserver((entries) => {
      if (isBoolean(watchResize) || watchResize(emblaApi, entries)) {
        defaultCallback(entries);
      }
    });
    ownerWindow.requestAnimationFrame(() => {
      observeNodes.forEach((node) => resizeObserver.observe(node));
    });
  }
  function destroy() {
    destroyed = true;
    if (resizeObserver) resizeObserver.disconnect();
  }
  const self = {
    init,
    destroy
  };
  return self;
}
function ScrollBody(location3, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
  let scrollVelocity = 0;
  let scrollDirection = 0;
  let scrollDuration = baseDuration;
  let scrollFriction = baseFriction;
  let rawLocation = location3.get();
  let rawLocationPrevious = 0;
  function seek() {
    const displacement = target.get() - location3.get();
    const isInstant = !scrollDuration;
    let scrollDistance = 0;
    if (isInstant) {
      scrollVelocity = 0;
      previousLocation.set(target);
      location3.set(target);
      scrollDistance = displacement;
    } else {
      previousLocation.set(location3);
      scrollVelocity += displacement / scrollDuration;
      scrollVelocity *= scrollFriction;
      rawLocation += scrollVelocity;
      location3.add(scrollVelocity);
      scrollDistance = rawLocation - rawLocationPrevious;
    }
    scrollDirection = mathSign(scrollDistance);
    rawLocationPrevious = rawLocation;
    return self;
  }
  function settled() {
    const diff = target.get() - offsetLocation.get();
    return mathAbs(diff) < 1e-3;
  }
  function duration() {
    return scrollDuration;
  }
  function direction() {
    return scrollDirection;
  }
  function velocity() {
    return scrollVelocity;
  }
  function useBaseDuration() {
    return useDuration(baseDuration);
  }
  function useBaseFriction() {
    return useFriction(baseFriction);
  }
  function useDuration(n) {
    scrollDuration = n;
    return self;
  }
  function useFriction(n) {
    scrollFriction = n;
    return self;
  }
  const self = {
    direction,
    duration,
    velocity,
    seek,
    settled,
    useBaseFriction,
    useBaseDuration,
    useFriction,
    useDuration
  };
  return self;
}
function ScrollBounds(limit, location3, target, scrollBody, percentOfView) {
  const pullBackThreshold = percentOfView.measure(10);
  const edgeOffsetTolerance = percentOfView.measure(50);
  const frictionLimit = Limit(0.1, 0.99);
  let disabled = false;
  function shouldConstrain() {
    if (disabled) return false;
    if (!limit.reachedAny(target.get())) return false;
    if (!limit.reachedAny(location3.get())) return false;
    return true;
  }
  function constrain(pointerDown) {
    if (!shouldConstrain()) return;
    const edge = limit.reachedMin(location3.get()) ? "min" : "max";
    const diffToEdge = mathAbs(limit[edge] - location3.get());
    const diffToTarget = target.get() - location3.get();
    const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
    target.subtract(diffToTarget * friction);
    if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
      target.set(limit.constrain(target.get()));
      scrollBody.useDuration(25).useBaseFriction();
    }
  }
  function toggleActive(active4) {
    disabled = !active4;
  }
  const self = {
    shouldConstrain,
    constrain,
    toggleActive
  };
  return self;
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
  const scrollBounds = Limit(-contentSize + viewSize, 0);
  const snapsBounded = measureBounded();
  const scrollContainLimit = findScrollContainLimit();
  const snapsContained = measureContained();
  function usePixelTolerance(bound, snap) {
    return deltaAbs(bound, snap) <= 1;
  }
  function findScrollContainLimit() {
    const startSnap = snapsBounded[0];
    const endSnap = arrayLast(snapsBounded);
    const min = snapsBounded.lastIndexOf(startSnap);
    const max = snapsBounded.indexOf(endSnap) + 1;
    return Limit(min, max);
  }
  function measureBounded() {
    return snapsAligned.map((snapAligned, index) => {
      const {
        min,
        max
      } = scrollBounds;
      const snap = scrollBounds.constrain(snapAligned);
      const isFirst = !index;
      const isLast = arrayIsLastIndex(snapsAligned, index);
      if (isFirst) return max;
      if (isLast) return min;
      if (usePixelTolerance(min, snap)) return min;
      if (usePixelTolerance(max, snap)) return max;
      return snap;
    }).map((scrollBound) => parseFloat(scrollBound.toFixed(3)));
  }
  function measureContained() {
    if (contentSize <= viewSize + pixelTolerance) return [scrollBounds.max];
    if (containScroll === "keepSnaps") return snapsBounded;
    const {
      min,
      max
    } = scrollContainLimit;
    return snapsBounded.slice(min, max);
  }
  const self = {
    snapsContained,
    scrollContainLimit
  };
  return self;
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
  const max = scrollSnaps[0];
  const min = loop ? max - contentSize : arrayLast(scrollSnaps);
  const limit = Limit(min, max);
  const self = {
    limit
  };
  return self;
}
function ScrollLooper(contentSize, limit, location3, vectors) {
  const jointSafety = 0.1;
  const min = limit.min + jointSafety;
  const max = limit.max + jointSafety;
  const {
    reachedMin,
    reachedMax
  } = Limit(min, max);
  function shouldLoop(direction) {
    if (direction === 1) return reachedMax(location3.get());
    if (direction === -1) return reachedMin(location3.get());
    return false;
  }
  function loop(direction) {
    if (!shouldLoop(direction)) return;
    const loopDistance = contentSize * (direction * -1);
    vectors.forEach((v) => v.add(loopDistance));
  }
  const self = {
    loop
  };
  return self;
}
function ScrollProgress(limit) {
  const {
    max,
    length
  } = limit;
  function get(n) {
    const currentLocation = n - max;
    return length ? currentLocation / -length : 0;
  }
  const self = {
    get
  };
  return self;
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
  const {
    startEdge,
    endEdge
  } = axis;
  const {
    groupSlides
  } = slidesToScroll;
  const alignments = measureSizes().map(alignment.measure);
  const snaps = measureUnaligned();
  const snapsAligned = measureAligned();
  function measureSizes() {
    return groupSlides(slideRects).map((rects) => arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
  }
  function measureUnaligned() {
    return slideRects.map((rect) => containerRect[startEdge] - rect[startEdge]).map((snap) => -mathAbs(snap));
  }
  function measureAligned() {
    return groupSlides(snaps).map((g) => g[0]).map((snap, index) => snap + alignments[index]);
  }
  const self = {
    snaps,
    snapsAligned
  };
  return self;
}
function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
  const {
    groupSlides
  } = slidesToScroll;
  const {
    min,
    max
  } = scrollContainLimit;
  const slideRegistry = createSlideRegistry();
  function createSlideRegistry() {
    const groupedSlideIndexes = groupSlides(slideIndexes);
    const doNotContain = !containSnaps || containScroll === "keepSnaps";
    if (scrollSnaps.length === 1) return [slideIndexes];
    if (doNotContain) return groupedSlideIndexes;
    return groupedSlideIndexes.slice(min, max).map((group, index, groups) => {
      const isFirst = !index;
      const isLast = arrayIsLastIndex(groups, index);
      if (isFirst) {
        const range = arrayLast(groups[0]) + 1;
        return arrayFromNumber(range);
      }
      if (isLast) {
        const range = arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1;
        return arrayFromNumber(range, arrayLast(groups)[0]);
      }
      return group;
    });
  }
  const self = {
    slideRegistry
  };
  return self;
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
  const {
    reachedAny,
    removeOffset,
    constrain
  } = limit;
  function minDistance(distances) {
    return distances.concat().sort((a, b) => mathAbs(a) - mathAbs(b))[0];
  }
  function findTargetSnap(target) {
    const distance = loop ? removeOffset(target) : constrain(target);
    const ascDiffsToSnaps = scrollSnaps.map((snap, index2) => ({
      diff: shortcut(snap - distance, 0),
      index: index2
    })).sort((d1, d2) => mathAbs(d1.diff) - mathAbs(d2.diff));
    const {
      index
    } = ascDiffsToSnaps[0];
    return {
      index,
      distance
    };
  }
  function shortcut(target, direction) {
    const targets = [target, target + contentSize, target - contentSize];
    if (!loop) return target;
    if (!direction) return minDistance(targets);
    const matchingTargets = targets.filter((t) => mathSign(t) === direction);
    if (matchingTargets.length) return minDistance(matchingTargets);
    return arrayLast(targets) - contentSize;
  }
  function byIndex(index, direction) {
    const diffToSnap = scrollSnaps[index] - targetVector.get();
    const distance = shortcut(diffToSnap, direction);
    return {
      index,
      distance
    };
  }
  function byDistance(distance, snap) {
    const target = targetVector.get() + distance;
    const {
      index,
      distance: targetSnapDistance
    } = findTargetSnap(target);
    const reachedBound = !loop && reachedAny(target);
    if (!snap || reachedBound) return {
      index,
      distance
    };
    const diffToSnap = scrollSnaps[index] - targetSnapDistance;
    const snapDistance = distance + shortcut(diffToSnap, 0);
    return {
      index,
      distance: snapDistance
    };
  }
  const self = {
    byDistance,
    byIndex,
    shortcut
  };
  return self;
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
  function scrollTo(target) {
    const distanceDiff = target.distance;
    const indexDiff = target.index !== indexCurrent.get();
    targetVector.add(distanceDiff);
    if (distanceDiff) {
      if (scrollBody.duration()) {
        animation.start();
      } else {
        animation.update();
        animation.render(1);
        animation.update();
      }
    }
    if (indexDiff) {
      indexPrevious.set(indexCurrent.get());
      indexCurrent.set(target.index);
      eventHandler.emit("select");
    }
  }
  function distance(n, snap) {
    const target = scrollTarget.byDistance(n, snap);
    scrollTo(target);
  }
  function index(n, direction) {
    const targetIndex = indexCurrent.clone().set(n);
    const target = scrollTarget.byIndex(targetIndex.get(), direction);
    scrollTo(target);
  }
  const self = {
    distance,
    index
  };
  return self;
}
function SlideFocus(root24, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
  const focusListenerOptions = {
    passive: true,
    capture: true
  };
  let lastTabPressTime = 0;
  function init(emblaApi) {
    if (!watchFocus) return;
    function defaultCallback(index) {
      const nowTime = (/* @__PURE__ */ new Date()).getTime();
      const diffTime = nowTime - lastTabPressTime;
      if (diffTime > 10) return;
      eventHandler.emit("slideFocusStart");
      root24.scrollLeft = 0;
      const group = slideRegistry.findIndex((group2) => group2.includes(index));
      if (!isNumber(group)) return;
      scrollBody.useDuration(0);
      scrollTo.index(group, 0);
      eventHandler.emit("slideFocus");
    }
    eventStore.add(document, "keydown", registerTabPress, false);
    slides.forEach((slide, slideIndex) => {
      eventStore.add(slide, "focus", (evt) => {
        if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) {
          defaultCallback(slideIndex);
        }
      }, focusListenerOptions);
    });
  }
  function registerTabPress(event) {
    if (event.code === "Tab") lastTabPressTime = (/* @__PURE__ */ new Date()).getTime();
  }
  const self = {
    init
  };
  return self;
}
function Vector1D(initialValue) {
  let value = initialValue;
  function get() {
    return value;
  }
  function set(n) {
    value = normalizeInput(n);
  }
  function add(n) {
    value += normalizeInput(n);
  }
  function subtract(n) {
    value -= normalizeInput(n);
  }
  function normalizeInput(n) {
    return isNumber(n) ? n : n.get();
  }
  const self = {
    get,
    set,
    add,
    subtract
  };
  return self;
}
function Translate(axis, container9) {
  const translate = axis.scroll === "x" ? x : y;
  const containerStyle = container9.style;
  let previousTarget = null;
  let disabled = false;
  function x(n) {
    return `translate3d(${n}px,0px,0px)`;
  }
  function y(n) {
    return `translate3d(0px,${n}px,0px)`;
  }
  function to(target) {
    if (disabled) return;
    const newTarget = roundToTwoDecimals(axis.direction(target));
    if (newTarget === previousTarget) return;
    containerStyle.transform = translate(newTarget);
    previousTarget = newTarget;
  }
  function toggleActive(active4) {
    disabled = !active4;
  }
  function clear() {
    if (disabled) return;
    containerStyle.transform = "";
    if (!container9.getAttribute("style")) container9.removeAttribute("style");
  }
  const self = {
    clear,
    to,
    toggleActive
  };
  return self;
}
function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location3, slides) {
  const roundingSafety = 0.5;
  const ascItems = arrayKeys(slideSizesWithGaps);
  const descItems = arrayKeys(slideSizesWithGaps).reverse();
  const loopPoints = startPoints().concat(endPoints());
  function removeSlideSizes(indexes, from) {
    return indexes.reduce((a, i) => {
      return a - slideSizesWithGaps[i];
    }, from);
  }
  function slidesInGap(indexes, gap2) {
    return indexes.reduce((a, i) => {
      const remainingGap = removeSlideSizes(a, gap2);
      return remainingGap > 0 ? a.concat([i]) : a;
    }, []);
  }
  function findSlideBounds(offset) {
    return snaps.map((snap, index) => ({
      start: snap - slideSizes[index] + roundingSafety + offset,
      end: snap + viewSize - roundingSafety + offset
    }));
  }
  function findLoopPoints(indexes, offset, isEndEdge) {
    const slideBounds = findSlideBounds(offset);
    return indexes.map((index) => {
      const initial = isEndEdge ? 0 : -contentSize;
      const altered = isEndEdge ? contentSize : 0;
      const boundEdge = isEndEdge ? "end" : "start";
      const loopPoint = slideBounds[index][boundEdge];
      return {
        index,
        loopPoint,
        slideLocation: Vector1D(-1),
        translate: Translate(axis, slides[index]),
        target: () => location3.get() > loopPoint ? initial : altered
      };
    });
  }
  function startPoints() {
    const gap2 = scrollSnaps[0];
    const indexes = slidesInGap(descItems, gap2);
    return findLoopPoints(indexes, contentSize, false);
  }
  function endPoints() {
    const gap2 = viewSize - scrollSnaps[0] - 1;
    const indexes = slidesInGap(ascItems, gap2);
    return findLoopPoints(indexes, -contentSize, true);
  }
  function canLoop() {
    return loopPoints.every(({
      index
    }) => {
      const otherIndexes = ascItems.filter((i) => i !== index);
      return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
    });
  }
  function loop() {
    loopPoints.forEach((loopPoint) => {
      const {
        target,
        translate,
        slideLocation
      } = loopPoint;
      const shiftLocation = target();
      if (shiftLocation === slideLocation.get()) return;
      translate.to(shiftLocation);
      slideLocation.set(shiftLocation);
    });
  }
  function clear() {
    loopPoints.forEach((loopPoint) => loopPoint.translate.clear());
  }
  const self = {
    canLoop,
    clear,
    loop,
    loopPoints
  };
  return self;
}
function SlidesHandler(container9, eventHandler, watchSlides) {
  let mutationObserver;
  let destroyed = false;
  function init(emblaApi) {
    if (!watchSlides) return;
    function defaultCallback(mutations) {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          emblaApi.reInit();
          eventHandler.emit("slidesChanged");
          break;
        }
      }
    }
    mutationObserver = new MutationObserver((mutations) => {
      if (destroyed) return;
      if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) {
        defaultCallback(mutations);
      }
    });
    mutationObserver.observe(container9, {
      childList: true
    });
  }
  function destroy() {
    if (mutationObserver) mutationObserver.disconnect();
    destroyed = true;
  }
  const self = {
    init,
    destroy
  };
  return self;
}
function SlidesInView(container9, slides, eventHandler, threshold) {
  const intersectionEntryMap = {};
  let inViewCache = null;
  let notInViewCache = null;
  let intersectionObserver;
  let destroyed = false;
  function init() {
    intersectionObserver = new IntersectionObserver((entries) => {
      if (destroyed) return;
      entries.forEach((entry) => {
        const index = slides.indexOf(entry.target);
        intersectionEntryMap[index] = entry;
      });
      inViewCache = null;
      notInViewCache = null;
      eventHandler.emit("slidesInView");
    }, {
      root: container9.parentElement,
      threshold
    });
    slides.forEach((slide) => intersectionObserver.observe(slide));
  }
  function destroy() {
    if (intersectionObserver) intersectionObserver.disconnect();
    destroyed = true;
  }
  function createInViewList(inView) {
    return objectKeys(intersectionEntryMap).reduce((list2, slideIndex) => {
      const index = parseInt(slideIndex);
      const {
        isIntersecting
      } = intersectionEntryMap[index];
      const inViewMatch = inView && isIntersecting;
      const notInViewMatch = !inView && !isIntersecting;
      if (inViewMatch || notInViewMatch) list2.push(index);
      return list2;
    }, []);
  }
  function get(inView = true) {
    if (inView && inViewCache) return inViewCache;
    if (!inView && notInViewCache) return notInViewCache;
    const slideIndexes = createInViewList(inView);
    if (inView) inViewCache = slideIndexes;
    if (!inView) notInViewCache = slideIndexes;
    return slideIndexes;
  }
  const self = {
    init,
    destroy,
    get
  };
  return self;
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
  const {
    measureSize,
    startEdge,
    endEdge
  } = axis;
  const withEdgeGap = slideRects[0] && readEdgeGap;
  const startGap = measureStartGap();
  const endGap = measureEndGap();
  const slideSizes = slideRects.map(measureSize);
  const slideSizesWithGaps = measureWithGaps();
  function measureStartGap() {
    if (!withEdgeGap) return 0;
    const slideRect = slideRects[0];
    return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
  }
  function measureEndGap() {
    if (!withEdgeGap) return 0;
    const style51 = ownerWindow.getComputedStyle(arrayLast(slides));
    return parseFloat(style51.getPropertyValue(`margin-${endEdge}`));
  }
  function measureWithGaps() {
    return slideRects.map((rect, index, rects) => {
      const isFirst = !index;
      const isLast = arrayIsLastIndex(rects, index);
      if (isFirst) return slideSizes[index] + startGap;
      if (isLast) return slideSizes[index] + endGap;
      return rects[index + 1][startEdge] - rect[startEdge];
    }).map(mathAbs);
  }
  const self = {
    slideSizes,
    slideSizesWithGaps,
    startGap,
    endGap
  };
  return self;
}
function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
  const {
    startEdge,
    endEdge,
    direction
  } = axis;
  const groupByNumber = isNumber(slidesToScroll);
  function byNumber(array, groupSize) {
    return arrayKeys(array).filter((i) => i % groupSize === 0).map((i) => array.slice(i, i + groupSize));
  }
  function bySize(array) {
    if (!array.length) return [];
    return arrayKeys(array).reduce((groups, rectB, index) => {
      const rectA = arrayLast(groups) || 0;
      const isFirst = rectA === 0;
      const isLast = rectB === arrayLastIndex(array);
      const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
      const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
      const gapA = !loop && isFirst ? direction(startGap) : 0;
      const gapB = !loop && isLast ? direction(endGap) : 0;
      const chunkSize = mathAbs(edgeB - gapB - (edgeA + gapA));
      if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
      if (isLast) groups.push(array.length);
      return groups;
    }, []).map((currentSize, index, groups) => {
      const previousSize = Math.max(groups[index - 1] || 0);
      return array.slice(previousSize, currentSize);
    });
  }
  function groupSlides(array) {
    return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
  }
  const self = {
    groupSlides
  };
  return self;
}
function Engine(root24, container9, slides, ownerDocument, ownerWindow, options, eventHandler) {
  const {
    align,
    axis: scrollAxis,
    direction,
    startIndex,
    loop,
    duration,
    dragFree,
    dragThreshold,
    inViewThreshold,
    slidesToScroll: groupSlides,
    skipSnaps,
    containScroll,
    watchResize,
    watchSlides,
    watchDrag,
    watchFocus
  } = options;
  const pixelTolerance = 2;
  const nodeRects = NodeRects();
  const containerRect = nodeRects.measure(container9);
  const slideRects = slides.map(nodeRects.measure);
  const axis = Axis(scrollAxis, direction);
  const viewSize = axis.measureSize(containerRect);
  const percentOfView = PercentOfView(viewSize);
  const alignment = Alignment(align, viewSize);
  const containSnaps = !loop && !!containScroll;
  const readEdgeGap = loop || !!containScroll;
  const {
    slideSizes,
    slideSizesWithGaps,
    startGap,
    endGap
  } = SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow);
  const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
  const {
    snaps,
    snapsAligned
  } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
  const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
  const {
    snapsContained,
    scrollContainLimit
  } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
  const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
  const {
    limit
  } = ScrollLimit(contentSize, scrollSnaps, loop);
  const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
  const indexPrevious = index.clone();
  const slideIndexes = arrayKeys(slides);
  const update = ({
    dragHandler,
    scrollBody: scrollBody2,
    scrollBounds,
    options: {
      loop: loop2
    }
  }) => {
    if (!loop2) scrollBounds.constrain(dragHandler.pointerDown());
    scrollBody2.seek();
  };
  const render = ({
    scrollBody: scrollBody2,
    translate,
    location: location4,
    offsetLocation: offsetLocation2,
    previousLocation: previousLocation2,
    scrollLooper,
    slideLooper,
    dragHandler,
    animation: animation2,
    eventHandler: eventHandler2,
    scrollBounds,
    options: {
      loop: loop2
    }
  }, alpha) => {
    const shouldSettle = scrollBody2.settled();
    const withinBounds = !scrollBounds.shouldConstrain();
    const hasSettled = loop2 ? shouldSettle : shouldSettle && withinBounds;
    const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
    if (hasSettledAndIdle) animation2.stop();
    const interpolatedLocation = location4.get() * alpha + previousLocation2.get() * (1 - alpha);
    offsetLocation2.set(interpolatedLocation);
    if (loop2) {
      scrollLooper.loop(scrollBody2.direction());
      slideLooper.loop();
    }
    translate.to(offsetLocation2.get());
    if (hasSettledAndIdle) eventHandler2.emit("settle");
    if (!hasSettled) eventHandler2.emit("scroll");
  };
  const animation = Animations(ownerDocument, ownerWindow, () => update(engine), (alpha) => render(engine, alpha));
  const friction = 0.68;
  const startLocation = scrollSnaps[index.get()];
  const location3 = Vector1D(startLocation);
  const previousLocation = Vector1D(startLocation);
  const offsetLocation = Vector1D(startLocation);
  const target = Vector1D(startLocation);
  const scrollBody = ScrollBody(location3, offsetLocation, previousLocation, target, duration, friction);
  const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
  const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
  const scrollProgress = ScrollProgress(limit);
  const eventStore = EventStore();
  const slidesInView = SlidesInView(container9, slides, eventHandler, inViewThreshold);
  const {
    slideRegistry
  } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
  const slideFocus = SlideFocus(root24, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
  const engine = {
    ownerDocument,
    ownerWindow,
    eventHandler,
    containerRect,
    slideRects,
    animation,
    axis,
    dragHandler: DragHandler(axis, root24, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location3, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
    eventStore,
    percentOfView,
    index,
    indexPrevious,
    limit,
    location: location3,
    offsetLocation,
    previousLocation,
    options,
    resizeHandler: ResizeHandler(container9, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
    scrollBody,
    scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
    scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [location3, offsetLocation, previousLocation, target]),
    scrollProgress,
    scrollSnapList: scrollSnaps.map(scrollProgress.get),
    scrollSnaps,
    scrollTarget,
    scrollTo,
    slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
    slideFocus,
    slidesHandler: SlidesHandler(container9, eventHandler, watchSlides),
    slidesInView,
    slideIndexes,
    slideRegistry,
    slidesToScroll,
    target,
    translate: Translate(axis, container9)
  };
  return engine;
}
function EventHandler() {
  let listeners = {};
  let api;
  function init(emblaApi) {
    api = emblaApi;
  }
  function getListeners(evt) {
    return listeners[evt] || [];
  }
  function emit(evt) {
    getListeners(evt).forEach((e) => e(api, evt));
    return self;
  }
  function on(evt, cb) {
    listeners[evt] = getListeners(evt).concat([cb]);
    return self;
  }
  function off(evt, cb) {
    listeners[evt] = getListeners(evt).filter((e) => e !== cb);
    return self;
  }
  function clear() {
    listeners = {};
  }
  const self = {
    init,
    emit,
    off,
    on,
    clear
  };
  return self;
}
var defaultOptions = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: false,
  dragThreshold: 10,
  loop: false,
  skipSnaps: false,
  duration: 25,
  startIndex: 0,
  active: true,
  watchDrag: true,
  watchResize: true,
  watchSlides: true,
  watchFocus: true
};
function OptionsHandler(ownerWindow) {
  function mergeOptions(optionsA, optionsB) {
    return objectsMergeDeep(optionsA, optionsB || {});
  }
  function optionsAtMedia(options) {
    const optionsAtMedia2 = options.breakpoints || {};
    const matchedMediaOptions = objectKeys(optionsAtMedia2).filter((media) => ownerWindow.matchMedia(media).matches).map((media) => optionsAtMedia2[media]).reduce((a, mediaOption) => mergeOptions(a, mediaOption), {});
    return mergeOptions(options, matchedMediaOptions);
  }
  function optionsMediaQueries(optionsList) {
    return optionsList.map((options) => objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries) => acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
  }
  const self = {
    mergeOptions,
    optionsAtMedia,
    optionsMediaQueries
  };
  return self;
}
function PluginsHandler(optionsHandler) {
  let activePlugins = [];
  function init(emblaApi, plugins) {
    activePlugins = plugins.filter(({
      options
    }) => optionsHandler.optionsAtMedia(options).active !== false);
    activePlugins.forEach((plugin) => plugin.init(emblaApi, optionsHandler));
    return plugins.reduce((map, plugin) => Object.assign(map, {
      [plugin.name]: plugin
    }), {});
  }
  function destroy() {
    activePlugins = activePlugins.filter((plugin) => plugin.destroy());
  }
  const self = {
    init,
    destroy
  };
  return self;
}
function EmblaCarousel(root24, userOptions, userPlugins) {
  const ownerDocument = root24.ownerDocument;
  const ownerWindow = ownerDocument.defaultView;
  const optionsHandler = OptionsHandler(ownerWindow);
  const pluginsHandler = PluginsHandler(optionsHandler);
  const mediaHandlers = EventStore();
  const eventHandler = EventHandler();
  const {
    mergeOptions,
    optionsAtMedia,
    optionsMediaQueries
  } = optionsHandler;
  const {
    on,
    off,
    emit
  } = eventHandler;
  const reInit = reActivate;
  let destroyed = false;
  let engine;
  let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
  let options = mergeOptions(optionsBase);
  let pluginList = [];
  let pluginApis;
  let container9;
  let slides;
  function storeElements() {
    const {
      container: userContainer,
      slides: userSlides
    } = options;
    const customContainer = isString(userContainer) ? root24.querySelector(userContainer) : userContainer;
    container9 = customContainer || root24.children[0];
    const customSlides = isString(userSlides) ? container9.querySelectorAll(userSlides) : userSlides;
    slides = [].slice.call(customSlides || container9.children);
  }
  function createEngine(options2) {
    const engine2 = Engine(root24, container9, slides, ownerDocument, ownerWindow, options2, eventHandler);
    if (options2.loop && !engine2.slideLooper.canLoop()) {
      const optionsWithoutLoop = Object.assign({}, options2, {
        loop: false
      });
      return createEngine(optionsWithoutLoop);
    }
    return engine2;
  }
  function activate(withOptions, withPlugins) {
    if (destroyed) return;
    optionsBase = mergeOptions(optionsBase, withOptions);
    options = optionsAtMedia(optionsBase);
    pluginList = withPlugins || pluginList;
    storeElements();
    engine = createEngine(options);
    optionsMediaQueries([optionsBase, ...pluginList.map(({
      options: options2
    }) => options2)]).forEach((query) => mediaHandlers.add(query, "change", reActivate));
    if (!options.active) return;
    engine.translate.to(engine.location.get());
    engine.animation.init();
    engine.slidesInView.init();
    engine.slideFocus.init(self);
    engine.eventHandler.init(self);
    engine.resizeHandler.init(self);
    engine.slidesHandler.init(self);
    if (engine.options.loop) engine.slideLooper.loop();
    if (container9.offsetParent && slides.length) engine.dragHandler.init(self);
    pluginApis = pluginsHandler.init(self, pluginList);
  }
  function reActivate(withOptions, withPlugins) {
    const startIndex = selectedScrollSnap();
    deActivate();
    activate(mergeOptions({
      startIndex
    }, withOptions), withPlugins);
    eventHandler.emit("reInit");
  }
  function deActivate() {
    engine.dragHandler.destroy();
    engine.eventStore.clear();
    engine.translate.clear();
    engine.slideLooper.clear();
    engine.resizeHandler.destroy();
    engine.slidesHandler.destroy();
    engine.slidesInView.destroy();
    engine.animation.destroy();
    pluginsHandler.destroy();
    mediaHandlers.clear();
  }
  function destroy() {
    if (destroyed) return;
    destroyed = true;
    mediaHandlers.clear();
    deActivate();
    eventHandler.emit("destroy");
    eventHandler.clear();
  }
  function scrollTo(index, jump, direction) {
    if (!options.active || destroyed) return;
    engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
    engine.scrollTo.index(index, direction || 0);
  }
  function scrollNext(jump) {
    const next = engine.index.add(1).get();
    scrollTo(next, jump, -1);
  }
  function scrollPrev(jump) {
    const prev = engine.index.add(-1).get();
    scrollTo(prev, jump, 1);
  }
  function canScrollNext() {
    const next = engine.index.add(1).get();
    return next !== selectedScrollSnap();
  }
  function canScrollPrev() {
    const prev = engine.index.add(-1).get();
    return prev !== selectedScrollSnap();
  }
  function scrollSnapList() {
    return engine.scrollSnapList;
  }
  function scrollProgress() {
    return engine.scrollProgress.get(engine.offsetLocation.get());
  }
  function selectedScrollSnap() {
    return engine.index.get();
  }
  function previousScrollSnap() {
    return engine.indexPrevious.get();
  }
  function slidesInView() {
    return engine.slidesInView.get();
  }
  function slidesNotInView() {
    return engine.slidesInView.get(false);
  }
  function plugins() {
    return pluginApis;
  }
  function internalEngine() {
    return engine;
  }
  function rootNode() {
    return root24;
  }
  function containerNode() {
    return container9;
  }
  function slideNodes() {
    return slides;
  }
  const self = {
    canScrollNext,
    canScrollPrev,
    containerNode,
    internalEngine,
    destroy,
    off,
    on,
    emit,
    plugins,
    previousScrollSnap,
    reInit,
    rootNode,
    scrollNext,
    scrollPrev,
    scrollProgress,
    scrollSnapList,
    scrollTo,
    selectedScrollSnap,
    slideNodes,
    slidesInView,
    slidesNotInView
  };
  activate(userOptions, userPlugins);
  setTimeout(() => eventHandler.emit("init"), 0);
  return self;
}
EmblaCarousel.globalOptions = void 0;

// ../../node_modules/.pnpm/embla-carousel-react@8.6.0_react@19.1.0/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js
function useEmblaCarousel(options = {}, plugins = []) {
  const storedOptions = (0, import_react39.useRef)(options);
  const storedPlugins = (0, import_react39.useRef)(plugins);
  const [emblaApi, setEmblaApi] = (0, import_react39.useState)();
  const [viewport, setViewport] = (0, import_react39.useState)();
  const reInit = (0, import_react39.useCallback)(() => {
    if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
  }, [emblaApi]);
  (0, import_react39.useEffect)(() => {
    if (areOptionsEqual(storedOptions.current, options)) return;
    storedOptions.current = options;
    reInit();
  }, [options, reInit]);
  (0, import_react39.useEffect)(() => {
    if (arePluginsEqual(storedPlugins.current, plugins)) return;
    storedPlugins.current = plugins;
    reInit();
  }, [plugins, reInit]);
  (0, import_react39.useEffect)(() => {
    if (canUseDOM() && viewport) {
      EmblaCarousel.globalOptions = useEmblaCarousel.globalOptions;
      const newEmblaApi = EmblaCarousel(viewport, storedOptions.current, storedPlugins.current);
      setEmblaApi(newEmblaApi);
      return () => newEmblaApi.destroy();
    } else {
      setEmblaApi(void 0);
    }
  }, [viewport, setEmblaApi]);
  return [setViewport, emblaApi];
}
useEmblaCarousel.globalOptions = void 0;

// src/molecules/Carousel/Carousel.css.ts
var import_css44 = require("@vanilla-extract/css");
var embla = (0, import_css44.style)({
  overflow: "hidden",
  // 네이티브 스크롤 숨김
  width: "100%"
});
var embla__container = (0, import_css44.style)({
  display: "flex",
  padding: "16px 0"
  // 기존 상하 패딩 유지
});
var embla__slide = (0, import_css44.style)({
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
  return /* @__PURE__ */ import_react40.default.createElement("div", { className: embla, ref: emblaRef }, /* @__PURE__ */ import_react40.default.createElement(
    "div",
    {
      className: embla__container,
      style: {
        gap: `${gap2}px`,
        paddingLeft: paddingHoriz,
        paddingRight: paddingHoriz
      }
    },
    import_react40.default.Children.map(children, (child) => /* @__PURE__ */ import_react40.default.createElement(
      "div",
      {
        className: embla__slide,
        style: __spreadValues(__spreadValues({}, itemHeight ? { height: `${itemHeight}px` } : { height: "auto" }), itemWidth ? { flex: `0 0 ${itemWidth}px` } : { flex: "0 0 auto" })
      },
      child
    ))
  ));
}
var Carousel_default = Carousel;

// src/molecules/FilterSection/FilterSection.tsx
var import_react41 = __toESM(require("react"));

// src/molecules/FilterSection/FilterSection.css.ts
var import_css45 = require("@vanilla-extract/css");
var root20 = (0, import_css45.style)({
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column"
});
var title11 = (0, import_css45.style)(__spreadProps(__spreadValues({}, TYPO.BODY1B), {
  color: "#000",
  padding: "12px 0px"
}));
var desc3 = (0, import_css45.style)(__spreadProps(__spreadValues({
  paddingLeft: "4px"
}, TYPO.CAPTION1M), {
  color: COLORS.GREEN700
}));
var chipsContainer = (0, import_css45.style)({
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
  return /* @__PURE__ */ import_react41.default.createElement("div", { className: root20 }, /* @__PURE__ */ import_react41.default.createElement("div", { className: title11 }, title13, /* @__PURE__ */ import_react41.default.createElement("span", { className: desc3 }, " ", multiSelect ? "\uC911\uBCF5 \uAC00\uB2A5" : void 0)), /* @__PURE__ */ import_react41.default.createElement("div", { className: chipsContainer }, chips.map((chip3) => /* @__PURE__ */ import_react41.default.createElement(
    FilterChipExpand_default,
    {
      key: chip3.id,
      title: chip3.title,
      caption: chip3.caption,
      selected: selectedChips.includes(chip3.id),
      onClick: () => onChipClick(chip3.id)
    }
  ))));
}
var FilterSection_default = FilterSection;

// src/molecules/Grid/Grid.tsx
var import_react42 = __toESM(require("react"));

// src/molecules/Grid/Grid.css.ts
var import_css46 = require("@vanilla-extract/css");
var root21 = (0, import_css46.style)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(162px, 1fr))",
  gap: "16px",
  boxSizing: "border-box"
});

// src/molecules/Grid/Grid.tsx
function Grid({ children, className }) {
  const combinedClassName = [root21, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ import_react42.default.createElement("div", { className: combinedClassName }, children);
}
var Grid_default = Grid;

// src/molecules/MapFloatingButtons/MapFloatingButtons.tsx
var import_react43 = __toESM(require("react"));
var import_image28 = __toESM(require("next/image"));

// src/molecules/MapFloatingButtons/MapFloatingButtons.css.ts
var import_css47 = require("@vanilla-extract/css");
var root22 = (0, import_css47.style)({
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
var gpsButton = (0, import_css47.style)({
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
var pulseAnimation = (0, import_css47.keyframes)({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.1)" },
  "100%": { transform: "scale(1)" }
});
var fabPulse = (0, import_css47.style)({
  animationName: pulseAnimation,
  animationDuration: "0.7s",
  animationIterationCount: 3,
  animationTimingFunction: "ease-in-out"
});
var fabWithTooltipContainer = (0, import_css47.style)({
  position: "relative"
});

// src/molecules/MapFloatingButtons/MapFloatingButtons.tsx
function MapFloatingButtons({
  onGpsClick,
  chipMapListProps,
  fabProps,
  tooltipProps
}) {
  const animatedFabProps = __spreadProps(__spreadValues({}, fabProps), {
    className: [fabProps.className, fabPulse].filter(Boolean).join(" ")
  });
  return /* @__PURE__ */ import_react43.default.createElement("div", { className: root22 }, /* @__PURE__ */ import_react43.default.createElement("div", null, /* @__PURE__ */ import_react43.default.createElement("button", { className: gpsButton, onClick: onGpsClick }, /* @__PURE__ */ import_react43.default.createElement(
    import_image28.default,
    {
      src: "/assets/icon24/gps.svg",
      alt: "\uD604\uC7AC \uC704\uCE58",
      width: 24,
      height: 24
    }
  ))), /* @__PURE__ */ import_react43.default.createElement("div", null, /* @__PURE__ */ import_react43.default.createElement(ChipMapList, __spreadValues({}, chipMapListProps))), /* @__PURE__ */ import_react43.default.createElement("div", { className: fabWithTooltipContainer }, /* @__PURE__ */ import_react43.default.createElement(Fab, __spreadValues({}, animatedFabProps)), /* @__PURE__ */ import_react43.default.createElement(Tooltip, __spreadValues({}, tooltipProps))));
}
var MapFloatingButtons_default = MapFloatingButtons;

// src/molecules/SearchHeader/SearchHeader.tsx
var import_react44 = __toESM(require("react"));
var import_image29 = __toESM(require("next/image"));

// src/molecules/SearchHeader/SearchHeader.css.ts
var import_css48 = require("@vanilla-extract/css");
var root23 = (0, import_css48.style)({
  width: "100%",
  padding: "8px 18px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  gap: "12px"
});
var backButton = (0, import_css48.style)({
  background: "none",
  border: "none",
  padding: "0",
  cursor: "pointer",
  flexShrink: 0
});
var searchFieldWrapperBase = (0, import_css48.style)({
  flex: 1,
  position: "relative"
});
var searchFieldWrapper = (0, import_css48.styleVariants)({
  fullWidth: [searchFieldWrapperBase, { width: "100%" }],
  withBackButton: [searchFieldWrapperBase, { width: "calc(100% - 48px)" }]
});
var clickOverlay = (0, import_css48.style)({
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
  return /* @__PURE__ */ import_react44.default.createElement("div", { className: root23 }, backIconHandler && /* @__PURE__ */ import_react44.default.createElement("button", { className: backButton, onClick: backIconHandler }, /* @__PURE__ */ import_react44.default.createElement(import_image29.default, { src: iconSrc, alt: "\uB4A4\uB85C\uAC00\uAE30", width: 24, height: 24 })), /* @__PURE__ */ import_react44.default.createElement(
    "div",
    {
      className: searchFieldWrapper[backIconHandler ? "withBackButton" : "fullWidth"]
    },
    /* @__PURE__ */ import_react44.default.createElement(SearchField_default, __spreadProps(__spreadValues({}, searchFieldProps), { readOnly: !!onClick })),
    onClick && /* @__PURE__ */ import_react44.default.createElement("div", { className: clickOverlay, onClick })
  ));
}
var SearchHeader_default = SearchHeader;

// src/molecules/ShortsOverlay/ShortsOverlay.tsx
var import_react45 = __toESM(require("react"));

// src/molecules/ShortsOverlay/ShortsOverlay.css.ts
var import_css49 = require("@vanilla-extract/css");
var overlayContainer = (0, import_css49.style)({
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
  return /* @__PURE__ */ import_react45.default.createElement("div", { className: overlayContainer }, children);
}

// src/molecules/WelcomeOverlay/WelcomeOverlay.tsx
var import_react46 = __toESM(require("react"));

// src/molecules/WelcomeOverlay/style.css.ts
var import_css50 = require("@vanilla-extract/css");
var fadeIn = (0, import_css50.keyframes)({
  "0%": { opacity: 0, transform: "scale(0.9)" },
  "100%": { opacity: 1, transform: "scale(1)" }
});
var overlay5 = (0, import_css50.style)({
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
var modalCard = (0, import_css50.style)({
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
var title12 = (0, import_css50.style)(__spreadProps(__spreadValues({}, TYPO.HEADING1), {
  color: COLORS.NEUTRAL800,
  marginBottom: "6px"
}));
var subtitle2 = (0, import_css50.style)(__spreadProps(__spreadValues({}, TYPO.BODY2M), {
  color: COLORS.NEUTRAL500,
  marginBottom: "20px"
}));
var checkList = (0, import_css50.style)({
  listStyle: "none",
  padding: 0,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginBottom: "24px"
});
var listItem2 = (0, import_css50.style)(__spreadProps(__spreadValues({}, TYPO.BODY3), {
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
var active3 = (0, import_css50.style)({
  background: COLORS.GREEN50,
  color: COLORS.GREEN700,
  fontWeight: 600
});
var icon4 = (0, import_css50.style)({
  width: "24px",
  height: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
var startButton = (0, import_css50.style)({
  width: "100%",
  borderRadius: "12px",
  padding: "12px 0",
  fontSize: "16px",
  fontWeight: 600,
  border: "none",
  transition: "all 0.3s ease"
});
var buttonDisabled = (0, import_css50.style)({
  background: COLORS.NEUTRAL200,
  color: COLORS.NEUTRAL500,
  cursor: "not-allowed",
  opacity: 0.6
});
var buttonActive = (0, import_css50.style)({
  background: COLORS.GREEN600,
  color: COLORS.NEUTRAL0,
  cursor: "pointer",
  ":hover": { opacity: 0.85 }
});
var errorText = (0, import_css50.style)({
  marginTop: "10px",
  fontSize: "12px",
  fontWeight: 600,
  color: "#E74C3C"
});

// src/molecules/WelcomeOverlay/WelcomeOverlay.tsx
var import_image30 = __toESM(require("next/image"));
var STEPS = [
  "\uBC18\uB824\uB3D9\uBB3C \uC815\uBCF4 \uBD84\uC11D \uC911",
  "\uC5EC\uD589 \uCDE8\uD5A5 \uBD84\uC11D \uC911",
  "\uC704\uCE58 \uC815\uBCF4 \uD655\uC778 \uC911(\uC120\uD0DD)"
];
function WelcomeOverlay({
  onFetchLocation,
  latitude,
  longitude,
  isLoading,
  error
}) {
  const [currentStep, setCurrentStep] = (0, import_react46.useState)(0);
  const [completed, setCompleted] = (0, import_react46.useState)(
    new Array(STEPS.length).fill(false)
  );
  const [isVisible, setIsVisible] = (0, import_react46.useState)(true);
  const [isReadyToAnimate, setIsReadyToAnimate] = (0, import_react46.useState)(false);
  (0, import_react46.useEffect)(() => {
    const timer = setTimeout(() => {
      setIsReadyToAnimate(true);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  (0, import_react46.useEffect)(() => {
    if (!isReadyToAnimate) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < STEPS.length) {
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
  }, [isReadyToAnimate]);
  (0, import_react46.useEffect)(() => {
    if (currentStep === STEPS.length) {
      onFetchLocation().catch(() => {
      });
    }
  }, [currentStep, onFetchLocation]);
  if (!isVisible) return null;
  const isButtonEnabled = currentStep === STEPS.length && !isLoading;
  const buttonText = isLoading && currentStep === STEPS.length ? "\uC704\uCE58 \uCC3E\uB294 \uC911..." : "\uB315\uAE00\uC81C\uC8FC \uD0D0\uC0C9\uD558\uAE30";
  const buttonStatus = isButtonEnabled ? "primary" /* PRIMARY */ : "disabled" /* DISABLED */;
  return /* @__PURE__ */ import_react46.default.createElement("div", { className: overlay5 }, /* @__PURE__ */ import_react46.default.createElement("div", { className: modalCard }, /* @__PURE__ */ import_react46.default.createElement(
    import_image30.default,
    {
      src: "/assets/footprint.png",
      alt: "\uB315\uAE00\uC81C\uC8FC",
      width: 150,
      height: 150
    }
  ), /* @__PURE__ */ import_react46.default.createElement("h2", { className: title12 }, "\u{1F389} \uD658\uC601\uD569\uB2C8\uB2E4"), /* @__PURE__ */ import_react46.default.createElement("p", { className: subtitle2 }, "\uB315\uB315\uC774\uC640 \uD568\uAED8\uD560 \uC5EC\uD589\uC744 \uC900\uBE44\uD558\uACE0 \uC788\uC5B4\uC694"), /* @__PURE__ */ import_react46.default.createElement("ul", { className: checkList }, STEPS.map((text3, i) => /* @__PURE__ */ import_react46.default.createElement(
    "li",
    {
      key: i,
      className: `${listItem2} ${(completed[i] || i === currentStep && isLoading) && isReadyToAnimate ? active3 : ""}`
    },
    /* @__PURE__ */ import_react46.default.createElement("div", { className: icon4 }, /* @__PURE__ */ import_react46.default.createElement(
      ProgressCircle,
      {
        size: 18,
        color: "#00A63E",
        progress: isReadyToAnimate ? completed[i] ? 1 : i === currentStep ? 0.7 : 0 : 0,
        active: isReadyToAnimate && i === currentStep
      }
    )),
    text3
  ))), /* @__PURE__ */ import_react46.default.createElement(
    Button,
    {
      size: "medium" /* MEDIUM */,
      status: buttonStatus,
      text: buttonText,
      onClick: () => {
        if (latitude && longitude) {
          console.log("\uC704\uCE58 \uC800\uC7A5\uB428:", latitude, longitude);
        } else {
          console.log("\uC704\uCE58 \uC815\uBCF4 \uC5C6\uC774 \uC2DC\uC791");
        }
        setIsVisible(false);
      }
    }
  ), error && /* @__PURE__ */ import_react46.default.createElement("p", { className: errorText }, "\u{1F4CD} ", error)));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
