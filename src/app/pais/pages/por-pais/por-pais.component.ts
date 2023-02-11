import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      .list-group-item-action {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = 'Colombia';
  hayError404: boolean = false;
  paises: Country[] = [];
  sugerencias: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError404 = false;
    this.sugerencias = [];
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (err) => {
        this.hayError404 = true;
        this.paises = [];
      }
    );
  }

  mostrarSugerencias(termino: string) {
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      (resp) => (this.sugerencias = resp.splice(0, 5)),
      (err) => (this.sugerencias = [])
    );
  }
}
