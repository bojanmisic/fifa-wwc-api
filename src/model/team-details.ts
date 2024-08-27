import { CountryCode, PositiveNumber, Url } from "./types/index";
import { FifaFederation } from "./enums/index";

/**
 * Represents the essential header information for a FIFA team.
 */
export interface TeamDetails {
    
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

    /**
     * The rank of the team within its specific group during a tournament.
     * A lower number indicates a higher rank within the group.
     */
    groupRank: PositiveNumber;

    /**
     * The overall rank of the team in the entire competition or league.
     * This is the team's position in the overall standings.
     */
    totalRank: PositiveNumber;

    /**
     * The total number of goals scored by the team in the competition or league.
     * This represents the offensive performance of the team.
     */
    goalsScored: PositiveNumber;

    /**
     * The total number of goals conceded by the team in the competition or league.
     * This represents the defensive performance of the team.
     */
    goalsConceded: PositiveNumber;
}