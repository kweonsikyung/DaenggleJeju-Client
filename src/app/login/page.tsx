"use client";

import Image from "next/image";
import * as s from "./style.css";
import { LoginButton } from "@/ui/atoms/Buttons/LoginButton/LoginButton";
import { LOGIN_TYPE } from "@/types/LoginType";
import { useRouter } from "next/navigation";

const LOGIN_CONFIG = [
  { type: LOGIN_TYPE.KAKAO, title: "Kakao로 시작하기" },
  { type: LOGIN_TYPE.NAVER, title: "Naver로 시작하기" },
  { type: LOGIN_TYPE.GOOGLE, title: "Google로 시작하기" },
];

/** 로그인 페이지 */
export default function Login() {
  /** router */
  const router = useRouter();
  return (
    <div className={s.page}>
      <Image
        src="/assets/logo/logo-colored.png"
        alt="댕글제주"
        width={270}
        height={94}
        priority
      />

      <div className={s.btns}>
        {LOGIN_CONFIG.map(({ type, title }) => (
          <LoginButton
            key={type}
            provider={type}
            title={title}
            onClick={() => {}}
          />
        ))}
        <div className={s.span} onClick={() => router.push("/curation")}>
          로그인 없이 둘러보기
        </div>
      </div>
    </div>
  );
}
