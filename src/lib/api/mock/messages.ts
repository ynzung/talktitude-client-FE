export interface Message {
  id: number;
  is_mine: boolean;
  message: string;
}

export const mockMessages: Message[] = [
  {
    id: 1,
    is_mine: false,
    message: '안녕하세요! 구공분식 강남점입니다.',
  },
  {
    id: 2,
    is_mine: true,
    message: '네, 안녕하세요! 주문하고 싶은데요.',
  },
  {
    id: 3,
    is_mine: true,
    message: '김치찌개 1개, 공기밥 2개 주문할게요.',
  },
  {
    id: 4,
    is_mine: false,
    message: '네, 김치찌개 1개, 공기밥 2개 주문 확인했습니다. 포장하시나요?',
  },
  {
    id: 5,
    is_mine: true,
    message: '네, 포장 부탁드립니다.',
  },
  {
    id: 6,
    is_mine: false,
    message: '네, 알겠습니다. 주문이 완료되었습니다. 맛있게 드세요!',
  },
];
