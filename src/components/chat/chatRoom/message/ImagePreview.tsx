import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface ImagePreviewProps {
  previewUrl: string;
  disabled?: boolean;
  onCancel: () => void;
}

export default function ImagePreview({
  previewUrl,
  disabled,
  onCancel,
}: ImagePreviewProps) {
  return (
    <div className="w-full max-w-[600px] fixed bottom-[77px] px-5 py-3.5 bg-black/20 backdrop-blur-sm pointer-events-none">
      <div className={`${disabled ? 'opacity-50' : ''}`}>
        <div className="relative inline-block pointer-events-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={previewUrl}
            alt="미리보기 이미지"
            className="max-h-28 rounded-md object-contain bg-transparent"
          />
          <button
            aria-label="이미지 선택 취소"
            onClick={onCancel}
            className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-[rgba(0,0,0,0.55)] flex items-center justify-center hover:bg-[rgba(0,0,0,0.7)]"
            disabled={disabled}
          >
            <IoMdClose size={16} color="#ffffff" />
          </button>
        </div>
      </div>
    </div>
  );
}
