"use client";

import React from "react";
import * as s from "./ShortsOverlay.css";

interface ShortsOverlayProps {
  children: React.ReactNode;
}

/**
 * 오버레이 레이아웃
 */
export default function ShortsOverlay({ children }: ShortsOverlayProps) {
  return <div className={s.overlayContainer}>{children}</div>;
}
