"use client";

import React, { useEffect, useState } from "react";
import { Location } from "@/ui/atoms/Buttons/Location/Location";
import * as s from "../style.css";
import { LOCATION_OPTION } from "../_util";

interface Step2Props {
  setIsValid: (isValid: boolean) => void;
}

export default function Step2({ setIsValid }: Step2Props) {
  /** form state */
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  /** click handler */
  const handleSelect = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((i) => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  /** lifecycle */
  useEffect(() => {
    setIsValid(selectedItems.length > 0);
  }, [selectedItems, setIsValid]);

  return (
    <div className={s.step2_container}>
      <p className={s.caption}>*다중 선택 가능</p>
      <div className={s.step2_grid}>
        {LOCATION_OPTION.map((item) => (
          <Location
            key={item.id}
            title={item.title}
            desc={item.desc}
            selected={selectedItems.includes(item.id)}
            onClick={() => handleSelect(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
