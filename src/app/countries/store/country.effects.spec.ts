import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { CountryEffects } from './country.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CountryEffects', () => {
  const actions$: Observable<any> = null;
  let effects: CountryEffects = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CountryEffects,
        provideMockActions(() => actions$)
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    effects = TestBed.get(CountryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
