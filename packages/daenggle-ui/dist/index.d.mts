import * as React$1 from 'react';
import React__default, { ReactNode } from 'react';

interface AvatarPickerProps {
    /** 원형 아바타 지름(px). 기본 94 */
    size?: number;
    /** 미리보기 이미지 src (컨트롤드) */
    value?: string | null;
    /** 미리보기 초기값 (언컨트롤드) */
    defaultValue?: string | null;
    /** 파일 선택 시 호출: 원본 File, 미리보기 URL(Blob) 반환 */
    onChange?: (file: File, previewUrl: string) => void;
    /** input accept. 기본: image/* */
    accept?: string;
    /** 비활성화 */
    disabled?: boolean;
    /** 추가 className */
    className?: string;
    /** 기본 아바타 이미지 src (미리보기 없을 때 표시) */
    placeholderImageSrc?: string;
    /** 카메라 버튼 아이콘 src */
    cameraIconSrc?: string;
}
declare function AvatarPicker({ size, value, defaultValue, onChange, accept, disabled, className, placeholderImageSrc, cameraIconSrc, }: AvatarPickerProps): React__default.JSX.Element;

type BottomSheetProps = {
    /** 패널 오픈 여부 */
    open: boolean;
    /** 패널 열림/닫힘 상태 변경 핸들러 */
    onOpenChange: (open: boolean) => void;
    /** 패널 헤더 타이틀 */
    title?: string;
    /** 패널 내부에 렌더링할 콘텐츠 */
    children: ReactNode;
};
declare function BottomSheet({ open, onOpenChange, title, children }: BottomSheetProps): React$1.JSX.Element;

interface LocationProps extends Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
    /** 상단 굵은 타이틀 */
    title: string;
    /** 하단 보조 설명(선택) */
    desc?: string;
    /** 선택 상태 (다중 선택 가능 시 외부에서 관리) */
    selected?: boolean;
    /** 비활성화 */
    disabled?: boolean;
}
declare function Location({ title, desc, selected, disabled, className, onClick, ...rest }: LocationProps): React__default.JSX.Element;

/**
 * 버튼 사이즈
 * * LARGE: h-56
 * * MEDIUM: h-48
 */
declare enum ButtonSize {
    MEDIUM = "medium",
    LARGE = "large"
}
/**
 * 버튼 상태
 */
declare enum ButtonStatus {
    ACTIVE = "active",
    DISABLED = "disabled",
    DEFAULT = "default",
    SELECTED = "selected",
    PRIMARY = "primary"
}

interface ButtonProps extends Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
    /** button size */
    size: ButtonSize;
    /** visual status */
    status: ButtonStatus;
    /** main label */
    text: string;
}
declare function Button({ size, status, text, className, disabled, ...rest }: ButtonProps): React__default.JSX.Element;

declare enum LOGIN_TYPE {
    KAKAO = "kakao",
    NAVER = "naver",
    GOOGLE = "google"
}
type LoginType = `${LOGIN_TYPE}`;

interface LoginButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
    provider: LoginType;
    title: string;
    iconSrc: string;
}
declare function LoginButton({ provider, title, iconSrc, className, ...rest }: LoginButtonProps): React$1.JSX.Element;

interface AiProfileHeaderProps {
    /** 프로필 이미지 URL */
    imageUrl: string;
    /** 메인 타이틀 (예: "여행케어 AI") */
    title: string;
    /** 서브 타이틀 (예: "빠르게 찾는 반려견 건강 정보") */
    subtitle: string;
}
declare function AiProfileHeader({ imageUrl, title, subtitle }: AiProfileHeaderProps): React__default.JSX.Element;

interface ChatInputProps {
    onSend: (message: string) => void;
    disabled?: boolean;
}
declare function ChatInput({ onSend, disabled }: ChatInputProps): React__default.JSX.Element;

interface MessageBoxProps {
    children: React__default.ReactNode;
    /** 메시지 주체 ('ai' 또는 'user') */
    variant?: "ai" | "user";
}
declare function MessageBox({ children, variant }: MessageBoxProps): React__default.JSX.Element;

