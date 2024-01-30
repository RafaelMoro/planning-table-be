import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Offer extends Document {
  @Prop({ required: true })
  offer: string;
}

export const OfferSchema = SchemaFactory.createForClass(Offer);
