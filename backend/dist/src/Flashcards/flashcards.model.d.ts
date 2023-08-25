/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export declare class Flashcard extends Document {
    id: string;
    userId: string;
    question: string;
    answer: string;
    sharedUser: string;
    attributes?: string[];
}
export declare const FlashcardSchema: import("mongoose").Schema<Flashcard, import("mongoose").Model<Flashcard, any, any, any>, any, any>;
