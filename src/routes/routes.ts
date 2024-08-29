/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CandidateService } from './../services/candidate-service';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CandidateController } from './../controllers/candidates-controller';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "CountryCode": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"dataType":"string"},{"dataType":"nestedObjectLiteral","nestedProperties":{"__length3__":{"dataType":"enum","enums":[true],"required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PositiveNumber": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"dataType":"double"},{"dataType":"nestedObjectLiteral","nestedProperties":{"__positive__":{"dataType":"enum","enums":[true],"required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WorldRegion": {
        "dataType": "refEnum",
        "enums": ["Africa","Americas","Asia","Europe","Oceania","Antarctica","Polar"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WorldSubregion": {
        "dataType": "refEnum",
        "enums": ["Northern Africa","Sub-Saharan Africa","Latin America and the Caribbean","Caribbean","Central America","South America","Northern America","Central Asia","Eastern Asia","South-Eastern Asia","Southern Asia","Western Asia","Eastern Europe","Northern Europe","Southern Europe","Western Europe","Australia and New Zealand","Melanesia","Micronesia","Polynesia","Antarctica"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Url": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"dataType":"string"},{"dataType":"nestedObjectLiteral","nestedProperties":{"__brand":{"dataType":"enum","enums":["url"],"required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Candidate": {
        "dataType": "refObject",
        "properties": {
            "countryCode": {"ref":"CountryCode","required":true,"validators":{"isString":{"errorMsg":"Must be string with 3 characters"},"minLength":{"errorMsg":"Must be string with 3 characters","value":3},"maxLength":{"errorMsg":"Must be string with 3 characters","value":3}}},
            "countryName": {"dataType":"string","required":true},
            "area": {"ref":"PositiveNumber","required":true},
            "population": {"ref":"PositiveNumber","required":true},
            "region": {"ref":"WorldRegion","required":true},
            "subregion": {"ref":"WorldSubregion","required":true},
            "capital": {"dataType":"string","required":true},
            "teamName": {"dataType":"string","required":true},
            "teamIconSvgUrl": {"ref":"Url","required":true},
            "countryFlagSvgUrl": {"ref":"Url","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CountryHeader": {
        "dataType": "refObject",
        "properties": {
            "countryName": {"dataType":"string","required":true},
            "countryCode": {"ref":"CountryCode","required":true},
            "area": {"ref":"PositiveNumber","required":true},
            "population": {"ref":"PositiveNumber","required":true},
            "region": {"ref":"WorldRegion","required":true},
            "subregion": {"ref":"WorldSubregion","required":true},
            "countryFlagSvgUrl": {"ref":"Url","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Latitude": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"dataType":"double"},{"dataType":"nestedObjectLiteral","nestedProperties":{"__brand":{"dataType":"enum","enums":["latitude"],"required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Longitude": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"dataType":"double"},{"dataType":"nestedObjectLiteral","nestedProperties":{"__brand":{"dataType":"enum","enums":["longitude"],"required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Timezone": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"dataType":"string"},{"dataType":"nestedObjectLiteral","nestedProperties":{"__brand":{"dataType":"enum","enums":["timezone"],"required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CountryDetails": {
        "dataType": "refObject",
        "properties": {
            "countryCode": {"ref":"CountryCode","required":true},
            "countryName": {"dataType":"string","required":true},
            "area": {"ref":"PositiveNumber","required":true},
            "population": {"ref":"PositiveNumber","required":true},
            "region": {"ref":"WorldRegion","required":true},
            "subregion": {"ref":"WorldSubregion","required":true},
            "capital": {"dataType":"string","required":true},
            "languages": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "currencies": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "latitude": {"ref":"Latitude","required":true},
            "longitude": {"ref":"Longitude","required":true},
            "timezones": {"dataType":"array","array":{"dataType":"refAlias","ref":"Timezone"},"required":true},
            "borders": {"dataType":"array","array":{"dataType":"refAlias","ref":"CountryCode"},"required":true},
            "independent": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TeamHeader": {
        "dataType": "refObject",
        "properties": {
            "countryCode": {"ref":"CountryCode","required":true},
            "teamName": {"dataType":"string","required":true},
            "teamIconSvgUrl": {"ref":"Url","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TeamDetails": {
        "dataType": "refObject",
        "properties": {
            "countryCode": {"ref":"CountryCode","required":true},
            "teamName": {"dataType":"string","required":true},
            "teamIconSvgUrl": {"ref":"Url","required":true},
            "groupRank": {"ref":"PositiveNumber","required":true},
            "totalRank": {"ref":"PositiveNumber","required":true},
            "goalsScored": {"ref":"PositiveNumber","required":true},
            "goalsConceded": {"ref":"PositiveNumber","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        app.get('/candidates',
            ...(fetchMiddlewares<RequestHandler>(CandidateController)),
            ...(fetchMiddlewares<RequestHandler>(CandidateController.prototype.getAllCandidates)),

            async function CandidateController_getAllCandidates(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    minArea: {"in":"query","name":"minArea","dataType":"double"},
                    maxArea: {"in":"query","name":"maxArea","dataType":"double"},
                    minPopulation: {"in":"query","name":"minPopulation","dataType":"double"},
                    maxPopulation: {"in":"query","name":"maxPopulation","dataType":"double"},
                    region: {"in":"query","name":"region","ref":"WorldRegion"},
                    subregion: {"in":"query","name":"subregion","ref":"WorldSubregion"},
                    sortBy: {"in":"query","name":"sortBy","dataType":"enum","enums":["countryCode","countryName","area","population","region","subregion","capital","teamName","teamIconSvgUrl","countryFlagSvgUrl"]},
                    sortOrder: {"in":"query","name":"sortOrder","dataType":"union","subSchemas":[{"dataType":"enum","enums":["asc"]},{"dataType":"enum","enums":["desc"]}]},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CandidateController();

              await templateService.apiHandler({
                methodName: 'getAllCandidates',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/candidates/country',
            ...(fetchMiddlewares<RequestHandler>(CandidateController)),
            ...(fetchMiddlewares<RequestHandler>(CandidateController.prototype.getAllCountries)),

            async function CandidateController_getAllCountries(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    region: {"in":"query","name":"region","ref":"WorldRegion"},
                    subregion: {"in":"query","name":"subregion","ref":"WorldSubregion"},
                    sortBy: {"in":"query","name":"sortBy","dataType":"enum","enums":["countryCode","countryName","area","population","region","subregion","countryFlagSvgUrl"]},
                    sortOrder: {"in":"query","name":"sortOrder","dataType":"union","subSchemas":[{"dataType":"enum","enums":["asc"]},{"dataType":"enum","enums":["desc"]}]},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CandidateController();

              await templateService.apiHandler({
                methodName: 'getAllCountries',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/candidates/country/details',
            ...(fetchMiddlewares<RequestHandler>(CandidateController)),
            ...(fetchMiddlewares<RequestHandler>(CandidateController.prototype.getAllCountriesDetails)),

            async function CandidateController_getAllCountriesDetails(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    region: {"in":"query","name":"region","ref":"WorldRegion"},
                    subregion: {"in":"query","name":"subregion","ref":"WorldSubregion"},
                    minPopulation: {"in":"query","name":"minPopulation","dataType":"double"},
                    maxPopulation: {"in":"query","name":"maxPopulation","dataType":"double"},
                    minArea: {"in":"query","name":"minArea","dataType":"double"},
                    maxArea: {"in":"query","name":"maxArea","dataType":"double"},
                    minLongitude: {"in":"query","name":"minLongitude","dataType":"double"},
                    maxLongitude: {"in":"query","name":"maxLongitude","dataType":"double"},
                    minLatitude: {"in":"query","name":"minLatitude","dataType":"double"},
                    maxLatitude: {"in":"query","name":"maxLatitude","dataType":"double"},
                    timezones: {"in":"query","name":"timezones","dataType":"array","array":{"dataType":"string"}},
                    borders: {"in":"query","name":"borders","dataType":"array","array":{"dataType":"string"}},
                    languages: {"in":"query","name":"languages","dataType":"array","array":{"dataType":"string"}},
                    currencies: {"in":"query","name":"currencies","dataType":"array","array":{"dataType":"string"}},
                    sortBy: {"in":"query","name":"sortBy","dataType":"enum","enums":["countryCode","countryName","area","population","region","subregion","capital","languages","currencies","latitude","longitude","timezones","borders","independent"]},
                    sortOrder: {"in":"query","name":"sortOrder","dataType":"union","subSchemas":[{"dataType":"enum","enums":["asc"]},{"dataType":"enum","enums":["desc"]}]},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CandidateController();

              await templateService.apiHandler({
                methodName: 'getAllCountriesDetails',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/candidates/team',
            ...(fetchMiddlewares<RequestHandler>(CandidateController)),
            ...(fetchMiddlewares<RequestHandler>(CandidateController.prototype.getAllTeams)),

            async function CandidateController_getAllTeams(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    sortBy: {"in":"query","name":"sortBy","dataType":"enum","enums":["countryCode","teamName","teamIconSvgUrl"]},
                    sortOrder: {"in":"query","name":"sortOrder","dataType":"union","subSchemas":[{"dataType":"enum","enums":["asc"]},{"dataType":"enum","enums":["desc"]}]},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CandidateController();

              await templateService.apiHandler({
                methodName: 'getAllTeams',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/candidates/team/details',
            ...(fetchMiddlewares<RequestHandler>(CandidateController)),
            ...(fetchMiddlewares<RequestHandler>(CandidateController.prototype.getAllTeamDetails)),

            async function CandidateController_getAllTeamDetails(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    minGroupRank: {"in":"query","name":"minGroupRank","dataType":"double"},
                    maxGroupRank: {"in":"query","name":"maxGroupRank","dataType":"double"},
                    minTotalRank: {"in":"query","name":"minTotalRank","dataType":"double"},
                    maxTotalRank: {"in":"query","name":"maxTotalRank","dataType":"double"},
                    minGoalsScored: {"in":"query","name":"minGoalsScored","dataType":"double"},
                    maxGoalsScored: {"in":"query","name":"maxGoalsScored","dataType":"double"},
                    minGoalsConceded: {"in":"query","name":"minGoalsConceded","dataType":"double"},
                    maxGoalsConceded: {"in":"query","name":"maxGoalsConceded","dataType":"double"},
                    sortBy: {"in":"query","name":"sortBy","dataType":"enum","enums":["countryCode","teamName","teamIconSvgUrl","groupRank","totalRank","goalsScored","goalsConceded"]},
                    sortOrder: {"in":"query","name":"sortOrder","dataType":"union","subSchemas":[{"dataType":"enum","enums":["asc"]},{"dataType":"enum","enums":["desc"]}]},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CandidateController();

              await templateService.apiHandler({
                methodName: 'getAllTeamDetails',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/candidates/:countryCode',
            ...(fetchMiddlewares<RequestHandler>(CandidateController)),
            ...(fetchMiddlewares<RequestHandler>(CandidateController.prototype.getCandidateByCountryCode)),

            async function CandidateController_getCandidateByCountryCode(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    countryCode: {"in":"path","name":"countryCode","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CandidateController();

              await templateService.apiHandler({
                methodName: 'getCandidateByCountryCode',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/candidates/:countryCode/country',
            ...(fetchMiddlewares<RequestHandler>(CandidateController)),
            ...(fetchMiddlewares<RequestHandler>(CandidateController.prototype.getCountryHeaderByCountryCode)),

            async function CandidateController_getCountryHeaderByCountryCode(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    countryCode: {"in":"path","name":"countryCode","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CandidateController();

              await templateService.apiHandler({
                methodName: 'getCountryHeaderByCountryCode',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/candidates/:countryCode/country/details',
            ...(fetchMiddlewares<RequestHandler>(CandidateController)),
            ...(fetchMiddlewares<RequestHandler>(CandidateController.prototype.getCountryDetailsByCountryCode)),

            async function CandidateController_getCountryDetailsByCountryCode(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    countryCode: {"in":"path","name":"countryCode","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CandidateController();

              await templateService.apiHandler({
                methodName: 'getCountryDetailsByCountryCode',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/candidates/:countryCode/team',
            ...(fetchMiddlewares<RequestHandler>(CandidateController)),
            ...(fetchMiddlewares<RequestHandler>(CandidateController.prototype.getTeamHeaderByCountryCode)),

            async function CandidateController_getTeamHeaderByCountryCode(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    countryCode: {"in":"path","name":"countryCode","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CandidateController();

              await templateService.apiHandler({
                methodName: 'getTeamHeaderByCountryCode',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/candidates/:countryCode/team/details',
            ...(fetchMiddlewares<RequestHandler>(CandidateController)),
            ...(fetchMiddlewares<RequestHandler>(CandidateController.prototype.getTeamDetailsByCountryCode)),

            async function CandidateController_getTeamDetailsByCountryCode(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    countryCode: {"in":"path","name":"countryCode","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CandidateController();

              await templateService.apiHandler({
                methodName: 'getTeamDetailsByCountryCode',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
