import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Country } from 'src/app/countries/models/country';
import { Region } from 'src/app/countries/models/region';
import { CountryState, selectCountries, selectRegions } from 'src/app/countries/store';
import { retrievedCountryList, retrievedRegionList } from 'src/app/countries/store/country.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showAsia: boolean;
  showEurope: boolean;
  regionOption: any[] = [
    {name: 'Europe', value: 'europe'},
    {name: 'Asia', value: 'asia'}
  ];
  euroCountries$: Observable<Country[]> = this.store.pipe(select(selectCountries));
  asiaCountries$: Observable<any[]> = this.store.pipe(select(selectRegions));
  singleCountry: any[] = [];
  allCountries$: Observable<any[]>;

  constructor(
    private store: Store<CountryState>
  ) { }

  ngOnInit() {
    this.store.dispatch(retrievedCountryList({country: this.singleCountry}));
    this.store.dispatch(retrievedRegionList({region: this.singleCountry}));
    this.combinedData();
  }

  combinedData() {
    this.allCountries$ = combineLatest(this.euroCountries$, this.asiaCountries$).pipe(
      map(([ctr, others]) => ctr.concat(others)));
  }

  onOptionChange(value) {
    const filteredCountries = this.allCountries$.pipe(
      map(ctr => ctr.filter(res => res.name === value))
    );
    filteredCountries.subscribe(s => {
      this.singleCountry = s;
    });
  }

  onChange(event) {
    if (event === 'Asia') {
      this.showAsia = true;
      this.showEurope = false;
    } else {
      if (event === 'Europe') {
        this.showAsia = false;
        this.showEurope = true;
      } else {
        if (event === 'null') {
          this.showAsia = false;
          this.showEurope = false;
        }
      }
    }
  }

}
