"use client";

import React from "react";
import Image from "next/image";
import * as s from "./DangleReview.css";

type ReviewItem = {
  label: string;
  value: string;
  variant?: keyof typeof s.detailValue;
};

export interface DangleReviewProps {
  /** 리뷰 작성자의 프로필 이미지 URL */
  profileImageUrl: string;
  /** 리뷰 작성자의 이름 */
  userName: string;
  /** 리뷰 작성자의 반려견 정보 (종, 나이, 크기 등) */
  dogInfo: string;
  /** 별점 (1-5 사이의 숫자) */
  rating: number;
  /** 리뷰 작성 날짜 (YYYY.MM.DD 형식) */
  date: string;
  /** 리뷰 상세 항목 배열 (예: 출입가능여부, 동반조건 등) */
  reviewItems: ReviewItem[];
  /** 리뷰 본문 내용 */
  content: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className={s.stars}>
      {[...Array(5)].map((_, index) => (
        <Image
          key={index}
          alt={index < rating ? "star-filled" : "star-empty"}
          width={16}
          height={16}
          src={
            index < rating
              ? "/assets/icon24/star-filled-colored.svg"
              : "/assets/icon24/star-filled.svg"
          }
        />
      ))}
    </div>
  );
};

export function DangleReview({
  profileImageUrl,
  userName,
  dogInfo,
  rating,
  date,
  reviewItems,
  content,
}: DangleReviewProps) {
  return (
    <div className={s.root}>
      <div className={s.userInfo}>
        <Image
          src={profileImageUrl}
          alt={userName}
          width={24}
          height={24}
          className={s.profileImage}
        />
        <div className={s.userInfoText}>
          <span className={s.userName}>{userName}</span>
          <span className={s.dogInfo}>{dogInfo}</span>
        </div>
      </div>

      <div className={s.reviewDetails}>
        <div className={s.reviewHeader}>
          <StarRating rating={rating} />
          <span className={s.date}>{date}</span>
        </div>
        {reviewItems.map((item) => (
          <div key={item.label} className={s.detailItem}>
            <span className={s.detailLabel}>{item.label}</span>
            <span className={s.detailValue}>{item.value}</span>
          </div>
        ))}
      </div>
      <p className={s.reviewContent}>{content}</p>
    </div>
  );
}
