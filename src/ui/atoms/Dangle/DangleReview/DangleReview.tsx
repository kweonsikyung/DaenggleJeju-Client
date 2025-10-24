"use client";

import React from "react";
import Image from "next/image";
import * as s from "./DangleReview.css";

/**
 * 칩 순서에 맞는 고정 레이블
 * API 응답 'chips[0]' -> "출입 가능 여부"
 * API 응답 'chips[1]' -> "출입 조건"
 * API 응답 'chips[2]' -> "반려견 친화도"
 */
const CHIP_LABELS = ["출입 가능 여부", "출입 조건", "반려견 친화도"];

export interface DangleReviewProps {
  /** 리뷰 작성자의 프로필 이미지 URL */
  profileImageUrl: string;
  /** 리뷰 작성자의 이름 */
  userName: string;
  /** 리뷰 작성자의 반려견 정보 */
  dogInfo?: string;
  /** 평점 (1-5 사이의 숫자, API: welcome) */
  rating: number;
  /** 리뷰 작성 날짜 (API: createdAtText) */
  date: string;
  /** 리뷰 칩 배열 (API: chips) */
  chips: string[];
  /** 리뷰 본문 내용 (API: body) */
  content: string;
}

/**
 * 평점을 발바닥 아이콘으로 표시하는 컴포넌트
 */
const PawRating = ({ rating }: { rating: number }) => {
  return (
    <div className={s.stars}>
      {[...Array(5)].map((_, index) => (
        <Image
          key={index}
          alt={index < rating ? "paw-filled" : "paw-empty"}
          width={16}
          height={16}
          src={
            index < rating
              ? "/assets/icon24/dogfootprint-blue.svg" // 꽉 찬 발바닥
              : "/assets/icon24/dogfootprint-white.svg" // 빈 발바닥
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
  chips,
  content,
}: DangleReviewProps) {
  return (
    <div className={s.root}>
      {/* 유저 정보 */}
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
          {dogInfo && <span className={s.dogInfo}>{dogInfo}</span>}
        </div>
      </div>

      {/* 리뷰 상세 */}
      <div className={s.reviewDetails}>
        <div className={s.reviewHeader}>
          <PawRating rating={rating} />
          <span className={s.date}>{date}</span>
        </div>

        {/* chips 배열을 고정 레이블과 1:1 매핑 */}
        {chips.map((chipValue, index) => {
          const label = CHIP_LABELS[index];
          if (!label) return null;

          return (
            <div key={label} className={s.detailItem}>
              <span className={s.detailLabel}>{label}</span>
              <span className={s.detailValue}>{chipValue}</span>
            </div>
          );
        })}
      </div>

      {/* 리뷰 본문 */}
      <p className={s.reviewContent}>{content}</p>
    </div>
  );
}
