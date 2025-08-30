"use client";

import React, { ReactNode } from "react";
import * as s from "./Grid.css";

export interface GridProps {
  /** 그리드 내부에 렌더링될 요소들 (gap 16 고정)*/
  children: ReactNode;
}

export function Grid({ children }: GridProps) {
  return <div className={s.root}>{children}</div>;
}

export default Grid;
