"use client";

import React from "react";
import * as s from "./Header.css";
import Image from "next/image";

export interface HeaderProps {
  /** 제목 */
  title: string;
  /** 설명 */
  desc?: string;
  /** 화살표 클릭 핸들러 */
  onArrowClick?: () => void;
  /** 컴포넌트 상단 여백 */
  marginTop?: string | number;
}

export function Header({ title, desc, onArrowClick, marginTop }: HeaderProps) {
  return (
    <div className={s.root} style={{ marginTop }}>
      {onArrowClick ? (
        <button
          className={s.titleButton}
          onClick={onArrowClick}
          aria-label="더보기"
        >
          <h2 className={s.title}>{title}</h2>
          <Image
            src="/assets/icon24/chevron-right.svg"
            alt="화살표 아이콘"
            width={24}
            height={24}
          />
        </button>
      ) : (
        <h2 className={s.title}>{title}</h2>
      )}
      {desc && <p className={s.desc}>{desc}</p>}
    </div>
  );
}

export default Header;
