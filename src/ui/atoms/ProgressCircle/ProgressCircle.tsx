import React from "react";
import * as s from "./style.css";

interface ProgressCircleProps {
  size?: number;
  color?: string;
  progress?: number; // 0~1 (0%~100%)
  active?: boolean; // 현재 스텝이 활성 상태인지
}

export function ProgressCircle({
  size = 24,
  color = "#00A63E",
  progress = 0,
  active = false,
}: ProgressCircleProps) {
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  return (
    <svg
      className={s.circleBase}
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      {/* 회색 배경 링 */}
      <circle
        cx="12"
        cy="12"
        r={radius}
        stroke="#E0E0E0"
        strokeWidth="3"
        fill="none"
      />
      {/* 진행 링 */}
      <circle
        className={`${s.progressRing} ${active ? s.active : ""}`}
        cx="12"
        cy="12"
        r={radius}
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );
}
