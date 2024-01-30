import { Types } from 'mongoose';
import { Offer } from './entities/offers.entity';

export interface GeneralResponse {
  success: boolean;
  data: null | object;
  message: string | null;
  error: string | object;
}

export interface CompleteOffer extends Offer {
  _id: Types.ObjectId;
}
