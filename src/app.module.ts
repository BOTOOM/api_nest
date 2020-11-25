import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokeapiModule } from './modules/pokeapi/pokeapi.module';
import { RequestPokeapiService } from './shared/request-pokeapi/request-pokeapi.service';
import { FirebaseService } from './shared/firebase/firebase.service';
import { FireModule } from './modules/fire/fire.module';

@Module({
  imports: [PokeapiModule, HttpModule, FireModule],
  controllers: [AppController],
  providers: [AppService, RequestPokeapiService, FirebaseService],
})
export class AppModule {}
