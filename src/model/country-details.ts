import { CountryCode, Latitude, Longitude, PositiveNumber, Timezone } from "./types/index";
import { WorldRegion, WorldSubregion } from "./enums/index";

/**
 * Represents detailed geographic and demographic information for a country.
 */
export interface CountryDetails {
    /**
     * The ISO 3166-1 alpha-3 country code, used as a unique identifier.
     */
    countryCode: CountryCode;

    /**
     * The FIFA country code, used as a unique identifier.
     */
    fifaCode: CountryCode;
  
    /**
     * The official name of the country.
     */
    countryName: string;
  
    /**
     * The total area of the country in square kilometers.
     */
    area: PositiveNumber;
  
    /**
     * The population of the country.
     */
    population: PositiveNumber;
  
    /**
     * The region (continent) where the country is located (e.g., Europe, Americas).
     */
    region: WorldRegion;
  
    /**
     * The subregion within the continent (e.g., Northern Europe, South America).
     */
    subregion: WorldSubregion;
  
    /**
     * The capital city of the country.
     */
    capital: string;
  
    /**
     * An array of official languages spoken in the country.
     */
    languages: string[];
  
    /**
     * An array of currencies used in the country.
     */
    currencies: string[];

    /**
     * The latitude of the country.
     */
    latitude: Latitude;

    /**
     * The longitude of the country.
     */
    longitude: Longitude;
    
    /**
     * An array of timezones the country spans.
     */
    timezones: Timezone[];
  
    /**
     * An array of countries that share a border with this country, represented by their country codes.
     */
    borders: CountryCode[];
  
    /**
     * Indicates whether the country is recognized as an independent state.
     */
    independent: boolean;
  }

/**
 * Represents a filter for filtering country details based on various criteria.
 */
export interface CountryDetailsFilter {  
    /**
     * The minimum area to filter countries by.
     */
    minArea?: PositiveNumber;
  
    /**
     * The maximum area to filter countries by.
     */
    maxArea?: PositiveNumber;
  
    /**
     * The minimum population to filter countries by.
     */
    minPopulation?: PositiveNumber;
  
    /**
     * The maximum population to filter countries by.
     */
    maxPopulation?: PositiveNumber;
  
    /**
     * The region (continent) to filter countries by.
     */
    region?: WorldRegion;
  
    /**
     * The subregion within the continent to filter countries by.
     */
    subregion?: WorldSubregion;
  
    /**
     * A specific language to filter countries by.
     */
    languages?: string[];
  
    /**
     * A specific currency to filter countries by.
     */
    currencies?: string[];
  
    /**
     * The minimum latitude to filter countries by.
     */
    minLatitude?: Latitude;
  
    /**
     * The maximum latitude to filter countries by.
     */
    maxLatitude?: Latitude;
    
    /**
     * The minimum longitude to filter countries by.
     */
    minLongitude?: Longitude;

    /**
     * The maximum longitude to filter countries by.
     */
    maxLongitude?: Longitude;
  
    /**
     * A specific timezone to filter countries by.
     */
    timezones?: Timezone[];
  
    /**
     * A country code to filter by, for countries that share a border with the specified country.
     */
    borders?: CountryCode[];
  
    /**
     * Whether the country is recognized as an independent state.
     */
    independent?: boolean;
  }