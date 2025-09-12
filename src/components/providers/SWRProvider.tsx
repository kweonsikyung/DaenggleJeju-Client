"use client";

import { SWRConfig } from "swr";
import { getRequest, ApiError } from "@/api/common";

/**
 * GET 요청을 위한 전역 fetcher 함수
 */
export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => getRequest(url),
        onError: (err, key) => {
          if (err instanceof ApiError) {
            console.error(`SWR API Error for key '${key}':`, {
              message: err.message,
              status: err.status,
              code: err.code,
            });
          } else {
            console.error(`SWR Error for key '${key}':`, err);
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