declare function ThinkingBubble(): React__default.JSX.Element;

interface TopicSelectorProps {
    /** 버튼으로 표시할 주제 목록 (문자열 배열) */
    topics: string[];
    /** 특정 주제 버튼을 클릭했을 때 호출될 함수 */
    onSelectTopic: (topic: string) => void;
}
declare function TopicSelector({ topics, onSelectTopic }: TopicSelectorProps): React__default.JSX.Element;

interface ChipProps {
    /** 텍스트 */
    label: string;
    /** 클릭 핸들러 */
    onClick?: () => void;
    className?: string;
}
declare function Chip({ label, onClick, className }: ChipProps): React__default.JSX.Element;

interface ChipKeywordProps {
    /** 칩에 표시될 텍스트 */
    text: string;
    /** 선택 상태 */
    selected?: boolean;
    /** 닫기 아이콘 클릭 이벤트 핸들러 */
    onClose?: () => void;
    /** 칩 전체 클릭 이벤트 핸들러 */
    onClick?: () => void;
}
declare function ChipKeyword({ text, selected, onClose, onClick }: ChipKeywordProps): React__default.JSX.Element;

interface ChipMapListProps {
    /** 칩 중앙 텍스트 */
    text: string;
    /** 텍스트에 대해 표시할 숫자 */
    cnt: number;
    /** 칩 클릭 핸들러 */
    onLocationListClick: () => void;
}
declare function ChipMapList({ text, cnt, onLocationListClick }: ChipMapListProps): React__default.JSX.Element;

interface DangleCardProps {
    /** 배경 이미지 URL */
    imageUrl: string;
    /** 좋아요(조회수) 수 */
    views?: number;
    /** 조회수 아이콘 src */
    viewIconSrc?: string;
    /** 카드 제목 */
    title: string;
    /** 해시태그 텍스트 */
    hashtag: string;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
}
declare function DangleCard({ imageUrl, views, viewIconSrc, title, hashtag, onClick, }: DangleCardProps): React__default.JSX.Element;

interface DangleItemProps {
    /** 아이템의 상태: 'before' 또는 'after' */
    state: "before" | "after";
    /** 아이템에 표시될 이미지 URL */
    imageUrl: string;
    /** 아이템 하단에 표시될 텍스트 */
    text: string;
    /** 클릭 이벤트 핸들러 */
    onClick: () => void;
}
declare function DangleItem({ state, imageUrl, text, onClick }: DangleItemProps): React__default.JSX.Element;

interface DanglePlaceIcons {
    /** 재생 수 아이콘 src */
    play?: string;
    /** 북마크 수 아이콘 src */
    bookmark?: string;
    /** 북마크 버튼 활성 상태 아이콘 src */
    bookmarkFilled?: string;
    /** 북마크 버튼 비활성 상태 아이콘 src */
    bookmarkLine?: string;
}
interface DanglePlaceProps {
    /** 썸네일 이미지 URL */
    thumbnailUrl: string | null;
    /** 이미지 로드 실패 시 대체 이미지 URL */
    fallbackImageUrl?: string;
    /** 위치 및 카테고리 정보 */
    locationCategory: string;
    /** 장소명 */
    name: string;
    /** 거리 */
    distance: string | null;
    /** 재생 수 */
    playCount?: number;
    /** 북마크 수 */
    bookmarkCount?: number;
    /** 태그 목록 */
    tags?: string[];
    /** 카드 확장 여부 */
    isExpanded?: boolean;
    /** 상세 정보 (확장 시) */
    details?: {
        time: string;
        price: string;
    };
    /** 상세 정보 기준 레이블 (기본값: "Per day") */
    detailsBaseLabel?: string;
    /** 상세 정보 가격 단위 (기본값: "") */
    detailsPriceUnit?: string;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 북마크 상태 */
    isBookmarked?: boolean;
    /** 북마크 클릭 이벤트 핸들러 */
    onBookmarkClick?: () => Promise<void> | void;
    /** 아이콘 src 모음 */
    icons?: DanglePlaceIcons;
}
declare function DanglePlace({ thumbnailUrl, fallbackImageUrl, locationCategory, name, distance, playCount, bookmarkCount, isExpanded, tags, details, detailsBaseLabel, detailsPriceUnit, onClick, isBookmarked, onBookmarkClick, icons, }: DanglePlaceProps): React__default.JSX.Element;

