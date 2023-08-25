import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Attribute } from './attribute.model';

@Injectable()
export class AttributeService {
  constructor(
    @InjectModel('Attribute') private readonly attributeModel: Model<Attribute>,
  ) {}

  async insertAttribute(name: string) {
    const newAttribute = new this.attributeModel({
    name
    });
    const result = await newAttribute.save();
    return result as Object;
  }

}