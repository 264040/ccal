import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'comments' })
export class Comment extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: Types.ObjectId })
  movie_id?: Types.ObjectId;

  @Prop({ required: true })
  text: string;

  @Prop()
  date?: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);