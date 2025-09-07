"use client";

import React from "react";
import * as s from "./NoticeBox.css";
import Image from "next/image";

interface NoticeBoxProps {
  /** NoticeBox를 렌더링할지 여부 */
  shouldRender: boolean;
  /** 현재 애니메이션 상태 ('in', 'out', 'idle') */
  animation: "in" | "out" | "idle";
  /** 닫기 버튼을 눌렀을 때 실행될 함수 */
  onClose: () => void;
  /** 내부에 표시될 텍스트 또는 React 요소 */
  children: React.ReactNode;
}

const NoticeBox = ({
  shouldRender,
  animation,
  onClose,
  children,
}: NoticeBoxProps) => {
  if (!shouldRender) {
    return null;
  }

  const animationClass =
    animation === "in" ? s.animateIn : animation === "out" ? s.animateOut : "";

  return (
    <div className={`${s.container} ${animationClass}`} role="alert">
      <div className={s.iconWrapper}>
        <Image
          src={"/assets/icon16/circle-emphasis_line_yellow.svg"}
          alt="icon"
          width={16}
          height={16}
        />
      </div>
      <p className={s.content}>{children}</p>
      <button
        type="button"
        className={s.closeButton}
        onClick={onClose}
        aria-label="알림 닫기"
      >
        <Image
          src={"/assets/icon16/x_line_yellow.svg"}
          alt="icon"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
};

export default NoticeBox;
