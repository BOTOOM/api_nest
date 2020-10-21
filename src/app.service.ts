import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  frase = 'ACMUD'
  personas: User[]

  constructor() {
    this.getPrueba();
  }


  getPrueba() {
    // const algo = ['holi']
    // // console.log(algo)
    // algo.push('como estan')
    // algo.push(this.frase)
    // console.log(algo)
    const usuario: User = {
      Nombre: 'Edwar',
      Edad: 23,
    }
    // console.log(usuario)
    // console.log(usuario.Genero)
    // console.log(`La edad es ${usuario.Edad}`)
    // console.log( this.multiplicar(4, 5, 15) )

    // this.personas.push()

    this.personas = [
      {
        Nombre: 'persona 0',
        Edad: 20
      },
      {
        Nombre: 'persona 1',
        Edad: 16
      },
      {
        Nombre: 'persona 2',
        Edad: 8
      },
      {
        Nombre: 'persona 3',
        Edad: 52
      },
      {
        Nombre: 'persona 4',
        Edad: 37,
        Genero : 'Msculino'
      }
    ]

    // console.log(this.personas)

    // const filtro = this.personas.filter(  data => data.Edad > 17   )
    // console.log(filtro)
    const mapeo = this.personas.map( dato => {
      const obj = {
        Nombre : dato.Nombre,
        Vejez: `su vejez es de: ${dato.Edad} `,
        algo: this.suma(5, 8)
      }
      return obj
    } )
    // console.log(mapeo)


  }

  multiplicar(a: number, b: number, c?: number) {
    if (c) {
      return (a * b * c)
    } else {
      return (a * b)
    }
  }

  getHello(): string {
    return 'HOLA MUNDO! de nuevoo';
  }

  hola() {
    return { mensaje: 'Hola a todos' }
  }

  palabra(texto: string) {
    // return { mensaje: 'su palabra ingresada es: ' + texto + ' hdfgft' }
    return { mensaje: `su palabra ingresada es: ${texto} y ${this.suma(5, 8)} :D` }
  }

  // a: numbr , b: number
  suma(a: number, b: number) {
    const c = a + b
    return `la suma es: ${c}`
  }
}

interface User {
  Nombre: string,
  Edad: number,
  Genero?: string
  Altura?: number
}
