"use client";

import React, { useEffect, useState } from "react";
import * as s from "../style.css";
import { TextField } from "@/ui/atoms/TextField/TextField";
import { SelectField } from "@/ui/atoms/SelectField/SelectField";
import { BottomSheet } from "@/ui/atoms/BottomSheet/BottomSheet";
import { BREED_OPTIONS, WEIGHT_OPTIONS } from "../_util";
import { AvatarPicker } from "@/ui/atoms/AvatarPicker/AvatarPicker";

interface Step1Props {
  setIsValid: (isValid: boolean) => void;
  formData: { name: string; breed: string; weight: string };
  setFormData: (
    updater: (prev: { name: string; breed: string; weight: string }) => {
      name: string;
      breed: string;
      weight: string;
    }
  ) => void;
  setAvatarFile: (file: File | null) => void;
}

export default function Step1({ setIsValid, formData, setFormData, setAvatarFile }: Step1Props) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [activeSheet, setActiveSheet] = useState<"breed" | "weight" | null>(null);

  /** dynamic variable */
  const { title: sheetTitle, options: sheetOptions } =
    activeSheet === "breed"
      ? { title: "견종 선택", options: BREED_OPTIONS.map((b) => b.label) }
      : activeSheet === "weight"
        ? { title: "몸무게 선택", options: WEIGHT_OPTIONS.map((w) => w.label) }
        : { title: "", options: [] };

  /** click handler */
  const handleSelect = (field: "breed" | "weight", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setActiveSheet(null);
  };

  /** lifecycle */
  useEffect(() => {
    setIsValid(!!formData.name && !!formData.breed && !!formData.weight);
  }, [formData, setIsValid]);

  /* 객체 URL 정리 */
  useEffect(() => {
    return () => {
      if (avatarUrl?.startsWith("blob:")) URL.revokeObjectURL(avatarUrl);
    };
  }, [avatarUrl]);

  return (
    <div className={s.step1_container}>
      <AvatarPicker
        value={avatarUrl ?? undefined}
        accept="image/*"
        onChange={(file, url) => {
          if (avatarUrl?.startsWith("blob:")) URL.revokeObjectURL(avatarUrl);
          setAvatarUrl(url);
          setAvatarFile(file);
        }}
      />

      <div className={s.step1_grid}>
        <TextField
          label="이름"
          placeholder="반려견 이름 최대 6자"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
        />
        <SelectField
          label="견종"
          placeholder="견종 선택"
          value={formData.breed}
          onClick={() => setActiveSheet("breed")}
        />
        <SelectField
          label="몸무게"
          placeholder="몸무게 선택"
          value={formData.weight}
          onClick={() => setActiveSheet("weight")}
        />
      </div>

      <BottomSheet
        open={activeSheet !== null}
        onOpenChange={(isOpen) => !isOpen && setActiveSheet(null)}
        title={sheetTitle}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {sheetOptions.map((option) => (
            <li key={option}>
              <button
                type="button"
                onClick={() => handleSelect(activeSheet!, option)}
                className={s.step1_li}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </BottomSheet>
    </div>
  );
}
