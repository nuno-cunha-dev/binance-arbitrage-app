export interface Order {
  type: 'buy' | 'sell';
  pair: string;
  price: number;
}

export interface Opportunity {
  coins: string[];
  profit: number;
  orders: Order[];
}

export interface ProfitabilityResponse {
  opportunities: Opportunity[];
  fetchedAt: number;
}