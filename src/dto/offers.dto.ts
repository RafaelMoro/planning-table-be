import { IsString, IsNotEmpty } from 'class-validator';

export class CreateOffer {
  @IsString()
  @IsNotEmpty()
  offer: string;
}
