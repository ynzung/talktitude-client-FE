import React from 'react';

export default function FindAccount() {
  const FindId = () => {
    alert('아이디 찾기로 이동');
  };

  const FindPw = () => {
    alert('비밀번호 찾기로 이동');
  };
  return (
    <div className="flex justify-center gap-2.5 text-base font-medium text-textLightGrey">
      <button className="hover:text-mainColor" onClick={FindId}>
        아이디 찾기
      </button>
      <span>|</span>
      <button className="hover:text-mainColor" onClick={FindPw}>
        비밀번호 찾기
      </button>
    </div>
  );
}
