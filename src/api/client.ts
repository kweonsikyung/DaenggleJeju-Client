/** @file /api/client.ts
 * @module /api/client
 * @description 프로젝트 전역에서 사용될 Axios 인스턴스를 생성하고 설정
 */

import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
  withCredentials: true,
});

export default api;
