import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Budgets } from 'src/budgets/budgets.entity';

@Schema()
export class AccountRecord extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true, type: Types.ObjectId, ref: Budgets.name })
  budget: Budgets | Types.ObjectId;
}

export const AccountRecordSchema = SchemaFactory.createForClass(AccountRecord);
