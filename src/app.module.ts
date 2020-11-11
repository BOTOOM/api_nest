import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokeapiModule } from './modules/pokeapi/pokeapi.module';
import { RequestPokeapiService } from './shared/request-pokeapi/request-pokeapi.service';

@Module({
  imports: [PokeapiModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, RequestPokeapiService],
})
export class AppModule {}
