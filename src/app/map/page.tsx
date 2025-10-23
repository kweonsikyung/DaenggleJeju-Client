"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import * as s from "./style.css";
import { BottomSheet } from "@/ui/atoms/BottomSheet/BottomSheet";
import { FilterChip } from "@/ui/atoms/FilterChip/FilterChip";
import NavBar from "@/ui/atoms/NavBar/NavBar";
import MapFloatingButtons from "@/ui/molecules/MapFloatingButtons/MapFloatingButtons";
import FilterSection from "@/ui/molecules/FilterSection/FilterSection";
import { Button } from "@/ui/atoms/Buttons/Button/Button";
import { ButtonStatus, ButtonSize } from "@/constants/ButtonVariant";
import {
  MARKER_IMAGES,
  FILTER_CHIPS,
  OPTION_DATA,
  JEJU_BBOX,
  FILTER_CHIP_ID_TO_CONTENT_TYPE_ID,
  FILTER_OPTION_ID_TO_API_PARAM,
} from "./_util";
import SearchHeader from "@/ui/molecules/SearchHeader/SearchHeader";
import DanglePlace from "@/ui/atoms/Dangle/DanglePlace/DanglePlace";
import { usePlaceMap } from "@/hooks/api/usePlaces";
import { usePostScrap } from "@/hooks/api/useScraps";
import { GetPlaceMapReq, PlaceItem } from "@/types/place";
import { normalizeChips } from "@/utils/normalizeChips";
import { mutate } from "swr";
import { useDaengglePlacesMap } from "@/hooks/api/useDaenggle";
import { useKakaoMap } from "@/hooks/useKakaoMap";
import { WelcomeOverlay } from "@/ui/molecules/WelcomeOverlay/WelcomeOverlay";
import { LoadingSpinner } from "@/ui/atoms/LoadingSpinner/LoadingSpinner";

const LOCAL_STORAGE_KEY = "hasVisitedMap";

/**
 * 내근처(지도) 페이지
 * * style/ page = top(absolute) + map + bottom(absolute) + nav(near) + bottomheet
 */
