import { WorldCupRepositoryBase } from "../contract/world-cup-repository-base";
import { MatchdataApi as WwcApi } from "../integrations/wwc2023/api";
import { CountriesApi as CountriesApi } from "../integrations/restcountries/api";
import { CandidateFilter, Candidate } from "../model/candidate";
import { CountryDetails, CountryDetailsFilter } from "../model/country-details";
import { CountryHeader, CountryHeaderFilter } from "../model/country-header";
import { TeamDetails, TeamDetailsFilter } from "../model/team-details";
import { TeamHeader } from "../model/team-header";
import { CountryCode } from "../model/types";
import { Sort } from "../contract/sort.type";
import { WorldRegion, WorldSubregion } from "../model/enums";

export class RealWorldCupRepository implements WorldCupRepositoryBase {

    private wwcApiService: WwcApi;
    private countriesApiService: CountriesApi;

    constructor() {
        this.wwcApiService = new WwcApi("https://api.openligadb.de");
        this.countriesApiService = new CountriesApi("https://restcountries.com");
    }

    public async getCandidates(filter?: CandidateFilter, sort?: Sort<Candidate>): Promise<Candidate[]> {
        try {
            const wwcTeams = await this.wwcApiService.getavailableteamsLeagueShortcutLeagueSeasonGet("wwc", 2023);
            try {
                const countriesResponse = await this.countriesApiService.v31AlphaGet(wwcTeams.map(t => t.shortName).join(",") + ",GBR");
                const countries = await countriesResponse.json();

                // Mapping the teams to the candidates
                let candidates = wwcTeams.map(team => {
                    const country = countries.find((c: any) => 
                        team.shortName === c.fifa ||
                        team.shortName === c.cca3 ||
                        team.shortName === "ENG" && c.cca3 === "GBR"
                    );

                    return {
                        teamName: team.teamName,
                        countryCode: country.cca3,
                        fifaCode: country.fifa ?? team.shortName,
                        teamIconSvgUrl: team.teamIconUrl,
                        countryName: country?.name.common,
                        countryFlagSvgUrl: country?.flags.svg,
                        region: country?.region as WorldRegion,
                        subregion: country?.subregion as WorldSubregion,
                        capital: country?.capital[0],
                        population: country?.population,
                        area: country?.area,
                      } as Candidate;
                });

                // Apply filtering
                if (filter) {
                    candidates = candidates.filter(candidate => {
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
                throw new Error("Service Unavailable");
            }
        }
        catch (error) {
            throw new Error("Service Unavailable");
        }
    }

    public async getTeamHeaders(sort?: Sort<TeamHeader>): Promise<TeamHeader[]> {
        try {
            const wwcTeams = await this.wwcApiService.getavailableteamsLeagueShortcutLeagueSeasonGet("wwc", 2023);
            
            try {
                const countriesResponse = await this.countriesApiService.v31AlphaGet(wwcTeams.map(t => t.shortName).join(",") + ",GBR");
                const countries = await countriesResponse.json();

                let teams = wwcTeams.map(team => ({
                    teamName: team.teamName,
                    fifaCode: team.shortName,
                    countryCode: countries.find((c: any) => 
                        c.fifa === team.shortName ||
                        c.cca3 === team.shortName ||
                        team.shortName === "ENG" && c.cca3 === "GBR"
                    )?.cca3,
                    teamIconSvgUrl: team.teamIconUrl,
                } as TeamHeader));

                if (sort) {
                    teams = teams.sort((a, b) => {
                        const aValue = a[sort.property];
                        const bValue = b[sort.property];
    
                        if (aValue < bValue) return sort.order === 'asc' ? -1 : 1;
                        if (aValue > bValue) return sort.order === 'asc' ? 1 : -1;
                        return 0;
                    });
                }
    
                return teams;
            }
            catch (error) {
                throw new Error("Service Unavailable");
            }
        }
        catch (error) {
            throw new Error("Service Unavailable");
        }
    }

    public async getCountryHeaders(filter?: CountryHeaderFilter, sort?: Sort<CountryHeader>): Promise<CountryHeader[]> {
        try {
            const teams = await this.getTeamHeaders();

            try {
                const countriesResponse = await this.countriesApiService.v31AlphaGet(teams.map(t => t.countryCode).join(","));
                const countries = await countriesResponse.json();
    
                let countryHeaders: CountryHeader[] = countries.filter((country: any) => 
                    teams
                        .find(team => 
                            team.fifaCode === country.fifa ||
                            team.fifaCode === country.cca3 ||
                            team.fifaCode === "ENG" && country.cca3 === "GBR"
                        ))
                        .map((country: any) => ({
                            countryCode: country.cca3,
                            fifaCode: country.fifa ?? teams.find(t => t.countryCode === country.cca3)?.fifaCode,
                            countryName: country.name.common,
                            countryFlagSvgUrl: country.flags.svg,
                            region: country.region as WorldRegion,
                            subregion: country.subregion as WorldSubregion,
                            area: country.area,
                            population: country.population
                } as CountryHeader));
                
                if (filter) {
                    countryHeaders = countryHeaders.filter(country => {
                        if (filter.region !== undefined && country.region !== filter.region) return false;
                        if (filter.subregion !== undefined && country.subregion !== filter.subregion) return false;
                        return true;
                    });
                }
    
                if (sort) {
                    countryHeaders = countryHeaders.sort((a, b) => {
                        const aValue = a[sort.property];
                        const bValue = b[sort.property];
    
                        if (aValue < bValue) return sort.order === 'asc' ? -1 : 1;
                        if (aValue > bValue) return sort.order === 'asc' ? 1 : -1;
                        return 0;
                    });
                }
                
                return countryHeaders;
            }
            catch (error) {
                throw new Error("Service Unavailable");
            }
        }
        catch (error) {
            throw new Error("Service Unavailable");
        }
    }

    public async getTeamDetails(filter?: TeamDetailsFilter, sort?: Sort<TeamDetails>): Promise<TeamDetails[]> {
        try {
            const wwcTeamsInLeague: any[] = await this.wwcApiService.getbltableLeagueShortcutLeagueSeasonGet("wwc", 2023);
            const wwcGroups: any[] = await this.wwcApiService.getgrouptableLeagueShortcutLeagueSeasonGet("wwc", 2023);

            try {
                const countriesResponse = await this.countriesApiService.v31AlphaGet(wwcTeamsInLeague.map(t => t.shortName).join(",") + ",GBR");
                const countries = await countriesResponse.json();

                // Mapping the teams to the candidates
                let teamDetails: TeamDetails[] = wwcTeamsInLeague.map(team => {
                    const country = countries.find((c: any) => 
                        c.fifa === team.shortName ||
                        c.cca3 === team.shortName ||
                        team.shortName === "ENG" && c.cca3 === "GBR"
                    );

                    const group = wwcGroups.find(group => group.teams.find((t: any) => t.teamInfoId === team.teamInfoId));
                    
                    return {
                        teamName: team.teamName,
                        countryCode: country.cca3,
                        fifaCode: team.shortName,
                        teamIconSvgUrl: team.teamIconUrl,
                        groupRank: group.teams.findIndex((t: any) => t.teamInfoId === team.teamInfoId) + 1,
                        totalRank: wwcTeamsInLeague.findIndex((t: any) => t.teamInfoId === team.teamInfoId) + 1,
                        goalsScored: team.goals,
                        goalsConceded: team.opponentGoals,
                    } as TeamDetails;
                });

                // Apply filtering
                if (filter) {
                    teamDetails = teamDetails.filter(team => {
                        if (filter.minGoalsScored !== undefined && team.goalsScored <= filter.minGoalsScored) return false;
                        if (filter.maxGoalsScored !== undefined && team.goalsScored >= filter.maxGoalsScored) return false;
                        if (filter.minGoalsConceded !== undefined && team.goalsConceded <= filter.minGoalsConceded) return false;
                        if (filter.maxGoalsConceded !== undefined && team.goalsConceded >= filter.maxGoalsConceded) return false;
                        if (filter.minGroupRank !== undefined && team.groupRank <= filter.minGroupRank) return false;
                        if (filter.maxGroupRank !== undefined && team.groupRank >= filter.maxGroupRank) return false;
                        if (filter.minTotalRank !== undefined && team.totalRank <= filter.minTotalRank) return false;
                        if (filter.maxTotalRank !== undefined && team.totalRank >= filter.maxTotalRank) return false;
                        return true;
                    });
                }

                // Apply sorting
                if (sort) {
                    teamDetails = teamDetails.sort((a, b) => {
                        const aValue = a[sort.property];
                        const bValue = b[sort.property];

                        if (aValue < bValue) return sort.order === 'asc' ? -1 : 1;
                        if (aValue > bValue) return sort.order === 'asc' ? 1 : -1;
                        return 0;
                    });
                }

                return teamDetails;
            }
            catch (error) {
                throw new Error("Service Unavailable");
            }
        }
        catch (error) {
            throw new Error("Service Unavailable");
        }
    }

    public async getCountryDetails(filter?: CountryDetailsFilter, sort?: Sort<CountryDetails>): Promise<CountryDetails[]> {
        try {
            const teams = await this.getTeamHeaders();

            try {
                const countriesResponse = await this.countriesApiService.v31AlphaGet(teams.map(t => t.countryCode).join(","));
                const countries = await countriesResponse.json();
    
                let countryDetails: CountryDetails[] = countries.filter((country: any) => 
                    teams
                        .find(team => 
                            team.fifaCode === country.fifa ||
                            team.fifaCode === country.cca3 ||
                            team.fifaCode === "ENG" && country.cca3 === "GBR"
                        ))
                        .map((country: any) => ({
                            countryCode: country.cca3,
                            fifaCode: country.fifa ?? teams.find(t => t.countryCode === country.cca3)?.fifaCode,
                            countryName: country.name.common,
                            countryFlagSvgUrl: country.flags.svg,
                            region: country.region as WorldRegion,
                            subregion: country.subregion as WorldSubregion,
                            area: country.area,
                            population: country.population,
                            capital: country.capital[0],
                            languages: Object.values(country.languages),
                            currencies: Object.keys(country.currencies),
                            latitude: country.latlng[0],
                            longitude: country.latlng[1],
                            timezones: country.timezones,
                            borders: country.borders,
                            independent: country.independent,
                } as CountryDetails));
            
                if (filter) {
                    countryDetails = countryDetails.filter(country => {
                        if (filter.region !== undefined && country.region !== filter.region) return false;
                        if (filter.subregion !== undefined && country.subregion !== filter.subregion) return false;
                        if (filter.minPopulation !== undefined && country.population <= filter.minPopulation) return false;
                        if (filter.maxPopulation !== undefined && country.population >= filter.maxPopulation) return false;
                        if (filter.minArea !== undefined && country.area <= filter.minArea) return false;
                        if (filter.maxArea !== undefined && country.area >= filter.maxArea) return false;
                        if (filter.minLongitude !== undefined && country.longitude <= filter.minLongitude) return false;
                        if (filter.maxLongitude !== undefined && country.longitude >= filter.maxLongitude) return false;
                        if (filter.minLatitude !== undefined && country.latitude <= filter.minLatitude) return false;
                        if (filter.maxLatitude !== undefined && country.latitude >= filter.maxLatitude) return false;
                        
                        if (filter.timezones !== undefined && filter.timezones.filter(t => 
                            country.timezones.some(ct => ct.toLowerCase() === t.toLowerCase())).length === 0) return false;
                        
                        if (filter.borders !== undefined && filter.borders.filter(t => 
                            country.borders.some(cb => cb.toLowerCase() === t.toLowerCase())).length === 0) return false;
                        
                        if (filter.languages !== undefined && filter.languages.filter(l => 
                            country.languages.some(cl => cl.toLowerCase() === l.toLowerCase())).length === 0) return false;
                        
                        if (filter.currencies !== undefined && filter.currencies.filter(c => 
                            country.currencies.some(cc => cc.toLowerCase() === c.toLowerCase())).length === 0) return false;

                        if (filter.independent !== undefined && country.independent !== filter.independent) return false;
                        return true;
                    });
                }

                if (sort) {
                    countryDetails = countryDetails.sort((a, b) => {
                        const aValue = a[sort.property];
                        const bValue = b[sort.property];

                        if (aValue < bValue) return sort.order === 'asc' ? -1 : 1;
                        if (aValue > bValue) return sort.order === 'asc' ? 1 : -1;
                        return 0;
                    });
                }

                return countryDetails;
            }
            catch (error) {
                throw new Error("Service Unavailable");
            }
        }
        catch (error) {
            throw new Error("Service Unavailable");
        }
    }

    public async getCandidateByCountryCode(countryCode: CountryCode): Promise<Candidate | null> {
        const candidates = await this.getCandidates();

        const candidateByCountryCode = candidates.find((c: Candidate) => 
            c.countryCode.trim().toLowerCase() === countryCode.trim().toLowerCase() || 
            c.fifaCode.trim().toLowerCase() === countryCode.trim().toLowerCase()
        );

        return candidateByCountryCode ? candidateByCountryCode : null;
    }

    public async getTeamHeaderByCountryCode(countryCode: CountryCode): Promise<TeamHeader | null> {
        const teams = await this.getTeamHeaders();

        const teamHeaderByCountryCode = teams.find((t: TeamHeader) => 
            t.countryCode.trim().toLowerCase() === countryCode.trim().toLowerCase() || 
            t.fifaCode.trim().toLowerCase() === countryCode.trim().toLowerCase()
        );

        return teamHeaderByCountryCode ? teamHeaderByCountryCode : null;
    }

    public async getCountryHeaderByCountryCode(countryCode: CountryCode): Promise<CountryHeader | null> {
        const countryHeaders = await this.getCountryHeaders();

        const countryHeader = countryHeaders.find(ch => 
            ch.countryCode.trim().toLowerCase() === countryCode.trim().toLowerCase() ||
            ch.fifaCode.trim().toLowerCase() === countryCode.trim().toLowerCase()
        );

        return countryHeader ? countryHeader : null;
    }

    public async getTeamDetailsByCountryCode(countryCode: CountryCode): Promise<TeamDetails | null> {
        var teamDetails = await this.getTeamDetails();

        var teamDetailByCountryCode = teamDetails.find((t: TeamDetails) => 
            t.countryCode.trim().toLowerCase() === countryCode.trim().toLowerCase() || 
            t.fifaCode.trim().toLowerCase() === countryCode.trim().toLowerCase());

        return teamDetailByCountryCode ? teamDetailByCountryCode : null;
    }

    public async getCountryDetailsByCountryCode(countryCode: CountryCode): Promise<CountryDetails | null> {
        const countryDetails = await this.getCountryDetails();

        const countryDetailByCountryCode = countryDetails.find(cd => 
            cd.countryCode.trim().toLowerCase() === countryCode.trim().toLowerCase() ||
            cd.fifaCode.trim().toLowerCase() === countryCode.trim().toLowerCase()
        );

        return countryDetailByCountryCode ? countryDetailByCountryCode : null;
    }
}