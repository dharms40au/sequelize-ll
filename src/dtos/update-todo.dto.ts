import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  public name: string;

  @IsString()
  description: string;

  @IsNumber()
  person_id: number;
}
