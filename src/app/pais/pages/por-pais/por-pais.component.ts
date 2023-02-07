import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = 'Colombia';
  hayError404: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar() {
    this.hayError404 = false;
    this.paisService.buscarPais(this.termino).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        this.hayError404 = true;
      }
    );
  }
}
