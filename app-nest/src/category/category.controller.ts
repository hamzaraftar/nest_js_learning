import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service.js';

@Controller('category')
export class CategoryController {
  constructor(private readonly catagoryServide: CategoryService) {}
  @Get()
  getAllCategories() {
    return this.catagoryServide.getCategories();
  }
}
