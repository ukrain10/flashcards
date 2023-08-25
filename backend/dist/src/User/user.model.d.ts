/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export declare class User extends Document {
    id: string;
    username: string;
    email: string;
    password: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, any, any>;
