'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/common/Header';
import ChatRoom from './ChatRoom';
import ChatInputBar from '@/components/chat/chatRoom/ChatInputBar';
import { ChatMessagePropsType, ChatHeaderInfoPropsType } from '@/types/chat';
import { getChatMessage, getChatHeaderInfo } from '@/api/chatApi';
import { useChatSocket } from '@/hooks/useChatSocket';

export default function ChatRoomPanel() {
  const { sessionId } = useParams();
  const sid = Number(sessionId);

  const [messages, setMessages] = useState<ChatMessagePropsType[]>([]);
  const [headerInfo, setHeaderInfo] = useState<ChatHeaderInfoPropsType>();

  // 1) 초기 메시지 목록 조회
  const fetchChatMessage = useCallback(async () => {
    if (!sid) return;
    try {
      const data = await getChatMessage(sid);
      setMessages(Array.isArray(data) ? data : (data?.data ?? []));
    } catch (e) {
      console.error(e);
    }
  }, [sid]);

  // 2) 헤더 정보 조회
  const fetchChatHeaderInfo = useCallback(async () => {
    if (!sid) return;
    try {
      const data = await getChatHeaderInfo(sid);
      setHeaderInfo(data?.data ?? data);
    } catch (e) {
      console.error(e);
    }
  }, [sid]);

  // 3) 소켓 수신
  const handleReceive = useCallback((msg: unknown) => {
    setMessages((prev) => [...prev, msg as ChatMessagePropsType]);
  }, []);

  const handleStatus = useCallback(
    (s: { sessionId: number; status: string }) => {
      if (sid == null) return;
      if (s.sessionId !== sid) return;
    },
    [sid],
  );

  // 4) 소켓 훅 (연결,전송)
  const { connected, sendMessage, finishedChat } = useChatSocket(
    handleReceive,
    handleStatus,
  );

  useEffect(() => {
    fetchChatMessage();
    fetchChatHeaderInfo();
  }, [fetchChatMessage, fetchChatHeaderInfo]);

  // 5) 소켓 송신: 소켓 publish만 (서버에서 응답받을 때만 UI 업데이트)
  const handleSendMessage = (text: string) => {
    if (!sid) return;

    sendMessage({
      originalText: text,
      senderType: 'CLIENT',
      sessionId: sid,
    });
  };

  const headerFinished = headerInfo?.status === 'FINISHED';

  const disabled = !connected || !sid || finishedChat || headerFinished;

  return (
    <div>
      <Header isChat>{headerInfo?.title}</Header>
      <ChatRoom messages={messages} />
      <div className="fixed bottom-0 w-full max-w-[600px] bg-white">
        <ChatInputBar onSendMessage={handleSendMessage} disabled={disabled} />
      </div>
    </div>
  );
}
