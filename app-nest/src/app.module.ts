import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserController } from './user/user.controller.js';
import { UserModule } from './user/user.module.js';
import { ProductService } from './product/product.service.js';
import { ProductController } from './product/product.controller.js';
import { EmployeeModule } from './employee/employee.module.js';
import { CategoryModule } from './category/category.module.js';
import { StudentModule } from './student/student.module.js';
import { HamzaModule } from './hamza/hamza.module.js';
import { CustomerModule } from './customer/customer.module.js';
import { MynameController } from './myname/myname.controller.js';
import { ExceptionController } from './exception/exception.controller.js';
import { LoggerMiddleware } from './middleware/logger/logger.middleware.js';
import { DatabaseService } from './database/database.service.js';
import { DatabaseController } from './database/database.controller.js';

@Module({
  imports: [UserModule, EmployeeModule, CategoryModule, StudentModule, HamzaModule, CustomerModule],
  controllers: [AppController, UserController, ProductController, MynameController, ExceptionController, DatabaseController],
  providers: [AppService, ProductService, DatabaseService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
