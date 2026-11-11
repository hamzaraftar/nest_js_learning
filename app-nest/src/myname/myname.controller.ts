import { Body, Controller, Post } from '@nestjs/common';
import { UpercasePipe } from '../common/pippes/upercase/upercase.pipe.js';

@Controller('myname')
export class MynameController {
  @Post()
  transoformName(@Body('name', new UpercasePipe()) name: string) {
    return { message: `Received name: ${name}` };
  }
}
