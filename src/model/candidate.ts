import { WorldRegion } from "./enums/world-region.enum";
import { WorldSubregion } from "./enums/world-subregion.enum";
import { CountryCode } from "./types/country-code.type";
import { PositiveNumber } from "./types/positive-number.type";
import { Url } from "./types/url.type";

/**
   * Represents a candidate country for hosting the FIFA World Cup.
   * Combines key data from both the team and country perspectives.
   */
export interface Candidate {
    /**
     * The ISO 3166-1 alpha-3 country code.
     * @isString Must be string with 3 characters
     * @minLength 3 Must be string with 3 characters
     * @maxLength 3 Must be string with 3 characters
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
     * The subregion (e.g., Caribbean, Melanesia) the country is part of.
     */
    subregion: WorldSubregion;
  
    /**
     * The capital city of the country.
     */
    capital: string;

    /**
     * The name of the team, usually the name of the country it represents.
     */
    teamName: string;

    /**
     * The URL to the team's icon or flag image in SVG format.
     */
    teamIconSvgUrl: Url;

    /**
     * The URL to the team's icon or flag image in SVG format.
     */
    countryFlagSvgUrl: Url;
  }

  /**
   * Represents a filter for filtering candidates based on various criteria.
   */
  export interface CandidateFilter {
    /**
     * The minimum area to filter candidates by.
     */
    minArea?: PositiveNumber;
    /**
     * The maximum area to filter candidates by.
     */
    maxArea?: PositiveNumber;
    /**
     * The minimum population to filter candidates by.
     */
    minPopulation?: PositiveNumber;
    /**
     * The maximum population to filter candidates by.
     */
    maxPopulation?: PositiveNumber;
    /**
     * The region (continent) to filter candidates by.
     */
    region?: WorldRegion;
    /**
     * The subregion (e.g., Caribbean, Melanesia) to filter candidates by.
     */
    subregion?: WorldSubregion;
  }