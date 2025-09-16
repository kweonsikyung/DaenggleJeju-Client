import { DaenggleVideoItem } from "@/types/daenggle";
import { VideoData } from "@/utils/dummy_data";

type ApiVideoFormat = {
  video_id?: string;
  videoId?: string;
  authorName?: string;
  channelTitle?: string;
  thumbUrl?: string;
  caption?: string;
  title?: string;
  tags?: string[];
  scrapCount?: number;
  loveCount?: number;
  placePill?: string;
};

/**
 * API 응답(DaenggleVideoItem 등)을 클라이언트(VideoData) 타입으로 변환하는 공통 함수
 */
export function formatApiVideoToLocal(video: ApiVideoFormat): VideoData {
  // API마다 다른 키 이름 보정
  const videoId = video.video_id || video.videoId;
  const author = video.authorName || video.channelTitle;
  const thumb = video.thumbUrl || null;
  const caption = video.caption || video.title;

  return {
    id: videoId as string,
    videoId: videoId as string,
    thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    profileImageUrl: "/assets/dangle/dog.png",
    userName: author || "알 수 없음",
    description: caption as string,
    tags: video.tags || [],
    bookmarks: video.scrapCount || 0,
    comments: 0,
    likes: video.loveCount || 0,
    loc: video.placePill || "제주",
  };
}
