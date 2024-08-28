import { Sort } from "../contract/sort.type";
import { WorldCupRepositoryBase } from "../contract/world-cup-repository-base";
import { Candidate, CandidateFilter } from "../model/candidate";
import { Route } from "tsoa";

@Route("candidates")
export class CandidateService {

  private candidateRepository!: WorldCupRepositoryBase;

  constructor(candidateRepository: WorldCupRepositoryBase) {
    this.candidateRepository = candidateRepository;
  }

  public async getAll(filter?: CandidateFilter, sort?: Sort<Candidate>): Promise<Candidate[]> {
    return this.candidateRepository.getCandidates(filter, sort);
  }
}