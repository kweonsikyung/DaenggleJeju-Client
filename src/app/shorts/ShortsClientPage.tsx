"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import TopBar from "@/ui/atoms/TopBar/TopBar";
import { VideoData } from "@/utils/dummy_data";
import * as s from "./style.css";
import { useRouter } from "next/navigation";
import ShortsOverlay from "@/ui/molecules/ShortsOverlay/ShortsOverlay";
import ShortsBottomInfo from "@/ui/atoms/ShortsBottomInfo/ShortsBottomInfo";

/** type (related YOUTUBE) */
declare global {
  interface Window {
    YT?: { Player: new (el: string, opts: YT.PlayerOptions) => YT.Player };
  }
}
namespace YT {
  export interface Player {
    playVideo: () => void;
    pauseVideo: () => void;
    destroy: () => void;
    getIframe: () => HTMLIFrameElement;
  }
  export interface PlayerOptions {
    height: string;
    width: string;
    videoId: string;
    playerVars?: {
      autoplay?: 0 | 1;
      mute?: 0 | 1;
      controls?: 0 | 1;
      playsinline?: 0 | 1;
      loop?: 0 | 1;
    };
    events?: {
      onReady?: (event: { target: YT.Player }) => void;
      onStateChange?: (event: { data: number }) => void;
    };
  }
}

interface ShortsClientPageProps {
  videos: VideoData[];
}

/**
 * 영상 재생 페이지
 */
