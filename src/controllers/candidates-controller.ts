// src/users/usersController.ts
import { RealWorldCupRepository } from "../repositories/real-world-cup-repository";
import { Candidate, CandidateFilter } from "../model/candidate";
import { CandidateService } from "../services/candidate-service";
import { PositiveNumber } from "../model/types";
import { WorldRegion, WorldSubregion } from "../model/enums";
import { Sort } from "../contract/sort.type";
import {
    Controller,
    Get,
    Query,
    Route,
    Tags,
  } from "tsoa";

  @Route("candidates")
  export class CandidateController extends Controller {

    private candidateService: CandidateService;

    constructor() {
        super();
        this.candidateService = new CandidateService(new RealWorldCupRepository());
    }

    /**
     * Retrieves all candidates based on the provided query parameters.
     * 
     * @param minArea - The minimum area to filter candidates by (positive number) in square kilometers.
     * @param maxArea - The maximum area to filter candidates by (positive number) in square kilometers.
     * @param minPopulation - The minimum population to filter candidates by (positive number) of population.
     * @param maxPopulation - The maximum population to filter candidates by (positive number) of population.
     * @param region - The region (continent) to filter candidates by.
     * @param subregion - The subregion (e.g., Caribbean, Melanesia) to filter candidates by.
     * @param sortBy - The property to sort candidates by.
     * @param sortOrder - The order to sort candidates by.
     * @returns An array of `Candidate` objects.
     */
    @Get()
    @Tags("Candidates")
    public async getAllCandidates(
      @Query() minArea?: number,
      @Query() maxArea?: number,
      @Query() minPopulation?: number,
      @Query() maxPopulation?: number,
      @Query() region?: WorldRegion,
      @Query() subregion?: WorldSubregion,
      @Query() sortBy?: keyof Candidate,
      @Query() sortOrder?: "asc" | "desc"
    ): Promise<Candidate[]> {
      try {
        return await this.candidateService.getAll(
          {
            minArea: minArea as PositiveNumber,
            maxArea: maxArea as PositiveNumber,
            minPopulation: minPopulation as PositiveNumber,
            maxPopulation: maxPopulation as PositiveNumber,
            region,
            subregion,
          } as CandidateFilter,
          {
            property: sortBy,
            order: sortOrder,
          } as Sort<Candidate>
        );
      } catch (error) {
        this.setStatus(500); // Set status manually if an error occurs
        throw new Error("Failed to retrieve candidates.");
      }
    }  
}