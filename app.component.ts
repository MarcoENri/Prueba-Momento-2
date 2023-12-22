import { Component, OnInit } from '@angular/core';
import * as Superheroes from './superheroe';

@Component({
  selector: 'app-root',
  template: `
    <h1>Simulación de Combate</h1>
    <button (click)="iniciarCombate()">Iniciar Combate</button>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }

  async iniciarCombate() {
    const ironMan = new Superheroes.SuperheroeClase('Iron Man', 100);
    const batman = new Superheroes.SuperheroeClase('Batman', 100);

    while (ironMan.salud > 0 && batman.salud > 0) {
      const accionIronMan = await ironMan.elegirAccion();
      const accionBatman = await batman.elegirAccion();

      ironMan.realizarAccion(batman, accionIronMan);
      batman.realizarAccion(ironMan, accionBatman);

      console.log(`Salud de Iron Man: ${ironMan.salud}`);
      console.log(`Salud de Batman: ${batman.salud}`);
    }

    console.log(
      ironMan.salud > batman.salud
        ? 'Iron Man ha ganado.'
        : 'Batman ha ganado.'
    );
  }
}