export default function ShortsClientPage({ videos }: ShortsClientPageProps) {
  /** router */
  const router = useRouter();

  /** state */
  const [isStarted, setIsStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const playerRef = useRef<YT.Player | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  const [videoStates, setVideoStates] = useState<{
    [videoId: string]: { liked: boolean; saved: boolean };
  }>({});

  /** variables */
  const currentVideo = videos[activeSlideIndex];
  const isCurrentVideoLiked = videoStates[currentVideo.videoId]?.liked ?? false;
  const isCurrentVideoSaved = videoStates[currentVideo.videoId]?.saved ?? false;
  const formatNumber = (num: number) => num.toLocaleString();

  /** short util handler */
  const handleStartPlaying = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsStarted(true);
  };

  const handleTogglePlay = () => {
    if (isStarted) {
      setIsPlaying((prev) => !prev);
    }
  };

  const handleToggleLike = (e: React.MouseEvent, videoId: string) => {
    e.stopPropagation();
    setVideoStates((prev) => ({
      ...prev,
      [videoId]: { ...prev[videoId], liked: !prev[videoId]?.liked },
    }));
  };

  const handleToggleSave = (e: React.MouseEvent, videoId: string) => {
    e.stopPropagation();
    setVideoStates((prev) => ({
      ...prev,
      [videoId]: { ...prev[videoId], saved: !prev[videoId]?.saved },
    }));
  };

  /** lifecycle */
  useEffect(() => {
    if (!window.YT) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (!isStarted || !window.YT?.Player) return;

    playerRef.current?.destroy();

    const currentVideo = videos[activeSlideIndex];
    if (!currentVideo) return;

    const player = new window.YT.Player(`player-${currentVideo.videoId}`, {
      height: "100%",
      width: "100%",
      videoId: currentVideo.videoId,
      playerVars: {
        autoplay: 1,
        mute: 0,
        controls: 0,
        playsinline: 1,
        loop: 0,
      },
      events: {
        onReady: (event) => {
          event.target.playVideo();
          setIsPlaying(true);
        },
        onStateChange: (event) => {
          if (event.data === 0) {
            // 영상 종료
            swiperRef.current?.slideNext();
          }
        },
      },
    });
    playerRef.current = player;

    return () => {
      player.destroy();
    };
  }, [isStarted, activeSlideIndex, videos]);

  useEffect(() => {
    if (!isStarted || !playerRef.current?.playVideo) return;

    if (isPlaying) {
      playerRef.current.playVideo();
    } else {
      playerRef.current.pauseVideo();
    }
  }, [isPlaying]);

  /** render */

  if (!videos || videos.length === 0) {
    return <div>영상을 불러올 수 없습니다.</div>;
  }
  // 시작 전 UI
  if (!isStarted) {
    const firstVideo = videos[0];
    const isFirstVideoLiked = videoStates[firstVideo.videoId]?.liked ?? false;
    const isFirstVideoSaved = videoStates[firstVideo.videoId]?.saved ?? false;

    return (
      <div className={s.container}>
        <div
          className={s.staticThumbnail}
          style={{ backgroundImage: `url(${firstVideo.thumbnailUrl})` }}
        />
        <ShortsOverlay>
          <div>
            <div className={s.header}>
              <div className={s.paginationContainer}>
                {Array.from({ length: videos.length }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`${s.paginationBar} ${
                      idx === 0 ? s.paginationBarActive : ""
                    }`}
                  />
                ))}
              </div>
            </div>
            <TopBar
              transparent
              whiteIcon
              backIconHandler={() => router.back()}
              rightIcons={[
                {
                  icon: (
                    <Image
                      alt="검색"
                      height={24}
                      src="/assets/icon24/search.svg"
                      width={24}
                    />
                  ),
                  onClick: () => router.push("/map"),
                },
              ]}
              className={s.top_bg}
            />
          </div>

          <div className={s.sideActions}>
            <button
              className={s.actionButton}
              onClick={(e) => handleToggleSave(e, firstVideo.videoId)}
            >
              <Image
                src={
                  isFirstVideoSaved
                    ? "/assets/video/save-active.svg"
                    : "/assets/video/save.svg"
                }
                alt="Save"
                width={40}
                height={40}
              />
              <span>
                {formatNumber(
                  firstVideo.bookmarks + (isFirstVideoSaved ? 1 : 0)
                )}
              </span>
            </button>
            <button
              className={s.actionButton}
              onClick={(e) => handleToggleLike(e, firstVideo.videoId)}
            >
              <Image
                src={
                  isFirstVideoLiked
                    ? "/assets/video/heart-active.svg"
                    : "/assets/video/heart.svg"
                }
                alt="Like"
                width={40}
                height={40}
              />
              <span>
                {formatNumber(
                  (firstVideo.likes ?? 0) + (isFirstVideoLiked ? 1 : 0)
                )}
              </span>
            </button>
          </div>
          <div className={s.bottom}>
            <ShortsBottomInfo video={firstVideo} />
          </div>
        </ShortsOverlay>
        <div className={s.playButtonContainer} onClick={handleStartPlaying}>
          <Image
            src={"/assets/icon56/play-btn.svg"}
            alt="Play Video"
            width={80}
            height={80}
            className={s.playIcon}
          />
        </div>
      </div>
    );
  }

  // 시작 후 UI
  return (
    <div className={s.container}>
      <Swiper
        direction="vertical"
        className={s.swiperContainer}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setActiveSlideIndex(swiper.activeIndex);
          setIsPlaying(true); // 슬라이드 변경 시 항상 재생
        }}
        allowTouchMove={true}
      >
        {videos.map((video, index) => (
          <SwiperSlide
            key={video.videoId}
            className={s.swiperSlide}
            onClick={handleTogglePlay}
          >
            <div
              id={`player-${video.videoId}`}
              className={s.playerBackground}
            />

            {/* 현재 슬라이드에만 UI 렌더링 */}
            {index === activeSlideIndex && (
              <>
                <ShortsOverlay>
                  <div>
                    <div className={s.header}>
                      <div className={s.paginationContainer}>
                        {Array.from({ length: videos.length }).map((_, idx) => (
                          <div
                            key={idx}
                            className={`${s.paginationBar} ${
                              idx === activeSlideIndex
                                ? s.paginationBarActive
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <TopBar
                      transparent
                      whiteIcon
                      backIconHandler={() => router.back()}
                      rightIcons={[
                        {
                          icon: (
                            <Image
                              alt="검색"
                              height={24}
                              src="/assets/icon24/search.svg"
                              width={24}
                            />
                          ),
                          onClick: () => router.push("/map"),
                        },
                      ]}
                      className={s.top_bg}
                    />
                  </div>

                  <div className={s.sideActions}>
                    <button
                      className={s.actionButton}
                      onClick={(e) => handleToggleSave(e, video.videoId)}
                    >
                      <Image
                        src={
                          isCurrentVideoSaved
                            ? "/assets/video/save-active.svg"
                            : "/assets/video/save.svg"
                        }
                        alt="Save"
                        width={28}
                        height={28}
                      />
                      <span>
                        {formatNumber(
                          video.bookmarks + (isCurrentVideoSaved ? 1 : 0)
                        )}
                      </span>
                    </button>
                    <button
                      className={s.actionButton}
                      onClick={(e) => handleToggleLike(e, video.videoId)}
                    >
                      <Image
                        src={
                          isCurrentVideoLiked
                            ? "/assets/video/heart-active.svg"
                            : "/assets/video/heart.svg"
                        }
                        alt="Like"
                        width={28}
                        height={28}
                      />
                      <span>
                        {formatNumber(
                          (video.likes ?? 0) + (isCurrentVideoLiked ? 1 : 0)
                        )}
                      </span>
                    </button>
                  </div>
                  <div className={s.bottom}>
                    <ShortsBottomInfo video={video} />
                  </div>
                </ShortsOverlay>

                {/* 일시정지 상태일 때만 재생 아이콘 표시 */}
                {!isPlaying && (
                  <div
                    className={s.playButtonContainer}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTogglePlay();
                    }}
                  >
                    <Image
                      src={"/assets/icon56/play-btn.svg"}
                      alt="Play Video"
                      width={80}
                      height={80}
                      className={s.playIcon}
                    />
                  </div>
                )}
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
