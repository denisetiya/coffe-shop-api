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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const products_service_1 = require("./products.service");
const Response_1 = require("../utils/Response");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async addProduct(body, file) {
        const productData = {
            name: body.name,
            price: parseInt(body.price),
            category: body.category,
            discount: parseInt(body.discount),
            description: body.description,
            recommended: body.recommended === 'true' || body.recommended === true,
            picture: file ? file.filename : null,
        };
        return this.productsService.addProduct(productData);
    }
    async getProducts(data, res) {
        const product = await this.productsService.getProducts(data);
        if (!product) {
            return (0, Response_1.default)(res, 404, "", null, "Product not found");
        }
        if (Array.isArray(product)) {
            if (product.length === 0) {
                return (0, Response_1.default)(res, 200, "No product found", null, null);
            }
        }
        return (0, Response_1.default)(res, 200, "success get product", product);
    }
    async editProduct(id, data, res) {
        const product = await this.productsService.updateProduct(id, data);
        if (!product) {
            return (0, Response_1.default)(res, 404, "", null, "Product not found");
        }
        return (0, Response_1.default)(res, 200, "success edit product", product);
    }
    async deleteProduct(id, res) {
        const product = await this.productsService.deleteProduct(id);
        if (!product) {
            return (0, Response_1.default)(res, 404, "", null, "Product not found");
        }
        return (0, Response_1.default)(res, 200, "success delete product", product);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)('add'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('picture')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Put)('edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "editProduct", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map