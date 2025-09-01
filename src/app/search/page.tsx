"use client";

import React, { useState, useEffect } from "react";
import SearchHeader from "@/ui/molecules/SearchHeader/SearchHeader";
import * as s from "./style.css";
import { useRouter } from "next/navigation";
import ChipKeyword from "@/ui/atoms/Chip/ChipKeyword/ChipKeyword";
import DangleVideo from "@/ui/atoms/Dangle/DangleVideo/DangleVideo";
import { DanglePlay } from "@/ui/atoms/Dangle/DanglePlay/DanglePlay";
import { FilterChip } from "@/ui/atoms/FilterChip/FilterChip";
import Grid from "@/ui/molecules/Grid/Grid";
import {
  DANGLE_VIDEOS_DATA,
  KEYWORDS,
  SEARCH_RESULTS,
  FILTER_CHIPS,
} from "@/utils/dummy_data";
import NavBar from "@/ui/atoms/NavBar/NavBar";

/**
 * 검색 페이지
 * * style/ page = top(searchBar) + container(sections) + nav(near)
 */
export default function SearchPage() {
  const router = useRouter();
  const [recentKeywords, setRecentKeywords] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<
    typeof SEARCH_RESULTS | null
  >(null);
  const [activeFilter, setActiveFilter] = useState("dangle");

  useEffect(() => {
    const storedKeywords = localStorage.getItem("recentKeywords");
    if (storedKeywords) {
      setRecentKeywords(JSON.parse(storedKeywords));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recentKeywords", JSON.stringify(recentKeywords));
  }, [recentKeywords]);

  const handleBack = () => {
    router.back();
  };

  const handleSearch = (keyword: string) => {
    if (keyword.trim() === "") return;
    setSearchValue(keyword);
    setRecentKeywords((prev) => {
      const newKeywords = prev.filter((item) => item !== keyword);
      return [keyword, ...newKeywords.slice(0, 4)];
    });
    // 더미 검색 결과 로드
    setSearchResult(SEARCH_RESULTS);
  };

  const handleRemoveRecentKeyword = (keyword: string) => {
    setRecentKeywords(recentKeywords.filter((item) => item !== keyword));
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(searchValue);
    }
  };

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
        {!searchResult ? (
          <>
            <div className={s.section}>
              <h2 className={s.sectionTitle}>최근검색어</h2>
              {recentKeywords.length > 0 ? (
                <div className={s.recentKeywordsWrapper}>
                  {recentKeywords.map((keyword, index) => (
                    <ChipKeyword
                      key={index}
                      text={keyword}
                      selected
                      onClose={() => handleRemoveRecentKeyword(keyword)}
                      onClick={() => handleSearch(keyword)}
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
                {KEYWORDS.map((keyword, index) => (
                  <ChipKeyword
                    key={index}
                    text={keyword}
                    onClick={() => handleSearch(keyword)}
                  />
                ))}
              </div>
            </div>

            <div className={s.section}>
              <h2 className={s.sectionTitle}>이번 주 제주 여기가 뜨겁댕!</h2>
              <div className={s.videoList}>
                {DANGLE_VIDEOS_DATA.map((video, index) => (
                  <DangleVideo
                    key={index}
                    {...video}
                    onClick={() => console.log("video clicked")}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
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
            <Grid>
              {SEARCH_RESULTS[activeFilter as keyof typeof SEARCH_RESULTS]?.map(
                ({ type, width, ...rest }, index) => (
                  <DanglePlay
                    key={index}
                    width={"100%"}
                    type="medium"
                    {...rest}
                    onClick={() => console.log("DanglePlay clicked")}
                  />
                )
              )}
            </Grid>
          </>
        )}
      </div>
      {/* nav */}
      <NavBar activePage="near" />
    </div>
  );
}
