
export enum Habilidad {
    Atack = 'Atack',
    Defens = 'Defens',
  }
  
  export interface Superheroe {
    nombre: string;
    salud: number;
    elegirAccion: () => Promise<Habilidad>; 
    realizarAccion: (enemi: Superheroe, accion: Habilidad) => void;
  }
  
  export class SuperheroeClase implements Superheroe {
    constructor(
      public nombre: string,
      public salud: number,
    ) {}
  
    elegirAccion(): Promise<Habilidad> {
      return new Promise<Habilidad>((resolve) => {
        const eleccion = prompt(`${this.nombre}, ¿atacar (A) o defender (D)?`);
        if (eleccion && eleccion.toUpperCase() === 'A') {
          resolve(Habilidad.Atack);
        } else {
          resolve(Habilidad.Defens);
        }
      });
    }
  
    realizarAccion(enemigo: Superheroe, accion: Habilidad) {
      if (accion === Habilidad.Atack) {
        console.log(`${this.nombre} realiza un ataque.`);
        enemigo.salud -= 10;
      } else if (accion === Habilidad.Defens) {
        console.log(`${this.nombre} realiza una defensa.`);
        this.salud += 5;
      }
    }
  }
  
  export function simularCombate(heroe1: Superheroe, heroe2: Superheroe) {
    
  }
  