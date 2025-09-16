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
import { GetPlaceMapReq, PlaceItem } from "@/types/place";

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
  const { data: placeData, isLoading } = usePlaceMap(apiParams);
  const places = placeData?.items || [];

  const isAnyFilterSelected = Object.values(selectedFilters).some(
    (arr) => arr.length > 0
  );

  /** map load handler */
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
        new window.kakao.maps.Size(60, 60)
      );
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      window.kakao.maps.event.addListener(marker, "click", () => {
        setSelectedPlace(item);
        map.panTo(markerPosition);
      });

      marker.setMap(map);
      markersRef.current.push(marker);
    });

    const firstItemPosition = new window.kakao.maps.LatLng(
      data[0].lat,
      data[0].lng
    );
    map.setCenter(firstItemPosition);
    map.setLevel(8);
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
          (newParams as any)[paramKey] = paramValues;
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
    router.push(`/list?filter=${activeFilter}`);
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
      const newParams = { ...prev };
      const contentTypeId = FILTER_CHIP_ID_TO_CONTENT_TYPE_ID[activeFilter];
      if (contentTypeId) {
        newParams.contentTypeId = contentTypeId;
      } else {
        delete newParams.contentTypeId;
      }
      return newParams;
    });
  }, [activeFilter]);

  useEffect(() => {
    if (map && places) {
      loadMarkers(places);
    }
  }, [places, map]);

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
            locationCategory={selectedPlace.metaLine}
            name={selectedPlace.title}
            distance={selectedPlace.distanceText}
            playCount={0}
            bookmarkCount={selectedPlace.scrapCount}
            tags={selectedPlace.chips}
            onClick={() => router.push(`/detail/${selectedPlace.contentId}`)}
          />
        </div>
      )}

      {/* bottom */}
      <div className={s.bottomContainer}>
        <MapFloatingButtons
          onGpsClick={handleGpsClick}
          chipMapListProps={{
            text: "장소 목록",
            cnt: placeData?.total || 0,
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
