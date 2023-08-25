import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FlashcardController } from './flashcards.controller';
import { FlashcardService } from './flashcards.service';
import { FlashcardSchema } from './flashcards.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Flashcard', schema: FlashcardSchema }]),
  ],
  controllers: [FlashcardController],
  providers: [FlashcardService],
})
export class FlashcardModule {}