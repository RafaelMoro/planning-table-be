import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Budgets extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  limit: number;

  @Prop({ required: true })
  currentAmount: number;
}

export const BudgetsSchema = SchemaFactory.createForClass(Budgets);
