import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
    @Prop()
    
    name: string;

    @Prop({ type: Number })
    age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
