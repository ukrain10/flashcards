import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './product/product.module';
import { UserModule } from './User/user.module';
import { FlashcardModule } from './Flashcards/flashcards.module';
import { AttributeModule } from './Attribute/attribute.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtMiddleware } from './middleware';
@Module({
    imports: [
      ProductsModule,
      UserModule,
      FlashcardModule,
      AttributeModule,
        MongooseModule.forRoot(`mongodb+srv://nitish3rde:Roopesh_123@thirdessntional.om9tz.mongodb.net/flashcards?retryWrites=true&w=majority`),
          ],
    
  
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .forRoutes('flashcard','attribute'); // Apply middleware to all routes
  }
}

// export class AppModule {}