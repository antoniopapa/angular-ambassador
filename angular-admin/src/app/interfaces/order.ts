import {OrderItem} from './order-item';

export interface Order {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  total: number;
  order_items: OrderItem[];
}
