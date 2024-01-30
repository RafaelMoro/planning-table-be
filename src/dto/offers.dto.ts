import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateOfferDto {
  @IsString()
  @IsNotEmpty()
  offer: string;

  @IsString()
  @IsNotEmpty()
  offerName: string;
}

export class UpdateOfferDto extends PartialType(CreateOfferDto) {
  @IsString()
  @IsNotEmpty()
  offerName: string;
}
