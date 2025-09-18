"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as s from "./style.css";

// components
import TopBar from "@/ui/atoms/TopBar/TopBar";
import { RadioGroup } from "@/ui/atoms/RadioGroup/RadioGroup";
import { TextField } from "@/ui/atoms/TextField/TextField";
import FilterSection from "@/ui/molecules/FilterSection/FilterSection";
import { Button } from "@/ui/atoms/Buttons/Button/Button";
import { ButtonStatus, ButtonSize } from "@/constants/ButtonVariant";

// utils & data
import { entryOptions, conditionChips, welcomeOptions } from "./_util";

interface PawRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

const PawRating = ({ rating, setRating }: PawRatingProps) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const handleFilterSelect = (group: string, id: string) => {};

  return (
    <div className={s.pawRatingContainer}>
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          className={s.pawButton}
          onClick={() => setRating(index)}
          onMouseEnter={() => setHoverRating(index)}
          onMouseLeave={() => setHoverRating(0)}
        >
          <Image
            src={
              (hoverRating || rating) >= index
                ? "/assets/icon24/dogfootprint-blue.svg"
                : "/assets/icon24/dogfootprint-white.svg"
            }
            alt={`paw ${index}`}
            width={32}
            height={32}
          />
        </button>
      ))}
    </div>
  );
};

export default function LeaveFootprintPage() {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [entryStatus, setEntryStatus] = useState<string | null>("yes");
  const [welcomeStatus, setWelcomeStatus] = useState<string | null>(null);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const handleChipClick = (id: string) => {
    setSelectedConditions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isFormValid = welcomeStatus && rating > 0;

  return (
    <div className={s.page}>
      <TopBar title="발자국 남기기" backIconHandler={() => router.back()} />
      <div className={s.container}>
        {/* Header Section */}
        <div className={s.headerContainer}>
          <div>
            <h2 className={s.headerTitle}>강아지랑 함께하기 어땠나요?</h2>
            <p className={s.headerDescription}>
              남겨주신 경험은 다른 견주들에게 큰 도움이 돼요!
            </p>
          </div>
          <div>
            <span className={s.placeLocation}>제주시 애월읍 ・ 루트문</span>
            <h3 className={s.placeName}>한화리조트 제주</h3>
          </div>
          <PawRating rating={rating} setRating={setRating} />
        </div>

        <form className={s.form}>
          <div className={s.formSection}>
            <RadioGroup
              label="출입 가능 여부"
              options={entryOptions}
              selectedValue={entryStatus}
              onSelect={setEntryStatus}
            />
            {entryStatus === "conditional" && (
              <div className={s.textFieldWrapper}>
                <TextField
                  placeholder="어디까지 함께 들어갈 수 있었나요?"
                  helperText="최소 5자, 최대 20자"
                />
              </div>
            )}
          </div>

          <div className={s.formSection}>
            <FilterSection
              title="출입 조건"
              chips={conditionChips}
              selectedChips={}
              onChipClick={}
              multiSelect
            />
          </div>

          <div className={s.formSection}>
            <RadioGroup
              label="환영 지수"
              options={welcomeOptions}
              selectedValue={welcomeStatus}
              onSelect={setWelcomeStatus}
            />
          </div>

          <div className={s.formSection}>
            <TextField
              placeholder="강아지와 함께한 순간이 궁금해요!"
              helperText="최소 5자, 최대 500자"
            />
          </div>
        </form>
      </div>
      <div className={s.footer}>
        <Button
          text="작성 완료"
          status={isFormValid ? ButtonStatus.ACTIVE : ButtonStatus.DISABLED}
          size={ButtonSize.LARGE}
          onClick={() => {
            /* 제출 로직 */
          }}
          disabled={!isFormValid}
        />
      </div>
    </div>
  );
}
