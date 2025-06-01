import { Test, TestingModule } from '@nestjs/testing';
import { MotoresService } from './motores.service';

describe('MotoresService', () => {
  let service: MotoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MotoresService],
    }).compile();

    service = module.get<MotoresService>(MotoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
