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
    restaurant_name: '구공분식 강남점',
    menu_name: '야끼만두 외 4개 13,218원',
    recent_message: '안녕하세요 TALKTITUDE입니다. 무엇을 도와드릴까요?',
  },
];

export const endedChats: ChatItem[] = [
  {
    id: 3,
    restaurant_image: sampleImage,
    restaurant_name: '구공분식 강남점',
    menu_name: '야끼만두 외 4개 13,218원',
    recent_message: '안녕하세요 TALKTITUDE입니다. 무엇을 도와드릴까요?',
  },
];
