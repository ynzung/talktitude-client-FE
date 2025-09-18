import { useEffect, useState } from 'react';
import { postChatMedia } from '@/api/chatApi';
import heic2any from 'heic2any';

export default function useSendImage(sessionId: number, disabled?: boolean) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';

    // 이전 미리보기 URL 정리
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const isHeic =
      file.type === 'image/heic' ||
      file.type === 'image/heif' ||
      /\.(heic|heif)$/i.test(file.name);

    if (isHeic) {
      try {
        const converted = (await heic2any({
          blob: file,
          toType: 'image/jpeg',
          quality: 0.9,
        })) as Blob | Blob[];
        const convertedBlob = Array.isArray(converted)
          ? converted[0]
          : converted;
        const convertedFileName = file.name.replace(/\.(heic|heif)$/i, '.jpg');
        const convertedFile = new File([convertedBlob], convertedFileName, {
          type: 'image/jpeg',
        });
        setSelectedFile(convertedFile);
        const objectUrl = URL.createObjectURL(convertedBlob);
        setPreviewUrl(objectUrl);
        return;
      } catch (error) {
        // 변환 실패 시 원본 파일을 그대로 시도 (서버가 처리할 수 있는 경우 대비)
        if (process.env.NODE_ENV !== 'production') {
          console.error('HEIC 변환 실패, 원본으로 진행합니다:', error);
        }
      }
    }

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
