import { AttributeService } from './attribute.service';
export declare class AttributeController {
    private readonly attributeService;
    constructor(attributeService: AttributeService);
    addAttribute(attributeName: string): Promise<Object>;
}
