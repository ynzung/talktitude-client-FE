import { useEffect, useState } from 'react';
import { postChatMedia } from '@/api/chatApi';

export default function useSendImage(sessionId: number, disabled?: boolean) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    setSelectedFile(file);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };

  const handleCancelPreview = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setSelectedFile(null);
  };

  const handleConfirmSendImage = async () => {
    if (disabled || !selectedFile) return;
    try {
      await postChatMedia(sessionId, selectedFile);
    } finally {
      handleCancelPreview();
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return {
    selectedFile,
    previewUrl,
    handleFileChange,
    handleCancelPreview,
    handleConfirmSendImage,
  };
}
