import { IsEmail, IsString } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
