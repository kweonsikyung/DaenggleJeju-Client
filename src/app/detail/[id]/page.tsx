"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TopBar from "@/ui/atoms/TopBar/TopBar";
import NavBar from "@/ui/atoms/NavBar/NavBar";
import * as s from "./style.css";
import { placeData, REVIEW_DATA } from "@/utils/dummy_data";
import Carousel from "@/ui/molecules/Carousel/Carousel";
import { DanglePlay } from "@/ui/atoms/Dangle/DanglePlay/DanglePlay";
import { PLAY_DATA } from "@/utils/dummy_data";
import { DangleReview } from "@/ui/atoms/Dangle/DangleReview/DangleReview";

/**
 * 장소 상세 페이지
 * * style/ page = topbar + container + nav(near)
 */
export default function DetailPage() {
  /** router */
  const router = useRouter();

  /** state */
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className={s.page}>
      {/* topbar */}
      <TopBar
        backIconHandler={() => router.back()}
        rightIcons={[
          {
            icon: (
              <Image
                alt="북마크"
                height={24}
                src={
                  isBookmarked
                    ? "/assets/icon24/bookmark_filled.svg"
                    : "/assets/icon24/bookmark_line.svg"
                }
                width={24}
              />
            ),
            onClick: () => setIsBookmarked(!isBookmarked),
          },
        ]}
      />

      {/* container */}
      <div className={s.container}>
        {/* 장소 기본 정보 */}
        <section className={s.placeInfoSection}>
          <div className={s.placeHeader}>
            <Image
              src={placeData.imageUrl}
              alt={placeData.name}
              width={80}
              height={80}
              className={s.placeImage}
            />
            <div className={s.placeDetails}>
              <div>
                <h1 className={s.placeName}>{placeData.name}</h1>

                <div className={s.placeStats}>
                  <span className={s.statText}>{placeData.distance}km</span>
                  <span className={s.statText}>·</span>
                  <Image
                    alt="play"
                    width={12}
                    height={12}
                    src="/assets/icon12/play_filled.svg"
                  />
                  <span className={s.statText}>{placeData.playCount}</span>
                  <span className={s.statText}>·</span>
                  <Image
                    alt="bookmark"
                    width={12}
                    height={12}
                    src="/assets/icon12/bookmark_filled.svg"
                  />
                  <span className={s.statText}>{placeData.bookmarkCount}</span>
                </div>
              </div>

              <div className={s.visitChip}>
                <Image
                  alt="check"
                  width={12}
                  height={12}
                  src="/assets/icon12/check.svg"
                />
                <span>{placeData.visitInfo}</span>
              </div>
            </div>
          </div>
          <div className={s.tagGroup}>
            {placeData.tags.map((tag, index) => (
              <React.Fragment key={tag}>
                <div className={s.tagItem}>{tag}</div>
                {index < placeData.tags.length - 1 && (
                  <div className={s.tagDivider} />
                )}
              </React.Fragment>
            ))}
          </div>
          <ul className={s.infoList}>
            <li className={s.infoItem}>
              <Image
                alt="location"
                width={16}
                height={16}
                src="/assets/icon12/map_filled.svg"
              />
              <span className={s.infoText}>{placeData.address}</span>
              <span className={s.infoLink}>복사</span>
            </li>
            <li className={s.infoItem}>
              <Image
                alt="time"
                width={16}
                height={16}
                src="/assets/icon12/clock_filled.svg"
              />
              <span className={s.infoText}>{placeData.hours}</span>
            </li>
            <li className={s.infoItem}>
              <Image
                alt="phone"
                width={16}
                height={16}
                src="/assets/icon12/phone.svg"
              />
              <span className={s.infoText}>{placeData.phone}</span>
              <span className={s.infoLink}>전화하기</span>
            </li>
          </ul>
        </section>

        {/* 애견 동반 주의 사항 */}
        <section className={s.section}>
          <div className={s.sectionHeader}>
            <h2 className={s.sectionTitle}>애견 동반 주의 사항</h2>
            <span className={s.sectionActionText} onClick={() => {}}>
              정보 수정 요청
            </span>
          </div>
          <div className={s.attentionBox}>
            <h4 className={s.attentionTitle}>{placeData.attention.title}</h4>
            <ul className={s.attentionList}>
              {placeData.attention.details.map((item, index) => (
                <li key={index} className={s.attentionItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 연관 댕글 영상 */}
        <section className={s.section}>
          <div className={s.sectionHeader}>
            <h2 className={s.sectionTitle}>연관 댕글 영상(3)</h2>
          </div>
          <Carousel gap={16} itemWidth={150}>
            {PLAY_DATA.map((item, index) => (
              <DanglePlay
                key={index}
                type="small"
                imageUrl={item.img}
                profileImageUrl={item.img}
                name={item.author}
              />
            ))}
          </Carousel>
        </section>

        {/* 방문 인증 후기 */}
        <section className={s.section}>
          <div className={s.sectionHeader}>
            <h2 className={s.sectionTitle}>방문 인증 후기(3)</h2>
            <span className={s.sectionActionText} onClick={() => {}}>
              방문했어요
            </span>
          </div>
          <div className={s.reviewSummary}>
            <div className={s.reviewRating}>
              <Image
                alt="star-fill"
                width={24}
                height={24}
                src="/assets/icon24/star-filled-colored.svg"
              />
              <span>4.3</span>
            </div>
            <p className={s.reviewCount}>8203개의 평가</p>
          </div>
          <div className={s.reviewList}>
            {REVIEW_DATA.map((review) => (
              <DangleReview key={review.id} {...review} />
            ))}
          </div>
        </section>
      </div>
      {/* nav */}
      <NavBar activePage="near" />
    </div>
  );
}
