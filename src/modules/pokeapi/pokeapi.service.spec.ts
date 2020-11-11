import { Test, TestingModule } from '@nestjs/testing';
import { PokeapiService } from './pokeapi.service';

describe('PokeapiService', () => {
  let service: PokeapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokeapiService],
    }).compile();

    service = module.get<PokeapiService>(PokeapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
