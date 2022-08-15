import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PartialType, OmitType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({description: 'the email of user'})
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty({description: 'the password of user'})
  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;

  @ApiProperty({description: 'the role of user'})
  @IsNotEmpty()
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
