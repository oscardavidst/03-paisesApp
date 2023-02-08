import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = 'Bogotá';
  hayError404: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError404 = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe(
      (resp) => {
        console.log(resp);
        this.paises = resp;
      },
      (err) => {
        this.hayError404 = true;
        this.paises = [];
      }
    );
  }

  mostrarSugerencias(termino: string) {}
}
