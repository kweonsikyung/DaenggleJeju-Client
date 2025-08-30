"use client";

import React from "react";
import Image from "next/image";
import * as s from "./Fab.css";

export interface FabProps {
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
}

export function Fab({ onClick }: FabProps) {
  return (
    <button className={s.root} onClick={onClick}>
      <Image src="/assets/map/fab.svg" alt="댕글추천" width={60} height={60} />
    </button>
  );
}
