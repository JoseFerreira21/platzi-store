import { User } from './user.entity';
import { Product } from './../../product/entities/product.entity';

export class Order {
  date: Date;
  user: User;
  products: Product[];
}
