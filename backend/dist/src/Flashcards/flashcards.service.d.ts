import { Model } from 'mongoose';
import { Flashcard } from './flashcards.model';
export declare class FlashcardService {
    private readonly flashcardModel;
    constructor(flashcardModel: Model<Flashcard>);
    insertFlashcard(userId: string, question: string, answer: string, attributes: string): Promise<Object>;
    getFlashcards(): Promise<{
        id: string;
        userId: string;
        question: string;
        answer: string;
        attributes: string[];
    }[]>;
    getFlashcardsByAttribute(attribute: string): Promise<{
        id: string;
        userId: string;
        question: string;
        answer: string;
        attributes: string[];
    }[]>;
    getSingleFlashcard(flashcardId: string, userId: string): Promise<"Unauthorized to view this flashcard." | {
        id: string;
        userId: string;
        question: string;
        answer: string;
        attributes: string[];
    }>;
    updateFlashcard(flashcardId: string, userId: string, question: string, answer: string, attributes: [string]): Promise<void>;
    shareFlashcard(flashcardId: string, sharedUser: string): Promise<void>;
    deleteFlashcard(flashcardId: string): Promise<void>;
    private findFlashcard;
}
