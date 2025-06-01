import { Test, TestingModule } from '@nestjs/testing';
import { MotoresController } from './motores.controller';

describe('MotoresController', () => {
  let controller: MotoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotoresController],
    }).compile();

    controller = module.get<MotoresController>(MotoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
