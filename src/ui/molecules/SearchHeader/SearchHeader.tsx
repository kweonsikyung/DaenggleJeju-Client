"use client";

import React from "react";
import Image from "next/image";
import * as s from "./SearchHeader.css";
import SearchField from "@/ui/atoms/SearchField/SearchField";

export interface SearchHeaderProps {
  /** back 아이콘 핸들러: 주면 자동으로 아이콘 노출 + 핸들러 등록 */
  backIconHandler?: () => void;
  /** back 아이콘 색상 */
  backIconColor?: "black" | "white";
  /** SearchField의 props */
  searchFieldProps?: React.ComponentProps<typeof SearchField>;
}

export function SearchHeader({
  backIconHandler,
  backIconColor = "black",
  searchFieldProps,
}: SearchHeaderProps) {
  const iconSrc =
    backIconColor === "white"
      ? "/assets/icon24/arrow-left_line_white.svg"
      : "/assets/icon24/arrow-left_line.svg";

  return (
    <div className={s.root}>
      {backIconHandler && (
        <button className={s.backButton} onClick={backIconHandler}>
          <Image src={iconSrc} alt="뒤로가기" width={24} height={24} />
        </button>
      )}
      <div
        className={
          s.searchFieldWrapper[backIconHandler ? "withBackButton" : "fullWidth"]
        }
      >
        <SearchField {...searchFieldProps} />
      </div>
    </div>
  );
}

export default SearchHeader;
