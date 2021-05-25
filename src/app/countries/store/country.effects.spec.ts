import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { CountryEffects } from './country.effects';

describe('CountryEffects', () => {
  const actions$: Observable<any> = null;
  let effects: CountryEffects = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CountryEffects,
        provideMockActions(() => actions$)
      ]
    });
    effects = TestBed.get(CountryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
