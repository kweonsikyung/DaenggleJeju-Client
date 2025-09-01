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
import { MARKER_IMAGES, FILTER_CHIPS, OPTION_DATA } from "./_util";
import SearchHeader from "@/ui/molecules/SearchHeader/SearchHeader";
import DanglePlace from "@/ui/atoms/Dangle/DanglePlace/DanglePlace";
import { MARKER_DATA } from "@/utils/dummy_data";

type Place = (typeof MARKER_DATA.dangle)[0];
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
  const router = useRouter();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [map, setMap] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState("dangle");
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // 마커를 로드하고 지도에 추가하는 함수
  const loadMarkers = (filter: string) => {
    if (!map || !window.kakao) return;

    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    const data = MARKER_DATA[filter as keyof typeof MARKER_DATA] || [];
    const imageUrl = MARKER_IMAGES[filter as keyof typeof MARKER_IMAGES];
    const bounds = new window.kakao.maps.LatLngBounds();

    if (!imageUrl) return;

    data.forEach((item) => {
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

      const content = `<div style="font-size:11px; font-weight:bold; color:#00A63E; white-space:nowrap; text-align:center; text-shadow: 1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff;">${item.name}</div>`;
      new window.kakao.maps.CustomOverlay({
        position: markerPosition,
        content: content,
      }).setMap(map);

      bounds.extend(markerPosition);
    });

    if (data.length > 0) {
      map.setBounds(bounds);
    }
  };

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

  const handleFilterSelect = (group: string, id: string) => {
    setSelectedFilters((prev) => {
      const existing = prev[group] || [];
      const multiSelect = OPTION_DATA.find(
        (d) => d.group === group
      )?.multiSelect;

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

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY}&autoload=false&libraries=services,clusterer`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (mapContainerRef.current) {
          const options = {
            center: new window.kakao.maps.LatLng(33.5359, 126.8365),
            level: 3,
          };
          const newMap = new window.kakao.maps.Map(
            mapContainerRef.current,
            options
          );

          window.kakao.maps.event.addListener(newMap, "click", () => {
            setSelectedPlace(null);
          });

          setMap(newMap);

          const swLatLng = new window.kakao.maps.LatLng(33.1, 126.1);
          const neLatLng = new window.kakao.maps.LatLng(33.6, 126.9);
          const bounds = new window.kakao.maps.LatLngBounds(swLatLng, neLatLng);
          newMap.setBounds(bounds);

          loadMarkers(activeFilter);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (map) {
      loadMarkers(activeFilter);
    }
  }, [activeFilter, map]);

  return (
    <div className={s.page}>
      {/* top */}
      <div className={s.topContainer}>
        <SearchHeader
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

      {/* map */}
      <div id="map" ref={mapContainerRef} className={s.mapWrapper}></div>
      {selectedPlace && (
        <div className={s.placeCardContainer}>
          <DanglePlace
            thumbnailUrl={selectedPlace.thumbnailUrl}
            locationCategory={selectedPlace.locationCategory}
            name={selectedPlace.name}
            distance={selectedPlace.distance}
            playCount={selectedPlace.playCount}
            bookmarkCount={selectedPlace.bookmarkCount}
            tags={selectedPlace.tags}
            onClick={() => router.push(`/detail/${selectedPlace.id}`)}
          />
        </div>
      )}

      {/* bottom */}
      <div className={s.bottomContainer}>
        <MapFloatingButtons
          onGpsClick={handleGpsClick}
          chipMapListProps={{
            text: "장소 목록",
            cnt: 7,
            onLocationListClick: handleLocationListClick,
          }}
          fabProps={{
            onClick: handleDangleRecommendClick,
          }}
        />
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
