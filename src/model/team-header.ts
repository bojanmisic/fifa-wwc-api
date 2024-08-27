import { FifaFederation } from "./enums/fifa-federation.enum";

/**
 * Represents a team's (country's) header information in the context of FIFA Women's World Cup.
 */
export interface TeamHeader {
    /**
     * The name of the country.
     */
    countryName: string;
  
    /**
     * The ISO 3166-1 alpha-3 country code.
     */
    countryCode: CountryCode;
  
    /**
     * FIFA ranking of the country.
     */
    fifaRank: PositiveNumber;
  
    /**
     * Continental federation (e.g., UEFA, CONCACAF).
     */
    federation: FifaFederation;
}