interface DanglePlayProps {
    /** 컴포넌트 타입 */
    type: "small" | "medium" | "short";
    /** 컴포넌트 너비 */
    width?: string | number;
    /** 배경 이미지 URL */
    imageUrl: string;
    /** 이미지 로드 실패 시 대체 이미지 URL */
    fallbackImageUrl?: string;
    /** 프로필 이미지 URL */
    profileImageUrl?: string;
    /** 사용자 이름 */
    name?: string;
    /** 위치 정보*/
    location?: string;
    /** 주소 정보*/
    address?: string;
    /** 제목 (medium 타입 전용) */
    title?: string;
    /** 조회수 (medium 타입 전용) */
    views?: number;
    /** 댓글 수 (medium 타입 전용) */
    comments?: number;
    /** 업로드 시간 (medium 타입 전용) */
    timeAgo?: string;
    /** 해시태그 (medium 타입 전용) */
    tags?: string[];
    /** 조회수 아이콘 src */
    viewIconSrc?: string;
    /** 댓글 아이콘 src */
    commentIconSrc?: string;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
}
declare function DanglePlay({ type, width, imageUrl, fallbackImageUrl, profileImageUrl, name, location, address, title, views, comments, timeAgo, tags, viewIconSrc, commentIconSrc, onClick, }: DanglePlayProps): React__default.JSX.Element;

interface DangleReviewProps {
    /** [isMine=false] 리뷰 작성자의 프로필 이미지 URL */
    profileImageUrl?: string;
    /** [isMine=false] 프로필 이미지 로드 실패 시 대체 이미지 URL */
    fallbackProfileImageUrl?: string;
    /** [isMine=false] 리뷰 작성자의 이름 */
    userName?: string;
    /** [isMine=false] 리뷰 작성자의 부가 정보 */
    userSubInfo?: string;
    /** [isMine=true] 장소 위치/카테고리 */
    locationCategory?: string;
    /** [isMine=true] 장소명 */
    placeName?: string;
    /** 내가 쓴 리뷰인지 여부 */
    isMine: boolean;
    /** 평점 (1-5 사이의 숫자) */
    rating: number;
    /** 평점 활성 아이콘 src (없으면 ★ 텍스트 사용) */
    filledRatingIconSrc?: string;
    /** 평점 비활성 아이콘 src (없으면 ☆ 텍스트 사용) */
    emptyRatingIconSrc?: string;
    /** 리뷰 작성 날짜 */
    date: string;
    /** 리뷰 칩 값 배열 */
    chips: string[];
    /** 칩 레이블 배열 (chips와 1:1 매핑) */
    chipLabels?: string[];
    /** 리뷰 본문 내용 */
    content: string;
    /** [isMine=true] 카드 클릭 이벤트 핸들러 */
    onClick?: () => void;
}
declare function DangleReview({ profileImageUrl, fallbackProfileImageUrl, userName, userSubInfo, locationCategory, placeName, isMine, rating, filledRatingIconSrc, emptyRatingIconSrc, date, chips, chipLabels, content, onClick, }: DangleReviewProps): React__default.JSX.Element;

interface DangleVideoProps {
    /** 썸네일 이미지 URL */
    thumbnailUrl: string;
    /** 제목 텍스트 */
    title: string;
    /** 조회수 */
    views?: number;
    /** 댓글 수 */
    comments?: number;
    /** 업로드 시간 */
    timeAgo?: string;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 해시태그 */
    tags?: string[];
    /** 조회수 아이콘 src */
    viewIconSrc?: string;
    /** 댓글 아이콘 src */
    commentIconSrc?: string;
    /** 재생 버튼 아이콘 src */
    playIconSrc?: string;
}
declare function DangleVideo({ thumbnailUrl, title, views, comments, timeAgo, tags, onClick, viewIconSrc, commentIconSrc, playIconSrc, }: DangleVideoProps): React__default.JSX.Element;

