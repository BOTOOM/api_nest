import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'HOLA MUNDO! de nuevoo';
  }

  hola() {
    return { mensaje: 'Hola a todos' }
  }

  palabra( texto: string ) {
    // return { mensaje: 'su palabra ingresada es: ' + texto + ' hdfgft' }
    return { mensaje: `su palabra ingresada es: ${texto} y ${this.suma(5,8)} :D` }
  }

  // a: numbr , b: number
  suma(a: number, b : number  ) {
    const c =a +b
    return `la suma es: ${c}`
  }
}
