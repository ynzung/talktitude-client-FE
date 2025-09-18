import Image from 'next/image';

export function ClientMedias({ medias }: { medias: { url: string }[] }) {
  return (
    <div className="flex flex-col gap-2">
      {medias.map((m, i) => (
        <div key={i}>
          <Image
            src={m.url}
            alt="채팅 메시지 이미지"
            width={200}
            height={200}
            className="rounded-lg max-w-full h-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}
