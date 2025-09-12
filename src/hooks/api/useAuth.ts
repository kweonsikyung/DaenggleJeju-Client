import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { ApiError } from "@/api/common";
import { postDevLogin, postDevLogout } from "@/api/auth";
import { GetMeRes, PostDevLoginRes } from "@/types/auth";

/**
 * @hook useUser
 * @description 현재 로그인된 사용자 정보를 관리하는 SWR 훅.
 * GET /auth/me API를 호출하여 사용자 정보를 가져옴
 * 이 훅의 데이터는 앱의 전역 로그인 상태로 사용됨
 */
export function useUser() {
  // 전역 fetcher가 자동으로 getRequest('/auth/me')를 호출함
  const { data, error, isLoading, mutate } = useSWR<GetMeRes, ApiError>(
    "/auth/me"
  );

  return {
    user: data,
    isLoggedIn: !!data,
    isLoading,
    error,
    mutateUser: mutate, // 외부에서 사용자 캐시를 갱신할 때 사용
  };
}

/**
 * @hook useDevLogin
 * @description 개발용 로그인 SWR Mutation 훅
 */
export function useDevLogin() {
  const { mutateUser } = useUser();

  const { trigger, isMutating, error } = useSWRMutation<
    PostDevLoginRes,
    ApiError,
    string
  >(
    "/auth/dev-login", // Mutation Key
    () => postDevLogin(),
    {
      onSuccess: (data) => {
        mutateUser(data, false);
      },
    }
  );

  return {
    devLogin: trigger,
    isLoggingIn: isMutating,
    loginError: error,
  };
}

/**
 * @hook useDevLogout
 * @description 개발용 로그아웃 SWR Mutation 훅
 */
export function useDevLogout() {
  const { mutateUser } = useUser();

  const { trigger, isMutating, error } = useSWRMutation(
    "/auth/dev-logout", // Mutation Key
    () => postDevLogout(),
    {
      onSuccess: () => {
        mutateUser(undefined, false);
      },
    }
  );

  return {
    devLogout: trigger,
    isLoggingOut: isMutating,
    logoutError: error,
  };
}
