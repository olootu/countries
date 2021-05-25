import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CountryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });
});
