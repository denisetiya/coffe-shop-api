import { genericProduct } from 'src/utils/Interface';
import { ProductsService } from './products.service';
import { Response } from 'express';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(data: genericProduct, res: Response): Promise<void>;
}
