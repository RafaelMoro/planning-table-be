import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateAnswerDto {
  @IsString()
  @IsNotEmpty()
  answer: string;

  @IsString()
  @IsNotEmpty()
  answerName: string;
}

export class UpdateAnswerDto extends PartialType(CreateAnswerDto) {
  @IsString()
  @IsNotEmpty()
  answerName: string;
}
