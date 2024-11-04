import { PrismaService } from 'src/prisma/prisma.service';
import { genericProduct, Product } from 'src/utils/Interface';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    addProduct(Product: Product): Promise<{
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
    getProducts(data: genericProduct): Promise<{
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
    } | {
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
    }[]>;
    deleteProduct(id: string): Promise<{
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
    updateProduct(id: string, data: genericProduct): Promise<{
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
}
