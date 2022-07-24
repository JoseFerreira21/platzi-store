import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType, OmitType, ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  observation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
