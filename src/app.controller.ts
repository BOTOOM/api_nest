import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('holi')
  // getHoli(): any {
  //   return this.appService.hola();
  // }

  // @Get('prueba')
  // getPrueba(): any {
  //   return this.appService.getPrueba();
  // }


  // @Get('palabra/:palabra')
  // getParametro(@Param('palabra') texto: string): any {
  //   console.log(texto)
  //   return this.appService.palabra(texto);
  // }
}
