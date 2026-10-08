import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProductsController } from './presentation/product.controller.js';
import { PRODUCT_REPOSITORY } from './application/ports/product.repository.port.js';
import { DrizzleProductRepository } from './infrastructure/adapters/drizzle-product.repository.js';
import { CommandHandlers } from './application/use-cases/index.js';

@Module({
  imports: [CqrsModule],
  controllers: [ProductsController],
  providers: [
    ...CommandHandlers,
    {
      provide: PRODUCT_REPOSITORY,
      useClass: DrizzleProductRepository,
    },
  ],
})
export class ProductModule {}
