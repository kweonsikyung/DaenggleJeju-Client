"use client";

import React, { useState } from "react";
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

//utils and hooks
import { mainTabs, subTabs, emptyStateContent } from "./_util";
import { usePetProfileList } from "@/hooks/api/usePetProfile";
import { getRandomAvatar } from "@/utils/getRandomAvatar";

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

  const { petProfileList, isLoading, error } = usePetProfileList();

  if (isLoading) return <div>프로필 정보를 불러오는 중</div>;
  if (error) return <div>오류가 발생했습니다</div>;

  const myPet = petProfileList?.at(-1);

  const detailsParts = [
    myPet?.breedNameKo,
    myPet?.sizeLabelKo,
    myPet?.ageYears ? `${myPet.ageYears}살` : null,
  ];
  const detailsString = detailsParts.filter(Boolean).join(" · ");

  const currentEmptyState =
    emptyStateContent[activeMainTab as keyof typeof emptyStateContent];

  return (
    <div className={s.page}>
      {/* Topbar */}
      <TopBar
        backIconHandler={() => router.back()}
        title="마이댕글"
        // rightIcons={[
        //   {
        //     icon: (
        //       <Image
        //         alt="알림"
        //         height={24}
        //         width={24}
        //         src="/assets/icon24/bell-active_line.svg"
        //       />
        //     ),
        //     onClick: () => router.push("/notification"),
        //   },
        // ]}
      />

      {/* container */}
      <div className={s.container}>
        <div className={s.contentWrapper}>
          {myPet ? (
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

          {activeMainTab === "footprint" && (
            <Button
              status={ButtonStatus.ACTIVE}
              size={ButtonSize.MEDIUM}
              text="발자국 남기기"
              onClick={() => {
                router.push("/review");
              }}
            />
          )}
        </div>
        <Tabs
          tabs={subTabs}
          activeTab={activeSubTab}
          onTabClick={setActiveSubTab}
        />
        <EmptyState
          imageUrl={currentEmptyState.imageUrl}
          title={currentEmptyState.title}
          description={currentEmptyState.description}
        />
      </div>

      {/* Nav */}
      <NavBar activePage="my" />
    </div>
  );
}
