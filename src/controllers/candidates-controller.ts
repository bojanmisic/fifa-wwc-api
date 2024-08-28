// src/users/usersController.ts
import { Candidate } from "src/model/candidate";
import { CandidateService } from "src/services/candidate-service";
import {
    Controller,
    Get,
    Route,
  } from "tsoa";
import { Inject } from "typescript-ioc";

  @Route("candidates")
  export class CandidateController extends Controller {

    private candidateService: CandidateService;

    constructor(@Inject candidateService: CandidateService) {
        super();

        this.candidateService = candidateService;
    }

    @Get()
    public async getAllCandidates(): Promise<Candidate[]> {
        return this.candidateService.getAll();
    }
}