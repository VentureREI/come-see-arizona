export interface County {
  slug: string;
  name: string;
  population: number;
  medianHomePrice: number;
  description: string;
  citySlugs: string[];
  highlights: string[];
  lat: number;
  lng: number;
}

export interface City {
  slug: string;
  name: string;
  countySlug: string;
  population: number;
  medianHomePrice: number;
  medianHouseholdIncome: number;
  description: string;
  neighborhoodSlugs: string[];
  zipCodes: string[];
  schoolDistrictSlugs: string[];
  highlights: string[];
  thingsToDo: string[];
  lat: number;
  lng: number;
}

export interface Neighborhood {
  slug: string;
  name: string;
  citySlug: string;
  countySlug: string;
  zipCodes: string[];
  description: string;
  medianHomePrice: number;
  homeTypes: string[];
  vibe: string;
  nearbySchools: string[];
  walkScore: number;
  highlights: string[];
}

export interface ZipCode {
  zip: string;
  citySlug: string;
  countySlug: string;
  neighborhoodSlugs: string[];
  population: number;
  medianHomePrice: number;
  medianRent: number;
  medianAge: number;
  description: string;
  schoolDistrictSlugs: string[];
  highlights: string[];
}

export interface SchoolDistrict {
  slug: string;
  name: string;
  citySlugs: string[];
  countySlug: string;
  rating: string;
  totalSchools: number;
  studentCount: number;
  description: string;
  zipCodes: string[];
  notableSchools: string[];
  highlights: string[];
}
