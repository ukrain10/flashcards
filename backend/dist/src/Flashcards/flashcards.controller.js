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
exports.FlashcardController = void 0;
const common_1 = require("@nestjs/common");
const flashcards_service_1 = require("./flashcards.service");
let FlashcardController = exports.FlashcardController = class FlashcardController {
    constructor(flashcardService) {
        this.flashcardService = flashcardService;
    }
    async addFlashcard(flashcardUserId, flashcardQuestion, flashcardAnswer, flashcardAttributes) {
        const generatedId = await this.flashcardService.insertFlashcard(flashcardUserId, flashcardQuestion, flashcardAnswer, flashcardAttributes);
        return generatedId;
    }
    async getAllFlashcard(req) {
        const flashcard = await this.flashcardService.getFlashcards();
        return flashcard;
    }
    getFlashcardByAttributes(attributeId) {
        const flashcard = this.flashcardService.getFlashcardsByAttribute(attributeId);
        return flashcard;
    }
    getFlashcard(flashcardId, userId) {
        return this.flashcardService.getSingleFlashcard(flashcardId, userId);
    }
    async updateFlashcard(flashcardId, flashcardUserId, flashcardQuestion, flashcardAnswer, flashcardAttributes) {
        await this.flashcardService.updateFlashcard(flashcardId, flashcardUserId, flashcardQuestion, flashcardAnswer, flashcardAttributes);
        return "Flashcard Updated";
    }
    async shareFlashcard(flashcardId, sharedUser) {
        await this.flashcardService.shareFlashcard(flashcardId, sharedUser);
        return "Flashcard Shared Successfully";
    }
    async removeFlashcard(flashcardId) {
        await this.flashcardService.deleteFlashcard(flashcardId);
        return "Flashcard Deleted";
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('userId')),
    __param(1, (0, common_1.Body)('question')),
    __param(2, (0, common_1.Body)('answer')),
    __param(3, (0, common_1.Body)('attributes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], FlashcardController.prototype, "addFlashcard", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FlashcardController.prototype, "getAllFlashcard", null);
__decorate([
    (0, common_1.Get)('/getByAttribute/:attribute'),
    __param(0, (0, common_1.Param)('attribute')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlashcardController.prototype, "getFlashcardByAttributes", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FlashcardController.prototype, "getFlashcard", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('userId')),
    __param(2, (0, common_1.Body)('question')),
    __param(3, (0, common_1.Body)('answer')),
    __param(4, (0, common_1.Body)('attributes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Array]),
    __metadata("design:returntype", Promise)
], FlashcardController.prototype, "updateFlashcard", null);
__decorate([
    (0, common_1.Patch)('/share/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('sharedUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FlashcardController.prototype, "shareFlashcard", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FlashcardController.prototype, "removeFlashcard", null);
exports.FlashcardController = FlashcardController = __decorate([
    (0, common_1.Controller)('flashcard'),
    __metadata("design:paramtypes", [flashcards_service_1.FlashcardService])
], FlashcardController);
//# sourceMappingURL=flashcards.controller.js.map