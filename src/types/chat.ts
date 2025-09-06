export interface ChatListItemPropsType {
  inProgressCount: number;
  finishedCount: number;
  inProgress: {
    sessionId: number;
    status: string;
    storeName: string;
    storeImageUrl: string;
    lastMessage: string;
    orderSummary: string;
  }[];
  finished: {
    sessionId: number;
    status: string;
    storeName: string;
    storeImageUrl: string;
    lastMessage: string;
    orderSummary: string;
  }[];
}

export interface ChatOrderListItemPropsType {
  orderId: number;
  restaurantImageUrl: string;
  restaurantName: string;
  orderSummary: string;
  orderDate: string;
}

export interface ChatItemPropsType {
  mode: 'chat';
  chatListData:
    | ChatListItemPropsType['inProgress'][0]
    | ChatListItemPropsType['finished'][0];
  onClickChatItem: () => void;
}

export interface ChatOrderItemPropsType {
  mode: 'order';
  orderData: ChatOrderListItemPropsType;
  onClickChatItem: () => void;
}

export interface ChatMessagePropsType {
  messageId: number;
  textToShow: string;
  originalText: string;
  showOriginal: boolean;
  senderType: string;
  createdAt: string;
}

export interface ChatPanelPropsType {
  messages: ChatMessagePropsType[];
  chatEndRef: React.RefObject<HTMLDivElement>;
}

export interface ChatHeaderInfoPropsType {
  title: string;
  status: string;
}
