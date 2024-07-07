import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAccountRecordDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @IsString()
  @IsNotEmpty()
  readonly budget: string;
}
