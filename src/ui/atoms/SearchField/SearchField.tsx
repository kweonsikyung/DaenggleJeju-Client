"use client";

import React, { useId, useMemo, useState } from "react";
import Image from "next/image";
import * as s from "./SearchField.css";

export interface SearchFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** placeholder */
  placeholder?: string;
  /** 컨트롤드 값 */
  value?: string;
  /** 언컨트롤드 초기값 */
  defaultValue?: string;
  /** 입력창 초기화 핸들러 */
  onClear?: () => void;
}

export function SearchField({
  placeholder = "placeholder",
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  disabled,
  onClear,
  className,
  id,
  ...rest
}: SearchFieldProps) {
  const inputId = id ?? useId();

  const isControlled = value != null;
  const [inner, setInner] = useState(defaultValue ?? "");
  const currentValue = isControlled ? String(value) : inner;

  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // 상태 파생
  const filled = currentValue.trim().length > 0;
  const isDisabled = Boolean(disabled);

  const stateClass = useMemo(() => {
    const stateKey = isDisabled
      ? "disabled"
      : isTyping
      ? "typing"
      : focused
      ? "focused"
      : pressed
      ? "pressed"
      : filled
      ? "filled"
      : "default";
    return s.state[stateKey];
  }, [focused, pressed, filled, isDisabled, isTyping]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInner(e.target.value);
    }
    onChange?.(e);
    setIsTyping(e.target.value.length > 0);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleClear = () => {
    if (!isControlled) setInner("");
    onClear?.();
  };

  return (
    <div className={[s.wrapper, className].filter(Boolean).join(" ")}>
      <div
        className={[s.field, stateClass].join(" ")}
        aria-disabled={isDisabled || undefined}
      >
        <Image
          src="/assets/icon16/search_line.svg"
          alt="검색"
          width={16}
          height={16}
          className={s.icon}
        />
        <input
          id={inputId}
          className={s.input}
          type="text"
          placeholder={placeholder}
          value={currentValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onKeyDown={() => setPressed(true)}
          onKeyUp={() => setPressed(false)}
          disabled={isDisabled}
          {...rest}
        />
        {filled && (
          <button className={s.clearButton} onClick={handleClear}>
            <Image
              src="/assets/icon16/x-circle.svg"
              alt="지우기"
              width={16}
              height={16}
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchField;
