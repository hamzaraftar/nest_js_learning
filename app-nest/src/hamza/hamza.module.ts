import { Module } from '@nestjs/common';
import { HamzaService } from './hamza.service.js';
import { HamzaController } from './hamza.controller.js';

@Module({
  controllers: [HamzaController],
  providers: [HamzaService],
})
export class HamzaModule {}
