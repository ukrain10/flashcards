import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {UserController } from '../User/user.controller';
import {UserService } from '../User/user.service';
import {UserSchema } from '../User/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}