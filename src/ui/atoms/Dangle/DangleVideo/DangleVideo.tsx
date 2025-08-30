"use client";

import React from "react";
import Image from "next/image";
import * as s from "./DangleVideo.css";

export interface DangleVideoProps {
  /** 썸네일 이미지 URL */
  thumbnailUrl: string;
  /** 제목 텍스트 */
  title: string;
  /** 조회수 */
  views: number;
  /** 댓글 수 */
  comments: number;
  /** 업로드 시간 */
  timeAgo: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
}

export function DangleVideo({
  thumbnailUrl,
  title,
  views,
  comments,
  timeAgo,
  onClick,
}: DangleVideoProps) {
  return (
    <div className={s.root} onClick={onClick}>
      <div className={s.thumbnailWrapper}>
        <Image
          src={thumbnailUrl}
          alt="비디오 썸네일"
          width={54}
          height={80}
          className={s.thumbnail}
        />
      </div>
      <div className={s.contentWrapper}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.stats}>
          <div className={s.statItem}>
            <Image
              src="/assets/icon12/eye-outlined.svg"
              alt="조회수"
              width={12}
              height={12}
            />
            <span className={s.statValue}>{views.toLocaleString()}</span>
          </div>
          <span className={s.divider}>·</span>
          <div className={s.statItem}>
            <Image
              alt="댓글"
              width={12}
              height={12}
              src="/assets/icon12/bookmark_filled.svg"
            />
            <span className={s.statValue}>{comments.toLocaleString()}</span>
          </div>
          <span className={s.divider}>·</span>
          <span className={s.timeAgo}>{timeAgo}</span>
        </div>
      </div>
      <div className={s.playButtonWrapper}>
        <Image
          src="/assets/icon32/play-btn.svg"
          alt="재생"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
}


export default DangleVideo;
