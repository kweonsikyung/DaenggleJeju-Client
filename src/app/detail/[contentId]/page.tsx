"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import * as s from "./style.css";

// components
import TopBar from "@/ui/atoms/TopBar/TopBar";
import NavBar from "@/ui/atoms/NavBar/NavBar";
import { DanglePlay } from "@/ui/atoms/Dangle/DanglePlay/DanglePlay";
import { DangleReview } from "@/ui/atoms/Dangle/DangleReview/DangleReview";
import EmptyState from "@/ui/atoms/EmptyState/EmptyState";
import Carousel from "@/ui/molecules/Carousel/Carousel";

// hooks
import { usePlaceFullDetail } from "@/hooks/api/usePlaces";
import { useDaengglePlaceRecommendations } from "@/hooks/api/useDaenggle";
import { usePostScrap } from "@/hooks/api/useScraps";

// utils
import { normalizeChipsArray } from "@/utils/normalizeChipsArray";
import { copyToClipboard, callPhoneNumber } from "@/utils/interaction";
import { REVIEW_DATA } from "@/utils/dummy_data";

/**
 * 장소 상세 페이지 (내부 로직)
 * contentId가 유효할 때만 렌더링
 */
function PlaceDetailClient({ contentId }: { contentId: number }) {
  /** router */
  const router = useRouter();

  /** state */
  const [isBookmarked, setIsBookmarked] = useState(false);

  /** api handler */
  const { data, error, mutate } = usePlaceFullDetail({
    contentId: contentId,
  });

  const {
    daengglePlaceRecommendationsData: recommendationsData,
    error: recsError,
  } = useDaengglePlaceRecommendations({
    contentId: String(contentId),
    sort: "rank",
    limit: 10,
    offset: 0,
  });

  const { postScrap, isPosting } = usePostScrap();
  const handleScrapToggle = async () => {
    if (isPosting) return;
    try {
      await postScrap({ id: contentId, type: "place" });
      mutate();
    } catch (e) {
      console.error("Scrap action failed:", e);
      alert("스크랩 작업에 실패했습니다.");
    }
  };

  /** lifecycle */
  useEffect(() => {
    if (data) {
      setIsBookmarked(data.isScrapped);
    }
  }, [data]);

  return (
    <div className={s.page}>
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
            onClick: handleScrapToggle,
          },
        ]}
      />

      <div className={s.container}>
        {error && (
          <EmptyState
            title="데이터 로드 실패"
            description="서버와 통신 중 문제가 발생했습니다."
          />
        )}
        {data && (
          <>
            <section className={s.placeInfoSection}>
              <div className={s.placeHeader}>
                <Image
                  src={
                    data.thumbnail &&
                    data.thumbnail !== "사진 없음" &&
                    /^https?:\/\//i.test(data.thumbnail)
                      ? data.thumbnail
                      : "/assets/jeju.png"
                  }
                  alt={data.title}
                  width={80}
                  height={80}
                  className={s.placeImage}
                />
                <div className={s.placeDetails}>
                  <div>
                    <h1 className={s.placeName}>{data.title}</h1>
                    <div className={s.placeStats}>
                      <span className={s.statText}>0km</span>
                      <span className={s.statText}>·</span>
                      <Image
                        alt="play"
                        width={12}
                        height={12}
                        src="/assets/icon12/play_filled.svg"
                      />
                      <span className={s.statText}>0</span>
                      <span className={s.statText}>·</span>
                      <Image
                        alt="bookmark"
                        width={12}
                        height={12}
                        src="/assets/icon12/bookmark_filled.svg"
                      />
                      <span className={s.statText}>{data.scrapCount}</span>
                    </div>
                  </div>
                  <div className={s.visitChip}>
                    <Image
                      alt="check"
                      width={12}
                      height={12}
                      src="/assets/icon12/check.svg"
                    />
                    <span>3개월이내 방문 댕글 영상 2</span>
                  </div>
                </div>
              </div>
              <div className={s.tagGroup}>
                {normalizeChipsArray(data.chips).map((tag, index, arr) => (
                  <React.Fragment key={tag}>
                    <div className={s.tagItem}>{tag}</div>
                    {index < arr.length - 1 && <div className={s.tagDivider} />}
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
                  <span className={s.infoText}>{data.address}</span>
                  <span
                    className={s.infoLink}
                    onClick={() =>
                      copyToClipboard(data?.address, "주소가 복사되었습니다.")
                    }
                  >
                    복사
                  </span>
                </li>
                <li className={s.infoItem}>
                  <Image
                    alt="time"
                    width={16}
                    height={16}
                    src="/assets/icon12/clock_filled.svg"
                  />
                  <span className={s.infoText}>{data.openHours}</span>
                </li>
                <li className={s.infoItem}>
                  <Image
                    alt="phone"
                    width={16}
                    height={16}
                    src="/assets/icon12/phone.svg"
                  />
                  <span className={s.infoText}>{data.tel}</span>
                  <span
                    className={s.infoLink}
                    onClick={() => callPhoneNumber(data?.tel)}
                  >
                    전화하기
                  </span>
                  {data.homepage && (
                    <a
                      href={data.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s.infoLink}
                    >
                      홈페이지
                    </a>
                  )}
                </li>
              </ul>
            </section>

            <section className={s.section}>
              <div className={s.sectionHeader}>
                <h2 className={s.sectionTitle}>애견 동반 주의 사항</h2>
                <span className={s.sectionActionText} onClick={() => {}}>
                  정보 수정 요청
                </span>
              </div>
              <div className={s.attentionBox}>
                <h4 className={s.attentionTitle}>
                  {data.petPolicy?.acmpyTypeCd || "반려동물 동반 정책"}
                </h4>
                <ul className={s.attentionList}>
                  {data.petPolicy?.notes?.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        )}

        <section className={s.section}>
          <div className={s.sectionHeader}>
            <h2 className={s.sectionTitle}>
              연관 댕글 영상 ({recommendationsData?.total})
            </h2>
          </div>

          {recsError && (
            <EmptyState
              title="데이터 로드 실패"
              description="서버와 통신 중 문제가 발생했습니다."
            />
          )}

          {recommendationsData && recommendationsData.items.length > 0 && (
            <Carousel gap={16} itemWidth={150}>
              {recommendationsData.items.map((item) => (
                <DanglePlay
                  key={item.video_id}
                  type="small"
                  imageUrl={
                    item.thumbUrl ||
                    `https://i.ytimg.com/vi/${item.video_id}/hqdefault.jpg`
                  }
                  profileImageUrl={
                    item.authorAvatarUrl || "/assets/dangle/dog.png"
                  }
                  name={item.authorName}
                  onClick={() => window.open(item.playbackUrl, "_blank")}
                />
              ))}
            </Carousel>
          )}
        </section>

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

      <NavBar activePage="near" />
    </div>
  );
}

/**
 * 장소 상세 페이지
 */
export default function DetailPage() {
  /** router */
  const router = useRouter();
  const params = useParams();
  const contentId = params.contentId
    ? parseInt(params.contentId as string)
    : null;

  if (contentId === null) {
    return (
      <div className={s.page}>
        <TopBar backIconHandler={() => router.back()} />
        <div className={s.container}>
          <EmptyState
            title="페이지 준비 중"
            description="정보를 불러오고 있습니다"
          />
        </div>
        <NavBar activePage="near" />
      </div>
    );
  }

  return <PlaceDetailClient contentId={contentId} />;
}
