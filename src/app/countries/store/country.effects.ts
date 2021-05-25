import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, exhaustMap } from 'rxjs/operators';
import { CountryService } from '../services/country.service';
import * as fromProductActions from './country.actions';
import { of } from 'rxjs';



@Injectable()
export class CountryEffects {

  constructor(private actions$: Actions, private countryService: CountryService) { }

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(fromProductActions.retrievedCountryList),
    exhaustMap(() => this.countryService.getProducts()
      .pipe(
        map(country => fromProductActions.retrievedCountryList({ country })),
        catchError(error => of(fromProductActions.retrievedCountryListFailure({ error }))
        )
      ))
  )
  );

  loadregions$ = createEffect(() => this.actions$.pipe(
    ofType(fromProductActions.retrievedRegionList),
    exhaustMap(() => this.countryService.getRegions()
      .pipe(
        map(region => fromProductActions.retrievedRegionList({ region })),
        catchError(error => of(fromProductActions.retrievedCountryListFailure({ error }))
        )
      ))
  )
  );
}
