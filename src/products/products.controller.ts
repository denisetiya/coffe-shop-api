import { genericProduct, Product } from 'src/utils/Interface';
import { Controller, Post, UploadedFile, Put,Get, Delete,UseInterceptors, Body, Res, Param, Query } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductsService } from './products.service';
import response from 'src/utils/Response';
import { Response } from 'express';
import { parse } from 'path';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Post('add')
  // @UseInterceptors(FileInterceptor('picture'))
  // async addProduct(
  //   @Body() body, 
  //   @UploadedFile() file: Express.Multer.File
  // ) {

  //   const productData = {
  //     name: body.name,
  //     price: parseInt(body.price),
  //     category: body.category,
  //     discount: parseInt(body.discount),
  //     description: body.description,
  //     recommended: body.recommended === 'true' || body.recommended === true,
  //     picture: file ? file.filename : null, 
  //   };
  //   return this.productsService.addProduct(productData);
  // }

  @Get('')
  async getProducts(@Query() data: genericProduct , @Res() res: Response) {
    const product = await this.productsService.getProducts(data);
    if (!product) {
        return response(res, 404, "", null, "Product not found");
    }
    if (Array.isArray(product)) {
      if (product.length === 0) {
        return response(res, 200, "No product found", null, null);
      }
    }
    return response(res, 200, "success get product", product);
  }

  // @Put('edit/:id')
  // async editProduct(@Param('id') id: string, @Body() data: Product, @Res() res: Response) {
  //   const product = await this.productsService.updateProduct(id, data);
  //   if (!product) {
  //       return response(res, 404, "", null, "Product not found");
  //   }

  //   return response(res, 200, "success edit product", product);
  // } 

  // @Delete('delete/:id')
  // async deleteProduct(@Param('id') id: string, @Res() res: Response) {
  //   const product = await this.productsService.deleteProduct(id);
  //   if (!product) {
  //       return response(res, 404, "", null, "Product not found");
  //   }

  //   return response(res, 200, "success delete product", product);
  // }


}
