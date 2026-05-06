"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as s from "./NavBar.css";
import { NAV_ITEMS, type NavItemId } from "@/constants/navData";

export interface NavBarProps {
  /** 현재 활성화된 페이지를 나타내는 식별자 */
  activePage: NavItemId;
}

export function NavBar({ activePage }: NavBarProps) {
  const router = useRouter();

  return (
    <nav className={s.root}>
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className={s.navItem}
          onClick={() => router.push(item.path)}
        >
          <Image
            src={activePage === item.id ? item.iconFill : item.iconLine}
            alt={item.text}
            width={24}
            height={24}
          />
          <span
            className={activePage === item.id ? s.navTextSelected : s.navText}
          >
            {item.text}
          </span>
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
