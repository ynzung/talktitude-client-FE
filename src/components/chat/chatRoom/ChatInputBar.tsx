import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { PLACEHOLDERS } from '@/lib/constants/placeholders';
import ChatInputBtn from './ChatInputBtn';
import { postChatMedia } from '@/api/chatApi';
import ImagePreview from './ImagePreview';

interface ChatInputBarProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInputBar({
  onSendMessage,
  disabled,
}: ChatInputBarProps) {
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { sessionId } = useParams();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageUpload = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    setSelectedFile(file);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };

  // 선택 해제 시 미리보기 URL revoke
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleCancelPreview = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setSelectedFile(null);
  };

  const handleConfirmSendImage = async () => {
    if (disabled || !selectedFile) return;
    try {
      await postChatMedia(Number(sessionId), selectedFile);
    } finally {
      handleCancelPreview();
    }
  };

  const handleSendMessage = () => {
    if (disabled) return;
    // 이미지가 선택되어 있으면 이미지 전송 우선
    if (selectedFile) {
      handleConfirmSendImage();
      setMessage('');
      return;
    }
    if (!message.trim()) return;
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
    <>
      {previewUrl && (
        <ImagePreview
          previewUrl={previewUrl}
          disabled={disabled}
          onCancel={handleCancelPreview}
        />
      )}
      <div className="flex flex-col w-full max-w-[600px] bg-white opacity-100 border-t border-lineGray px-5 py-3.5">
        <div className="flex items-center justify-center w-full">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            disabled={disabled}
          />
          <ChatInputBtn
            variant="upload"
            disabled={disabled}
            onClick={handleImageUpload}
          />
          <input
            placeholder={
              disabled
                ? PLACEHOLDERS.CHAT_INPUT_DISABLED
                : selectedFile
                  ? '이미지 전송'
                  : PLACEHOLDERS.CHAT_INPUT
            }
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className={`w-full h-12 px-5 py-3 text-textBlack text-base font-medium outline-none shadow-inputShadow rounded-[1.25rem] border-[1px] border-lineGray focus:border-[1px] focus:border-mainColor resize-none flex-1 ${
              disabled || selectedFile ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={disabled || !!selectedFile}
          />
          <ChatInputBtn
            variant="send"
            active={!!(message.trim() || selectedFile) && !disabled}
            disabled={(!message.trim() && !selectedFile) || disabled}
            onClick={handleSendMessage}
          />
        </div>
      </div>
    </>
  );
}
