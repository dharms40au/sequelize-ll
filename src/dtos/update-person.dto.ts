import { IsEmail, IsString, Length } from 'class-validator';

export class UpdatePersonDto {
  @Length(5, 60, {
    message:
      'Name must be minimum of 10 characters with a maximum of 60, please.',
  })
  name: string;

  @IsEmail()
  email: string;
}
