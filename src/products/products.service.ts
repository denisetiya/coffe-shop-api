import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { genericProduct, Product } from 'src/utils/Interface';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    //  function add product
    async addProduct(Product: Product) {
        try {
            const newProduct = await this.prisma.product.create({
                data: {
                    name: Product.name,
                    picture: Product.picture,
                    price: Product.price,
                    category: Product.category,
                    discount: Product.discount,
                    description: Product.description,
                    recommended: Product.recommended
                }
            })
            return newProduct
        } catch (error) {
            throw new Error(error)
        }
    }

    // function get product
    async getProducts(data : genericProduct) {
        if (data.id) {
            try {
                const product = await this.prisma.product.findUnique({
                    where: {
                        id: data.id
                    }
                })
                return product
            } catch (error) {
                throw new Error(error)
            }
        } else if (data.name) {
            try {
                const product = await this.prisma.product.findMany({
                    where: {
                        name: data.name
                    }
                })
                return product
            } catch (error) {
                throw new Error(error)
            }
        } else if (data.category) {
            try {
                const product = await this.prisma.product.findMany({
                    where: {
                        category: data.category
                    }
                })
                return product
            } catch (error) {
                throw new Error(error)
            }
        } else if (data.price1 && data.price2) {
            try {
                const product = await this.prisma.product.findMany({
                    where: {
                        price: {
                            gte: data.price1,
                            lte: data.price2
                        }
                    }
                })
                return product
            } catch (error) {
                throw new Error(error)
            }
        } else if (data.discount) {
            try {
                const product = await this.prisma.product.findMany({
                    where: {
                        discount: {
                            gt: 0.1
                        }
                    }
                })
                return product
            } catch (error) {
                throw new Error(error)
            }
        } else {
            try {
                const product = await this.prisma.product.findMany()
                return product
            } catch (error) {
                throw new Error(error)
            }

        }

    }

    async deleteProduct(id: string) {
        try {
            const product = await this.prisma.product.delete({
                where: {
                    id
                }
            })
            return product
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateProduct(id: string, data: genericProduct) {
        try {
            const product = await this.prisma.product.update({
                where: {
                    id
                },
                data
            })
            return product
        } catch (error) {
            throw new Error(error)
        }
    }
}
