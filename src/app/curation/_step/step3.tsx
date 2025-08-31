"use client";

import React, { useEffect, useState } from "react";
import * as s from "../style.css";
import { Button } from "@/ui/atoms/Buttons/Button/Button";
import { STYLE_OPTIONS } from "../_util";
import { ButtonSize, ButtonStatus } from "@/constants/ButtonVariant";
interface Step3Props {
  setIsValid: (isValid: boolean) => void;
}

export default function Step3({ setIsValid }: Step3Props) {
  /** form state */
  const [selected, setSelected] = useState<string | null>(null);
  /** click handler */
  const handleSelect = (value: string) => {
    setSelected((prev) => (prev === value ? null : value));
  };
  /** lifecycle */
  useEffect(() => {
    setIsValid(!!selected);
  }, [selected, setIsValid]);

  return (
    <div className={s.step3_container}>
      {STYLE_OPTIONS.map((label) => {
        const isSelected = selected === label;
        const status = isSelected
          ? ButtonStatus.SELECTED
          : ButtonStatus.DEFAULT;

        return (
          <Button
            key={label}
            size={ButtonSize.LARGE}
            status={status}
            text={label}
            aria-pressed={isSelected}
            onClick={() => handleSelect(label)}
          />
        );
      })}
    </div>
  );
}
