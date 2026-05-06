"use client";

import React, { useEffect, useState } from "react";
import * as s from "./style.css";
import { ProgressCircle } from "@/ui/atoms/ProgressCircle/ProgressCircle";
import Image from "next/image";
import { Button } from "@/ui/atoms/Buttons/Button/Button";
import { ButtonSize, ButtonStatus } from "../../../constants/ButtonVariant";

const STEPS = ["반려동물 정보 분석 중", "여행 취향 분석 중", "위치 정보 확인 중(선택)"];

interface WelcomeOverlayProps {
  onFetchLocation: () => Promise<void>;
  latitude: number | null;
  longitude: number | null;
  isLoading: boolean;
  error: string | null;
}

export function WelcomeOverlay({
  onFetchLocation,
  latitude,
  longitude,
  isLoading,
  error,
}: WelcomeOverlayProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>(new Array(STEPS.length).fill(false));
  const [isVisible, setIsVisible] = useState(true);
  const [isReadyToAnimate, setIsReadyToAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReadyToAnimate(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReadyToAnimate) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < STEPS.length) {
          setCompleted((old) => {
            const updated = [...old];
            updated[prev] = true;
            return updated;
          });
          return prev + 1;
        }
        return prev;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isReadyToAnimate]);

  useEffect(() => {
    if (currentStep === STEPS.length) {
      onFetchLocation().catch(() => {});
    }
  }, [currentStep, onFetchLocation]);

  if (!isVisible) return null;

  const isButtonEnabled = currentStep === STEPS.length && !isLoading;
  const buttonText =
    isLoading && currentStep === STEPS.length ? "위치 찾는 중..." : "댕글제주 탐색하기";
  const buttonStatus = isButtonEnabled ? ButtonStatus.PRIMARY : ButtonStatus.DISABLED;

  return (
    <div className={s.overlay}>
      <div className={s.modalCard}>
        <Image src="/assets/footprint.png" alt="댕글제주" width={150} height={150} />
        <h2 className={s.title}>🎉 환영합니다</h2>
        <p className={s.subtitle}>댕댕이와 함께할 여행을 준비하고 있어요</p>

        <ul className={s.checkList}>
          {STEPS.map((text, i) => (
            <li
              key={i}
              className={`${s.listItem} ${
                (completed[i] || (i === currentStep && isLoading)) && isReadyToAnimate
                  ? s.active
                  : ""
              }`}
            >
              <div className={s.icon}>
                <ProgressCircle
                  size={18}
                  color="#00A63E"
                  progress={isReadyToAnimate ? (completed[i] ? 1 : i === currentStep ? 0.7 : 0) : 0}
                  active={isReadyToAnimate && i === currentStep}
                />
              </div>
              {text}
            </li>
          ))}
        </ul>

        <Button
          size={ButtonSize.MEDIUM}
          status={buttonStatus}
          text={buttonText}
          onClick={() => {
            if (latitude && longitude) {
              console.log("위치 저장됨:", latitude, longitude);
            } else {
              console.log("위치 정보 없이 시작");
            }
            setIsVisible(false);
          }}
        />

        {error && <p className={s.errorText}>📍 {error}</p>}
      </div>
    </div>
  );
}
