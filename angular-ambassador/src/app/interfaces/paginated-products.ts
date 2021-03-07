import {Product} from './product';

export interface PaginatedProducts {
  data: Product[];
  meta: {
    total: number;
    page: number;
    last_page: number;
  };
}
