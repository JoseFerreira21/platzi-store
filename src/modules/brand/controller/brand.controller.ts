import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { BrandService } from './../service/brand.service';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('brand')
@Controller('brand')
export class BrandController {
  constructor(private brandsService: BrandService) {}

  @Get()
  getBrands() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return { msg: `Marca ${id}`, body: this.brandsService.findOne(id) };
  }

  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateBrandDto) {
    return this.brandsService.update(+id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.delete(id);
  }
}
