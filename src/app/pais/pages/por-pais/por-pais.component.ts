import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = 'Colombia';
  hayError404: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError404 = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (resp) => {
        console.log(resp);
        this.paises = resp;
        // resp[0].name.
      },
      (err) => {
        this.hayError404 = true;
        this.paises = [];
      }
    );
  }

  mostrarSugerencias(termino: string) {}
}
