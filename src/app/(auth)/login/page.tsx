'use client';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { PLACEHOLDERS } from '@/lib/constants/placeholders';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FindAccount from '@/components/login/FindAccount';
import LogoImage from '/public/logo/logo.svg';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { Layout } from '@/components/common/Layout';

export default function LoginPage() {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    user_id: '',
    passwd: '',
  });
  const [keepLogin, setKeepLogin] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const isValid =
    formValue.user_id.trim() !== '' && formValue.passwd.trim() !== '';

  const handleLogin = async () => {
    router.push('/');
  };

  return (
    <Layout center={true} gap="gap-24">
      <div>
        <Image
          src={LogoImage}
          alt="Talktitude Logo"
          width={218}
          height={50}
          priority
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-6">
          <Input
            className="w-[22.4375rem] h-[3.0625rem]"
            type="text"
            name="user_id"
            value={formValue.user_id}
            onChange={handleChange}
            placeholder={PLACEHOLDERS.ID_INPUT}
          />
          <Input
            className="w-[22.4375rem] h-[3.0625rem]"
            type="password"
            name="passwd"
            value={formValue.passwd}
            onChange={handleChange}
            placeholder={PLACEHOLDERS.PW_INPUT}
          />
        </div>
        <div>
          <button
            id="keepLogin"
            className="flex flex-row items-center gap-1.5"
            onClick={() => setKeepLogin((prev) => !prev)}
          >
            <IoIosCheckmarkCircleOutline
              size={24}
              color={keepLogin ? '#5573E2' : '#3b3b3b'}
            />
            <span
              className={`text-base font-semibold ${keepLogin ? 'text-mainColor' : 'text-TextBlack'}`}
            >
              로그인 상태 유지
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Button disabled={!isValid} onClick={handleLogin}>
          로그인
        </Button>
        <FindAccount />
      </div>
    </Layout>
  );
}
