import { TeamDetailsFilter, TeamDetails } from "../model/team-details";
import { Sort } from "../contract/sort.type";
import { WorldCupRepositoryBase } from "../contract/world-cup-repository-base";
import { Candidate, CandidateFilter } from "../model/candidate";
import { Route } from "tsoa";
import { TeamHeader } from "../model/team-header";
import { CountryHeader, CountryHeaderFilter } from "../model/country-header";
import { CountryDetailsFilter, CountryDetails } from "../model/country-details";
import { CountryCode } from "../model/types/country-code.type";

@Route("candidates")
export class CandidateService {

  private candidateRepository: WorldCupRepositoryBase;

  constructor(candidateRepository: WorldCupRepositoryBase) {
    this.candidateRepository = candidateRepository;
  }

  public async getAllCandidates(filter?: CandidateFilter, sort?: Sort<Candidate>): Promise<Candidate[]> {
    return this.candidateRepository.getCandidates(filter, sort);
  }

  public async getAllCountries(filter?: CountryHeaderFilter, sort?: Sort<CountryHeader>): Promise<CountryHeader[]> {
    return this.candidateRepository.getCountryHeaders(filter, sort);
  }

  public async getAllCountriesDetails(filter?: CountryDetailsFilter, sort?: Sort<CountryDetails>): Promise<CountryDetails[]> {
    return this.candidateRepository.getCountryDetails(filter, sort);
  }

  public async getAllTeams(sort?: Sort<TeamHeader>): Promise<TeamHeader[]> {
    return this.candidateRepository.getTeamHeaders(sort);
  }

  public async getAllTeamDetails(filter?: TeamDetailsFilter, sort?: Sort<TeamDetails>): Promise<TeamDetails[]> {
    return this.candidateRepository.getTeamDetails(filter, sort);
  }

  public async getCandidateByCountryCode(countryCode: CountryCode): Promise<Candidate | null> {
    return this.candidateRepository.getCandidateByCountryCode(countryCode);
  }

  public async getCountryDetailsByCountryCode(countryCode: CountryCode): Promise<CountryDetails | null> {
    return this.candidateRepository.getCountryDetailsByCountryCode(countryCode);
  }

  public async getCountryHeaderByCountryCode(countryCode: CountryCode): Promise<CountryHeader | null> {
    return this.candidateRepository.getCountryHeaderByCountryCode(countryCode);
  }

  public async getTeamHeaderByCountryCode(countryCode: CountryCode): Promise<TeamHeader | null> {
    return this.candidateRepository.getTeamHeaderByCountryCode(countryCode);
  }

  public async getTeamDetailsByCountryCode(countryCode: CountryCode): Promise<TeamDetails | null> {
    return this.candidateRepository.getTeamDetailsByCountryCode(countryCode);
  }
}