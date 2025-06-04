import { PLACEHOLDERS } from '@/lib/constants/placeholders';
import React, { useRef, useState } from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { LuImagePlus } from 'react-icons/lu';

interface ChatInputBarProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInputBar({
  onSendMessage,
  disabled = false,
}: ChatInputBarProps) {
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const file = e.target.files?.[0];
    if (!file) return;

    console.log('선택된 이미지:', file);

    e.target.value = '';
  };

  const handleSendMessage = () => {
    if (disabled || !message.trim()) return;

    onSendMessage(message);
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
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
        disabled={disabled}
      />
      <button
        className={`bg-[#EEEEEE] flex items-center justify-center rounded-full w-10 h-10 mr-3 ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleImageUpload}
        disabled={disabled}
      >
        <LuImagePlus size={30} color="#3b3b3b" />
      </button>
      <input
        placeholder={
          disabled ? PLACEHOLDERS.CHAT_INPUT_DISABLED : PLACEHOLDERS.CHAT_INPUT
        }
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        className={`w-full h-12 px-5 py-3 text-textBlack text-base font-medium outline-none shadow-inputShadow rounded-[1.25rem] border-[1px] border-lineGrey focus:border-[1px] focus:border-mainColor resize-none flex-1 ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={disabled}
      />
      <button
        className={`ml-3 flex h-10 w-10 items-center justify-center rounded-full ${
          message.trim() && !disabled
            ? 'bg-mainColor'
            : 'bg-lineGrey cursor-not-allowed'
        }`}
        onClick={handleSendMessage}
        disabled={!message.trim() || disabled}
      >
        <IoMdArrowRoundUp size={30} color="white" />
      </button>
    </div>
  );
}
