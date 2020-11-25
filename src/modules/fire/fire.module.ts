import { Module, HttpModule } from '@nestjs/common';
import { FireController } from './fire.controller';
import { FireService } from './fire.service';
import { FirebaseService } from '../../shared/firebase/firebase.service';

@Module({
  imports: [HttpModule],
  controllers: [FireController],
  providers: [FireService, FirebaseService]
})
export class FireModule {}
