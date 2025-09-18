/** @file /api/client.ts
 * @module /api/client
 * @description 프로젝트 전역에서 사용될 Axios 인스턴스를 생성하고 설정
 */
import axios, { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp(`(^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[2]) : null;
};
const needsCsrf = (method?: string) =>
  ["POST", "PUT", "PATCH", "DELETE"].includes((method || "GET").toUpperCase());

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  timeout: 10000,
  withCredentials: true,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (typeof window !== "undefined" && needsCsrf(config.method)) {
    const token = getCookie("csrftoken");
    if (token) {
      const headers =
        config.headers instanceof AxiosHeaders
          ? config.headers
          : new AxiosHeaders(config.headers);
      headers.set("X-CSRFToken", token);
      config.headers = headers;
    }
  }
  return config;
});

export default api;
