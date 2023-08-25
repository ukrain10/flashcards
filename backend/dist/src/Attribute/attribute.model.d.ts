/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export declare class Attribute extends Document {
    id: string;
    name: string;
}
export declare const AttributeSchema: import("mongoose").Schema<Attribute, import("mongoose").Model<Attribute, any, any, any>, any, any>;
