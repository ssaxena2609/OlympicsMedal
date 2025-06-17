export interface Country {
  code: string;
  name: string;
  gold: number;
  silver: number;
  bronze: number;
}

export interface CountryWithTotal extends Country {
  total: number;
}

export interface MedalsData {
  countries: Country[];
}

export type SortField = 'gold' | 'silver' | 'bronze' | 'total';

export type SortDirection = 'asc' | 'desc';

export interface SortState {
  field: SortField;
  direction: SortDirection;
}

export interface ErrorReport {
  error: Error;
  location: string;
  timestamp: string;
  userAgent: string;
}
