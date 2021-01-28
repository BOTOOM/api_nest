import { Controller, Get, Post, Put, Param, Query, Body } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PokeapiService } from './pokeapi.service';

@ApiTags('pokeapi')
@Controller('pokeapi')
export class PokeapiController {

    constructor( private readonly pokeapiService: PokeapiService ){}

    @Get('ListaPokemon')
    GetLista() {
        return this.pokeapiService.GetLista()
    }

    // param - get, post , put, delete
    @Get('pokemon/:idPokemon')
    obtenerPokemon(@Param('idPokemon') id: string ) {
        console.log(`el numero del pokemon es: ${id}`)
        return this.pokeapiService.traerUnPokemonId(id)

    }

    // query - get, post , put, delete
    @Get('limiteLista')
    traerLista(@Query('desde') inicio: number, @Query('cuantos') cantidad: number) {
        return this.pokeapiService.traerLista(inicio, cantidad)

    }

    // body - post y put
    @Post('ingreso')
    @ApiBody({ type: Object })
    ingresoDato(@Body() datos: any ) {
        return this.pokeapiService.procesamiento(datos)
    }
}
