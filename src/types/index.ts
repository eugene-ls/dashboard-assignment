export type User = {
  id: string;
  name: string;
  email: string;
  accounts: Account[];
};

export type Account = {
  id: string;
  type: string;
  balance: number;
};

export type PortfolioGoal = {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
};

export type WorkQueueItem = {
  id: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: Date;
};

export type MarketData = {
  symbol: string;
  price: number;
  change: number;
  volume: number;
};