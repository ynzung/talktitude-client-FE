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
