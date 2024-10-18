import { genericProduct, Product } from 'src/utils/Interface';
import { Controller, Post, UploadedFile, UseInterceptors, Body, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductsService } from './products.service';
import response from 'src/utils/Response';
import { Response } from 'express';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('add')
  @UseInterceptors(FileInterceptor('picture'))
  async addProduct(
    @Body() body, 
    @UploadedFile() file: Express.Multer.File
  ) {
    const productData = {
      name: body.name,
      price: body.price,
      category: body.category,
      discount: body.discount,
      description: body.description,
      picture: file ? file.filename : null, 
    };
    return this.productsService.addProduct(productData);
  }

  async getProducts(@Body() data: Product, @Res() res: Response) {
    const product = await this.productsService.getProducts(data);
    if (!product) {
        return response(res, 404, "", null, "Product not found");
    }

    return response(res, 200, "success get product", product);

  }


}
