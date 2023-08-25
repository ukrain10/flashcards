import { Model } from 'mongoose';
import { Attribute } from './attribute.model';
export declare class AttributeService {
    private readonly attributeModel;
    constructor(attributeModel: Model<Attribute>);
    insertAttribute(name: string): Promise<Object>;
}
