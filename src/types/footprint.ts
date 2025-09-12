// ================= POST /footprints =================

/**
 * 발자국(리뷰)의 출입 상태
 */
export type EntryStatus = "allow" | "deny";

/**
 * 발자국(리뷰) 생성 Request
 * @description POST /footprints 요청의 Body 타입
 * @property {number} contentId - 장소 ID
 * @property {EntryStatus} entryStatus - 출입 가능 여부
 * @property {string} entryStatusDetail - 출입 상세 정보 (예: "소형견만 가능")
 * @property {string[]} conditions - 방문 조건 (예: "목줄", "기저귀")
 * @property {number} welcome - 환영도 점수 (1~5)
 * @property {string} body - 리뷰 본문
 */
export interface PostFootprintReq {
  contentId: number;
  entryStatus: EntryStatus;
  entryStatusDetail: string;
  conditions: string[];
  welcome: number;
  body: string;
}

/**
 * 발자국(리뷰) 생성 Response
 * @description POST /footprints 요청의 성공 응답 타입
 * @property {number} footprintId - 생성된 발자국 ID
 * @property {number} contentId - 장소 ID
 * @property {boolean} created - 생성 여부 (항상 true)
 * @property {string} message - 서버 메시지
 */
export interface PostFootprintRes {
  footprintId: number;
  contentId: number;
  created: boolean;
  message: string;
}

// ================= GET /footprints/my =================

/**
 * 내가 작성한 발자국 목록 조회 Request
 * @description GET /footprints/my 요청의 Query Parameter 타입
 * @property {number} [contentTypeId] - 필터링할 콘텐츠 타입 ID
 * @property {number} [limit] - 한 번에 가져올 개수
 * @property {number} [offset] - 시작 위치
 */
export interface GetMyFootprintsReq {
  contentTypeId?: number;
  limit?: number;
  offset?: number;
}

/**
 * 내가 작성한 발자국 목록의 아이템 타입
 */
export interface MyFootprintItem {
  footprintId: number;
  contentId: number;
  contentType: {
    id: number;
    name: string;
  };
  title: string;
  metaLine: string;
  createdAtText: string;
  thumbnail: string | null;
  chips: string[];
  welcome: number;
  body: string;
}

/**
 * 내가 작성한 발자국 목록 조회 Response
 * @description GET /footprints/my 요청의 성공 응답 타입
 * @property {number} total - 전체 개수
 * @property {MyFootprintItem[]} items - 발자국 아이템 배열
 */
export interface GetMyFootprintsRes {
  total: number;
  items: MyFootprintItem[];
}

// ================= GET /footprints/places/{contentId} =================

/**
 * 장소별 발자국 목록 조회 Request
 * @description GET /footprints/places/{contentId} 요청의 Parameter 타입
 * @property {string} contentId - 조회할 장소의 ID (Path Parameter)
 * @property {number} [limit] - 한 번에 가져올 개수
 * @property {number} [offset] - 시작 위치
 */
export interface GetPlaceFootprintsReq {
  contentId: string;
  limit?: number;
  offset?: number;
}

/**
 * 장소별 발자국 목록의 아이템 타입
 */
export interface PlaceFootprintItem {
  footprintId: number;
  writer: {
    userId: number;
    handle: string;
  };
  createdAtText: string;
  chips: string[];
  welcome: number;
  body: string;
  isLiked: boolean;
}

/**
 * 장소별 발자국 목록 조회 Response
 * @description GET /footprints/places/{contentId} 요청의 성공 응답 타입
 * @property {number} total - 전체 개수
 * @property {PlaceFootprintItem[]} items - 발자국 아이템 배열
 */
export interface GetPlaceFootprintsRes {
  total: number;
  items: PlaceFootprintItem[];
}
