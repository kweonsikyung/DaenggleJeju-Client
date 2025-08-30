"use client";

import React from "react";
import Image from "next/image";
import * as s from "./MapFloatingButtons.css";
import { Fab, FabProps } from "@/ui/atoms/Fab/Fab";
import {
  ChipMapList,
  ChipMapListProps,
} from "@/ui/atoms/Chip/ChipMapList/ChipMapList";

export interface MapFloatingButtonsProps {
  /** GPS 버튼 클릭 이벤트 핸들러 */
  onGpsClick: () => void;
  /** 장소 목록 칩 컴포넌트 props */
  chipMapListProps: ChipMapListProps;
  /** 댕글추천 FAB 컴포넌트 props */
  fabProps: FabProps;
}

export function MapFloatingButtons({
  onGpsClick,
  chipMapListProps,
  fabProps,
}: MapFloatingButtonsProps) {
  return (
    <div className={s.root}>
      <div>
        <button className={s.gpsButton} onClick={onGpsClick}>
          <Image
            src="/assets/icon24/gps.svg"
            alt="현재 위치"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div>
        <ChipMapList {...chipMapListProps} />
      </div>
      <div>
        <Fab {...fabProps} />
      </div>
    </div>
  );
}

export default MapFloatingButtons;
