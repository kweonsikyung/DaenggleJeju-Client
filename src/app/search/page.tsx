"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as s from "./style.css";

// components
import SearchHeader from "@/ui/molecules/SearchHeader/SearchHeader";
import NavBar from "@/ui/atoms/NavBar/NavBar";
import ChipKeyword from "@/ui/atoms/Chip/ChipKeyword/ChipKeyword";
import DangleVideo from "@/ui/atoms/Dangle/DangleVideo/DangleVideo";
import { DanglePlay } from "@/ui/atoms/Dangle/DanglePlay/DanglePlay";
import DanglePlace from "@/ui/atoms/Dangle/DanglePlace/DanglePlace";
import { FilterChip } from "@/ui/atoms/FilterChip/FilterChip";
import EmptyState from "@/ui/atoms/EmptyState/EmptyState";
import Grid from "@/ui/molecules/Grid/Grid";

// hooks
import { usePlaceSearch } from "@/hooks/api/usePlaces";
import { useDaenggleSearch } from "@/hooks/api/useDaenggle";

// utils and types
import { DANGLE_VIDEOS_DATA, KEYWORDS, FILTER_CHIPS } from "@/utils/dummy_data";
import type { GetPlaceSearchReq } from "@/types/place";
import type { GetDaenggleSearchReq } from "@/types/daenggle";
import { normalizeChips } from "@/utils/normalizeChips";
import { getContentTypeIdByChipId } from "../map/_util";
import { extractHashtags, findLocationInfo } from "@/utils/textParsing";

/**
 * 검색 페이지
 */
