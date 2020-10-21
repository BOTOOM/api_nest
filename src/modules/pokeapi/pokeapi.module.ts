import { Module } from '@nestjs/common';
import { PokeapiController } from './pokeapi.controller';
import { PokeapiService } from './pokeapi.service';

@Module({
  controllers: [PokeapiController],
  providers: [PokeapiService]
})
export class PokeapiModule {}
