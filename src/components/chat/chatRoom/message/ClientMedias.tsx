import React from 'react';

export function ClientMedias({ medias }: { medias: { url: string }[] }) {
  return (
    <div className="flex flex-col gap-2">
      {medias.map((m, i) => (
        <div key={i}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={m.url}
            alt="채팅 메시지 이미지"
            loading="lazy"
            decoding="async"
            width={200}
            height={200}
            className="rounded-lg max-w-full h-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}
