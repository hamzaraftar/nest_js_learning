import { Test, TestingModule } from '@nestjs/testing';
import { HamzaController } from './hamza.controller.js';
import { HamzaService } from './hamza.service.js';

describe('HamzaController', () => {
  let controller: HamzaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HamzaController],
      providers: [HamzaService],
    }).compile();

    controller = module.get<HamzaController>(HamzaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
