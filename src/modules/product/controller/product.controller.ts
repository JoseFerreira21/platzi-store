import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  //Res,
  //HttpStatus,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
//import { identity } from 'rxjs';

import { ProductService } from './../service/product.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private productsService: ProductService) {}
  //Cuando tenemos dos urls con los mismo nombre, es decir mismas rutas
  //Es recomendado siempre agregar primero todas las rutas dinámicas
  //y luego la que reciben parámetros fijos
  @Get()
  getProducts() {
    return this.productsService.findAll();
  }
  //Forma más básica de getOne
  /*@Get(':productId')
  getOne(@Param('productId') productId: number) {
    return this.productsService.findOne(+productId);
  }*/

  //Los controladores tienen un fallo, sucede que el tipado funciona para la
  //programación, pero al transpilarse sigue siendo JavaScript, por lo que
  //los parámetros id siguen siendo strings y al operar con find en el
  //array no retorna el objeto porque compara number === string,
  //podemos evitar esto con los pipes de nestjs y la implementación
  //quedaría así
  //
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return { msg: `Producto ${id}`, body: this.productsService.findOne(id) };
  }

  //Para peticiones de varios productos.
  //http://localhost:3000/products?limit=1000&offset=1500
  //http://localhost:3000/products?brand=xyz
  /*@Get('products')
  getProducts(
    @Query('limit') limit: 100,
    @Query('offset') offset: 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`;
  }*/

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }
  //Existe otra manera de retornar una respuesta tipo JSON y manejar distintos status de la petición y es con el decorador @Res(),
  /*@Post('')
  postProducto(@Res() res: Response, @Body() payload: any) {
    return res.status(HttpStatus.OK).json({
      msg: 'Add a new product',
      payload,
    });
  }*/
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
