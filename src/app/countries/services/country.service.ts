import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) { }

  baseUrl = 'https://restcountries.eu/rest/v2/region/europe';
  regionBaseUrl = 'https://restcountries.eu/rest/v2/region/asia';

  getProducts(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl);
  }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.regionBaseUrl);
  }
}
