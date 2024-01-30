import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Answer extends Document {
  @Prop({ required: true })
  answer: string;

  @Prop({ required: true, unique: true })
  answerName: string;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
