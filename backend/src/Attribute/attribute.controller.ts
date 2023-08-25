import {
    Controller,
    Post,
    Body
  } from '@nestjs/common';
  
  import { AttributeService } from './attribute.service';
  
  @Controller('attribute')
  export class AttributeController {
    constructor(private readonly attributeService: AttributeService) {}
  
    @Post()
    async addAttribute(
      @Body('name') attributeName: string
    ) {
      const generatedId = await this.attributeService.insertAttribute(
        attributeName
      );
      return generatedId ;
    }
  }