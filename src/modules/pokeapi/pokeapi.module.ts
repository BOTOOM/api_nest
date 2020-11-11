import { Module, HttpModule } from '@nestjs/common';
import { PokeapiController } from './pokeapi.controller';
import { PokeapiService } from './pokeapi.service';
import { RequestPokeapiService } from '../../shared/request-pokeapi/request-pokeapi.service';


@Module({
  imports: [HttpModule],
  controllers: [PokeapiController],
  providers: [PokeapiService, RequestPokeapiService]
})
export class PokeapiModule {}
