"use client";

import React from "react";
import TopBar from "@/ui/atoms/TopBar/TopBar";
import Header from "@/ui/atoms/Header/Header";
import * as s from "./style.css";
import {
  BANNER_DATA,
  PLAY_DATA,
  JEJU_DATA,
  TOP10_DATA,
} from "@/utils/dummy_data";
import Carousel from "@/ui/molecules/Carousel/Carousel";
import { DangleItem } from "@/ui/atoms/Dangle/DangleItem/DangleItem";
import { DanglePlay } from "@/ui/atoms/Dangle/DanglePlay/DanglePlay";
import { DangleCard } from "@/ui/atoms/Dangle/DangleCard/DangleCard";
import Grid from "@/ui/molecules/Grid/Grid";
import Image from "next/image";
import NavBar from "@/ui/atoms/NavBar/NavBar";
import { useRouter } from "next/navigation";

/**
 * 댕글추천 페이지
 * * style/ page = topbar + container + nav(dangle)
 */
export default function Page() {
  /** router */
  const router = useRouter();

  return (
    <div className={s.page}>
      {/* Topbar */}
      <TopBar
        backIconHandler={() => {}}
        isShowLogo
        rightIcons={[
          {
            icon: (
              <Image
                alt="검색"
                height={24}
                width={24}
                src="/assets/icon24/search.svg"
              />
            ),
            onClick: () => router.replace("/search"),
          },
        ]}
      />

      {/* container */}
      <div className={s.container}>
        {/* 최근 많이 찾는 인기 지역 */}
        <Header title="최근 많이 찾는 인기 지역" />
        <Carousel gap={16} itemWidth={84} paddingHoriz={16}>
          {JEJU_DATA.map((item, index) => (
            <DangleItem
              key={index}
              state={"before"}
              imageUrl={item.img}
              text={item.title}
              onClick={() => {}}
            />
          ))}
        </Carousel>

        {/* 진짜 견주가 다녀온 제주 여행! */}
        <Header
          title="진짜 견주가 다녀온 제주 여행!"
          desc="15초로 댕댕이와 어디 갈지 고민 끝"
          marginTop={40}
        />
        <Carousel gap={16} itemWidth={280} paddingHoriz={16}>
          {BANNER_DATA.map((item, index) => (
            <DangleCard
              key={index}
              imageUrl={item.img}
              views={item.view}
              title={item.title}
              hashtag={item.tag}
            />
          ))}
        </Carousel>

        {/* 짖어도 OK! 소음 안심 독채 숙소*/}
        <Header
          title="짖어도 OK! 소음 안심 독채 숙소"
          marginTop={40}
          onArrowClick={() => {}}
        />
        <Carousel gap={16} itemWidth={150} paddingHoriz={16}>
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

        {/* 조회수 높은 댕글 TOP 10 */}
        <Header title="조회수 높은 댕글 TOP 10" marginTop={40} />
        <Grid className={s.pd}>
          {TOP10_DATA.map((item, index) => (
            <DanglePlay
              key={index}
              type="medium"
              imageUrl={item.imageUrl}
              profileImageUrl={item.profileImageUrl}
              name={item.name}
              location={item.location}
              title={item.title}
              views={item.views}
              comments={item.comments}
              timeAgo={item.timeAgo}
            />
          ))}
        </Grid>
      </div>

      {/* Nav */}
      <NavBar activePage="dangle" />
    </div>
  );
}
