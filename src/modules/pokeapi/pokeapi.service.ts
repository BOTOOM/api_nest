import { HttpException, Injectable } from '@nestjs/common';
import { RequestPokeapiService } from '../../shared/request-pokeapi/request-pokeapi.service';

@Injectable()
export class PokeapiService {

    constructor(
        private readonly requestPokeapiService: RequestPokeapiService
    ) { }

    async GetLista() {
        // try {
        //     const item = await this.traerUnPokemon()
        // const respuesta = {
        //     Pokemon: item,
        //     Lista: await this.traerLista()
        // }
        // return respuesta
        // } catch (error) {
        //     console.log(error)
        // }

        try {
            const item = await this.traerUnPokemon()
            const respuesta = {
                Pokemon: item,
                Lista: await this.traerLista()
            }
            return respuesta
        } catch (error) {
            if (error.response != null)
            console.log(error)
            throw new HttpException(error.message, error.status)
        }
    }


    async traerLista() {
        try {
            const lista = await this.requestPokeapiService.get('pokemones?offset=1&limit=2').toPromise()
            return lista
            // return this.requestPokeapiService.get('pokemones?offset=1&limit=2').toPromise()
        } catch (error) {
            throw new HttpException('falle al consultal la lista', 400)
        }
    }

    async traerUnPokemon() {
        try {
            const individual = await this.requestPokeapiService.get('pokemon/4/').toPromise()
            return individual
        } catch (error) {
            console.log('FALLO')
            throw new HttpException('falle al consultal el pokemon', 400)
        }
    }
}