interface DropdownOption {
    value: string;
    label: string;
}
interface DropdownProps {
    /** 드롭다운에 표시될 옵션 목록 */
    options: DropdownOption[];
    /** 현재 선택된 옵션의 값 */
    selectedValue: string | null;
    /** 옵션 선택 시 호출되는 콜백 함수 */
    onSelect: (value: string) => void;
    /** 선택된 값이 없을 때 표시될 텍스트 */
    placeholder?: string;
}
/**
 * 클릭 시 옵션 목록을 보여주는 드롭다운 컴포넌트
 */
declare function Dropdown({ options, selectedValue, onSelect, placeholder, }: DropdownProps): React__default.JSX.Element;

interface EmptyStateProps {
    /** 상단에 표시할 일러스트/아이콘 */
    imageUrl?: string;
    /** 타이틀 */
    title?: string;
    /** 디스크립션 */
    description?: string;
}
declare function EmptyState({ imageUrl, title, description, }: EmptyStateProps): React__default.JSX.Element;

interface FabProps {
    /** FAB 이미지 src */
    imageSrc?: string;
    /** FAB 이미지 alt */
    imageAlt?: string;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    /** 외부에서 주입할 클래스 */
    className?: string;
}
declare function Fab({ imageSrc, imageAlt, onClick, className }: FabProps): React__default.JSX.Element;

interface FilterChipProps {
    /** 칩에 표시될 텍스트 */
    text: string;
    /** 아이콘 URL */
    iconUrl?: string;
    /** 선택 상태 */
    selected?: boolean;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
}
declare function FilterChip({ text, iconUrl, selected, onClick }: FilterChipProps): React__default.JSX.Element;

interface FilterChipExpandProps {
    /** 칩의 메인 타이틀 텍스트 */
    title: string;
    /** 칩의 보조 캡션 텍스트 (선택 사항) */
    caption?: string;
    /** 선택 상태 */
    selected?: boolean;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
}
declare function FilterChipExpand({ title, caption, selected, onClick, }: FilterChipExpandProps): React__default.JSX.Element;

interface HeaderProps {
    /** 제목 */
    title: string;
    /** 설명 */
    desc?: string;
    /** 화살표 클릭 핸들러 */
    onArrowClick?: () => void;
    /** 새로고침 클릭 핸들러 */
    onReClick?: () => void;
    /** 컴포넌트 상단 여백 */
    marginTop?: string | number;
}
declare function Header({ title, desc, onArrowClick, onReClick, marginTop }: HeaderProps): React__default.JSX.Element;

/**
 * @component LoadingSpinner
 * @description 화면 전체를 덮는 반투명 오버레이에 로딩 스피너
 */
declare const LoadingSpinner: () => React$1.JSX.Element;

interface ModalProps {
    /** 모달의 열림 상태 */
    isOpen: boolean;
    /** 모달 닫기 핸들러 */
    onClose: () => void;
    /** 모달 내부에 표시될 컨텐츠 */
    children: ReactNode;
    /** 모달 제목 (옵션) */
    title?: string;
}
declare function Modal({ isOpen, onClose, children, title }: ModalProps): React__default.JSX.Element | null;

interface NavBarItem {
    id: string;
    text: string;
    activeIconSrc: string;
    inactiveIconSrc: string;
    path: string;
}
interface NavBarProps {
    activeId: string;
    items: NavBarItem[];
    onNavigate: (path: string) => void;
}
declare function NavBar({ activeId, items, onNavigate }: NavBarProps): React__default.JSX.Element;

interface NoticeBoxProps {
    /** NoticeBox를 렌더링할지 여부 */
    shouldRender: boolean;
    /** 현재 애니메이션 상태 ('in', 'out', 'idle') */
    animation: "in" | "out" | "idle";
    /** 닫기 버튼을 눌렀을 때 실행될 함수 */
    onClose: () => void;
    /** 내부에 표시될 텍스트 또는 React 요소 */
    children: React__default.ReactNode;
    /** 색상 테마 ('yellow' 또는 'blue') */
    variant?: "yellow" | "blue";
}
declare const NoticeBox: ({ shouldRender, animation, onClose, children, variant, }: NoticeBoxProps) => React__default.JSX.Element | null;

