import { genericProduct, Product } from 'src/utils/Interface';
import { ProductsService } from './products.service';
import { Response } from 'express';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(body: any, file: Express.Multer.File): Promise<{
        id: string;
        picture: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        price: number;
        star: number | null;
        category: string;
        discount: number | null;
        recommended: boolean;
        description: string | null;
    }>;
    getProducts(data: genericProduct, res: Response): Promise<void>;
    editProduct(id: string, data: Product, res: Response): Promise<void>;
    deleteProduct(id: string, res: Response): Promise<void>;
}
