import { CountryCode, PositiveNumber, Url } from "./types/index";
import { FifaFederation } from "./enums/index";

/**
 * Represents the essential header information for a FIFA team.
 */
export interface TeamHeader {
    
    /**
     * The ISO 3166-1 alpha-3 country code, used for cross-referencing with country data.
     */
    countryCode: CountryCode;
  
    /**
     * The name of the team, usually the name of the country it represents.
     */
    teamName: string;

    /**
     * The URL to the team's icon or flag image in SVG format.
     */
    teamIconSvgUrl: Url;
  
    /**
     * The FIFA ranking of the team, where a lower number indicates a higher rank.
     */
    fifaRank: PositiveNumber;
  
    /**
     * The football federation the team belongs to (e.g., UEFA, CONMEBOL).
     */
    federation: FifaFederation;
}

/**
 * Represents a filter for filtering team headers based on various criteria.
 */
export interface TeamHeaderFilter {
  
    /**
     * The minimum FIFA rank to filter teams by.
     */
    minFifaRank?: PositiveNumber;
  
    /**
     * The maximum FIFA rank to filter teams by.
     */
    maxFifaRank?: PositiveNumber;
  
    /**
     * The FIFA federation to filter teams by.
     */
    federation?: FifaFederation;
  }