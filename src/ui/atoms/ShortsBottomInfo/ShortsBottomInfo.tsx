"use client";

import React from "react";
import Image from "next/image";
import { VideoData } from "@/utils/dummy_data";
import * as s from "./ShortsBottomInfo.css";

interface ShortsBottomInfoProps {
  video: VideoData;
}

export default function ShortsBottomInfo({ video }: ShortsBottomInfoProps) {
  return (
    <div className={s.bottomInfo}>
      <div className={s.userInfo}>
        <Image
          src={video.profileImageUrl}
          alt={"비디오 정보"}
          width={40}
          height={40}
          className={s.profileImage}
        />
        <div className={s.userName}>{video.userName}</div>
      </div>
      <div className={s.locInfo}>
        <div className={s.location}>
          <Image
            alt="location"
            width={12}
            height={12}
            src="/assets/icon12/map_filled.svg"
          />
          {video.loc}
        </div>
        <p className={s.description}>{video.description}</p>
        <div className={s.tags}>
          {video.tags.map((tag) => (
            <span key={tag} className={s.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
