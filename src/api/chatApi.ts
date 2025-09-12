import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getAccessToken = () => {
  return typeof window !== 'undefined'
    ? localStorage.getItem('accessToken')
    : null;
};

export const getChatList = async () => {
  try {
    const accessToken = getAccessToken();
    const response = await axios.get(`${API_URL}/chat/client/sessions`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log('채팅 목록 조회', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getChatOrderList = async () => {
  try {
    const accessToken = getAccessToken();
    const response = await axios.get(`${API_URL}/chat/orders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log('채팅 생성 전 주문 목록 조회', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 404) {
        console.log('결제 정보 또는 메뉴 정보를 찾을 수 없습니다.');
        return {
          data: [],
        };
      }
    }
    console.error(error);
    return {
      data: [],
    };
  }
};

export const postChatCreate = async (orderId: number | null) => {
  try {
    const accessToken = getAccessToken();
    const response = await axios.post(
      `${API_URL}/chat/sessions`,
      {
        orderId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    console.log('채팅 생성', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getChatMessage = async (sessionId: number) => {
  try {
    const accessToken = getAccessToken();
    const response = await axios.get(
      `${API_URL}/chat/sessions/${sessionId}/messages`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getChatHeaderInfo = async (sessionId: number) => {
  try {
    const accessToken = getAccessToken();
    const response = await axios.get(
      `${API_URL}/chat/client/sessions/${sessionId}/header`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    // console.log('상담 헤더 정보 조회', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
