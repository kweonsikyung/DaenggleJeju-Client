"use client";

import React, { useState, useMemo } from "react";
import * as s from "./style.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

//components
import TopBar from "@/ui/atoms/TopBar/TopBar";
import NavBar from "@/ui/atoms/NavBar/NavBar";
import ProfileCard from "@/ui/atoms/ProfileCard/ProfileCard";
import SegmentedControl from "@/ui/atoms/SegmentedControl/SegmentedControl";
import Tabs from "@/ui/atoms/Tabs/Tabs";
import EmptyState from "@/ui/atoms/EmptyState/EmptyState";
import { Button } from "@/ui/atoms/Buttons/Button/Button";
import { ButtonStatus, ButtonSize } from "@/constants/ButtonVariant";
import { DanglePlay } from "@/ui/atoms/Dangle/DanglePlay/DanglePlay";
import DanglePlace from "@/ui/atoms/Dangle/DanglePlace/DanglePlace";
import Grid from "@/ui/molecules/Grid/Grid";
import { DangleReview } from "@/ui/atoms/Dangle/DangleReview/DangleReview";

//utils and hooks
import { mainTabs, subTabs, emptyStateContent } from "./_util";
import { usePetProfileList } from "@/hooks/api/usePetProfile";
import { useScrapList } from "@/hooks/api/useScraps";
import { useMyFootprints } from "@/hooks/api/useFootprints";
import { ScrapPlaceItem, ScrapDangleItem } from "@/types/scrap";
import { getRandomAvatar } from "@/utils/getRandomAvatar";
import { extractHashtags } from "@/utils/textParsing";

/**
 * 마이 페이지
 * * style/ page = topbar + container + nav(my)
 */
export default function Page() {
  /** router */
  const router = useRouter();

  /** state */
  const [activeMainTab, setActiveMainTab] = useState("saved");
  const [activeSubTab, setActiveSubTab] = useState("dangle");

  const { petProfileList, isLoading: isPetProfileLoading } =
    usePetProfileList();
  const myPet = petProfileList?.at(-1);

  const scrapType = activeSubTab === "dangle" ? "daenggle" : "place";
  const { scrapData, isLoading: isScrapsLoading } = useScrapList(
    activeMainTab === "saved"
      ? {
          type: scrapType,
          limit: 50,
        }
      : undefined
  );

  const {
    myFootprintsData,
    isLoading: isFootprintsLoading,
    error: footprintsError,
  } = useMyFootprints(
    activeMainTab === "footprint"
      ? {
          limit: 50,
        }
      : undefined
  );

  const tabIdToContentType: Record<string, string> = {
    accom: "숙박",
    restaurant: "음식점",
    tourist: "관광지",
    activity: "레포츠",
  };

  const filteredItems = useMemo(() => {
    if (activeMainTab !== "saved" || !scrapData?.items) return [];
    if (activeSubTab === "dangle") {
      return scrapData.items as ScrapDangleItem[];
    }
    const targetContentType = tabIdToContentType[activeSubTab];
    return (scrapData.items as ScrapPlaceItem[]).filter(
      (item) => item.contentType?.name === targetContentType
    );
  }, [scrapData, activeSubTab, activeMainTab]);

  const detailsString = [
    myPet?.breedNameKo,
    myPet?.sizeLabelKo,
    myPet?.ageYears ? `${myPet.ageYears}살` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  const currentEmptyState =
    emptyStateContent[activeMainTab as keyof typeof emptyStateContent];

  return (
    <div className={s.page}>
      <TopBar backIconHandler={() => router.back()} title="마이댕글" />
      <div className={s.container}>
        <div className={s.contentWrapper}>
          {isPetProfileLoading ? (
            <div>프로필 로딩 중...</div>
          ) : myPet ? (
            <ProfileCard
              imageUrl="/assets/dangle/dog.png"
              name={myPet.name}
              description="견주님"
              details={detailsString}
              onEditClick={() => router.push("/curation")}
            />
          ) : (
            <ProfileCard
              name="반려견 없음"
              description="프로필을 등록해주세요."
              imageUrl={getRandomAvatar()}
              details="내 반려견을 동록하고 맞춤형 정보를 받아볼 수 있어요!"
              onEditClick={() => router.push("/curation")}
            />
          )}

          <SegmentedControl
            options={mainTabs}
            activeOption={activeMainTab}
            onSelect={setActiveMainTab}
          />
        </div>

        {activeMainTab === "saved" && (
          <>
            <Tabs
              tabs={subTabs}
              activeTab={activeSubTab}
              onTabClick={setActiveSubTab}
            />
            <div className={s.listContainer}>
              {isScrapsLoading ? (
                <p>스크랩 목록을 불러오는 중입니다...</p>
              ) : filteredItems.length === 0 ? (
                <EmptyState
                  imageUrl={currentEmptyState.imageUrl}
                  title={currentEmptyState.title}
                  description={currentEmptyState.description}
                />
              ) : activeSubTab === "dangle" ? (
                <div className={s.placeList}>
                  {(filteredItems as ScrapDangleItem[]).map((item, index) => {
                    const { cleanTitle, tags } = extractHashtags(item.title);
                    return (
                      <DanglePlay
                        key={`${item.videoId}-${index}`}
                        type="medium"
                        width="100%"
                        imageUrl={item.thumbnailUrl}
                        profileImageUrl={getRandomAvatar()}
                        name={item.channelTitle}
                        title={cleanTitle}
                        tags={tags}
                        onClick={() =>
                          router.push(`/shorts?contentId=${item.videoId}`)
                        }
                      />
                    );
                  })}
                </div>
              ) : (
                <div className={s.placeList}>
                  {(filteredItems as ScrapPlaceItem[]).map((item) => (
                    <DanglePlace
                      key={item.contentId}
                      thumbnailUrl={item.thumbnail || ""}
                      locationCategory={
                        item.metaLine || item.contentType?.name || ""
                      }
                      name={item.title}
                      distance={item.distanceText}
                      tags={item.chips}
                      onClick={() => router.push(`/detail/${item.contentId}`)}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {activeMainTab === "footprint" && (
          <div className={s.listContainer}>
            {isFootprintsLoading ? (
              <p>발자국 목록을 불러오는 중입니다...</p>
            ) : footprintsError ? (
              <EmptyState
                title="오류 발생"
                description="발자국 목록을 불러오지 못했습니다."
              />
            ) : !myFootprintsData || myFootprintsData.items.length === 0 ? (
              <EmptyState
                imageUrl={currentEmptyState.imageUrl}
                title={currentEmptyState.title}
                description={currentEmptyState.description}
              />
            ) : (
              <div className={s.placeList}>
                {myFootprintsData.items.map((item) => (
                  <DangleReview
                    isMine={true}
                    key={item.footprintId}
                    profileImageUrl={getRandomAvatar()}
                    rating={item.welcome}
                    date={item.createdAtText}
                    chips={item.chips}
                    content={item.body}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Nav */}
      <NavBar activePage="my" />
    </div>
  );
}
