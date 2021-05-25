import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryService } from './services/country.service';
import { StoreModule } from '@ngrx/store';
import * as fromCountryState from './store';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './store/country.effects';
import { RegionListComponent } from './components/region-list/region-list.component';

@NgModule({
  declarations: [
    RegionListComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromCountryState.countryRegionFeatureKey,
      fromCountryState.countryReducer,
      { metaReducers: fromCountryState.metaReducers },
      ),
    EffectsModule.forFeature([CountryEffects])],
  providers: [CountryService],
  exports: [
    ReactiveFormsModule,
    RegionListComponent
  ]
})
export class CountriesModule { }
