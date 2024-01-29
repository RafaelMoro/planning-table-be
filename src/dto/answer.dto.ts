import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAnswer {
  @IsString()
  @IsNotEmpty()
  answer: string;
}
