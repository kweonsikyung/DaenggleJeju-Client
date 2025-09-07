"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import TopBar from "@/ui/atoms/TopBar/TopBar";
import NavBar from "@/ui/atoms/NavBar/NavBar";
import * as s from "./style.css";
import { jejuOptions } from "./_util";
import { useWebShare } from "@/hooks/useWebShare";
import { useNotice } from "@/hooks/useNotice";
import NoticeBox from "@/ui/atoms/NoticeBox/NoticeBox";

/**
 * 제주 이동 방법 메인 & 상세 페이지
 */
export default function JejuPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as string | null;
  const { share } = useWebShare();
  const { shouldRender, animation, hideNotice } = useNotice();

  const handleShare = () => {
    share({
      title: "[댕글제주] 제주이동의 모든 것",
      text: "제주에서 이동할 땐?",
    });
  };

  const renderDetailPage = (currentType: string) => {
    const currentOption = jejuOptions.find(
      (option) => option.type === currentType
    );
    if (!currentOption) return renderMainPage();

    const imageCount = currentOption.cnt;

    return (
      <>
        <TopBar
          transparent
          backIconHandler={() => router.back()}
          rightIcons={[
            {
              icon: (
                <Image
                  alt="공유하기"
                  height={24}
                  src={"/assets/icon24/share_line.svg"}
                  width={24}
                />
              ),
              onClick: handleShare,
            },
          ]}
        />
        <div className={s.detail_container}>
          <NoticeBox
            shouldRender={shouldRender}
            animation={animation}
            onClose={hideNotice}
          >
            제공된 정보는 실제 운영 상황과 다를 수 있으므로, 예약 및 탑승 전
            반드시 해당 업체의 최신 규정과 조건을 확인해 주시기 바랍니다.
          </NoticeBox>

          <Image
            src={currentOption.url}
            alt={currentOption.title}
            width={190}
            height={190}
          />
          <div className={s.detailHeader}>
            <h1 className={s.detailTitle}>{currentOption.title}</h1>
            <p className={s.detailDesc}>{currentOption.desc}</p>
          </div>

          <div className={s.detailImageWrapper}>
            {Array.from({ length: imageCount }, (_, i) => i + 1).map((num) => (
              <Image
                key={num}
                src={`/assets/jeju/${currentType}/${num}.png`}
                alt={`${currentOption.title} 상세 이미지 ${num}`}
                width={340}
                height={440}
                sizes="100vw"
                className={s.detailImage}
              />
            ))}
          </div>
        </div>
      </>
    );
  };

  // 메인 페이지 렌더링 함수
  const renderMainPage = () => {
    return (
      <>
        <TopBar transparent backIconHandler={() => router.back()} />
        <div className={s.container}>
          <Image src={"/assets/jeju.png"} width={274} height={190} alt="제주" />
          <div className={s.title}>
            반려견 동반 제주 이동 방법
            <br />
            쉽게 안내해 드릴게요
          </div>
          <div className={s.box_container}>
            {jejuOptions.map((item) => (
              <div
                key={item.id}
                className={s.box}
                onClick={() => router.push(`/jeju?type=${item.type}`)}
              >
                <div className={s.left}>
                  <div className={s.top}>{item.title}</div>
                  <div className={s.desc}>{item.desc}</div>
                </div>
                <Image src={item.url} alt={item.title} width={56} height={56} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={s.page}>
      {type ? renderDetailPage(type) : renderMainPage()}
      <NavBar activePage="jeju" />
    </div>
  );
}
