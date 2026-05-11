"use client";

import React from "react";
import * as s from "./style.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

//components
import {
  TopBar,
  Header,
  NavBar,
  NavBarItem,
  DangleItem,
  DanglePlay,
  DangleCard,
  Carousel,
  Grid,
  EmptyState,
} from "daenggle-ui";

//hooks
import { useDaenggleAccommodations, useDaenggleTrending } from "@/hooks/api/useDaenggle";
import { useVisitedRegions } from "@/hooks/useVisitedRegions";

//utils
import { regionContextMap, conceptBanners, getThumbnailUrl } from "./_util";
import { JEJU_DATA } from "@/utils/dummy_data";
import { extractHashtags, findLocationInfo } from "@/utils/textParsing";
import { getRandomAvatar } from "@/utils/getRandomAvatar";

const NAV_ITEMS: NavBarItem[] = [
  {
    id: "near",
    text: "내근처",
    activeIconSrc: "/assets/nav/map_active.svg",
    inactiveIconSrc: "/assets/nav/map.svg",
    path: "/map",
  },
  {
    id: "dangle",
    text: "댕글영상",
    activeIconSrc: "/assets/nav/video_active.svg",
    inactiveIconSrc: "/assets/nav/video.svg",
    path: "/shorts?contextId=PLACE_jeju_si",
  },
  {
    id: "ai",
    text: "AI여행케어",
    activeIconSrc: "/assets/nav/ai_active.svg",
    inactiveIconSrc: "/assets/nav/ai.svg",
    path: "/chat",
  },
  {
    id: "jeju",
    text: "제주이동",
    activeIconSrc: "/assets/nav/move_active.svg",
    inactiveIconSrc: "/assets/nav/move.svg",
    path: "/jeju",
  },
  {
    id: "my",
    text: "마이",
    activeIconSrc: "/assets/nav/my_active.svg",
    inactiveIconSrc: "/assets/nav/my.svg",
    path: "/my",
  },
];

/**
 * 댕글추천 페이지
 * * style/ page = topbar + container + nav(dangle)
 */
export default function Page() {
  /** router */
  const router = useRouter();

  /** hooks */
  const { visitedRegions, markAsVisited } = useVisitedRegions();

  /** api handler */
  const {
    daenggleAccommodationsData,
    isLoading: isAccomLoading,
    error: accomError,
  } = useDaenggleAccommodations({
    sort: "rank",
    limit: 10,
    offset: 0,
  });

  const {
    daenggleTrendingData,
    isLoading: isTrendingLoading,
    error: trendingError,
    mutateDaenggleTrending,
  } = useDaenggleTrending({
    sort: "views",
    days: 90,
    limit: 10,
    offset: 0,
  });

  return (
    <div className={s.page}>
      {/* Topbar */}
      <TopBar
        backIconHandler={() => {
          router.back();
        }}
        backIconSrc="/assets/icon24/arrow-left_line.svg"
        isShowLogo
        logoSrc="/assets/logo/logo-top.svg"
        logoAlt="댕글제주"
        rightIcons={[
          {
            icon: <Image alt="검색" height={24} width={24} src="/assets/icon24/search.svg" />,
            onClick: () => router.replace("/search"),
          },
        ]}
      />

      {/* container */}
      <div className={s.container}>
        {/* 최근 많이 찾는 인기 지역 */}
        <Header title="최근 많이 찾는 인기 지역" />
        <Carousel gap={16} itemWidth={84} paddingHoriz={16}>
          {JEJU_DATA.map((item, index) => {
            const contextId = regionContextMap[item.title];
            const isVisited = contextId ? visitedRegions.has(contextId) : false;
            return (
              <DangleItem
                key={index}
                state={isVisited ? "after" : "before"}
                imageUrl={item.img}
                text={item.title}
                onClick={() => {
                  if (contextId) {
                    markAsVisited(contextId);
                    router.push(`/shorts?contextId=${contextId}`);
                  }
                }}
              />
            );
          })}
        </Carousel>

        {/* 진짜 견주가 다녀온 제주 여행! */}
        <Header
          title="진짜 견주가 다녀온 제주 여행!"
          desc="15초로 댕댕이와 어디 갈지 고민 끝"
          marginTop={40}
        />
        <Carousel gap={16} itemWidth={280} paddingHoriz={16}>
          {conceptBanners.map((banner, index) => (
            <DangleCard
              key={banner.conceptKey}
              imageUrl={banner.dummy.img}
              views={banner.dummy.view}
              title={banner.dummy.title}
              hashtag={banner.dummy.tag}
              onClick={() => {
                router.push(`/shorts?conceptKey=${banner.conceptKey}&startIndex=0`);
              }}
            />
          ))}
        </Carousel>

        {/* 짖어도 OK! 소음 안심 독채 숙소*/}
        <Header
          title="짖어도 OK! 소음 안심 독채 숙소"
          marginTop={40}
          onArrowClick={() => {
            router.push("/shorts?listType=accommodations&startIndex=0");
          }}
        />

        {isAccomLoading && (
          <div style={{ padding: "0 16px" }}>
            <EmptyState title="숙소 로딩 실패" description="다시 시도해주세요." />
          </div>
        )}
        {accomError && (
          <div style={{ padding: "0 16px" }}>
            <EmptyState title="숙소 에러" description="다시 시도해주세요." />
          </div>
        )}
        {daenggleAccommodationsData && (
          <Carousel gap={16} itemWidth={150} paddingHoriz={16}>
            {daenggleAccommodationsData.items.map((item, index) => (
              <DanglePlay
                key={item.video_id}
                type="small"
                imageUrl={getThumbnailUrl(item.video_id)}
                profileImageUrl={getRandomAvatar()}
                name={item.authorName}
                onClick={() => {
                  router.push(`/shorts?listType=accommodations&startIndex=${index}`);
                }}
              />
            ))}
          </Carousel>
        )}

        {/* 요즘 뜨는 댕글 TOP 10 */}
        <Header
          title="요즘 뜨는 댕글 TOP 10"
          onReClick={() => mutateDaenggleTrending()}
          marginTop={40}
        />
        {isTrendingLoading && (
          <div style={{ padding: "0 16px" }}>
            <EmptyState title="트랜딩 로딩 실패" description="다시 시도해주세요." />
          </div>
        )}
        {trendingError && (
          <div style={{ padding: "0 16px" }}>
            <EmptyState title="트랜딩 에러" description="다시 시도해주세요." />
          </div>
        )}
        {daenggleTrendingData && (
          <Grid className={s.pd}>
            {daenggleTrendingData.items.map((item, index) => {
              return (
                <DanglePlay
                  key={`${item.video_id}-${index}`}
                  type="short"
                  width="100%"
                  imageUrl={`https://i.ytimg.com/vi/${item.video_id}/hqdefault.jpg`}
                  location={item.placeTitle}
                  address="제주 전체"
                  onClick={() => {
                    router.push(`/shorts?listType=trending&startIndex=${index}`);
                  }}
                />
              );
            })}
          </Grid>
        )}
      </div>

      {/* Nav */}
      <NavBar activeId="dangle" items={NAV_ITEMS} onNavigate={(path) => router.push(path)} />
    </div>
  );
}
