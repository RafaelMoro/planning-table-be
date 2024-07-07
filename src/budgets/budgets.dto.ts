import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBudgetDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly limit: number;

  @IsNumber()
  @IsNotEmpty()
  readonly currentAmount: number;
}