interface PaginationProps {
    /** 현재 페이지 */
    currentPage: number;
    /** 전체 페이지 수 */
    totalPages: number;
    /** 페이지 변경 핸들러 */
    onPageChange: (page: number) => void;
}
declare function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps): React__default.JSX.Element | null;

interface ProfileCardProps {
    imageUrl: string;
    name: string;
    description: string;
    details: string;
    onEditClick?: () => void;
    className?: string;
}
/**
 * 사용자/반려동물 프로필 정보를 보여주는 카드 컴포넌트
 */
declare const ProfileCard: ({ imageUrl, name, description, details, onEditClick, className, }: ProfileCardProps) => React__default.JSX.Element;

interface ProgressCircleProps {
    size?: number;
    color?: string;
    progress?: number;
    active?: boolean;
    className?: string;
}
declare function ProgressCircle({ size, color, progress, active, className, }: ProgressCircleProps): React__default.JSX.Element;

interface RadioOption {
    value: string;
    label: string;
}
interface RadioGroupProps {
    /** 라디오 그룹의 질문(라벨) */
    label: string;
    /** 라디오 옵션 목록 */
    options: RadioOption[];
    /** 현재 선택된 값 */
    selectedValue: string | null;
    /** 옵션 선택 시 호출되는 콜백 함수 */
    onSelect: (value: string) => void;
    /** 비활성화 여부 */
    disabled?: boolean;
}
declare function RadioGroup({ label, options, selectedValue, onSelect, disabled, }: RadioGroupProps): React__default.JSX.Element;

interface SearchFieldProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    /** placeholder */
    placeholder?: string;
    /** 컨트롤드 값 */
    value?: string;
    /** 언컨트롤드 초기값 */
    defaultValue?: string;
    /** 입력창 초기화 핸들러 */
    onClear?: () => void;
    /** 에러 메시지 */
    error?: string;
    /** 로딩 상태 */
    loading?: boolean;
}
declare const SearchField: React__default.ForwardRefExoticComponent<SearchFieldProps & React__default.RefAttributes<HTMLInputElement>>;

interface SegmentedControlOption {
    id: string;
    label: string;
}
interface SegmentedControlProps {
    options: SegmentedControlOption[];
    activeOption: string;
    onSelect: (optionId: string) => void;
    className?: string;
}
/**
 * 여러 옵션 중 하나를 선택하는 UI 컨트롤
 */
declare const SegmentedControl: ({ options, activeOption, onSelect, className, }: SegmentedControlProps) => React__default.JSX.Element;

interface SelectFieldProps {
    /** 라벨 텍스트 */
    label?: string;
    /** placeholder */
    placeholder?: string;
    /** 선택된 값 */
    value?: string;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 클릭 이벤트 핸들러 */
    onClick?: () => void;
    className?: string;
    id?: string;
}
declare function SelectField({ label, placeholder, value, disabled, onClick, className, id, }: SelectFieldProps): React__default.JSX.Element;

interface VideoData {
    id: string;
    loc: string;
    videoId: string;
    thumbnailUrl: string;
    profileImageUrl: string;
    userName: string;
    description: string;
    tags: string[];
    bookmarks: number;
    comments: number;
    likes?: number;
}
interface ShortsBottomInfoProps {
    video: VideoData;
    /** 위치 아이콘 src */
    locationIconSrc?: string;
}
declare function ShortsBottomInfo({ video, locationIconSrc }: ShortsBottomInfoProps): React__default.JSX.Element;

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    className?: string;
    style?: React__default.CSSProperties;
}
/**
 * 기본 스켈레톤 UI (반짝이는 회색 박스)
 * @param width - CSS width 값 (기본값: 100%)
 * @param height - CSS height 값 (기본값: 1em)
 */
