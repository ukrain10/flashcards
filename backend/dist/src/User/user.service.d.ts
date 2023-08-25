import { Model } from 'mongoose';
import { User } from './user.model';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    signUp(username: string, email: string, password: string): Promise<User>;
    signIn(email: string, password: string): Promise<string>;
}
