import { WorldRegion } from "./enums/worldRegion";

/**
 * Represents a country's header information including general geographic and demographic data.
 */
export interface CountryHeader {
    /**
     * The name of the country.
     */
    country_name: string;
  
    /**
     * The ISO 3166-1 alpha-3 country code.
     */
    country_code: CountryCode;
  
    /**
     * The total area of the country in square kilometers.
     */
    area: PositiveNumber;
  
    /**
     * The population of the country.
     */
    population: PositiveNumber;
  
    /**
     * The region (continent) the country is part of (e.g., Europe, Asia).
     */
    region: WorldRegion;
}