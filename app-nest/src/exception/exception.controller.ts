import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http-exception/http-exception.filter.js';

@Controller('exception')
@UseFilters(HttpExceptionFilter)
export class ExceptionController {
  @Get('hello/:id')
  getHellow(@Param('id', ParseIntPipe) id: number) {
    return { message: `your id is ${id}` };
  }
}
