"use client";

import React, { useState, useEffect, useMemo } from "react";
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
  playCount?: number;
  /** 북마크 수 */
  bookmarkCount?: number;
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
  // 1. 초기 이미지 URL 디코딩 및 유효성 검사
  const initialImageSrc = useMemo(() => {
    let decodedThumbnailUrl = thumbnailUrl;
    if (typeof thumbnailUrl === "string" && thumbnailUrl.includes("%")) {
      try {
        decodedThumbnailUrl = decodeURIComponent(thumbnailUrl);
      } catch (e) {
        console.error("URL 디코딩 실패:", thumbnailUrl, e);
        decodedThumbnailUrl = null;
      }
    }

    if (
      typeof decodedThumbnailUrl === "string" &&
      decodedThumbnailUrl !== "사진 없음" &&
      /^https?:\/\//i.test(decodedThumbnailUrl)
    ) {
      return decodedThumbnailUrl; // 유효한 URL
    }
    return "/assets/jeju.png"; // 기본 이미지
  }, [thumbnailUrl]);

  // 2. 이미지 URL 상태 관리
  const [currentImageSrc, setCurrentImageSrc] = useState(initialImageSrc);

  // 3. thumbnailUrl prop이 변경될 때 상태 업데이트
  useEffect(() => {
    setCurrentImageSrc(initialImageSrc);
  }, [initialImageSrc]);

  // 4. 이미지 로드 에러 핸들러
  const handleImageError = () => {
    setCurrentImageSrc("/assets/jeju.png");
  };

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
            src={currentImageSrc}
            alt={"이미지"}
            width={80}
            height={80}
            className={s.thumbnail}
            onError={handleImageError}
          />
        </div>
        <div className={s.contentWrapper}>
          <span className={s.locationCategory}>{locationCategory}</span>
          <h3 className={s.name}>{name}</h3>
          <div className={s.stats}>
            {distance && <span className={s.statValue}>{distance}km</span>}
            {distance &&
              (typeof playCount === "number" ||
                typeof bookmarkCount === "number") && (
                <div className={s.statItem}>·</div>
              )}

            {typeof playCount === "number" && (
              <div className={s.statItem}>
                <Image
                  alt="재생 수"
                  width={12}
                  height={12}
                  src="/assets/icon12/play_filled.svg"
                />
                <span className={s.statValue}>{playCount}</span>
              </div>
            )}

            {typeof playCount === "number" &&
              typeof bookmarkCount === "number" && (
                <div className={s.statItem}>·</div>
              )}

            {typeof bookmarkCount === "number" && (
              <div className={s.statItem}>
                <Image
                  alt="북마크"
                  width={12}
                  height={12}
                  src="/assets/icon12/bookmark_filled.svg"
                />
                <span className={s.statValue}>{bookmarkCount}</span>
              </div>
            )}
          </div>

          <div className={s.tags}>
            {tags.map((tag, index) => (
              <span key={`${tag}-${index}`} className={s.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        {onBookmarkClick && (
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
        )}
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
