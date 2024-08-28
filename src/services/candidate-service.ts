import { WorldCupRepositoryBase } from "src/contract/world-cup-repository";
import { Candidate, CandidateFilter } from "src/model/candidate";
import { Route } from "tsoa";
import { Inject } from "typescript-ioc";

@Route("candidates")
export class CandidateService {

  private candidateRepository: WorldCupRepositoryBase;

  constructor(@Inject candidateRepository: WorldCupRepositoryBase) {
    this.candidateRepository = candidateRepository;
  }

  public async getAll(filter?: CandidateFilter, sort?: Sort<Candidate>): Promise<Candidate[]> {
    return this.candidateRepository.getCandidates(filter, sort);
  }
}