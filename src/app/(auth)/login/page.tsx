'use client';

import Image from 'next/image';
import Layout from '@/components/common/Layout';
import LoginForm from '@/components/login/LoginForm';
import FooterLinks from '@/components/login/FooterLinks';
import LogoImage from '/public/logo/logo.svg';
import { useLoginForm } from '@/hooks/useLoginForm';

export default function LoginPage() {
  const {
    loginFormData,
    disabled,
    keepLoggedIn,
    loginErrorMessage,
    isLoading,
    handleKeepLoggedInClick,
    handleLogin,
    handleLoginChange,
  } = useLoginForm();
  return (
    <Layout center={true} gap="gap-12">
      <Image
        src={LogoImage}
        alt="Talktitude Logo"
        width={218}
        height={50}
        priority
      />
      <div className="flex flex-col">
        <LoginForm
          loginFormData={loginFormData}
          onLoginChange={handleLoginChange}
          onSubmit={handleLogin}
          keepLoggedIn={keepLoggedIn}
          handleKeepLoggedInClick={handleKeepLoggedInClick}
          disabled={disabled}
          loginErrorMessage={loginErrorMessage}
          isLoading={isLoading}
        />
        <FooterLinks />
      </div>
    </Layout>
  );
}
