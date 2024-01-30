import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Offer extends Document {
  @Prop({ required: true })
  offer: string;

  @Prop({ required: true, unique: true })
  offerName: string;
}

export const OfferSchema = SchemaFactory.createForClass(Offer);