export default function MapPage() {
  /** router */
  const router = useRouter();

  /** state */
  const [activeFilter, setActiveFilter] = useState("dangle");
  const [selectedPlace, setSelectedPlace] = useState<PlaceItem | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [apiParams, setApiParams] = useState<GetPlaceMapReq>({
    bbox: JEJU_BBOX,
  });
  const [showWelcomeOverlay, setShowWelcomeOverlay] = useState(false);

  /** data fetching */
  const { data: placeData, isLoading: isPlaceLoading } = usePlaceMap(
    activeFilter !== "dangle" ? apiParams : { bbox: "" }
  );
  const { daengglePlacesMapData, isLoading: isDaenggleLoading } =
    useDaengglePlacesMap(activeFilter === "dangle" ? {} : undefined);

  const isLoading = isPlaceLoading || isDaenggleLoading;
  const places = placeData?.items || [];

  const { postScrap, isPosting } = usePostScrap();

  /** Map Hook */
  const handlePlaceSelect = useCallback((place: PlaceItem | null) => {
    setSelectedPlace(place);
  }, []);

  const handleDangleClick = useCallback(
    (videoId: string | number) => {
      router.push(`/shorts?contentId=${videoId}`);
    },
    [router]
  );

  const { mapContainerRef, centerToJeju } = useKakaoMap({
    places: places,
    daengglePlaces: daengglePlacesMapData,
    activeFilter: activeFilter,
    onPlaceSelect: handlePlaceSelect,
    onDangleClick: handleDangleClick,
    markerImages: MARKER_IMAGES,
  });

  /** Scrap handler */
  const handleScrapToggle = async (_contentId: number) => {
    if (isPosting || !selectedPlace) return;

    try {
      await postScrap({ id: _contentId, type: "place" });

      setSelectedPlace((prevPlace) => {
        if (!prevPlace) return null;

        const newIsScrapped = !prevPlace.isScrapped;
        const newScrapCount = newIsScrapped
          ? prevPlace.scrapCount + 1
          : prevPlace.scrapCount - 1;

        return {
          ...prevPlace,
          isScrapped: newIsScrapped,
          scrapCount: newScrapCount,
        };
      });

      mutate(["/places/map", apiParams]);
    } catch (e) {
      console.error("Scrap action failed:", e);
      alert("스크랩 작업에 실패했습니다.");
    }
  };

  /** filter state helpers */
  const isAnyFilterSelected = Object.values(selectedFilters).some(
    (arr) => arr.length > 0
  );

  /** filter handlers */
  const handleFilterSelect = (group: string, id: string) => {
    setSelectedFilters((prev) => {
      const existing = prev[group] || [];
      const multiSelect = OPTION_DATA.find(
        (d) => d.group === group
      )?.multiSelect;

      if (multiSelect) {
        return {
          ...prev,
          [group]: existing.includes(id)
            ? existing.filter((item) => item !== id)
            : [...existing, id],
        };
      } else {
        return { ...prev, [group]: existing.includes(id) ? [] : [id] };
      }
    });
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
  };

  const handleApplyFilters = () => {
    setApiParams((prev) => {
      const newParams: GetPlaceMapReq = { bbox: JEJU_BBOX };
      const contentTypeId = FILTER_CHIP_ID_TO_CONTENT_TYPE_ID[activeFilter];
      if (contentTypeId) {
        newParams.contentTypeId = contentTypeId;
      }
      for (const group in selectedFilters) {
        if (selectedFilters[group].length > 0) {
          const paramKey = group as keyof typeof FILTER_OPTION_ID_TO_API_PARAM;
          const paramValues = selectedFilters[group].map(
            (id) =>
              FILTER_OPTION_ID_TO_API_PARAM[paramKey][
                id as keyof (typeof FILTER_OPTION_ID_TO_API_PARAM)[typeof paramKey]
              ]
          );
          (newParams as unknown as Record<string, unknown>)[paramKey] =
            paramValues;
        }
      }
      return newParams;
    });
    setIsBottomSheetOpen(false);
  };

  /** navigation handlers */
  const handleLocationListClick = () => {
    router.push(`/search?filter=${activeFilter}`);
  };

  const handleDangleRecommendClick = () => {
    router.push("/dangle");
  };

  /** lifecycle */
  useEffect(() => {
    const hasVisited = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!hasVisited) {
      setShowWelcomeOverlay(true);
      localStorage.setItem(LOCAL_STORAGE_KEY, "true");
    }
  }, []);

  useEffect(() => {
    setApiParams((prev) => {
      const newParams = { ...prev, bbox: JEJU_BBOX };
      const contentTypeId = FILTER_CHIP_ID_TO_CONTENT_TYPE_ID[activeFilter];
      if (contentTypeId) {
        newParams.contentTypeId = contentTypeId;
      } else {
        delete newParams.contentTypeId;
      }
      return newParams;
    });
    setSelectedPlace(null);
  }, [activeFilter]);

  const totalCount =
    activeFilter === "dangle"
      ? daengglePlacesMapData?.length || 0
      : placeData?.total || 0;

  return (
    <div className={s.page}>
      {isLoading && <LoadingSpinner />}

      {/* top */}
      <div className={s.topContainer}>
        <SearchHeader
          onClick={() => router.push("/search")}
          searchFieldProps={{ placeholder: "제주 지역 또는 장소명 검색" }}
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

      {/* map */}
      <div id="map" ref={mapContainerRef} className={s.mapWrapper}></div>
      {selectedPlace && (
        <div className={s.placeCardContainer}>
          <DanglePlace
            thumbnailUrl={selectedPlace.thumbnail}
            locationCategory={
              selectedPlace.metaLine
                ? `${selectedPlace.metaLine} · ${
                    selectedPlace.contentType?.name ?? ""
                  }`
                : selectedPlace.contentType?.name ?? ""
            }
            name={selectedPlace.title}
            distance={selectedPlace.distanceText}
            playCount={0}
            bookmarkCount={selectedPlace.scrapCount}
            tags={normalizeChips(
              (selectedPlace as unknown as { chips: unknown }).chips
            )}
            onClick={() => router.push(`/detail/${selectedPlace.contentId}`)}
            onBookmarkClick={() => handleScrapToggle(selectedPlace.contentId)}
            isBookmarked={selectedPlace.isScrapped}
          />
        </div>
      )}

      {/* bottom */}
      <div className={s.bottomContainer}>
        <MapFloatingButtons
          onGpsClick={centerToJeju}
          chipMapListProps={{
            text: "장소 목록",
            cnt: totalCount,
            onLocationListClick: handleLocationListClick,
          }}
          fabProps={{ onClick: handleDangleRecommendClick }}
        />
      </div>

      {/* nav */}
      <NavBar activePage="near" />

      {/* WelcomeOverlay 컴포넌트 */}
      {showWelcomeOverlay && <WelcomeOverlay />}

      {/* bottomSheet */}
      <BottomSheet
        open={isBottomSheetOpen}
        onOpenChange={setIsBottomSheetOpen}
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
