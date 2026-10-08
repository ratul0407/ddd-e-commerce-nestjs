import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto.js';
import { ProductResponseDto } from './dtos/product-response.dto.js';
import { CommandBus } from '@nestjs/cqrs';
import { CreateProductCommand } from '../application/use-cases/create-product/create-product.command.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly commandBus: CommandBus) {}
  @Post()
  async create(@Body() dto: CreateProductDto): Promise<void> {
    await this.commandBus.execute(
      new CreateProductCommand(
        dto.name,
        dto.currency || 'USD',
        dto.description,
        dto.price,
        dto.sku,
        dto.stock,
      ),
    );
  }
}
