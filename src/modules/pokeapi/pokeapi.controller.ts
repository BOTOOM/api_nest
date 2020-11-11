import { Controller, Get } from '@nestjs/common';
import { PokeapiService } from './pokeapi.service';


@Controller('pokeapi')
export class PokeapiController {

    constructor( private readonly pokeapiService: PokeapiService ){}

    @Get('Lista')
    GetLista() {
        return this.pokeapiService.GetLista()
    }
}
