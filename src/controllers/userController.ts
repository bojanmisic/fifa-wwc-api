// src/users/usersController.ts
import {
    Controller,
    Get,
    Path,
    Query,
    Route,
    Example
  } from "tsoa";
  import { User } from "../model/users/user";
  import { UserService } from "../services/userService";

  @Route("users")
  export class UsersController extends Controller {

    /**
    * Retrieves the details of an existing user.
    * Supply the unique user ID from either and receive corresponding user details.
    * @summary A concise summary.
    * @param userId The user's identifier
    * @param name Provide a username to display
    */

    @Example<User>({
        id: "52907745-7672-470e-a803-a2f8feb52944",
        name: "tsoa user",
        email: "hello@tsoa.com",
        phoneNumbers: [],
        status: "Happy",
    })
    @Get("{userId}")
    public async getUser(
      @Path() userId: number,
      @Query() name?: string
    ): Promise<User> {
      return new UserService().get(userId, name);
    }

  }