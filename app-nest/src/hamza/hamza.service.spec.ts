import { Test, TestingModule } from '@nestjs/testing';
import { HamzaService } from './hamza.service.js';

describe('HamzaService', () => {
  let service: HamzaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HamzaService],
    }).compile();

    service = module.get<HamzaService>(HamzaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
