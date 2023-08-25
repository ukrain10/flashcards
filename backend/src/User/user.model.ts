// user.model.ts

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as shortid from 'shortid'; // Import the shortid library

@Schema()
export class User extends Document {
    @Prop({ default: shortid.generate }) // Use shortid.generate as the default value
  id: string; // Short unique identifier
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true, match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/  })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
