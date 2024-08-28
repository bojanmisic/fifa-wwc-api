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
    "FifaFederation": {
        "dataType": "refEnum",
        "enums": ["AFC","CAF","CONCACAF","CONMEBOL","OFC","UEFA"],
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
            "countryCode": {"ref":"CountryCode","required":true},
            "countryName": {"dataType":"string","required":true},
            "fifaRank": {"ref":"PositiveNumber","required":true},
            "federation": {"ref":"FifaFederation","required":true},
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

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
