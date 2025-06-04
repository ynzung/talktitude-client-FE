import sampleImage from '@/assets/images/sample-square.svg';

export interface ChatItem {
  id: number;
  restaurant_image: string;
  restaurant_name: string;
  menu_name: string;
  recent_message: string;
}

export const ongoingChats: ChatItem[] = [
  {
    id: 1,
    restaurant_image: sampleImage,
    restaurant_name: '구공분식 강남점',
    menu_name: '야끼만두 외 4개 13,218원',
    recent_message:
      '안녕하세요 TALKTITUDE입니다. 무엇을 도와드릴까요? 안녕하세요 TALKTITUDE입니다. 무엇을 도와드릴까요?',
  },
  {
    id: 2,
    restaurant_image: sampleImage,
    restaurant_name: 'allavo',
    menu_name: '아보카도 비프 버거 1개 14,222원',
    recent_message:
      '안녕하세요 TALKTITUDE입니다. 무엇을 도와드릴까요? 안녕하세요 TALKTITUDE입니다. 무엇을 도와드릴까요?',
  },
];

export const endedChats: ChatItem[] = [
  {
    id: 3,
    restaurant_image: sampleImage,
    restaurant_name: '배떡 교대점',
    menu_name: '마라로제 떡볶이 외 1개 21,422원',
    recent_message: '안녕하세요 TALKTITUDE입니다. 무엇을 도와드릴까요?',
  },

  {
    id: 4,
    restaurant_image: sampleImage,
    restaurant_name: '비비큐 강남점',
    menu_name: '비비큐 치즈 버거 1개 14,182원',
    recent_message: '안녕하세요 TALKTITUDE입니다. 무엇을 도와드릴까요?',
  },
];
