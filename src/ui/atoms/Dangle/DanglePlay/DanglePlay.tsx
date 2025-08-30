"use client";

import React from "react";
import Image from "next/image";
import * as s from "./DanglePlay.css";

export interface DanglePlayProps {
  /** 컴포넌트 타입 */
  type: "small" | "medium";
  /** 컴포넌트 너비 */
  width?: string | number;
  /** 배경 이미지 URL */
  imageUrl: string;
  /** 프로필 이미지 URL */
  profileImageUrl: string;
  /** 사용자 이름 */
  name: string;
  /** 위치 정보 (medium 타입 전용) */
  location?: string;
  /** 위치 정보 (medium 타입 전용) */
  address?: string;
  /** 제목 (medium 타입 전용) */
  title?: string;
  /** 조회수 (medium 타입 전용) */
  views?: number;
  /** 댓글 수 (medium 타입 전용) */
  comments?: number;
  /** 업로드 시간 (medium 타입 전용) */
  timeAgo?: string;
  /** 해시태그 (medium 타입 전용) */
  tags?: string[];
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
}

export function DanglePlay({
  type,
  width = "100%",
  imageUrl,
  profileImageUrl,
  name,
  location,
  address,
  title,
  views,
  comments,
  timeAgo,
  tags,
  onClick,
}: DanglePlayProps) {
  const isMedium = type === "medium";
  const imageWidth = isMedium ? 162 : 150;
  const imageHeight = isMedium ? 242 : 225;

  return (
    <div className={s.root[type]} style={{ width }} onClick={onClick}>
      <div className={s.imageWrapper[type]}>
        <Image
          src={imageUrl}
          alt={name}
          width={imageWidth}
          height={imageHeight}
          className={s.image}
        />
        <div className={s.profileOverlay}>
          <div className={s.profileContainer}>
            <Image
              src={profileImageUrl}
              alt={`${name}의 프로필 이미지`}
              width={22}
              height={22}
              className={s.profileImage}
            />
            <span className={s.name}>{name}</span>
          </div>
        </div>
      </div>
      {isMedium && (
        <div className={s.content}>
          <div className={s.textInfo}>
            <div className={s.location}>
              {location} · <span className={s.address}>{address}</span>
            </div>
            <div className={s.title}>{title}</div>
            <div className={s.tagWrapper}>
              {tags?.map((tag) => (
                <span key={tag} className={s.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className={s.stats}>
            <div className={s.statItem}>
              <Image
                src="/assets/icon12/eye-outlined.svg"
                alt="조회수"
                width={12}
                height={12}
              />
              <span className={s.statValue}>{views?.toLocaleString()}</span>
            </div>
            <div className={s.statItem}>·</div>
            <div className={s.statItem}>
              <Image
                alt="댓글"
                width={12}
                height={12}
                src="/assets/icon12/bookmark_filled.svg"
              />
              <span className={s.statValue}>{comments?.toLocaleString()}</span>
            </div>
            <div className={s.statItem}>·</div>
            <div className={s.timeAgo}>{timeAgo}</div>
          </div>
        </div>
      )}
    </div>
  );
}
