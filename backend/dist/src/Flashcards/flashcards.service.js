"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashcardService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FlashcardService = exports.FlashcardService = class FlashcardService {
    constructor(flashcardModel) {
        this.flashcardModel = flashcardModel;
    }
    async insertFlashcard(userId, question, answer, attributes) {
        const newFlashcard = new this.flashcardModel({
            userId,
            question,
            answer,
            attributes
        });
        const result = await newFlashcard.save();
        return result;
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
    async getFlashcardsByAttribute(attribute) {
        const flashcards = await this.flashcardModel.find({ attributes: { $in: attribute } }).exec();
        return flashcards.map(flashcard => ({
            id: flashcard.id,
            userId: flashcard.userId,
            question: flashcard.question,
            answer: flashcard.answer,
            attributes: flashcard.attributes,
        }));
    }
    async getSingleFlashcard(flashcardId, userId) {
        const flashcard = await this.flashcardModel.findOne({ id: flashcardId, sharedUser: userId }).exec();
        if (flashcard) {
            return {
                id: flashcard.id,
                userId: flashcard.userId,
                question: flashcard.question,
                answer: flashcard.answer,
                attributes: flashcard.attributes,
            };
        }
        else {
            return "Unauthorized to view this flashcard.";
        }
    }
    async updateFlashcard(flashcardId, userId, question, answer, attributes) {
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
    async shareFlashcard(flashcardId, sharedUser) {
        const updatedFlashcard = await this.findFlashcard(flashcardId);
        if (sharedUser) {
            updatedFlashcard.sharedUser = sharedUser;
        }
        updatedFlashcard.save();
    }
    async deleteFlashcard(flashcardId) {
        const result = await this.flashcardModel.deleteOne({ _id: flashcardId }).exec();
        if (!result) {
            throw new common_1.NotFoundException('Could not find flashcard.');
        }
    }
    async findFlashcard(id) {
        let flashcard;
        try {
            flashcard = await this.flashcardModel.findOne({ id: id }).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find flashcard.');
        }
        if (!flashcard) {
            throw new common_1.NotFoundException('Could not find flashcard.');
        }
        return flashcard;
    }
};
exports.FlashcardService = FlashcardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Flashcard')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FlashcardService);
//# sourceMappingURL=flashcards.service.js.map