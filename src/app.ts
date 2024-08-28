// src/app.ts
import express, {Response as ExResponse, Request as ExRequest, NextFunction, json, urlencoded} from "express";
import { RegisterRoutes } from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import { ValidateError } from "tsoa";
import { Container, Scope } from "typescript-ioc";
import { RealWorldCupRepository } from "./repositories/real-world-cup-repository";
import { WorldCupRepositoryBase } from "./contract/world-cup-repository";
import { CandidateService } from "./services/candidate-service";
import { MatchdataApi } from "./integrations/wwc2023/api";
import { CountriesApi } from "./integrations/restcountries/api";
import { CandidateController } from "./controllers/candidates-controller";

export const app = express();

Container.bind(MatchdataApi).to(new MatchdataApi("https://api.openligadb.de"));
Container.bind(CountriesApi).to(new CountriesApi("https://restcountries.com"));
Container.bind(WorldCupRepositoryBase).to(RealWorldCupRepository).scope(Scope.Singleton);
Container.bind(CandidateService).scope(Scope.Request);

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
      swaggerUi.generateHTML(await import("./swagger.json"))
    );
});

RegisterRoutes(app);

app.use(function notFoundHandler(_req, res: ExResponse) {
    res.status(404).send({
      message: "Not Found",
    });
});

app.use(function errorHandler(
    err: unknown,
    req: ExRequest,
    res: ExResponse,
    next: NextFunction
  ): ExResponse | void {
    if (err instanceof ValidateError) {
      console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
      return res.status(422).json({
        message: "Validation Failed",
        details: err?.fields,
      });
    }
    if (err instanceof Error) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  
    next();
});