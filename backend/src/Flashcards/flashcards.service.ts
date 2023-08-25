import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Flashcard } from './flashcards.model';

@Injectable()
export class FlashcardService {
  constructor(
    @InjectModel('Flashcard') private readonly flashcardModel: Model<Flashcard>,
  ) {}

  async insertFlashcard(userId: string, question: string, answer: string,attributes:string) {
    const newFlashcard = new this.flashcardModel({
      userId,
      question,
      answer,
      attributes
    });
    const result = await newFlashcard.save();
    return result as Object;
  }

  async getFlashcards() {
    const flashcards = await this.flashcardModel.find().exec();
    return flashcards.map(flashcard => ({
      id: flashcard.id,
      userId: flashcard.userId,
      question: flashcard.question,
      answer: flashcard.answer,
      attributes: flashcard.attributes,
    }));
  }
  async getFlashcardsByAttribute(attribute: string) {
    const flashcards = await this.flashcardModel.find({ attributes: { $in: attribute } }).exec();
    return flashcards.map(flashcard => ({
      id: flashcard.id,
      userId: flashcard.userId,
      question: flashcard.question,
      answer: flashcard.answer,
      attributes: flashcard.attributes,
    }));
  }

  async getSingleFlashcard(flashcardId: string,userId:string) {
    const flashcard = await this.flashcardModel.findOne({id:flashcardId,sharedUser:userId}).exec();
    if(flashcard){

      return{
        id: flashcard.id,
        userId: flashcard.userId,
        question: flashcard.question,
        answer: flashcard.answer,
        attributes: flashcard.attributes,
      }
    }
    else{
      return "Unauthorized to view this flashcard."
    }
  }

  async updateFlashcard(
    flashcardId: string,
    userId: string,
    question: string,
    answer: string,
    attributes: [string],
  ) {
    const updatedFlashcard = await this.findFlashcard(flashcardId);
    if (userId) {
      updatedFlashcard.userId = userId;
    }
    if (question) {
      updatedFlashcard.question = question;
    }
    if (answer) {
      updatedFlashcard.answer = answer;
    }
    if (attributes) {
      updatedFlashcard.attributes = attributes;
    }
    updatedFlashcard.save();
   
  }
  async shareFlashcard(
    flashcardId: string,
    sharedUser:string,
  ) {
    const updatedFlashcard = await this.findFlashcard(flashcardId);
    if (sharedUser) {
      updatedFlashcard.sharedUser = sharedUser;
    }
    updatedFlashcard.save();
   
  }

  async deleteFlashcard(flashcardId: string) {
    const result = await this.flashcardModel.deleteOne({_id: flashcardId}).exec();
    if (!result) {
      throw new NotFoundException('Could not find flashcard.');
    }
  }

  private async findFlashcard(id: string): Promise<Flashcard> {
    let flashcard;
    try {
      flashcard = await this.flashcardModel.findOne({id:id}).exec();
    } catch (error) {
      throw new NotFoundException('Could not find flashcard.');
    }
    if (!flashcard) {
      throw new NotFoundException('Could not find flashcard.');
    }
    return flashcard;
  }

}