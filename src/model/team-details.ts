import { CountryCode, PositiveNumber, Url } from "./types/index";

/**
 * Represents the details for a FIFA team.
 */
export interface TeamDetails {
    
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

/**
 * Represents a filter for filtering team details based on various criteria.
 */
export interface TeamDetailsFilter {
    /**
     * The minimum group rank to filter teams by.
     */
    minGroupRank?: PositiveNumber;
  
    /**
     * The maximum group rank to filter teams by.
     */
    maxGroupRank?: PositiveNumber;
  
    /**
     * The minimum total rank to filter teams by.
     */
    minTotalRank?: PositiveNumber;
  
    /**
     * The maximum total rank to filter teams by.
     */
    maxTotalRank?: PositiveNumber;
  
    /**
     * The minimum number of goals scored to filter teams by.
     */
    minGoalsScored?: PositiveNumber;
  
    /**
     * The maximum number of goals scored to filter teams by.
     */
    maxGoalsScored?: PositiveNumber;
  
    /**
     * The minimum number of goals conceded to filter teams by.
     */
    minGoalsConceded?: PositiveNumber;
  
    /**
     * The maximum number of goals conceded to filter teams by.
     */
    maxGoalsConceded?: PositiveNumber;
  }