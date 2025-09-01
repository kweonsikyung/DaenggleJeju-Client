// 필터칩 데이터
export const FILTER_CHIPS = [
  {
    id: "filter",
    iconUrl: "/assets/icon16/settings-sliders_line.svg",
    text: "",
  },
  { id: "dangle", text: "댕글", iconUrl: "/assets/icon12/play_filled.svg" },
  { id: "stay", text: "숙소", iconUrl: "/assets/icon12/building.svg" },
  {
    id: "restaurant",
    text: "음식점",
    iconUrl: "/assets/icon12/restaurant_filled.svg",
  },
  { id: "beach", text: "해변", iconUrl: "/assets/icon12/snorkle.svg" },
  { id: "cafe", text: "카페", iconUrl: "/assets/icon12/cafe_filled.svg" },
  { id: "travel", text: "여행지", iconUrl: "/assets/icon12/travel_filled.svg" },
  {
    id: "park",
    text: "애견운동장",
    iconUrl: "/assets/icon12/dogfootprint.svg",
  },
  {
    id: "hospital",
    text: "동물병원",
    iconUrl: "/assets/icon12/medical_filled.svg",
  },
  {
    id: "care",
    text: "돌봄",
    iconUrl: "/assets/icon12/care-filled.svg",
  },
];

// 마커 이미지 URL
export const MARKER_IMAGES = {
  dangle: "/assets/map/pin/dangle.svg",
  stay: "/assets/map/pin/stay.svg",
  restaurant: "/assets/map/pin/restaurant.svg",
  beach: "/assets/map/pin/beach.svg",
  cafe: "/assets/map/pin/cafe.svg",
  travel: "/assets/map/pin/travel.svg",
  park: "/assets/map/pin/park.svg",
  hospital: "/assets/map/pin/hospital.svg",
  care: "/assets/map/pin/care.svg",
};

// 필터 옵션 데이터
export const OPTION_DATA = [
  {
    group: "dogSize",
    title: "반려견 크기",
    multiSelect: true,
    chips: [
      { id: "s1", title: "소형견", caption: "10kg 미만" },
      { id: "s2", title: "소형견", caption: "10~24kg" },
      { id: "s3", title: "소형견", caption: "25~44kg" },
      { id: "s4", title: "소형견", caption: "45kg 이상" },
      { id: "s5", title: "소형견", caption: "(소형~초대형 모두)" },
    ],
  },
  {
    group: "placeType",
    title: "출입 가능 장소",
    multiSelect: true,
    chips: [
      { id: "p1", title: "실내만" },
      { id: "p2", title: "야외만" },
      { id: "p3", title: "모든 구역" },
    ],
  },
  {
    group: "rules",
    title: "출입 조건",
    multiSelect: true,
    chips: [
      { id: "r1", title: "목줄 착용" },
      { id: "r2", title: "이동 가방 사용" },
      { id: "r3", title: "목줄 자유" },
      { id: "r4", title: "강아지 기저귀 착용" },
    ],
  },
  {
    group: "convenience",
    title: "편의",
    multiSelect: true,
    chips: [
      { id: "c1", title: "주차 가능" },
      { id: "c2", title: "바베큐" },
      { id: "c3", title: "무선인터넷" },
      { id: "c4", title: "테이크아웃" },
      { id: "c5", title: "짖음 OK" },
      { id: "c6", title: "애견 전용 공간" },
      { id: "c7", title: "마당" },
      { id: "c8", title: "자쿠지" },
    ],
  },
];
