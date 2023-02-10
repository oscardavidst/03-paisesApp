import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  getClassButton(region: string): string {
    return region === this.regionActiva
      ? 'btn mx-1 btn-primary'
      : 'btn mx-1 btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
  }
}
