import { Chips } from "@/types/place";

interface ProcessedChips {
  infoTags: string[];
  policyBoxTags: string[];
}

/**
 * data.chips 객체를 상단 infoTags와 하단 policyBoxTags로 분리하는 유틸리티 함수
 * @param chips - API 응답의 data.chips 객체 (타입: Chips)
 * @returns { infoTags: string[], policyBoxTags: string[] }
 */
export function processChips(chips?: Chips): ProcessedChips {
  const infoTagsSet = new Set<string>();
  let policyBoxTags: string[] = [];
  const infoFilter = "정보없음";

  if (chips) {
    // 1. Object.entries로 (key, value) 순회
    Object.entries(chips).forEach(([key, value]) => {
      // 2. 'policy' 키는 policyBoxTags로 분리
      if (key === "policy") {
        if (Array.isArray(value)) {
          policyBoxTags = value
            .filter((item) => typeof item === "string" && item !== infoFilter)
            .slice(0, 4); // 최대 4개
        }
      }
      // 3. 'policy' 외의 모든 키는 infoTagsSet에 추가
      else {
        if (typeof value === "string" && value !== infoFilter) {
          infoTagsSet.add(value);
        } else if (Array.isArray(value)) {
          value.forEach((item) => {
            if (typeof item === "string" && item !== infoFilter) {
              infoTagsSet.add(item);
            }
          });
        }
      }
    });
  }

  return {
    infoTags: Array.from(infoTagsSet),
    policyBoxTags: policyBoxTags,
  };
}
