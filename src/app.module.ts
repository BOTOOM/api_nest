import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokeapiModule } from './modules/pokeapi/pokeapi.module';

@Module({
  imports: [PokeapiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
