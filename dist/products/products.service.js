"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addProduct(Product) {
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
            });
            return newProduct;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getProducts(data) {
        if (data.id) {
            try {
                const product = await this.prisma.product.findUnique({
                    where: {
                        id: data.id
                    }
                });
                return product;
            }
            catch (error) {
                throw new Error(error);
            }
        }
        else if (data.name) {
            try {
                const product = await this.prisma.product.findMany({
                    where: {
                        name: data.name
                    }
                });
                return product;
            }
            catch (error) {
                throw new Error(error);
            }
        }
        else if (data.category) {
            try {
                const product = await this.prisma.product.findMany({
                    where: {
                        category: data.category
                    }
                });
                return product;
            }
            catch (error) {
                throw new Error(error);
            }
        }
        else if (data.price1 && data.price2) {
            try {
                const product = await this.prisma.product.findMany({
                    where: {
                        price: {
                            gte: data.price1,
                            lte: data.price2
                        }
                    }
                });
                return product;
            }
            catch (error) {
                throw new Error(error);
            }
        }
        else if (data.discount) {
            try {
                const product = await this.prisma.product.findMany({
                    where: {
                        discount: {
                            gt: 0.1
                        }
                    }
                });
                return product;
            }
            catch (error) {
                throw new Error(error);
            }
        }
        else {
            try {
                const product = await this.prisma.product.findMany();
                return product;
            }
            catch (error) {
                throw new Error(error);
            }
        }
    }
    async deleteProduct(id) {
        try {
            const product = await this.prisma.product.delete({
                where: {
                    id
                }
            });
            return product;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateProduct(id, data) {
        try {
            const product = await this.prisma.product.update({
                where: {
                    id
                },
                data
            });
            return product;
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map