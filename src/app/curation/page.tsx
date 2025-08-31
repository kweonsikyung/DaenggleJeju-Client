"use client";

import React, { useState } from "react";
import TopBar from "@/ui/atoms/TopBar/TopBar";
import * as s from "./style.css";
import { Button } from "@/ui/atoms/Buttons/Button/Button";
import { ButtonSize, ButtonStatus } from "@/constants/ButtonVariant";
import Step1 from "./_step/step1";
import Step2 from "./_step/step2";
import Step3 from "./_step/step3";
import { currentStepTitle } from "./_util";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Curation() {
  const [step, setStep] = useState<number>(1);
  const [isStepValid, setIsStepValid] = useState<boolean>(false);
  const router = useRouter();

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return <Step1 setIsValid={setIsStepValid} />;
      case 2:
        return <Step2 setIsValid={setIsStepValid} />;
      case 3:
        return <Step3 setIsValid={setIsStepValid} />;
      default:
        return null;
    }
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
      setIsStepValid(false);
    } else {
      router.push("/map");
    }
  };

  return (
    <div className={s.page}>
      <TopBar
        backIconHandler={() => router.back()}
        rightIcons={[
          {
            icon: (
              <Image
                alt="검색"
                height={24}
                src="/assets/icon24/x_line.svg"
                width={24}
              />
            ),
            onClick: () => router.push("/map"),
          },
        ]}
      />
      <div className={s.container}>
        <h2 className={s.title}>{currentStepTitle[step]}</h2>
        <div className={s.content}>{renderStepComponent()}</div>
      </div>
      <div className={s.footer}>
        <Button
          size={ButtonSize.LARGE}
          status={isStepValid ? ButtonStatus.ACTIVE : ButtonStatus.DISABLED}
          text={step === 3 ? "완료" : "다음"}
          onClick={handleNextStep}
          disabled={!isStepValid}
        />
      </div>
    </div>
  );
}
