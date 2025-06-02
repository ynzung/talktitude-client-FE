import Item from '../ui/Item';

interface ChatListPropTypes {
  title: string;
  items: {
    id: number;
    rastaurant_image: string;
    restaurant_name: string;
    menu_name: string;
    recent_message: string;
  }[];
}
export default function ChatList({ title, items }: ChatListPropTypes) {
  return (
    <div className="w-full">
      <div className="py-[16px] px-[17px] text-lg font-bold text-textBlack bg-white">
        {title}
        {title == '상담중' && (
          <span className="ml-1 text-mainColor">{items.length}</span>
        )}
      </div>
      <div className="bg-white">
        {items.map((item, idx) => (
          <Item key={idx} data={item} />
        ))}
      </div>
    </div>
  );
}
