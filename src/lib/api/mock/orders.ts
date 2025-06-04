import sampleImage from '@/assets/images/sample-square.svg';

export interface Order {
  id: number;
  restaurant_image: string;
  restaurant_name: string;
  menu_name: string;
  order_date: string;
}

export const mockOrders: Order[] = [
  {
    id: 1,
    restaurant_image: sampleImage,
    restaurant_name: '구공분식 강남점',
    menu_name: '야끼만두 외 4개 13,218원',
    order_date: '2025년 05월 16일 오후 08:56',
  },
  {
    id: 2,
    restaurant_image: sampleImage,
    restaurant_name: 'allavo',
    menu_name: '아보카도 비프 버거 1개 14,222원',
    order_date: '2025년 05월 23일 오전 01:23',
  },
  {
    id: 3,
    restaurant_image: sampleImage,
    restaurant_name: '배떡 교대점',
    menu_name: '마라로제 떡볶이 외 1개 21,422원',
    order_date: '2025년 05월 26일 오후 05:18',
  },
  {
    id: 4,
    restaurant_image: sampleImage,
    restaurant_name: '비비큐 강남점',
    menu_name: '비비큐 치즈 버거 1개 14,182원',
    order_date: '2025년 06월 04일 오후 06:39',
  },
];
