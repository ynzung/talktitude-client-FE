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
    restaurant_name: '구공분식 강남점',
    menu_name: '야끼만두 외 4개 13,218원',
    order_date: '2025년 05월 16일 오후 08:56',
  },
  {
    id: 3,
    restaurant_image: sampleImage,
    restaurant_name: '구공분식 강남점',
    menu_name: '야끼만두 외 4개 13,218원',
    order_date: '2025년 05월 16일 오후 08:56',
  },
  {
    id: 4,
    restaurant_image: sampleImage,
    restaurant_name: '구공분식 강남점',
    menu_name: '야끼만두 외 4개 13,218원',
    order_date: '2025년 05월 16일 오후 08:56',
  },
];
