import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.paisService.getPaisPorAlpha(params['id'])),
        tap(console.log)
      )
      .subscribe((resp) => (this.pais = resp[0]));

    // this.activatedRoute.params.subscribe((params) => {
    //   this.paisService.getPaisPorAlpha(params['id']).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
