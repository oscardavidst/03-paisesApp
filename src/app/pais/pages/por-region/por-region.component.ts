import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError404: boolean = false;

  constructor(private paisService: PaisService) {}

  getClassButton(region: string): string {
    return region === this.regionActiva
      ? 'btn mx-1 btn-primary'
      : 'btn mx-1 btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) return;
    this.paises = [];
    this.hayError404 = false;
    this.regionActiva = region;
    this.paisService.buscarRegion(region).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (err) => {
        this.hayError404 = true;
        this.paises = [];
      }
    );
  }
}
