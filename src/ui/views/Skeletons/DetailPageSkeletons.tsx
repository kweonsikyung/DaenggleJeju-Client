"use client";

import React from "react";
import { Skeleton } from "@/ui/atoms/Skeleton/Skeleton";
import Carousel from "@/ui/molecules/Carousel/Carousel";
import * as s from "@/app/detail/[contentId]/style.css";

/**
 * 장소 상세 페이지 - 메인 정보 스켈레톤
 */
export function PlaceInfoSkeleton() {
  return (
    <section className={s.placeInfoSection}>
      <div className={s.placeHeader}>
        <Skeleton width={80} height={80} style={{ borderRadius: "8px" }} />
        <div className={s.placeDetails} style={{ flex: 1 }}>
          <Skeleton width="60%" height="28px" />
          <Skeleton width="40%" height="16px" style={{ marginTop: "8px" }} />
          <Skeleton width="70%" height="24px" style={{ marginTop: "10px" }} />
        </div>
      </div>
      <div className={s.tagGroup}>
        <Skeleton width="50px" height="20px" />
        <Skeleton width="70px" height="20px" style={{ marginLeft: "8px" }} />
        <Skeleton width="50px" height="20px" style={{ marginLeft: "8px" }} />
      </div>
      <ul className={s.infoList} style={{ gap: "12px" }}>
        <li>
          <Skeleton height="16px" />
        </li>
        <li>
          <Skeleton height="16px" />
        </li>
        <li>
          <Skeleton height="16px" />
        </li>
      </ul>
    </section>
  );
}

/**
 * 장소 상세 페이지 - 연관 영상 캐러셀 스켈레톤
 */
export function VideoCarouselSkeleton() {
  return (
    <Carousel gap={16} itemWidth={150}>
      {[1, 2, 3].map((n) => (
        <div key={n}>
          <Skeleton width={150} height={225} style={{ borderRadius: "8px" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "8px",
              gap: "8px",
            }}
          ></div>
        </div>
      ))}
    </Carousel>
  );
}
