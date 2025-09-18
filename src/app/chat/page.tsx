"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as s from "./style.css";

//components
import TopBar from "@/ui/atoms/TopBar/TopBar";
import NavBar from "@/ui/atoms/NavBar/NavBar";
import AiProfileHeader from "@/ui/atoms/Chat/AiProfileHeader/AiProfileHeader";
import MessageBox from "@/ui/atoms/Chat/MessageBox/MessageBox";
import TopicSelector from "@/ui/atoms/Chat/TopicSelector/TopicSelector";
import NoticeBox from "@/ui/atoms/NoticeBox/NoticeBox";
import ThinkingBubble from "@/ui/atoms/Chat/ThinkingBubble/ThinkingBubble";

//hooks
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useNotice } from "@/hooks/useNotice";

//utils
import { travelCareData, Topic } from "./_util";

/** type */
const initialTopics = Object.keys(travelCareData) as Topic[];

/**
 * AI 여행케어 페이지
 * * style/ page = topbar + container + nav(ai)
 */
export default function Page() {
  /** router */
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTopic = searchParams.get("topic") as Topic | null;
  const currentSubTopic = searchParams.get("subTopic") as string | null;

  /** hooks */
  const {
    shouldRender: shouldNoticeRender,
    animation: noticeAnimation,
    hideNotice,
  } = useNotice(true);

  /** chat state */
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [finalAnswer, setFinalAnswer] = useState("");

  /** chat patch */
  const patchText = (text: string) => {
    if (text.length > 1) {
      return text.substring(0, 1) + text.substring(1, 2) + text.substring(1);
    }
    return text;
  };

  const patchedAiResponse = patchText(aiResponse);
  const patchedFinalAnswer = patchText(finalAnswer);

  const typedResponse = useTypingEffect(patchedAiResponse, 30);
  const typedFinalAnswer = useTypingEffect(patchedFinalAnswer, 30);

  const userTopicRef = useRef<HTMLDivElement>(null);
  const userSubTopicRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const conversation = currentTopic ? travelCareData[currentTopic] : null;

  /** route handler */
  const handleSelectTopic = (topic: string) => {
    router.push(`?topic=${encodeURIComponent(topic)}`);
  };

  const handleSelectSubTopic = (subTopic: string) => {
    if (currentTopic) {
      router.push(
        `?topic=${encodeURIComponent(
          currentTopic
        )}&subTopic=${encodeURIComponent(subTopic)}`
      );
    }
  };

  /** lifecycle */
  useEffect(() => {
    if (currentTopic) {
      const isSubTopicSelected = searchParams.has("subTopic");
      if (!isSubTopicSelected) {
        userTopicRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setAiResponse("");
        setFinalAnswer("");
        setIsAiThinking(true);

        const timer = setTimeout(() => {
          setIsAiThinking(false);
          if (conversation) {
            setAiResponse(conversation.aiResponse);
          }
        }, 2000);

        return () => clearTimeout(timer);
      }
    }
  }, [currentTopic]);

  useEffect(() => {
    if (currentSubTopic && conversation) {
      userSubTopicRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setFinalAnswer("");
      setIsAiThinking(true);

      const timer = setTimeout(() => {
        setIsAiThinking(false);
        setFinalAnswer(
          conversation.answers[
            currentSubTopic as keyof typeof conversation.answers
          ]
        );
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentSubTopic]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "auto" });
  }, [isAiThinking, typedResponse, typedFinalAnswer]);

  return (
    <div className={s.page}>
      <TopBar title={"AI 여행케어"} className={s.topBarWithBorder} />

      <div className={s.container}>
        <div className={s.notice_container}>
          <NoticeBox
            shouldRender={shouldNoticeRender}
            animation={noticeAnimation}
            onClose={hideNotice}
            variant="blue"
          >
            본 챗봇은 자동화된 정보 제공 시스템으로, 간혹 부정확하거나 불완전한
            내용이 포함될 수 있습니다. 제공되는 정보에 대해 본 서비스를 통해
            책임을 지지 않으며, 최종 판단은 사용자가 직접 확인 후 진행해 주시기
            바랍니다.
          </NoticeBox>
        </div>

        <AiProfileHeader
          imageUrl="/assets/curation/avatar.svg"
          title="여행케어 AI"
          subtitle="빠르게 찾는 반려견 건강 정보"
        />
        <MessageBox variant="ai">
          무엇이 궁금하신가요? 제주여행 중 반려견 건강 걱정은 AI 여행케어가 함께
          덜어드릴게요. 먼저 아래에서 항목을 선택해 주세요.
        </MessageBox>

        <TopicSelector
          topics={initialTopics}
          onSelectTopic={handleSelectTopic}
        />

        {currentTopic && conversation && (
          <>
            <div ref={userTopicRef}>
              <MessageBox variant="user">{currentTopic}</MessageBox>
            </div>

            {typedResponse && (
              <>
                <AiProfileHeader
                  imageUrl="/assets/curation/avatar.svg"
                  title="여행케어 AI"
                  subtitle="빠르게 찾는 반려견 건강 정보"
                />
                <MessageBox variant="ai">{typedResponse}</MessageBox>
              </>
            )}

            {aiResponse && !isAiThinking && conversation.options.length > 0 && (
              <TopicSelector
                topics={[...conversation.options]}
                onSelectTopic={handleSelectSubTopic}
              />
            )}

            {currentSubTopic && (
              <>
                <div ref={userSubTopicRef}>
                  <MessageBox variant="user">{currentSubTopic}</MessageBox>
                </div>
                {typedFinalAnswer && (
                  <>
                    <AiProfileHeader
                      imageUrl="/assets/curation/avatar.svg"
                      title="여행케어 AI"
                      subtitle="빠르게 찾는 반려견 건강 정보"
                    />
                    <MessageBox variant="ai">{typedFinalAnswer}</MessageBox>
                  </>
                )}
              </>
            )}
          </>
        )}

        {isAiThinking && (
          <>
            <AiProfileHeader
              imageUrl="/assets/curation/avatar.svg"
              title="여행케어 AI"
              subtitle="빠르게 찾는 반려견 건강 정보"
            />
            <ThinkingBubble />
          </>
        )}
        <div ref={chatEndRef} />
      </div>

      <NavBar activePage="ai" />
    </div>
  );
}
