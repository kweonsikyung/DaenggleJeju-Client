import useSWR from "swr";
import { ApiError } from "@/api/common";
import {
  GetPlaceListReq,
  GetPlaceListRes,
  GetPlaceMapReq,
  GetPlaceMapRes,
  GetPlaceSearchReq,
  GetPlaceSearchRes,
  GetPlaceDetailReq,
  GetPlaceDetailRes,
  GetPlaceFullDetailReq,
  GetPlaceFullDetailRes,
} from "@/types/place";

import {
  getPlaceList,
  getPlaceMap,
  getPlaceSearch,
  getPlaceDetail,
  getPlaceFullDetail,
} from "@/api/place";

/**
 * @hook usePlaceList
 * @description 장소 목록을 조회하는 SWR 훅
 */
export function usePlaceList(params: GetPlaceListReq) {
  const key = params ? ["/places/list", JSON.stringify(params)] : null;
  const { data, error, isLoading, mutate } = useSWR<GetPlaceListRes, ApiError>(
    key,
    () => getPlaceList(params)
  );
  return { data, error, isLoading, mutate };
}

/**
 * @hook usePlaceMap
 * @description 지도 내 장소 목록을 조회하는 SWR 훅
 */
export function usePlaceMap(params: GetPlaceMapReq) {
  const key = params.bbox ? ["/places/map", JSON.stringify(params)] : null;
  const { data, error, isLoading, mutate } = useSWR<GetPlaceMapRes, ApiError>(
    key,
    () => getPlaceMap(params)
  );
  return { data, error, isLoading, mutate };
}

/**
 * @hook usePlaceSearch
 * @description 장소를 검색하는 SWR 훅
 */
export function usePlaceSearch(params: GetPlaceSearchReq) {
  const key = params.q ? ["/places/search", JSON.stringify(params)] : null;
  const { data, error, isLoading, mutate } = useSWR<
    GetPlaceSearchRes,
    ApiError
  >(key, () => getPlaceSearch(params));
  return { data, error, isLoading, mutate };
}

/**
 * @hook usePlaceDetail
 * @description 장소 단일 정보를 조회하는 SWR 훅
 */
export function usePlaceDetail(params: GetPlaceDetailReq) {
  const key = params.contentId
    ? ["/places", params.contentId, JSON.stringify(params)]
    : null;
  const { data, error, isLoading, mutate } = useSWR<
    GetPlaceDetailRes,
    ApiError
  >(key, () => getPlaceDetail(params));
  return { data, error, isLoading, mutate };
}

/**
 * @hook usePlaceFullDetail
 * @description 장소 상세 정보 전체를 조회하는 SWR 훅
 */
export function usePlaceFullDetail(params: GetPlaceFullDetailReq) {
  const key = params.contentId
    ? ["/places", params.contentId, "full", JSON.stringify(params)]
    : null;
  const { data, error, isLoading, mutate } = useSWR<
    GetPlaceFullDetailRes,
    ApiError
  >(key, () => getPlaceFullDetail(params));
  return { data, error, isLoading, mutate };
}
