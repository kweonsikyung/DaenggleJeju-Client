"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as s from "./style.css";
import { MARKER_DATA } from "@/utils/dummy_data";
import SearchHeader from "@/ui/molecules/SearchHeader/SearchHeader";
import { FILTER_CHIPS } from "../map/_util";
import { FilterChip } from "@/ui/atoms/FilterChip/FilterChip";
import { useState } from "react";
import { BottomSheet } from "@/ui/atoms/BottomSheet/BottomSheet";
import { Button } from "@/ui/atoms/Buttons/Button/Button";
import FilterSection from "@/ui/molecules/FilterSection/FilterSection";
import { OPTION_DATA } from "../map/_util";
import DanglePlace from "@/ui/atoms/Dangle/DanglePlace/DanglePlace";
import { ButtonSize, ButtonStatus } from "@/constants/ButtonVariant";
import NavBar from "@/ui/atoms/NavBar/NavBar";

/**
 * 내근처(리스트) 페이지
 * * style/ page = top + container + nav(near) + bottomSheet
 */
export default function ListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") || "dangle";
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const handleBack = () => {
    router.back();
  };

  const handleFilterSelect = (group: string, id: string) => {
    setSelectedFilters((prev) => {
      const data = OPTION_DATA.find((d) => d.group === group);
      if (!data) return prev;

      const existing = prev[group] || [];
      const multiSelect = data.multiSelect;

      if (multiSelect) {
        if (existing.includes(id)) {
          return { ...prev, [group]: existing.filter((item) => item !== id) };
        } else {
          return { ...prev, [group]: [...existing, id] };
        }
      } else {
        return { ...prev, [group]: existing.includes(id) ? [] : [id] };
      }
    });
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
  };

  const handleApplyFilters = () => {
    console.log("필터 적용:", selectedFilters);
    setIsBottomSheetOpen(false);
  };

  const isAnyFilterSelected = Object.values(selectedFilters).some(
    (arr) => arr.length > 0
  );

  const listData = MARKER_DATA[activeFilter as keyof typeof MARKER_DATA] || [];

  return (
    <div className={s.page}>
      {/* top */}
      <div className={s.topContainer}>
        <SearchHeader
          backIconHandler={handleBack}
          searchFieldProps={{
            placeholder: "제주 지역 또는 장소명 검색",
          }}
        />
        <div className={s.filterWrapper}>
          <div className={s.filterChipsContainer}>
            {FILTER_CHIPS.map((chip) => (
              <FilterChip
                key={chip.id}
                text={chip.text}
                iconUrl={chip.iconUrl}
                selected={activeFilter === chip.id}
                onClick={() => {
                  if (chip.id === "filter") {
                    setIsBottomSheetOpen(true);
                  } else {
                    setActiveFilter(chip.id);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* container */}
      <div className={s.container}>
        {listData.length > 0 ? (
          listData.map((item, index) => (
            <div className={s.cardWrapper} key={index}>
              <DanglePlace
                bookmarkCount={item.bookmarkCount}
                distance={item.distance}
                locationCategory={item.locationCategory}
                name={item.name}
                onBookmarkClick={() => {}}
                onClick={() => {}}
                playCount={item.playCount}
                tags={item.tags}
                thumbnailUrl={item.thumbnailUrl}
              />
            </div>
          ))
        ) : (
          <div className={s.noResults}>
            선택된 필터에 해당하는 장소가 없습니다.
          </div>
        )}
      </div>

      {/* nav */}
      <NavBar activePage="near" />

      {/* bottomSheet */}
      <BottomSheet
        open={isBottomSheetOpen}
        onOpenChange={(isOpen) => setIsBottomSheetOpen(isOpen)}
        title="필터"
      >
        <div className={s.bottomSheetContent}>
          {OPTION_DATA.map((data) => (
            <FilterSection
              key={data.group}
              title={data.title}
              chips={data.chips}
              multiSelect={data.multiSelect}
              selectedChips={selectedFilters[data.group] || []}
              onChipClick={(chipId: string) =>
                handleFilterSelect(data.group, chipId)
              }
            />
          ))}
        </div>
        <div className={s.bottomSheetFooter}>
          <Button
            size={ButtonSize.MEDIUM}
            status={ButtonStatus.DEFAULT}
            text="초기화"
            onClick={handleResetFilters}
          />
          <Button
            size={ButtonSize.MEDIUM}
            status={
              isAnyFilterSelected ? ButtonStatus.ACTIVE : ButtonStatus.DISABLED
            }
            text="적용"
            onClick={handleApplyFilters}
            disabled={!isAnyFilterSelected}
          />
        </div>
      </BottomSheet>
    </div>
  );
}
