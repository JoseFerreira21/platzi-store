import { Module } from '@nestjs/common';
import { BrandController } from '../brand/controller/brand.controller';
import { BrandService } from '../brand/service/brand.service';

@Module({
  //imports: [BrandModule],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
