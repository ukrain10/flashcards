"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const product_module_1 = require("./product/product.module");
const user_module_1 = require("./User/user.module");
const flashcards_module_1 = require("./Flashcards/flashcards.module");
const attribute_module_1 = require("./Attribute/attribute.module");
const common_1 = require("@nestjs/common");
const middleware_1 = require("./middleware");
let AppModule = exports.AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(middleware_1.JwtMiddleware)
            .forRoutes('flashcard', 'attribute');
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            product_module_1.ProductsModule,
            user_module_1.UserModule,
            flashcards_module_1.FlashcardModule,
            attribute_module_1.AttributeModule,
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://nitish3rde:Roopesh_123@thirdessntional.om9tz.mongodb.net/flashcards?retryWrites=true&w=majority`),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map