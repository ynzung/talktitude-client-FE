'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postLogin } from '@/api/accountApi';
import { useLoading } from './useLoading';

export const useLoginForm = () => {
  const router = useRouter();
  const { isLoading, withLoading } = useLoading();
  const [loginFormData, setLoginFormData] = useState({
    loginId: '',
    password: '',
  });
  const disabled =
    loginFormData.loginId.trim() === '' ||
    loginFormData.password.trim() === '' ||
    isLoading;
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');

  const handleKeepLoggedInClick = () => {
    setKeepLoggedIn((prev) => !prev);
    // 로그인 유지 토큰 설정 로직 구현
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      loginFormData.loginId.trim() === '' ||
      loginFormData.password.trim() === ''
    ) {
      setLoginErrorMessage('아이디 또는 비밀번호를 입력해주세요.');
      return;
    }
    await withLoading(async () => {
      try {
        await postLogin(loginFormData);
        router.push('/chat/list');
      } catch (error) {
        alert(error);
      }
    });
  };

  const handleLoginChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFormData = { ...loginFormData, [key]: e.target.value };
      setLoginFormData(newFormData);
      // 아이디 비밀번호 모두 입력되면 에러 메시지 초기화
      if (
        newFormData.loginId.trim() !== '' &&
        newFormData.password.trim() !== ''
      ) {
        setLoginErrorMessage('');
      }
    };
  return {
    loginFormData,
    disabled,
    keepLoggedIn,
    loginErrorMessage,
    isLoading,
    handleKeepLoggedInClick,
    handleLogin,
    handleLoginChange,
  };
};
