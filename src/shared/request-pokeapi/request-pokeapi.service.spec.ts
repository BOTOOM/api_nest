import { Test, TestingModule } from '@nestjs/testing';
import { RequestPokeapiService } from './request-pokeapi.service';

describe('RequestPokeapiService', () => {
  let service: RequestPokeapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestPokeapiService],
    }).compile();

    service = module.get<RequestPokeapiService>(RequestPokeapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
