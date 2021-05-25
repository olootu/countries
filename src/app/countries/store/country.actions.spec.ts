import * as fromCountry from './country.actions';

describe('loadCountries', () => {
  const list: any = null;
  it('should return an action', () => {
    expect(fromCountry.retrievedCountryList(list).type).toBe('[Country List/API] Retrieve Country Success');
  });

  it('should return region action', () => {
    expect(fromCountry.retrievedRegionList(list).type).toBe('[Region List/API] Retrieve Region Success');
  });
});
