import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const FooterLinks = () => {
  const router = useRouter();
  const handleFindIdClick = () => {
    router.push('/find-id');
  };
  const handleFindPasswordClick = () => {
    router.push('/find-password');
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 py-4">
      <div className="flex flex-row items-center justify-center gap-2 text-textLightGray text-base font-medium">
        <Link
          href="/find-id"
          onClick={handleFindIdClick}
          className="hover:text-textGray"
        >
          아이디
        </Link>
        <span className="text-lineGray font-normal">|</span>
        <Link
          href="/find-password"
          onClick={handleFindPasswordClick}
          className="hover:text-textGray"
        >
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
