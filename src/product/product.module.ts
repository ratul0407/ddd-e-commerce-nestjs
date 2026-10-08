import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProductsController } from './presentation/product.controller.js';

@Module({
  imports: [CqrsModule],
  controllers: [ProductsController],
  providers: [],
})
export class ProductModule {}
