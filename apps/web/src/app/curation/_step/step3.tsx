"use client";

import React, { useEffect } from "react";
import * as s from "../style.css";
import { Button } from "daenggle-ui";
import { STYLE_OPTIONS } from "../_util";
import { ButtonSize, ButtonStatus } from "@/constants/ButtonVariant";

interface Step3Props {
  setIsValid: (isValid: boolean) => void;
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

export default function Step3({ setIsValid, selectedItems, setSelectedItems }: Step3Props) {
  /** click handler */
  const handleSelect = (value: string) => {
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  /** lifecycle */
  useEffect(() => {
    setIsValid(selectedItems.length > 0);
  }, [selectedItems, setIsValid]);

  return (
    <div className={s.step3_container}>
      {STYLE_OPTIONS.map((label) => {
        const isSelected = selectedItems.includes(label);
        const status = isSelected ? ButtonStatus.SELECTED : ButtonStatus.DEFAULT;

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
