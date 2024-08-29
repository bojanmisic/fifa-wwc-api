import { CandidateFilter, Candidate } from "../model/candidate";
import { CountryDetailsFilter, CountryDetails } from "../model/country-details";
import { CountryHeaderFilter, CountryHeader } from "../model/country-header";
import { TeamDetailsFilter, TeamDetails } from "../model/team-details";
import { TeamHeader } from "../model/team-header";
import { CountryCode } from "../model/types";
import { Sort } from "./sort.type";

/**
 * Repository interface for managing candidates and related data such as team headers, country headers, and details.
 */
export abstract class WorldCupRepositoryBase {
    /**
     * Retrieves a list of candidates, with optional filtering and sorting.
     * 
     * @param filter - Optional filter criteria to narrow down the list of candidates.
     * @param sort - Optional sorting criteria to order the list of candidates.
     * @returns A promise that resolves to an array of `Candidate` objects.
     */
    public abstract getCandidates(
      filter?: CandidateFilter,
      sort?: Sort<Candidate>
    ): Promise<Candidate[]>;
  
    /**
     * Retrieves a list of team headers, with optional filtering and sorting.
     * 
     * @param sort - Optional sorting criteria to order the list of team headers.
     * @returns A promise that resolves to an array of `TeamHeader` objects.
     */
    public abstract getTeamHeaders(
      sort?: Sort<TeamHeader>
    ): Promise<TeamHeader[]>;
  
    /**
     * Retrieves a list of country headers, with optional filtering and sorting.
     * 
     * @param filter - Optional filter criteria to narrow down the list of country headers.
     * @param sort - Optional sorting criteria to order the list of country headers.
     * @returns A promise that resolves to an array of `CountryHeader` objects.
     */
    public abstract getCountryHeaders(
      filter?: CountryHeaderFilter,
      sort?: Sort<CountryHeader>
    ): Promise<CountryHeader[]>;
  
    /**
     * Retrieves a list of detailed team information, with optional filtering and sorting.
     * 
     * @param filter - Optional filter criteria to narrow down the list of team details.
     * @param sort - Optional sorting criteria to order the list of team details.
     * @returns A promise that resolves to an array of `TeamDetails` objects.
     */
    public abstract getTeamDetails(
      filter?: TeamDetailsFilter,
      sort?: Sort<TeamDetails>
    ): Promise<TeamDetails[]>;
  
    /**
     * Retrieves a list of detailed country information, with optional filtering and sorting.
     * 
     * @param filter - Optional filter criteria to narrow down the list of country details.
     * @param sort - Optional sorting criteria to order the list of country details.
     * @returns A promise that resolves to an array of `CountryDetails` objects.
     */
    public abstract getCountryDetails(
      filter?: CountryDetailsFilter,
      sort?: Sort<CountryDetails>
    ): Promise<CountryDetails[]>;
  
    /**
     * Retrieves candidate information for a specific country by its country code.
     * 
     * @param countryCode - The ISO 3166-1 alpha-3 country code.
     * @returns A promise that resolves to a `Candidate` object or `null` if not found.
     */
    public abstract getCandidateByCountryCode(
      countryCode: CountryCode
    ): Promise<Candidate | null>;
  
    /**
     * Retrieves the team header for a specific country by its country code.
     * 
     * @param countryCode - The ISO 3166-1 alpha-3 country code.
     * @returns A promise that resolves to a `TeamHeader` object or `null` if not found.
     */
    public abstract getTeamHeaderByCountryCode(
      countryCode: CountryCode
    ): Promise<TeamHeader | null>;
  
    /**
     * Retrieves the country header for a specific country by its country code.
     * 
     * @param countryCode - The ISO 3166-1 alpha-3 country code.
     * @returns A promise that resolves to a `CountryHeader` object or `null` if not found.
     */
    public abstract  getCountryHeaderByCountryCode(
      countryCode: CountryCode
    ): Promise<CountryHeader | null>;
  
    /**
     * Retrieves detailed team information for a specific country by its country code.
     * 
     * @param countryCode - The ISO 3166-1 alpha-3 country code.
     * @returns A promise that resolves to a `TeamDetails` object or `null` if not found.
     */
    public abstract getTeamDetailsByCountryCode(
      countryCode: CountryCode
    ): Promise<TeamDetails | null>;
  
    /**
     * Retrieves detailed country information for a specific country by its country code.
     * 
     * @param countryCode - The ISO 3166-1 alpha-3 country code.
     * @returns A promise that resolves to a `CountryDetails` object or `null` if not found.
     */
    public abstract getCountryDetailsByCountryCode(
      countryCode: CountryCode
    ): Promise<CountryDetails | null>;
  }