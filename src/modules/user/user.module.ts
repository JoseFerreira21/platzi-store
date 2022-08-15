import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { ProductModule } from './../product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
