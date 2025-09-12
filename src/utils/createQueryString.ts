/**
 * @function createQueryString
 * @description 객체를 URL 쿼리스트링으로 변환하는 헬퍼 함수. undefined 값은 제외하고, 배열은 올바르게 처리
 * @param {Record<string, any>} params - 쿼리스트링으로 변환할 객체
 * @returns {string} 생성된 쿼리스트링
 */
export function createQueryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();
  for (const key in params) {
    const value = params[key];
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(key, String(v)));
      } else {
        searchParams.set(key, String(value));
      }
    }
  }
  return searchParams.toString();
}
