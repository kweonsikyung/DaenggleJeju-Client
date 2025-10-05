"use client";

import React from "react";
import Image from "next/image";
import * as s from "./DanglePlace.css";

export interface DanglePlaceProps {
  /** 썸네일 이미지 URL */
  thumbnailUrl: string | null;
  /** 위치 및 카테고리 정보 */
  locationCategory: string;
  /** 장소명 */
  name: string;
  /** 거리 */
  distance: string | null;
  /** 재생 수 */
  playCount: number;
  /** 북마크 수 */
  bookmarkCount: number;
  /** 태그 목록 */
  tags?: string[];
  /** 카드 확장 여부 */
  isExpanded?: boolean;
  /** 상세 정보 (확장 시) */
  details?: { time: string; price: string };
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 북마크 상태 */
  isBookmarked?: boolean;
  /** 북마크 클릭 이벤트 핸들러 */
  onBookmarkClick?: () => Promise<void> | void;
}

export function DanglePlace({
  thumbnailUrl,
  locationCategory,
  name,
  distance,
  playCount,
  bookmarkCount,
  isExpanded = false,
  tags = [],
  details,
  onClick,
  isBookmarked = false,
  onBookmarkClick,
}: DanglePlaceProps) {
  const isValidUrl =
    typeof thumbnailUrl === "string" &&
    thumbnailUrl !== "사진 없음" &&
    /^https?:\/\//i.test(thumbnailUrl);
  const imageSrc = isValidUrl ? thumbnailUrl : "/assets/jeju.png";

  const handleBookmarkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onBookmarkClick) {
      onBookmarkClick();
    }
  };

  return (
    <div
      className={s.root[isExpanded ? "isExpanded" : "default"]}
      onClick={onClick}
    >
      <div className={s.headerContainer}>
        <div className={s.thumbnailWrapper}>
          <Image
            src={imageSrc}
            alt={"이미지"}
            width={80}
            height={80}
            className={s.thumbnail}
          />
        </div>
        <div className={s.contentWrapper}>
          <span className={s.locationCategory}>{locationCategory}</span>
          <h3 className={s.name}>{name}</h3>
          <div className={s.stats}>
            {distance && (
              <>
                <span className={s.statValue}>{distance}km</span>
                <div className={s.statItem}>·</div>
              </>
            )}
            <div className={s.statItem}>
              <Image
                alt="재생 수"
                width={12}
                height={12}
                src="/assets/icon12/play_filled.svg"
              />
              <span className={s.statValue}>{playCount}</span>
            </div>
            <div className={s.statItem}>·</div>
            <div className={s.statItem}>
              <Image
                alt="북마크"
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
        <button className={s.bookmarkButton} onClick={handleBookmarkClick}>
          <Image
            alt="북마크"
            width={24}
            height={24}
            src={
              isBookmarked
                ? "/assets/icon24/bookmark_filled.svg"
                : "/assets/icon24/bookmark_line.svg"
            }
          />
        </button>
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
