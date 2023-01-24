import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserSubscribeDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}