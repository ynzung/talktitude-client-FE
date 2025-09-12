import axios from 'axios';
import { LoginFormPropsType } from '@/types/auth';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const postLogin = async (data: LoginFormPropsType['loginFormData']) => {
  try {
    const response = await axios.post(`${API_URL}/clients/login`, data);
    console.log(response.data);
    localStorage.clear();
    localStorage.setItem('accessToken', response.data.data.accessToken);
    localStorage.setItem('refreshToken', response.data.data.refreshToken);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.message;
      switch (status) {
        case 401:
          throw '아이디 또는 비밀번호가 올바르지 않습니다.';
        default:
          throw message || '로그인 중 오류가 발생했습니다.';
      }
    }
    throw '로그인 중 오류가 발생했습니다.';
  }
};
