// 로그인 폼 타입
export interface LoginFormPropsType {
  loginFormData: {
    loginId: string;
    password: string;
  };
  onLoginChange: (
    key: string,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void; // 로그인 아이디 또는 비밀번호 변경 함수 연결
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; // 로그인 폼 제출 함수 연결
  keepLoggedIn: boolean; // 로그인 유지 체크박스 상태
  handleKeepLoggedInClick: () => void; // 로그인 유지 토큰 설정 로직 함수 연결
  disabled: boolean; // 로그인 버튼 비활성화 상태
  loginErrorMessage: string; // 로그인 에러 메시지
  isLoading: boolean; // 로그인 로딩 상태
}

export interface RememberBoxPropsType {
  keepLoggedIn: boolean;
  handleKeepLoggedInClick: () => void;
}

export interface InputFieldPropsType {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
