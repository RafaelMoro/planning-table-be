import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

  @IsMongoId()
  @IsNotEmpty()
  readonly budget: string;
}
