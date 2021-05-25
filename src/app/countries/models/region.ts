export interface Region {
  name: string;
  topLevelDomain: [];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: [];
  capital: string;
  altSpellings: [];
  region: string;
  subregion: string;
  population: number;
  latlng: [];
  demonym: string;
  area: number;
  gini: any;
  timezones: any;
  borders: [];
  nativeName: string;
  numericCode: number;
  currencies: Currencies[];
  languages: Languages[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBlocks[];
  cioc: string;
  }

export interface Currencies {
  code: string;
  name: string;
  symbol: string;
}

export interface Languages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface RegionalBlocks {
  acronym: string;
  name: string;
  otherAcronyms: [];
  otherNames: [];
}

export interface Translations {
  de: string;
  es: any;
  fr: string;
  ja: any;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}
