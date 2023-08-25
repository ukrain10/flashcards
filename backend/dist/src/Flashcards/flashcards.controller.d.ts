import { FlashcardService } from './flashcards.service';
export declare class FlashcardController {
    private readonly flashcardService;
    constructor(flashcardService: FlashcardService);
    addFlashcard(flashcardUserId: string, flashcardQuestion: string, flashcardAnswer: string, flashcardAttributes: string): Promise<Object>;
    getAllFlashcard(req: any): Promise<{
        id: string;
        userId: string;
        question: string;
        answer: string;
        attributes: string[];
    }[]>;
    getFlashcardByAttributes(attributeId: string): Promise<{
        id: string;
        userId: string;
        question: string;
        answer: string;
        attributes: string[];
    }[]>;
    getFlashcard(flashcardId: string, userId: string): Promise<"Unauthorized to view this flashcard." | {
        id: string;
        userId: string;
        question: string;
        answer: string;
        attributes: string[];
    }>;
    updateFlashcard(flashcardId: string, flashcardUserId: string, flashcardQuestion: string, flashcardAnswer: string, flashcardAttributes: [string]): Promise<string>;
    shareFlashcard(flashcardId: string, sharedUser: string): Promise<string>;
    removeFlashcard(flashcardId: string): Promise<string>;
}
