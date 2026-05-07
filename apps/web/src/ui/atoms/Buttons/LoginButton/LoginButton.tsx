import Image from "next/image";
import * as s from "./LoginButton.css";
import { LoginType } from "@/types/LoginType";

export interface LoginButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> {
  provider: LoginType;
  title: string;
}

export function LoginButton({ provider, title, className, ...rest }: LoginButtonProps) {
  return (
    <button
      type="button"
      className={[s.root, s.kind[provider], className].filter(Boolean).join(" ")}
      aria-label={title}
      {...rest}
    >
      <Image
        src={`/assets/login/${provider}.svg`}
        alt=""
        width={24}
        height={24}
        className={s.icon}
        priority
      />
      <span className={s.label}>{title}</span>
    </button>
  );
}
