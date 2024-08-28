import { CountryCode, PositiveNumber, Url } from "./types/index";
import { FifaFederation, WorldRegion, WorldSubregion } from "./enums/index";

/**
   * Represents a candidate country for hosting the FIFA World Cup.
   * Combines key data from both the team and country perspectives.
   */
export interface Candidate {
    /**
     * The ISO 3166-1 alpha-3 country code.
     */
    countryCode: CountryCode;
  
    /**
     * The official name of the country.
     */
    countryName: string;
  
    /**
     * The FIFA ranking of the team, where a lower number indicates a higher rank.
     * This value is optional and may not be present for all teams.
     */
    fifaRank: PositiveNumber;
  
    /**
     * The football federation the team belongs to (e.g., UEFA, CONMEBOL).
     */
    federation: FifaFederation;
  
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
     * The minimum FIFA rank to filter candidates by.
     */
    minFifaRank?: PositiveNumber;
    /**
     * The maximum FIFA rank to filter candidates by.
     */
    maxFifaRank?: PositiveNumber;
    /**
     * The FIFA federation to filter candidates by.
     */
    federation?: FifaFederation;
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