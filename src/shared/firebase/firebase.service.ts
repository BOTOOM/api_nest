import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseService {

    url = 'https://nest-prueba.firebaseio.com/Datos-pruebas';

    constructor ( private http: HttpService ) {

    }

    getAll() {
        return this.http.get(`${this.url}.json`).pipe( map( response => response.data ) )
    }

    getOne( id: any ) {
        return this.http.get( `${this.url}/${id}.json`  )
        .pipe( map( response => response.data ) )
    }

    post( elemento: any ) {
        return this.http.post( `${this.url}.json`, elemento  )
        .pipe( map( response => response.data ) )
    }

    put( elemento: any, id: any ) {
        return this.http.put( `${this.url}/${id}.json`, elemento  )
        .pipe( map( response => response.data ) )
    }

    delete( id: any ) {
        return this.http.delete( `${this.url}/${id}.json`  )
        .pipe( map( response => response.data ) )
    }
}
