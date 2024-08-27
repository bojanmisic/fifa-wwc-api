/**
 * OpenLigaDB-API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Sport } from './sport';
 /**
 * 
 *
 * @export
 * @interface League
 */
export interface League {

    /**
     * @type {number}
     * @memberof League
     */
    leagueId?: number;

    /**
     * @type {string}
     * @memberof League
     */
    leagueName?: string | null;

    /**
     * @type {string}
     * @memberof League
     */
    leagueShortcut?: string | null;

    /**
     * @type {string}
     * @memberof League
     */
    leagueSeason?: string | null;

    /**
     * @type {Sport}
     * @memberof League
     */
    sport?: Sport;
}
