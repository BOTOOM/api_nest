import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
@Injectable()
export class RequestPokeapiService {

    url: string = 'https://pokeapi.co/api/v2/'

    constructor( private http: HttpService) {

    }
    get(  endpoint: string ) {
        return this.http.get(`${this.url}${endpoint}`)
        .pipe( map( response => response.data ) )
    }
}
