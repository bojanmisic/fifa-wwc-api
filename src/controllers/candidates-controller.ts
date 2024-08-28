// src/users/usersController.ts
import { RealWorldCupRepository } from "../repositories/real-world-cup-repository";
import { Candidate } from "../model/candidate";
import { CandidateService } from "../services/candidate-service";
import {
    Controller,
    Get,
    Route,
  } from "tsoa";

  @Route("candidates")
  export class CandidateController extends Controller {

    private candidateService: CandidateService;

    constructor() {
        super();
        this.candidateService = new CandidateService(new RealWorldCupRepository());
    }

    @Get()
    public async getAllCandidates(): Promise<Candidate[]> {
        return this.candidateService.getAll();
    }
}