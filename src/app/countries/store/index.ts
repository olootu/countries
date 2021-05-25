import {
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Country } from '../models/country';
import { Region } from '../models/region';
import { retrievedCountryList, retrievedRegionList} from './country.actions';


export const countryRegionFeatureKey = 'country';

export interface CountryState {
  countries: Country[];
  region: Region[];
}


export const initialState: CountryState = {
  countries: [],
  region: []

};

export const countryReducer = createReducer(
  initialState,
  on(retrievedCountryList, (state, action) => {
    return {
       ...state,
       countries: action.country,
    };
  }),
  on(retrievedRegionList, (state, action) => {
    return {
       ...state,
       region: action.region,
    };
  }),
);

export const selectCountriesFeature = createFeatureSelector<CountryState>(
  countryRegionFeatureKey
);

export const selectCountries = createSelector(
  selectCountriesFeature, (state: CountryState) => state.countries
);

export const selectRegionFeature = createFeatureSelector<CountryState>(
  countryRegionFeatureKey
);

export const selectRegions = createSelector(
  selectRegionFeature, (state: CountryState) => state.region
);

export const metaReducers: MetaReducer<CountryState>[] = !environment.production ? [] : [];
