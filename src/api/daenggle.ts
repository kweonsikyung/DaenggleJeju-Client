import { getRequest } from "./common";
import {
  // Request
  GetDaenggleAccommodationsReq,
  GetDaenggleTrendingReq,
  GetDaenggleRegionsReq,
  GetDaengglePreferenceReq,
  GetDaenggleSearchReq,
  GetDaenggleConceptsReq,
  GetDaengglePlaceRecommendationsReq,
  // Result
  DaenggleVideoListResult,
  DaenggleConceptShelf,
  DaengglePlaceRecommendationsResult,
} from "@/types/daenggle";

/**
 * @function getDaenggleAccommodations
 * @description 댕글 숙소 영상 목록 조회 (GET /daenggle/accommodations)
 * @param {GetDaenggleAccommodationsReq} params - Query Parameter 객체
 * @returns {Promise<DaenggleVideoListResult>} 댕글 영상 목록 결과
 */
export async function getDaenggleAccommodations(
  params: GetDaenggleAccommodationsReq
): Promise<DaenggleVideoListResult> {
  const queryParams = createBaseSearchParams(params).toString();
  return await getRequest<DaenggleVideoListResult>(
    `/daenggle/accommodations?${queryParams}`
  );
}

/**
 * @function getDaenggleTrending
 * @description 댕글 트렌딩 영상 목록 조회 (GET /daenggle/trending)
 * @param {GetDaenggleTrendingReq} params - Query Parameter 객체
 * @returns {Promise<DaenggleVideoListResult>} 댕글 영상 목록 결과
 */
export async function getDaenggleTrending(
  params: GetDaenggleTrendingReq
): Promise<DaenggleVideoListResult> {
  const queryParams = createBaseSearchParams(params).toString();
  return await getRequest<DaenggleVideoListResult>(
    `/daenggle/trending?${queryParams}`
  );
}

/**
 * @function getDaenggleRegions
 * @description 댕글 지역별 영상 목록 조회 (GET /daenggle/regions)
 * @param {GetDaenggleRegionsReq} params - Query Parameter 객체
 * @returns {Promise<DaenggleVideoListResult>} 댕글 영상 목록 결과
 */
export async function getDaenggleRegions(
  params: GetDaenggleRegionsReq
): Promise<DaenggleVideoListResult> {
  const queryParams = createBaseSearchParams(params).toString();
  return await getRequest<DaenggleVideoListResult>(
    `/daenggle/regions?${queryParams}`
  );
}

/**
 * @function getDaengglePreference
 * @description 댕글 사용자 선호 기반 영상 목록 조회 (GET /daenggle/preference)
 * @param {GetDaengglePreferenceReq} params - Query Parameter 객체
 * @returns {Promise<DaenggleVideoListResult>} 댕글 영상 목록 결과
 */
export async function getDaengglePreference(
  params: GetDaengglePreferenceReq
): Promise<DaenggleVideoListResult> {
  const { excludeIds, ...baseParams } = params;
  const queryParams = createBaseSearchParams(baseParams);

  if (excludeIds && excludeIds.length > 0) {
    excludeIds.forEach((id) => queryParams.append("excludeIds", id));
  }

  return await getRequest<DaenggleVideoListResult>(
    `/daenggle/preference?${queryParams.toString()}`
  );
}

/**
 * @function getDaenggleSearch
 * @description 댕글 영상 검색 (GET /daenggle/search)
 * @param {GetDaenggleSearchReq} params - Query Parameter 객체
 * @returns {Promise<DaenggleVideoListResult>} 댕글 영상 목록 결과
 */
export async function getDaenggleSearch(
  params: GetDaenggleSearchReq
): Promise<DaenggleVideoListResult> {
  const queryParams = createBaseSearchParams(params).toString();
  return await getRequest<DaenggleVideoListResult>(
    `/daenggle/search?${queryParams}`
  );
}

/**
 * @function getDaenggleConcepts
 * @description 댕글 콘셉트별 영상 목록 조회 (GET /daenggle/concepts)
 * @param {GetDaenggleConceptsReq} params - Query Parameter 객체
 * @returns {Promise<{ shelves: DaenggleConceptShelf[] }>} 댕글 콘셉트별 영상 목록 결과
 */
export async function getDaenggleConcepts(
  params: GetDaenggleConceptsReq
): Promise<{ shelves: DaenggleConceptShelf[] }> {
  const { conceptKeys, limitPerConcept } = params;
  const queryParams = new URLSearchParams();

  queryParams.append("limitPerConcept", String(limitPerConcept));
  conceptKeys.forEach((key) => queryParams.append("conceptKeys", key));

  return await getRequest<{ shelves: DaenggleConceptShelf[] }>(
    `/daenggle/concepts?${queryParams.toString()}`
  );
}

/**
 * @function getDaengglePlaceRecommendations
 * @description 댕글 장소 기반 추천 영상 목록 조회 (GET /daenggle/places/{contentId}/recommendations)
 * @param {GetDaengglePlaceRecommendationsReq} params - Parameter 및 Query Parameter 객체
 * @returns {Promise<DaengglePlaceRecommendationsResult>} 댕글 장소 기반 추천 영상 목록 결과
 */
export async function getDaengglePlaceRecommendations(
  params: GetDaengglePlaceRecommendationsReq
): Promise<DaengglePlaceRecommendationsResult> {
  const { contentId, ...queryParams } = params;
  const queryString = createBaseSearchParams(queryParams).toString();

  return await getRequest<DaengglePlaceRecommendationsResult>(
    `/daenggle/places/${contentId}/recommendations?${queryString}`
  );
}

/**
 * createBaseSearchParams 헬퍼 함수
 * @param params - 객체 형태의 파라미터
 * @returns
 */
function createBaseSearchParams<T extends object>(params: T): URLSearchParams {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      searchParams.append(key, String(value));
    }
  });
  return searchParams;
}
