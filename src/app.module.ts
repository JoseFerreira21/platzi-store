import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import * as Joi from 'joi';

import { UserModule } from './modules/user/user.module';
import { CustomerModule } from './modules/customer/customer.module';
import { ProductModule } from './modules/product/product.module';
import { BrandModule } from './modules/brand/brand.module';
import { CategoryModule } from './modules/category/category.module';
import { OrderModule } from './modules/order/order.module';
import { DatabaseModule } from './database/database.module';

import { enviroments } from './enviroments';
import config from './config';

@Module({
  imports: [
    UserModule,
    CustomerModule,
    ProductModule,
    BrandModule,
    CategoryModule,
    OrderModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      })
    }),
  ],
})
export class AppModule {}
