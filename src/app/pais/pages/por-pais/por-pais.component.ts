import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = 'termino';

  constructor() {}

  buscar() {
    console.log(this.termino);
  }
}