export default function SearchPage() {
  /** router */
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const hasQuery = !!query;

  /** state */
  const [recentKeywords, setRecentKeywords] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("dangle");

  const placeSearchParams: GetPlaceSearchReq | undefined = useMemo(() => {
    if (!query || activeFilter === "dangle") return undefined;
    const contentTypeId = getContentTypeIdByChipId(activeFilter);
    return { q: query, limit: 30, all: false, contentTypeId };
  }, [query, activeFilter]);

  const dangleSearchParams: GetDaenggleSearchReq | undefined = useMemo(() => {
    if (!query || activeFilter !== "dangle") return undefined;
    return { q: query, sort: "rank", limit: 20, offset: 0 };
  }, [query, activeFilter]);

  /** api handler */
  const {
    data: placeData,
    error: placeError,
    isLoading: placeIsLoading,
  } = usePlaceSearch(placeSearchParams);

  const {
    daenggleSearchData,
    error: dangleError,
    isLoading: dangleIsLoading,
  } = useDaenggleSearch(dangleSearchParams);

  const isLoading = placeIsLoading || dangleIsLoading;
  const isError = placeError || dangleError;

  const placeResults = placeData?.items ?? [];
  const dangleResults = daenggleSearchData?.items ?? [];

  /** etc handlers */
  const stripKm = (text: string) => text.replace("km", "").trim();

  const runSearch = (keyword: string) => {
    const k = keyword.trim();
    if (!k) return;
    router.push(`/search?q=${encodeURIComponent(k)}`);
    setRecentKeywords((prev) =>
      [k, ...prev.filter((x) => x !== k)].slice(0, 5)
    );
  };
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") runSearch(searchValue);
  };
  const handleRemoveRecentKeyword = (keyword: string) =>
    setRecentKeywords((prev) => prev.filter((x) => x !== keyword));
  const handleBack = () => router.back();

  /** lifecycle */
  useEffect(() => {
    const stored = localStorage.getItem("recentKeywords");
    if (stored) setRecentKeywords(JSON.parse(stored));
  }, []);
  useEffect(() => {
    localStorage.setItem("recentKeywords", JSON.stringify(recentKeywords));
  }, [recentKeywords]);

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  return (
    <div className={s.page}>
      <SearchHeader
        backIconHandler={handleBack}
        searchFieldProps={{
          placeholder: "제주 지역 또는 장소명 검색",
          onChange: (e) => setSearchValue(e.target.value),
          value: searchValue,
          onKeyDown: handleEnterPress,
          onClear: () => setSearchValue(""),
        }}
      />

      <div className={s.container}>
        {hasQuery && (
          <div className={s.filterChipsContainer}>
            {FILTER_CHIPS.map((chip) => (
              <FilterChip
                key={chip.id}
                {...chip}
                selected={activeFilter === chip.id}
                onClick={() => setActiveFilter(chip.id)}
              />
            ))}
          </div>
        )}

        {!hasQuery ? (
          <>
            {/* 검색 전 UI */}
            <div className={s.section}>
              <h2 className={s.sectionTitle}>최근검색어</h2>
              {recentKeywords.length ? (
                <div className={s.recentKeywordsWrapper}>
                  {recentKeywords.map((k) => (
                    <ChipKeyword
                      key={k}
                      text={k}
                      selected
                      onClose={() => handleRemoveRecentKeyword(k)}
                      onClick={() => runSearch(k)}
                    />
                  ))}
                </div>
              ) : (
                <div className={s.noHistory}>아직 검색 기록이 없어요.</div>
              )}
            </div>
            <div className={s.section}>
              <h2 className={s.sectionTitle}>바로 찾는 키워드</h2>
              <div className={s.keywordsWrapper}>
                {KEYWORDS.map((k) => (
                  <ChipKeyword key={k} text={k} onClick={() => runSearch(k)} />
                ))}
              </div>
            </div>
            <div className={s.section}>
              <h2 className={s.sectionTitle}>이번 주 제주 여기가 뜨겁댕!</h2>
              <div className={s.videoList}>
                {DANGLE_VIDEOS_DATA.map((v, i) => (
                  <DangleVideo key={i} {...v} onClick={() => {}} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* 검색 후 UI */}
            {isLoading && (
              <EmptyState
                title="불러오는 중…"
                description="잠시만 기다려 주세요."
              />
            )}
            {isError && (
              <EmptyState
                title="검색 실패"
                description="서버와 통신 중 문제가 발생했습니다."
              />
            )}
            {!isLoading && !isError && (
              // 댕글 외 칩
              <>
                {activeFilter === "dangle" ? (
                  <>
                    {!dangleResults.length ? (
                      <EmptyState
                        title="댕글 영상 결과 없음"
                        description="검색된 댕글 영상이 없습니다."
                      />
                    ) : (
                      <Grid>
                        {dangleResults.map((item, index) => {
                          const { cleanTitle, tags: extractedTags } =
                            extractHashtags(item.title);

                          const {
                            place: extractedPlace,
                            region: extractedRegion,
                          } = findLocationInfo(item.title);

                          // --- 로케이션/주소 추출 시도 ---
                          const finalPlace = extractedPlace || "";
                          const finalRegion =
                            extractedRegion || item.placePill || "제주 전체";
                          // --- 태그 병합 (중복 제거) ---
                          const finalTags = [
                            ...new Set([
                              ...extractedTags,
                              ...(item.tags || []),
                            ]),
                          ];

                          return (
                            <DanglePlay
                              key={`${item.video_id}-${index}`}
                              type="medium"
                              width="100%"
                              imageUrl={`https://i.ytimg.com/vi/${item.video_id}/hqdefault.jpg`}
                              profileImageUrl={"/assets/profile-default.png"}
                              name={item.authorName}
                              location={finalRegion}
                              address={finalPlace}
                              title={cleanTitle}
                              tags={finalTags}
                              views={item.loveCount || 0}
                              comments={item.scrapCount || 0}
                              timeAgo={item.published_at}
                              onClick={() =>
                                window.open(item.playbackUrl, "_blank")
                              }
                            />
                          );
                        })}
                      </Grid>
                    )}
                  </>
                ) : (
                  // 댕글 칩
                  <>
                    {!placeResults.length ? (
                      <EmptyState
                        title="검색 결과 없음"
                        description="조건을 변경하거나 다른 검색어로 다시 시도해 보세요."
                      />
                    ) : (
                      <div className={s.grid}>
                        {placeResults.map((item) => (
                          <DanglePlace
                            key={item.contentId}
                            thumbnailUrl={item.thumbnail}
                            locationCategory={
                              item.metaLine
                                ? `${item.metaLine} · ${
                                    item.contentType?.name ?? ""
                                  }`
                                : item.contentType?.name ?? ""
                            }
                            name={item.title}
                            distance={stripKm((item as any).distanceText)}
                            playCount={0}
                            bookmarkCount={item.scrapCount ?? 0}
                            tags={normalizeChips((item as any).chips)}
                            onClick={() =>
                              router.push(`/detail/${item.contentId}`)
                            }
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
      <NavBar activePage="near" />
    </div>
  );
}
