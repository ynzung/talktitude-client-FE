import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const accessToken =
  typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

export const getChatList = async () => {
  try {
    const response = await axios.get(`${API_URL}/chat/client/sessions`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('채팅 목록 조회', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getChatOrderList = async () => {
  try {
    const response = await axios.get(`${API_URL}/chat/orders`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('채팅 생성 전 주문 목록 조회', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postChatCreate = async (orderId: number | null) => {
  try {
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