declare function Skeleton({ width, height, className, style }: SkeletonProps): React__default.JSX.Element;

interface Tab {
    id: string;
    label: string;
}
interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabClick: (tabId: string) => void;
    className?: string;
}
/**
 * 탭
 * 여러 컨텐츠 뷰 사이를 전환하는 데 사용
 */
declare const Tabs: ({ tabs, activeTab, onTabClick, className }: TabsProps) => React__default.JSX.Element;

interface TextFieldProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> {
    /** 라벨 텍스트 */
    label?: string;
    /** placeholder */
    placeholder?: string;
    /** 컨트롤드 값 */
    value?: string;
    /** 언컨트롤드 초기값 */
    defaultValue?: string;
    /** 유효성 검사 함수: 에러 메시지(string) 반환 시 에러, undefined/null이면 통과 */
    validator?: (value: string) => string | undefined | null;
    /** 외부에서 강제로 에러 표시하고 싶을 때 */
    errorText?: string;
    /** 보조설명(힌트/에러 밑문구 우선순위: errorText > helperText) */
    helperText?: string;
}
declare function TextField({ label, placeholder, value, defaultValue, onChange, onBlur, onFocus, disabled, validator, errorText, helperText, className, id, ...rest }: TextFieldProps): React__default.JSX.Element;

type TooltipPosition = "top" | "left" | "right" | "bottom";
interface TooltipProps {
    /** 툴팁 제목 */
    title: string;
    /** 툴팁 본문 */
    text?: string;
    /** 닫기 버튼 클릭 이벤트 핸들러 */
    onClose: () => void;
    /** 툴팁 표시 여부 */
    isVisible: boolean;
    /** 툴팁 위치 (기본값: 'top') */
    position?: TooltipPosition;
}
declare function Tooltip({ title, text, onClose, isVisible, position }: TooltipProps): React__default.JSX.Element | null;

type TopBarProps = {
    /** back 아이콘 핸들러: 주면 자동으로 아이콘 노출 + 핸들러 등록 */
    backIconHandler?: () => void;
    /** 뒤로가기 아이콘 src */
    backIconSrc?: string;
    /** 제목 텍스트 */
    title?: string;
    /** 상단 로고 노출 여부 */
    isShowLogo?: boolean;
    /** 로고 이미지 src (isShowLogo=true 일 때 사용) */
    logoSrc?: string;
    /** 로고 alt 텍스트 */
    logoAlt?: string;
    /** 우측 아이콘들(오른쪽 끝부터 보임) */
    rightIcons?: {
        icon: ReactNode;
        onClick?: () => void;
    }[];
    /** 상단 고정 여부 */
    sticky?: boolean;
    /** 배경 투명 여부 */
    transparent?: boolean;
    /** 아이콘 흰색 여부 */
    whiteIcon?: boolean;
    /** 추가 클래스 */
    className?: string;
};
/** TopBar
 * - backIconHandler 있으면 자동으로 back 아이콘 노출
 * - isShowLogo면 logo-top.svg 노출
 * - rightIcons는 오른쪽 끝부터 보이도록 row-reverse 배치
 */
declare function TopBar({ backIconHandler, backIconSrc, title, isShowLogo, logoSrc, logoAlt, rightIcons, sticky, transparent, whiteIcon, className, }: TopBarProps): React$1.JSX.Element;

interface CarouselProps {
    children: ReactNode;
    /** 아이템 사이의 간격 (단위: px) */
    gap?: number;
    /** 아이템의 높이 (단위: px) */
    itemHeight?: number;
    /** 아이템의 너비 (단위: px) */
    itemWidth?: number;
    /** 컴포넌트 좌우 여백 */
    paddingHoriz?: string | number;
    /** 캐러셀 반복 여부 (무한 스크롤) */
    loop?: boolean;
}
declare function Carousel({ children, gap, itemHeight, itemWidth, paddingHoriz, loop, }: CarouselProps): React__default.JSX.Element;

