'use client';

import React, { useEffect, useState } from 'react';
import { PiChats } from 'react-icons/pi';
import Layout from '@/components/common/Layout';
import ChatList from './ChatList';
import { getChatList } from '@/api/chatApi';
import { ChatListItemPropsType } from '@/types/chat';

const ChatListPanel = () => {
  const [inProgressList, setInProgressList] = useState<
    ChatListItemPropsType['inProgress']
  >([]);
  const [finishedList, setFinishedList] = useState<
    ChatListItemPropsType['finished']
  >([]);

  useEffect(() => {
    const fetchChatList = async () => {
      const response = await getChatList();
      setInProgressList(response.data.inProgress);
      setFinishedList(response.data.finished);
    };
    fetchChatList();
  }, []);

  const empty = inProgressList.length === 0 && finishedList.length === 0;
  return (
    <div>
      {empty ? (
        <div className="h-screen flex flex-col items-center justify-center gap-3">
          <PiChats size={45} color="#949494" />
          <div className="text-center text-textLightGray text-sm font-medium">
            궁금한 점이 있으신가요? 지금 바로 상담을 시작해 보세요.
          </div>
        </div>
      ) : (
        <Layout padding="pt-14 pb-40">
          {inProgressList.length > 0 && (
            <div className="mt-5">
              <ChatList title="상담중" items={inProgressList} />
            </div>
          )}
          {finishedList.length > 0 && (
            <div className="mt-5">
              <ChatList title="상담종료" items={finishedList} />
            </div>
          )}
        </Layout>
      )}
    </div>
  );
};

export default ChatListPanel;
