"use client";

import React, { ReactNode } from "react";
import * as s from "./Carousel.css";

export interface CarouselProps {
  children: ReactNode;
  /** 아이템 사이의 간격 (단위: px) */
  gap?: number;
  /** 아이템의 높이 (단위: px) */
  itemHeight?: number;
  /** 아이템의 너비 (단위: px) */
  itemWidth?: number;
  /** 컴포넌트 좌우 여백 */
  paddingHoriz?: string | number;
}

export function Carousel({
  children,
  gap = 16,
  itemHeight,
  itemWidth,
  paddingHoriz,
}: CarouselProps) {
  return (
    <div className={s.wrapper}>
      <div
        className={s.container}
        style={{
          gap: `${gap}px`,
          paddingLeft: paddingHoriz,
          paddingRight: paddingHoriz,
        }}
      >
        {React.Children.map(children, (child) => (
          <div
            className={s.item}
            style={{
              ...(itemHeight ? { height: `${itemHeight}px` } : {}),
              ...(itemWidth ? { width: `${itemWidth}px` } : {}),
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
