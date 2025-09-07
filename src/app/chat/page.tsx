"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TopBar from "@/ui/atoms/TopBar/TopBar";
import NavBar from "@/ui/atoms/NavBar/NavBar";
import AiProfileHeader from "@/ui/atoms/Chat/AiProfileHeader/AiProfileHeader";
import MessageBox from "@/ui/atoms/Chat/MessageBox/MessageBox";
import TopicSelector from "@/ui/atoms/Chat/TopicSelector/TopicSelector";
import { travelCareData, Topic } from "./_util";
import * as s from "./style.css";

import ThinkingBubble from "@/ui/atoms/Chat/ThinkingBubble/ThinkingBubble";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const initialTopics = Object.keys(travelCareData) as Topic[];

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTopic = searchParams.get("topic") as Topic | null;
  const currentSubTopic = searchParams.get("subTopic") as string | null;

  const [isAiThinking, setIsAiThinking] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [finalAnswer, setFinalAnswer] = useState("");

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

  const conversation = currentTopic ? travelCareData[currentTopic] : null;

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
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isAiThinking, typedResponse, typedFinalAnswer]);

  return (
    <div className={s.page}>
      <TopBar title={"AI 여행케어"} />

      <div className={s.container}>
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
