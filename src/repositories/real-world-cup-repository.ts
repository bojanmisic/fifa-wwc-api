import { WorldCupRepositoryBase } from "../contract/world-cup-repository-base";
import { MatchdataApi as WwcApi } from "../integrations/wwc2023/api";
import { CountriesApi as CountriesApi } from "../integrations/restcountries/api";
import { CandidateFilter, Candidate } from "../model/candidate";
import { CountryDetails, CountryDetailsFilter } from "../model/country-details";
import { CountryHeader, CountryHeaderFilter } from "../model/country-header";
import { TeamDetails, TeamDetailsFilter } from "../model/team-details";
import { TeamHeader, TeamHeaderFilter } from "../model/team-header";
import { CountryCode } from "../model/types";
import { Sort } from "../contract/sort.type";

export class RealWorldCupRepository implements WorldCupRepositoryBase {

    private wwcApiService!: WwcApi;
    private countriesApiService!: CountriesApi;

    constructor() {
        this.wwcApiService = new WwcApi();
        this.countriesApiService = new CountriesApi();
    }

    public async getCandidates(filter?: CandidateFilter, sort?: Sort<Candidate>): Promise<Candidate[]> {
        try {
            const wwcTeams = await this.wwcApiService.getavailableteamsLeagueShortcutLeagueSeasonGet("wwc", 2023);
            try {
                const countries = await this.countriesApiService.v31AllGet();

                // Mapping the teams to the candidates
                let candidates = wwcTeams.map(team => {
                    const country = (countries as any).find((c: any) => c.cca3 === team.shortName);
                    return {
                        teamName: team.teamName,
                        countryCode: team.shortName,
                        teamIconSvgUrl: team.teamIconUrl,
                        federation: team.teamGroupName,
                        countryName: country?.name.common,
                        countryFlagSvgUrl: country?.flags.png,
                      } as Candidate;
                });

                // Apply filtering
                if (filter) {
                    candidates = candidates.filter(candidate => {
                        if (filter.minFifaRank !== undefined && candidate.fifaRank <= filter.minFifaRank) return false;
                        if (filter.maxFifaRank !== undefined && candidate.fifaRank >= filter.maxFifaRank) return false;
                        if (filter.federation !== undefined && candidate.federation !== filter.federation) return false;
                        if (filter.minArea !== undefined && candidate.area <= filter.minArea) return false;
                        if (filter.maxArea !== undefined && candidate.area >= filter.maxArea) return false;
                        if (filter.minPopulation !== undefined && candidate.population <= filter.minPopulation) return false;
                        if (filter.maxPopulation !== undefined && candidate.population >= filter.maxPopulation) return false;
                        if (filter.region !== undefined && candidate.region !== filter.region) return false;
                        if (filter.subregion !== undefined && candidate.subregion !== filter.subregion) return false;
                        return true;
                    });
                }

                // Apply sorting
                if (sort) {
                    candidates = candidates.sort((a, b) => {
                        const aValue = a[sort.property];
                        const bValue = b[sort.property];

                        if (aValue < bValue) return sort.order === 'asc' ? -1 : 1;
                        if (aValue > bValue) return sort.order === 'asc' ? 1 : -1;
                        return 0;
                    });
                }

                return candidates;
            }
            catch (error) {
                throw new Error("Failed to retrieve countries");
            }
        }
        catch (error) {
            throw new Error("Failed to retrieve WWC teams");
        }
    }

    public async getTeamHeaders(filter?: TeamHeaderFilter, sort?: Sort<TeamHeader>): Promise<TeamHeader[]> {
        // Implementation logic to retrieve team headers based on filter and sort criteria
        return [];
    }

    public async getCountryHeaders(filter?: CountryHeaderFilter, sort?: Sort<CountryHeader>): Promise<CountryHeader[]> {
        // Implementation logic to retrieve country headers based on filter and sort criteria
        return [];
    }

    public async getAllTeamDetails(filter?: TeamDetailsFilter, sort?: Sort<TeamDetails>): Promise<TeamDetails[]> {
        // Implementation logic to retrieve all team details based on filter and sort criteria
        return [];
    }

    public async getAllCountryDetails(filter?: CountryDetailsFilter, sort?: Sort<CountryDetails>): Promise<CountryDetails[]> {
        // Implementation logic to retrieve all country details based on filter and sort criteria
        return [];
    }

    public async getCandidateByCountryCode(countryCode: CountryCode): Promise<Candidate | null> {
        // Implementation logic to retrieve a candidate by country code
        return null;
    }

    public async getTeamHeaderByCountryCode(countryCode: CountryCode): Promise<TeamHeader | null> {
        // Implementation logic to retrieve a team header by country code
        return null;
    }

    public async getCountryHeaderByCountryCode(countryCode: CountryCode): Promise<CountryHeader | null> {
        // Implementation logic to retrieve a country header by country code
        return null;
    }

    public async getTeamDetailsByCountryCode(countryCode: CountryCode): Promise<TeamDetails | null> {
        // Implementation logic to retrieve team details by country code
        return null;
    }

    public async getCountryDetailsByCountryCode(countryCode: CountryCode): Promise<CountryDetails | null> {
    // Implementation logic to retrieve country details by country code
        return null;
    }
}