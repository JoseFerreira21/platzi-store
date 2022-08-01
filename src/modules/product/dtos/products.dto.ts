import {
  IsNotEmpty,
  IsPositive,
  IsString,
  IsNumber,
  IsUrl,
} from 'class-validator';
import { PartialType, OmitType, ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  stock: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
