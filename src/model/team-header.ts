import { CountryCode, Url } from "./types/index";

/**
 * Represents the essential header information for a FIFA team.
 */
export interface TeamHeader {
    
    /**
     * The ISO 3166-1 alpha-3 country code, used for cross-referencing with country data.
     */
    countryCode: CountryCode;

    /**
     * The FIFA country code, used as a unique identifier.
     */
    fifaCode: CountryCode; 
  
    /**
     * The name of the team, usually the name of the country it represents.
     */
    teamName: string;

    /**
     * The URL to the team's icon or flag image in SVG format.
     */
    teamIconSvgUrl: Url;
}