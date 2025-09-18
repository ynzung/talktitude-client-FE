import { IoMdArrowRoundUp } from 'react-icons/io';
import { LuImagePlus } from 'react-icons/lu';

type Variant = 'upload' | 'send';

interface ChatInputBtnProps {
  variant: Variant;
  disabled?: boolean;
  active?: boolean; // send 버튼 활성화 스타일 제어
  onClick?: () => void;
  size?: number; // 아이콘 사이즈
}

export default function ChatInputBtn({
  variant,
  disabled,
  active,
  onClick,
  size = 30,
}: ChatInputBtnProps) {
  const base =
    'flex h-10 w-10 items-center justify-center rounded-full transition-colors';
  const className =
    variant === 'upload'
      ? `bg-[#EEEEEE] ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#E0E0E0]'}`
      : active && !disabled
        ? 'bg-mainColor hover:bg-[#4A66C9]'
        : 'bg-lineGray cursor-not-allowed';

  return (
    <button
      className={`${base} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {variant === 'upload' ? (
        <LuImagePlus size={size} color="#3b3b3b" />
      ) : (
        <IoMdArrowRoundUp size={size} color="white" />
      )}
    </button>
  );
}
