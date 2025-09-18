import { MessageSquarePlus } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-3">
      <MessageSquarePlus size={45} color="#aaaaaa" />
      <p className="text-textLightGray text-sm">
        궁금한 점을 메시지로 남겨주세요.
      </p>
    </div>
  );
}