interface FilterSectionProps {
    /** 섹션 헤더 타이틀 */
    title: string;
    /** 칩 목록 데이터 */
    chips: {
        id: string;
        title: string;
        caption?: string;
    }[];
    /** 다중 선택 가능 여부 */
    multiSelect?: boolean;
    /** 선택된 칩 ID 목록 */
    selectedChips: string[];
    /** 칩 클릭 이벤트 핸들러 */
    onChipClick: (chipId: string) => void;
}
declare function FilterSection({ title, chips, multiSelect, selectedChips, onChipClick, }: FilterSectionProps): React__default.JSX.Element;

interface GridProps {
    /** 그리드 내부에 렌더링될 요소들 (gap 16 고정)*/
    children: ReactNode;
    /** 외부에서 주입할 클래스 */
    className?: string;
}
declare function Grid({ children, className }: GridProps): React__default.JSX.Element;

interface MapFloatingButtonsProps {
    /** GPS 버튼 클릭 이벤트 핸들러 */
    onGpsClick: () => void;
    /** GPS 아이콘 src */
    gpsIconSrc?: string;
    /** 장소 목록 칩 컴포넌트 props */
    chipMapListProps: ChipMapListProps;
    /** FAB 컴포넌트 props */
    fabProps: FabProps;
    /** 툴팁 props */
    tooltipProps: TooltipProps;
}
declare function MapFloatingButtons({ onGpsClick, gpsIconSrc, chipMapListProps, fabProps, tooltipProps, }: MapFloatingButtonsProps): React__default.JSX.Element;

interface SearchHeaderProps {
    /** back 아이콘 핸들러: 주면 자동으로 아이콘 노출 + 핸들러 등록 */
    backIconHandler?: () => void;
    /** back 아이콘 색상 */
    backIconColor?: "black" | "white";
    /** SearchField의 props */
    searchFieldProps?: React__default.ComponentProps<typeof SearchField>;
    /** 클릭 핸들러: 전달하면 SearchField가 버튼처럼 동작 */
    onClick?: () => void;
}
declare function SearchHeader({ backIconHandler, backIconColor, searchFieldProps, onClick, }: SearchHeaderProps): React__default.JSX.Element;

interface ShortsOverlayProps {
    children: React__default.ReactNode;
}
/**
 * 오버레이 레이아웃
 */
declare function ShortsOverlay({ children }: ShortsOverlayProps): React__default.JSX.Element;

interface WelcomeOverlayProps {
    onFetchLocation: () => Promise<void>;
    latitude: number | null;
    longitude: number | null;
    isLoading: boolean;
    error: string | null;
    /** 로고 이미지 경로 */
    logoImageSrc: string;
    /** 로고 이미지 alt 텍스트 */
    logoAlt?: string;
    /** 환영 타이틀 */
    title?: string;
    /** 서브타이틀 설명 */
    subtitle?: string;
    /** 로딩 단계 텍스트 목록 */
    steps: string[];
    /** 준비 완료 버튼 텍스트 */
    ctaText?: string;
    /** 위치 로딩 중 버튼 텍스트 */
    loadingText?: string;
}
declare function WelcomeOverlay({ onFetchLocation, latitude, longitude, isLoading, error, logoImageSrc, logoAlt, title, subtitle, steps, ctaText, loadingText, }: WelcomeOverlayProps): React__default.JSX.Element | null;

export { AiProfileHeader, AvatarPicker, BottomSheet, Button, Carousel, ChatInput, Chip, ChipKeyword, ChipMapList, DangleCard, DangleItem, DanglePlace, DanglePlay, DangleReview, DangleVideo, Dropdown, EmptyState, Fab, FilterChip, FilterChipExpand, FilterSection, Grid, Header, LoadingSpinner, Location, LoginButton, MapFloatingButtons, MessageBox, Modal, NavBar, type NavBarItem, NoticeBox, Pagination, ProfileCard, ProgressCircle, RadioGroup, SearchField, SearchHeader, SegmentedControl, SelectField, ShortsBottomInfo, ShortsOverlay, Skeleton, Tabs, TextField, ThinkingBubble, Tooltip, TopBar, TopicSelector, WelcomeOverlay };
