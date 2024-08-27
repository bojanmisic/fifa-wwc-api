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
     * The latitude and longitude coordinates of the country.
     */
    latlng: [Latitude, Longitude];
  
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