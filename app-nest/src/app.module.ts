import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserController } from './user/user.controller.js';
import { UserModule } from './user/user.module.js';
import { ProductService } from './product/product.service.js';
import { ProductController } from './product/product.controller.js';

@Module({
  imports: [UserModule],
  controllers: [AppController, UserController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
