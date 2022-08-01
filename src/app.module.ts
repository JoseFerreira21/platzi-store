import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CustomerModule } from './modules/customer/customer.module';
import { ProductModule } from './modules/product/product.module';
import { BrandModule } from './modules/brand/brand.module';
import { CategoryModule } from './modules/category/category.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    UserModule,
    CustomerModule,
    ProductModule,
    BrandModule,
    CategoryModule,
    OrderModule,
  ],
})
export class AppModule {}
