/** @file api/common.ts
 * @module api/common
 * @description Axios를 사용한 API 요청 및 응답에 사용되는 공통 함수와 타입을 정의
 * @see {@link lib/api/client} API 요청에 사용되는 axios 인턴스
 */

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "./client";

/**
 * API 에러 정보를 담는 커스텀 에러 클래스
 */
export class ApiError extends Error {
  readonly code?: string;
  readonly status?: number;

  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

/**
 * @function extractApiErrorMessage
 * @description 예측 불가능한 API 에러 응답에서 최대한 의미있는 메시지를 추출하는 헬퍼 함수
 * @param {unknown} data - Axios 에러의 `error.response.data`
 * @returns {string} 추출된 에러 메시지 문자열
 */
function extractApiErrorMessage(data: unknown): string {
  // 1. data가 문자열이면, 그대로 반환
  if (typeof data === "string") {
    return data;
  }

  // 2. data가 객체인 경우, 일반적인 에러 메시지 키를 순서대로 확인
  if (data && typeof data === "object") {
    if ("message" in data && typeof data.message === "string") {
      return data.message;
    }
    if ("detail" in data && typeof data.detail === "string") {
      return data.detail;
    }
    if ("error" in data && typeof data.error === "string") {
      return data.error;
    }
  }

  // 3. 위 모든 경우에 해당하지 않으면, 전체를 문자열로 변환하여 디버깅을 도움
  return JSON.stringify(data);
}

/**
 * @function getRequest
 * @description 공통 GET 요청 함수
 * @returns {Promise<T>} API 응답 객체
 */
export async function getRequest<T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await api.get(endpoint, config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const responseData = error.response?.data;
      const message = extractApiErrorMessage(responseData);
      const code =
        responseData &&
        typeof responseData === "object" &&
        "code" in responseData
          ? String(responseData.code)
          : undefined;
      throw new ApiError(message, error.response?.status, code);
    }
    throw error;
  }
}

/**
 * @function postRequest
 * @description 공통 POST 요청 함수
 * @returns {Promise<T>} API 응답 객체
 */
export async function postRequest<T, B = unknown>(
  endpoint: string,
  body: B,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await api.post(endpoint, body, config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const responseData = error.response?.data;
      const message = extractApiErrorMessage(responseData);
      const code =
        responseData &&
        typeof responseData === "object" &&
        "code" in responseData
          ? String(responseData.code)
          : undefined;
      throw new ApiError(message, error.response?.status, code);
    }
    throw error;
  }
}
