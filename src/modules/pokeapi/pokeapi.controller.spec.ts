import { Test, TestingModule } from '@nestjs/testing';
import { PokeapiController } from './pokeapi.controller';

describe('PokeapiController', () => {
  let controller: PokeapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokeapiController],
    }).compile();

    controller = module.get<PokeapiController>(PokeapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
