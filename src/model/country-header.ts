import { CountryCode, PositiveNumber, Url } from "./types/index";
import { WorldRegion, WorldSubregion } from "./enums/index";

/**
 * Represents a country's header information including general geographic and demographic data.
 */
export interface CountryHeader {
    /**
     * The name of the country.
     */
    countryName: string;
  
    /**
     * The ISO 3166-1 alpha-3 country code.
     */
    countryCode: CountryCode;
  
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

    /**
     * The subregion (e.g., Caribbean, Melanesia) the country is part of.
     */
    subregion: WorldSubregion;

    /**
     * The URL to the team's icon or flag image in SVG format.
     */
    countryFlagSvgUrl: Url;
}