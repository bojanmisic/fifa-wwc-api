// src/services/userService.ts
import { User } from "../model/users/user";
import { MatchdataApi } from "../integrations/wwc2023/api";

export class UserService {
  public async get(id: number, name?: string): Promise<User> {

    const matchdataApi = new MatchdataApi("https://api.openligadb.de");

    const availableGroups = await matchdataApi.getavailablegroupsLeagueShortcutLeagueSeasonGet("wwc", 2023);

    console.log(availableGroups);


    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }
}