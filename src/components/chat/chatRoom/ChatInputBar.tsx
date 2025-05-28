import { PLACEHOLDERS } from '@/lib/constants/placeholders';
import React, { useRef, useState } from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { LuImagePlus } from 'react-icons/lu';

interface ChatInputBarProps {
  onSendMessage: (message: string) => void;
}

export default function ChatInputBar({ onSendMessage }: ChatInputBarProps) {
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log('선택된 이미지:', file);

    e.target.value = '';
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    onSendMessage(message);
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-center justify-center w-full max-w-[600px] bg-white border border-b-0 border-lineGrey px-5 py-3.5">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <button
        className="bg-[#EEEEEE] flex items-center justify-center rounded-full w-10 h-10 mr-3"
        onClick={handleImageUpload}
      >
        <LuImagePlus size={30} color="#3b3b3b" />
      </button>
      <input
        placeholder={PLACEHOLDERS.CHAT_INPUT}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full h-12 px-5 py-3 text-textBlack text-base font-medium outline-none shadow-inputShadow rounded-[1.25rem] border-[1px] border-lineGrey focus:border-[1px] focus:border-mainColor resize-none flex-1"
      />
      <button
        className={`ml-3 flex h-10 w-10 items-center justify-center rounded-full ${
          message.trim() ? 'bg-mainColor' : 'bg-lineGrey cursor-not-allowed'
        }`}
        onClick={handleSendMessage}
        disabled={!message.trim()}
      >
        <IoMdArrowRoundUp size={30} color="white" />
      </button>
    </div>
  );
}
