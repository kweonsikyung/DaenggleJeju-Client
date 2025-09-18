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

//utils
import { mainTabs, subTabs, emptyStateContent } from "./_util";

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

  const currentEmptyState =
    emptyStateContent[activeMainTab as keyof typeof emptyStateContent];

  return (
    <div className={s.page}>
      {/* Topbar */}
      <TopBar
        backIconHandler={() => router.back()}
        title="마이댕글"
        rightIcons={[
          {
            icon: (
              <Image
                alt="알림"
                height={24}
                width={24}
                src="/assets/icon24/bell-active_line.svg"
              />
            ),
            onClick: () => router.push("/notification"),
          },
        ]}
      />

      {/* container */}
      <div className={s.container}>
        <div className={s.contentWrapper}>
          <ProfileCard
            imageUrl="/assets/dangle/dog.png"
            name="해투"
            description="견주님"
            details="골든리트리버 · 대형견 (25~30kg 미만) · 7살"
            onEditClick={() => router.push("/my/edit-profile")}
          />

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
              onClick={() => {}}
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
