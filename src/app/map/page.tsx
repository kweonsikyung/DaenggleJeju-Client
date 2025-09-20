"use client";

import React, { useEffect, useRef, useState } from "react";
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
import { DaengglePlacesMapResult } from "@/types/daenggle";

/** type (related KAKAO) */
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

/**
 * 내근처(지도) 페이지
 * * style/ page = top(absolute) + map + bottom(absolute) + nav(near) + bottomheet
 */
export default function MapPage() {
  /** router */
  const router = useRouter();

  /** state */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [map, setMap] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState("dangle");
  const [selectedPlace, setSelectedPlace] = useState<PlaceItem | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [apiParams, setApiParams] = useState<GetPlaceMapReq>({
    bbox: JEJU_BBOX,
  });

  const mapContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);

  /** variables */
  const { data: placeData, isLoading: isPlaceLoading } = usePlaceMap(
    activeFilter !== "dangle" ? apiParams : { bbox: "" }
  );
  const { daengglePlacesMapData, isLoading: isDaenggleLoading } =
    useDaengglePlacesMap(activeFilter === "dangle" ? {} : undefined);

  const isLoading = isPlaceLoading || isDaenggleLoading;
  const places = placeData?.items || [];

  const { postScrap, isPosting } = usePostScrap();

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

  const isAnyFilterSelected = Object.values(selectedFilters).some(
    (arr) => arr.length > 0
  );

  /** map load handler */
  // 일반 칩 마커 로더
  const loadMarkers = (data: PlaceItem[]) => {
    if (!map || !window.kakao || !Array.isArray(data)) return;

    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    if (data.length === 0) return;

    data.forEach((item) => {
      const imageUrl =
        MARKER_IMAGES[item.contentType.id.toString()] || MARKER_IMAGES.dangle;
      if (!imageUrl) return;

      const markerPosition = new window.kakao.maps.LatLng(item.lat, item.lng);
      const markerImage = new window.kakao.maps.MarkerImage(
        imageUrl,
        new window.kakao.maps.Size(40, 40)
      );
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      // 마우스오버를 위한 커스텀 오버레이 생성
      const content = `
      <div style="position: relative; display: flex; flex-direction: column; align-items: center; transform: translateY(-15px);">
        <style>
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .bubble-container {
            animation: fadeIn 0.3s;
          }
        </style>
        <div class="bubble-container">
          <div style="padding: 8px 16px; background-color: #222; color: #fff; border-radius: 12px; font-size: 15px; font-weight: bold;">
            ${item.title}
          </div>
          <div style="width: 0px; height: 0px; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid rgb(34, 34, 34); margin: 0 auto;"></div>
        </div>
      </div>
    `;
      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: markerPosition,
        content: content,
        yAnchor: 1.7,
      });

      window.kakao.maps.event.addListener(marker, "mouseover", function () {
        customOverlay.setMap(map);
      });
      window.kakao.maps.event.addListener(marker, "mouseout", function () {
        customOverlay.setMap(null);
      });

      window.kakao.maps.event.addListener(marker, "click", () => {
        setSelectedPlace(item);
        map.panTo(markerPosition);
      });

      marker.setMap(map);
      markersRef.current.push(marker);
    });

    if (data.length > 0) {
      const firstItemPosition = new window.kakao.maps.LatLng(
        data[0].lat,
        data[0].lng
      );
      map.setCenter(firstItemPosition);
      map.setLevel(8);
    }
  };

  // 댕글 칩 마커 로더
  const loadDangleMarkers = (data: DaengglePlacesMapResult) => {
    if (!map || !window.kakao || !Array.isArray(data)) return;

    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    if (data.length === 0) return;

    data.forEach((item) => {
      const imageUrl = MARKER_IMAGES.dangle;
      const markerPosition = new window.kakao.maps.LatLng(item.mapy, item.mapx);
      const markerImage = new window.kakao.maps.MarkerImage(
        imageUrl,
        new window.kakao.maps.Size(40, 40)
      );
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
        title: item.placeTitle,
      });

      const content = `
      <div style="position: relative; display: flex; flex-direction: column; align-items: center; transform: translateY(-15px);">
        <style>
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .bubble-container {
            animation: fadeIn 0.3s;
          }
        </style>
        <div class="bubble-container">
          <div style="padding: 8px 16px; background-color: #222; color: #fff; border-radius: 12px; font-size: 15px; font-weight: bold;">
            ${item.placeTitle}
          </div>
          <div style="width: 0px; height: 0px; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid rgb(34, 34, 34); margin: 0 auto;"></div>
        </div>
      </div>
    `;

      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: markerPosition,
        content: content,
        yAnchor: 1.7,
      });

      // 마커에 마우스오버, 마우스아웃 이벤트 추가
      window.kakao.maps.event.addListener(marker, "mouseover", function () {
        customOverlay.setMap(map);
      });
      window.kakao.maps.event.addListener(marker, "mouseout", function () {
        customOverlay.setMap(null);
      });

      window.kakao.maps.event.addListener(marker, "click", () => {
        router.push(`/shorts?contentId=${item.video_id}`);
      });

      marker.setMap(map);
      markersRef.current.push(marker);
    });

    if (data.length > 0) {
      const firstItemPosition = new window.kakao.maps.LatLng(
        data[0].mapy,
        data[0].mapx
      );
      map.setCenter(firstItemPosition);
      map.setLevel(8);
    }
  };

  /** filter handler */
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

  /** map util handler */
  const handleGpsClick = () => {
    if (!map || !window.kakao) return;
    const swLatLng = new window.kakao.maps.LatLng(33.1, 126.1);
    const neLatLng = new window.kakao.maps.LatLng(33.6, 126.9);
    const bounds = new window.kakao.maps.LatLngBounds(swLatLng, neLatLng);
    map.setBounds(bounds);
  };

  const handleLocationListClick = () => {
    router.push(`/search?filter=${activeFilter}`);
  };

  const handleDangleRecommendClick = () => {
    router.push("/dangle");
  };

  /** lifecycle */
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY}&autoload=false&libraries=services,clusterer`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (mapContainerRef.current) {
          const options = {
            center: new window.kakao.maps.LatLng(33.36, 126.57),
            level: 8,
          };
          const newMap = new window.kakao.maps.Map(
            mapContainerRef.current,
            options
          );

          window.kakao.maps.event.addListener(newMap, "click", () => {
            setSelectedPlace(null);
          });

          setMap(newMap);
        }
      });
    };
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
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

  useEffect(() => {
    if (map) {
      if (activeFilter === "dangle") {
        if (daengglePlacesMapData) {
          loadDangleMarkers(daengglePlacesMapData);
        }
      } else if (places) {
        loadMarkers(places);
      }
    }
  }, [places, daengglePlacesMapData, map, activeFilter]);

  const totalCount =
    activeFilter === "dangle"
      ? daengglePlacesMapData?.length || 0
      : placeData?.total || 0;

  return (
    <div className={s.page}>
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
          onGpsClick={handleGpsClick}
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
