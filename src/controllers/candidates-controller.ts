import { RealWorldCupRepository } from "../repositories/real-world-cup-repository";
import { Candidate, CandidateFilter } from "../model/candidate";
import { TeamDetails, TeamDetailsFilter } from "../model/team-details";
import { CandidateService } from "../services/candidate-service";
import { CountryCode, PositiveNumber } from "../model/types";
import { WorldRegion, WorldSubregion } from "../model/enums";
import { Sort } from "../contract/sort.type";
import { CountryHeader, CountryHeaderFilter } from "../model/country-header";
import { TeamHeader } from "../model/team-header";
import { CountryDetails, CountryDetailsFilter } from "../model/country-details";
import {
    Controller,
    Get,
    Path,
    Query,
    Route,
    Tags,
  } from "tsoa";

  @Route("candidates")
  export class CandidateController extends Controller {

    private candidateService: CandidateService;

    constructor() {
        super();
        this.candidateService = new CandidateService(new RealWorldCupRepository());
    }

    /**
     * Retrieves all candidates based on the provided query parameters.
     * 
     * @param minArea - The minimum area to filter candidates by (positive number) in square kilometers.
     * @param maxArea - The maximum area to filter candidates by (positive number) in square kilometers.
     * @param minPopulation - The minimum population to filter candidates by (positive number) of population.
     * @param maxPopulation - The maximum population to filter candidates by (positive number) of population.
     * @param region - The region (continent) to filter candidates by.
     * @param subregion - The subregion (e.g., Caribbean, Melanesia) to filter candidates by.
     * @param sortBy - The property to sort candidates by.
     * @param sortOrder - The order to sort candidates by (asc/desc).
     * @returns An array of `Candidate` objects.
     * 
     * @summary Get the list of all FIFA World Cup 2024 candidates.
     */
    @Get()
    @Tags("Candidates")
    public async getAllCandidates(
      @Query() minArea?: number,
      @Query() maxArea?: number,
      @Query() minPopulation?: number,
      @Query() maxPopulation?: number,
      @Query() region?: WorldRegion,
      @Query() subregion?: WorldSubregion,
      @Query() sortBy?: keyof Candidate,
      @Query() sortOrder?: "asc" | "desc"
    ): Promise<Candidate[]> {
      try {
        return await this.candidateService.getAllCandidates(
          {
            minArea: minArea as PositiveNumber,
            maxArea: maxArea as PositiveNumber,
            minPopulation: minPopulation as PositiveNumber,
            maxPopulation: maxPopulation as PositiveNumber,
            region,
            subregion,
          } as CandidateFilter,
          {
            property: sortBy,
            order: sortOrder,
          } as Sort<Candidate>
        );
      }
      catch (error: any) {
        if (error.message.includes("Service Unavailable")) {
          this.setStatus(503);
        }
        else{
          this.setStatus(500);
        }

        return [];
      }
    }

    /**
     * Retrieves all countries on the provided query parameters.
     * 
     * @param region - The region (continent) to filter countries by.
     * @param subregion - The subregion (e.g., Caribbean, Melanesia) to filter countries by.
     * @param sortBy - The property to sort countries by.
     * @param sortOrder - The order to sort countries by (asc/desc).
     * @returns An array of `CountryHeader` objects.
     * 
     * @summary Get the list of all FIFA World Cup 2024 countries with essential information.
     */
    @Get("country")
    @Tags("Countries")
    public async getAllCountries(
      @Query() region?: WorldRegion,
      @Query() subregion?: WorldSubregion,
      @Query() sortBy?: keyof CountryHeader,
      @Query() sortOrder?: "asc" | "desc"
    ): Promise<CountryHeader[]> {
      try {
        return await this.candidateService.getAllCountries(
          {
            region,
            subregion,
          } as CountryHeaderFilter,
          {
            property: sortBy,
            order: sortOrder,
          } as Sort<CountryHeader>
        );
      }
      catch (error: any) {
        if (error.message.includes("Service Unavailable")) {
          this.setStatus(503);
        }
        else {
          this.setStatus(500);
        }

        return [];
      }
    }

    /**
     * Retrieves all countries details based on the provided query parameters.
     * 
     * @param region - The region (continent) to filter countries by.
     * @param subregion - The subregion (e.g., Caribbean, Melanesia) to filter countries by.
     * @param minPopulation - The minimum population to filter countries by (positive number) of population.
     * @param maxPopulation - The maximum population to filter countries by (positive number) of population.
     * @param minArea - The minimum area to filter countries by (positive number) in square kilometers.
     * @param maxArea - The maximum area to filter countries by (positive number) in square kilometers.
     * @param minLongitude - The minimum longitude to filter countries by (positive number) in degrees.
     * @param maxLongitude - The maximum longitude to filter countries by (positive number) in degrees.
     * @param minLatitude - The minimum latitude to filter countries by (positive number) in degrees.
     * @param maxLatitude - The maximum latitude to filter countries by (positive number) in degrees.
     * @param timezones - The timezones to filter countries by (example: "UTC-01:00", "UTC", "UTC+01:00", "UTC+02:00", etc.).
     * @param borders - The borders (country codes) to filter countries by (example: "FR", "ES", "IT", etc.).
     * @param languages - The languages to filter countries by (example: "French", "Italian", "English", etc.).
     * @param currencies - The currencies to filter countries by (example: "EUR", "USD", "GBP", etc.).
     * @param sortBy - The property to sort countries by.
     * @param sortOrder - The order to sort countries by (asc/desc).
     * @returns An array of `CountryDetails` objects.
     * 
     * @summary Get the list of all FIFA World Cup 2024 countries with detailed information.
     */
    @Get("country/details")
    @Tags("Countries")
    public async getAllCountriesDetails(
      @Query() region?: WorldRegion,
      @Query() subregion?: WorldSubregion,
      @Query() minPopulation?: number,
      @Query() maxPopulation?: number,
      @Query() minArea?: number,
      @Query() maxArea?: number,
      @Query() minLongitude?: number,
      @Query() maxLongitude?: number,
      @Query() minLatitude?: number,
      @Query() maxLatitude?: number,
      @Query() timezones?: string[],
      @Query() borders?: string[],
      @Query() languages?: string[],
      @Query() currencies?: string[],
      @Query() sortBy?: keyof CountryDetails,
      @Query() sortOrder?: "asc" | "desc"
    ): Promise<CountryDetails[]> {
      try {
        return await this.candidateService.getAllCountriesDetails(
          {
            region,
            subregion,
            minPopulation,
            maxPopulation,
            minArea,
            maxArea,
            minLongitude,
            maxLongitude,
            minLatitude,
            maxLatitude,
            timezones,
            borders,
            languages,
            currencies,
          } as CountryDetailsFilter,
          {
            property: sortBy,
            order: sortOrder,
          } as Sort<CountryDetails>
        );
      }
      catch (error: any) {
        if (error.message.includes("Service Unavailable")) {
          this.setStatus(503);
        }
        else {
          this.setStatus(500);
        }
        
        return [];
      }
    }

    /**
     * Retrieves all teams based on the provided query parameters.
     * 
     * @param sortBy - The property to sort teams by.
     * @param sortOrder - The order to sort teams by (asc/desc).
     * @returns An array of `TeamHeader` objects.
     * 
     * @summary Get the list of all FIFA World Cup 2024 teams with essential information.
     */
    @Get("team")
    @Tags("Teams")
    public async getAllTeams(
      @Query() sortBy?: keyof TeamHeader,
      @Query() sortOrder?: "asc" | "desc"
    ): Promise<TeamHeader[]> {
      try {
        return await this.candidateService.getAllTeams(
          {
            property: sortBy,
            order: sortOrder,
          } as Sort<TeamHeader>
        );
      }
      catch (error: any) {
        if (error.message.includes("Service Unavailable")) {
          this.setStatus(503);
        }
        else {
          this.setStatus(500);
        }

        return [];
      }
    }

    /**
     * Retrieves all teams details based on the provided query parameters.
     * 
     * @param minGroupRank - The minimum group rank to filter teams by (positive number).
     * @param maxGroupRank - The maximum group rank to filter teams by (positive number).
     * @param minTotalRank - The minimum total rank to filter teams by (positive number).
     * @param maxTotalRank - The maximum total rank to filter teams by (positive number).
     * @param minGoalsScored - The minimum goals scored to filter teams by (positive number).
     * @param maxGoalsScored - The maximum goals scored to filter teams by (positive number).
     * @param minGoalsConceded - The minimum goals conceded to filter teams by (positive number).
     * @param maxGoalsConceded - The maximum goals conceded to filter teams by (positive number).
     * @param sortBy - The property to sort teams by.
     * @param sortOrder - The order to sort teams by (asc/desc).
     * @returns An array of `TeamDetails` objects.
     * 
     * @summary Get the list of all FIFA World Cup 2024 teams with detailed information.
     */
    @Get("team/details")
    @Tags("Teams")
    public async getAllTeamDetails(
      @Query() minGroupRank?: number,
      @Query() maxGroupRank?: number,
      @Query() minTotalRank?: number,
      @Query() maxTotalRank?: number,
      @Query() minGoalsScored?: number,
      @Query() maxGoalsScored?: number,
      @Query() minGoalsConceded?: number,
      @Query() maxGoalsConceded?: number,
      @Query() sortBy?: keyof TeamDetails,
      @Query() sortOrder?: "asc" | "desc")
      : Promise<TeamDetails[]> {
        try {
          return await this.candidateService.getAllTeamDetails(
            {
              minGroupRank: minGroupRank as PositiveNumber,
              maxGroupRank: maxGroupRank as PositiveNumber,
              minTotalRank: minTotalRank as PositiveNumber,
              maxTotalRank: maxTotalRank as PositiveNumber,
              minGoalsScored: minGoalsScored as PositiveNumber,
              maxGoalsScored: maxGoalsScored as PositiveNumber,
              minGoalsConceded: minGoalsConceded as PositiveNumber,
              maxGoalsConceded: maxGoalsConceded as PositiveNumber,
            } as TeamDetailsFilter,
            {
              property: sortBy,
              order: sortOrder,
            } as Sort<TeamDetails>
          );
        }
        catch (error: any) {
          if (error.message.includes("Service Unavailable")) {
            this.setStatus(503);
          }
          else {
            this.setStatus(500);
          }

          return [];
        }
      }

      /**
       * Retrieves a candidate by country code.
       * 
       * @param countryCode - The country code or fifa code to filter candidates by.
       * @returns A `Candidate` object or null if not found.
       * 
       * @summary Get the candidate information for a given country code or fifa code.
       */
      @Get("{countryCode}")
      @Tags("Candidates")
      public async getCandidateByCountryCode(
        @Path("countryCode") countryCode: string
      ): Promise<Candidate | null> {
        try {
          var res = await this.candidateService.getCandidateByCountryCode(countryCode as CountryCode);
          if (res == null) {
            this.setStatus(404);
          }

          return res;
        }
        catch (error: any) {
          if (error.message.includes("Service Unavailable")) {
            this.setStatus(503);
          }
          else {
            this.setStatus(500);
          }

          return null;
        }
      }

      /**
       * Retrieves a country header by country code or fifa code.
       * 
       * @param countryCode - The country code or fifa code to filter countries by.
       * @returns A `CountryHeader` object or null if not found.
       * 
       * @summary Get the country header information for a given country code or fifa code.
       */
      @Get("{countryCode}/country")
      @Tags("Countries")
      public async getCountryHeaderByCountryCode(
        @Path("countryCode") countryCode: string
      ): Promise<CountryHeader | null> {
        try {
          var res = await this.candidateService.getCountryHeaderByCountryCode(countryCode as CountryCode);
          if (res == null) {
            this.setStatus(404);
          }

          return res;
        }
        catch (error: any) {
          if (error.message.includes("Service Unavailable")) {
            this.setStatus(503);
          }
          else {
            this.setStatus(500);
          }

          return null;
        }
      }

      /**
       * Retrieves a country details by country code or fifa code.
       * 
       * @param countryCode - The country code or fifa code to filter countries by.
       * @returns A `CountryDetails` object or null if not found.
       * 
       * @summary Get the country details information for a given country code or fifa code.
       */
      @Get("{countryCode}/country/details")
      @Tags("Countries")
      public async getCountryDetailsByCountryCode(
        @Path("countryCode") countryCode: string
      ): Promise<CountryDetails | null> {
        try {
          var res = await this.candidateService.getCountryDetailsByCountryCode(countryCode as CountryCode);
          
          if (res == null) {
            this.setStatus(404);
          }

          return res;
        }
        catch (error: any) {
          if (error.message.includes("Service Unavailable")) {
            this.setStatus(503);
          }
          else {
            this.setStatus(500);
          }
                
          return null;
        }
      }

      /**
       * Retrieves a team header by country code or fifa code.
       * 
       * @param countryCode - The country code or fifa code to filter teams by.
       * @returns A `TeamHeader` object or null if not found.
       * 
       * @summary Get the team header information for a given country code or fifa code.
       */
      @Get("{countryCode}/team")
      @Tags("Teams")
      public async getTeamHeaderByCountryCode(
        @Path("countryCode") countryCode: string
      ): Promise<TeamHeader | null> {
        try {
          var res = await this.candidateService.getTeamHeaderByCountryCode(countryCode as CountryCode);
          
          if (res == null) {
            this.setStatus(404);
          }

          return res;
        }
        catch (error: any) {
          if (error.message.includes("Service Unavailable")) {
            this.setStatus(503);
          }
          else {
            this.setStatus(500);
          }

          return null;
        }
      }

      /**
       * Retrieves a team details by country code or fifa code.
       * 
       * @param countryCode - The country code or fifa code to filter teams by.
       * @returns A `TeamDetails` object or null if not found.
       * 
       * @summary Get the team details information for a given country code or fifa code.
       */
      @Get("{countryCode}/team/details")
      @Tags("Teams")
      public async getTeamDetailsByCountryCode(
        @Path("countryCode") countryCode: string
      ): Promise<TeamDetails | null> {
        try {
          var res = await this.candidateService.getTeamDetailsByCountryCode(countryCode as CountryCode);
          
          if (res == null) {
            this.setStatus(404);
          }
      
          return res;
        }
        catch (error: any) {
          if (error.message.includes("Service Unavailable")) {
            this.setStatus(503);
          }
          else {
            this.setStatus(500);
          }

          return null;
        }
      }
  }