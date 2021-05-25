import { createAction, props } from '@ngrx/store';
import { Country } from '../models/country';
import { Region } from '../models/region';

export const retrievedCountryList = createAction(
  '[Country List/API] Retrieve Country Success',
  props<{ country: Country[] }>()
);

export const retrievedCountryListFailure = createAction(
  '[Country Effect] Load Country Failure',
  props<{ error: any }>()
);

export const retrievedRegionList = createAction(
  '[Region List/API] Retrieve Region Success',
  props<{ region: Region[] }>()
);

export const retrievedRegionListFailure = createAction(
  '[Region Effect] Load Region Failure',
  props<{ error: any }>()
);


