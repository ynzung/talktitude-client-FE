'use client';

import Item from '../../ui/Item';
import { ChatListItemPropsType } from '@/types/chat';

interface ChatListPropTypes {
  title: string;
  items: ChatListItemPropsType['inProgress' | 'finished'];
}

export default function ChatList({ title, items }: ChatListPropTypes) {
  return (
    <div className="w-full">
      <div className="py-[16px] px-[17px] text-lg font-bold text-textBlack bg-white">
        {title}
        {title == '상담중' && (
          <span className="ml-1 text-mainColor">{items.length}</span>
        )}
      </div>
      <div className="bg-white">
        {items.map((item, idx) => (
          <Item key={idx} data={item} />
        ))}
      </div>
    </div>
  );
}
