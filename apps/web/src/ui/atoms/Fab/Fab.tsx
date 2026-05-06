"use client";

import React from "react";
import Image from "next/image";
import * as s from "./Fab.css";

export interface FabProps {
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 외부에서 주입할 클래스 */
  className?: string;
}

export function Fab({ onClick, className }: FabProps) {
  const combinedClassName = [s.root, className].filter(Boolean).join(" ");

  return (
    <button className={combinedClassName} onClick={onClick}>
      <Image src="/assets/map/fab.svg" alt="댕글추천" width={60} height={60} />
    </button>
  );
}
