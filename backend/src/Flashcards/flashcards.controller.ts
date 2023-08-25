import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
   
    Req
  } from '@nestjs/common';
  import { JwtMiddleware } from '../middleware';
    import { FlashcardService } from './flashcards.service';
  
  @Controller('flashcard')
  export class FlashcardController {
    constructor(private readonly flashcardService: FlashcardService) {}
  
    @Post()
    async addFlashcard(
      @Body('userId') flashcardUserId: string,
      @Body('question') flashcardQuestion: string,
      @Body('answer') flashcardAnswer: string,
      @Body('attributes') flashcardAttributes: string,
    ) {
      const generatedId = await this.flashcardService.insertFlashcard(
        flashcardUserId,
        flashcardQuestion,
        flashcardAnswer,
        flashcardAttributes,
      );
      return generatedId ;
    }
  
    @Get()
  
    async getAllFlashcard(@Req() req) {
       
      const flashcard = await this.flashcardService.getFlashcards();
      return flashcard;
    }
    @Get('/getByAttribute/:attribute')
   
     getFlashcardByAttributes(@Param('attribute') attributeId: string) {
       
      const flashcard = this.flashcardService.getFlashcardsByAttribute(attributeId);
      return flashcard;
    }
  
    @Post(':id')
    getFlashcard(@Param('id') flashcardId: string,@Body('userId') userId:string) {
      return this.flashcardService.getSingleFlashcard(flashcardId,userId);
    }
   
  
    @Patch(':id')
    async updateFlashcard(
      @Param('id') flashcardId: string,
      @Body('userId') flashcardUserId: string,
      @Body('question') flashcardQuestion: string,
      @Body('answer') flashcardAnswer: string,
      @Body('attributes') flashcardAttributes: [string],
    ) {
     await this.flashcardService.updateFlashcard(flashcardId,flashcardUserId,flashcardQuestion,flashcardAnswer, flashcardAttributes);
      return "Flashcard Updated"
    }

    @Patch('/share/:id')
    async shareFlashcard(
      @Param('id') flashcardId: string,
      @Body('sharedUser') sharedUser: string,
      
    ) {
     await this.flashcardService.shareFlashcard(flashcardId,sharedUser);
      return "Flashcard Shared Successfully"
    }


  
    @Delete(':id')
    async removeFlashcard(@Param('id') flashcardId: string) {
        await this.flashcardService.deleteFlashcard(flashcardId);
        return "Flashcard Deleted";
    }
  }