// user.service.ts

import { Injectable, NotFoundException, UnauthorizedException,NotAcceptableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../../constants'
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async signUp(username: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ username, email, password: hashedPassword });
    return newUser.save();
  }

  async signIn(email: string, password: string): Promise<string> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username: user.username, sub: user.id };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); // Replace with a proper secret and expiration
  }

 
}
