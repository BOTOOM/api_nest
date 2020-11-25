import { Injectable, Delete } from '@nestjs/common';
import { FirebaseService } from '../../shared/firebase/firebase.service';

@Injectable()
export class FireService {
    constructor( private firebaseService: FirebaseService ) {}

    getAll(){
        // console.log()
        return this.firebaseService.getAll().toPromise()
    }

    getOne ( id: any ){
        return this.firebaseService.getOne(id).toPromise()
    }

    post( data: any ) {
        return this.firebaseService.post(data).toPromise()
    }

    put ( id: any, data: any ){
        return this.firebaseService.put(data, id).toPromise()
    }

    delete ( id: any ){
        return this.firebaseService.delete(id).toPromise()
    }
}
