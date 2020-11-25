import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FireService } from './fire.service';

@Controller('fire')
export class FireController {
    constructor( private fireService: FireService, ) {}

    @Get('GetAll')
    getAll() {
        return this.fireService.getAll()
    }

    @Get(':idRegistro')
    getOne( @Param('idRegistro') id: string ) {
        return this.fireService.getOne(id)
    }

    @Post()
    post(@Body() datos: any) {
        return this.fireService.post(datos)
    }

    @Put(':idRegistro')
    put( @Param('idRegistro') id: string, @Body() datos: any ) {
        return this.fireService.put(id, datos)
    }

    @Delete(':idRegistro')
    delete( @Param('idRegistro') id: string ) {
        return this.fireService.delete(id)
    }
}
