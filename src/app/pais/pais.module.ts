import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';

@NgModule({
  declarations: [
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent,
  ],
  exports: [
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent,
  ],
  imports: [CommonModule],
})
export class PaisModule {}