import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as shortid from 'shortid'; // Import the shortid library

@Schema()
export class Attribute extends Document {
  @Prop({ default: shortid.generate }) // Use shortid.generate as the default value
  id: string; // Short unique identifier
  @Prop({ required: true })
  name: string; // Foreign key referencing the user who created the flashcard
}

export const AttributeSchema = SchemaFactory.createForClass(Attribute);
