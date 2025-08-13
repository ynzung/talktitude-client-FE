'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import InputField from './InputField';
import RememberBox from './RememberBox';
import { PLACEHOLDERS } from '@/lib/constants/placeholders';
import { LoginFormPropsType } from '@/types/auth';

const LoginForm = ({
  loginFormData,
  onLoginChange,
  onSubmit,
  keepLoggedIn,
  handleKeepLoggedInClick,
  disabled,
  loginErrorMessage,
}: LoginFormPropsType) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-[22.4375rem]">
      <div className="flex flex-col gap-3">
        <InputField
          placeholder={PLACEHOLDERS.ID_INPUT}
          type="text"
          value={loginFormData.loginId}
          onChange={onLoginChange('loginId')}
        />
        <InputField
          placeholder={PLACEHOLDERS.PW_INPUT}
          type="password"
          value={loginFormData.password}
          onChange={onLoginChange('password')}
        />
      </div>
      <RememberBox
        keepLoggedIn={keepLoggedIn}
        handleKeepLoggedInClick={handleKeepLoggedInClick}
      />
      {loginErrorMessage && (
        <p className="text-textRed text-[13px] font-semibold">
          {loginErrorMessage}
        </p>
      )}
      <Button disabled={disabled}>로그인</Button>
    </form>
  );
};

export default LoginForm;
