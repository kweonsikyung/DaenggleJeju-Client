"use client";

import React from "react";
import Image from "next/image";
import * as s from "./DanglePlace.css";

export interface DanglePlaceProps {
  /** 썸네일 이미지 URL */
  thumbnailUrl: string;
  /** 위치 및 카테고리 정보 */
  locationCategory: string;
  /** 장소명 */
  name: string;
  /** 거리 */
  distance: number;
  /** 재생 수 */
  playCount: number;
  /** 북마크 수 */
  bookmarkCount: number;
  /** 태그 목록 */
  tags: string[];
  /** 카드 확장 여부 */
  isExpanded?: boolean;
  /** 상세 정보 (확장 시) */
  details?: { time: string; price: string };
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 북마크 클릭 이벤트 핸들러 */
  onBookmarkClick?: () => void;
}

export function DanglePlace({
  thumbnailUrl,
  locationCategory,
  name,
  distance,
  playCount,
  bookmarkCount,
  isExpanded = false,
  tags,
  details,
  onClick,
  onBookmarkClick,
}: DanglePlaceProps) {
  return (
    <div
      className={s.root[isExpanded ? "isExpanded" : "default"]}
      onClick={onClick}
    >
      <div className={s.headerContainer}>
        <div className={s.thumbnailWrapper}>
          <Image
            src={thumbnailUrl}
            alt={name}
            width={80}
            height={80}
            className={s.thumbnail}
          />
        </div>
        <div className={s.contentWrapper}>
          <span className={s.locationCategory}>{locationCategory}</span>
          <h3 className={s.name}>{name}</h3>
          <div className={s.stats}>
            <span className={s.statValue}>{distance}km</span>
            <div className={s.statItem}>·</div>
            <div className={s.statItem}>
              <Image
                alt="댓글"
                width={12}
                height={12}
                src="/assets/icon12/play_filled.svg"
              />
              <span className={s.statValue}>{playCount}</span>
            </div>
            <div className={s.statItem}>·</div>
            <div className={s.statItem}>
              <Image
                alt="댓글"
                width={12}
                height={12}
                src="/assets/icon12/bookmark_filled.svg"
              />
              <span className={s.statValue}>{bookmarkCount}</span>
            </div>
          </div>
          <div className={s.tags}>
            {tags.map((tag) => (
              <span key={tag} className={s.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className={s.expandedContent}>
          {details && (
            <div className={s.details}>
              <div className={s.detailsTop}>
                <div>하루 기준</div>
                <div className={s.detailLabel}>{details.time}</div>
              </div>
              <div className={s.detailValue}>
                {details.price}
                <span className={s.detailLabel}> 원~</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DanglePlace;
