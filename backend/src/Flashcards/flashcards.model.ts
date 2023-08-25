import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as shortid from 'shortid'; // Import the shortid library

@Schema()
export class Flashcard extends Document {
    @Prop({ default: shortid.generate }) // Use shortid.generate as the default value
    id: string; // Short unique identifier

  @Prop({ required: true })
  userId: string; // Foreign key referencing the user who created the flashcard

  @Prop({ required: true })
  question: string; // Text of the flashcard question

  @Prop({ required: true })
  answer: string; // Text of the flashcard answer

  @Prop({ required: true })
  sharedUser: string; // Text of the flashcard shared user id

  @Prop([String])
  attributes?: string[]; // Optional: array of attribute IDs associated with the flashcard
}

export const FlashcardSchema = SchemaFactory.createForClass(Flashcard);
