// src/users/usersController.ts
import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    Example,
    Response,
    SuccessResponse,
  } from "tsoa";
  import { User } from "../model/users/user";
  import { UserService, UserCreationParams } from "../services/userService";
  import { Inject } from "typescript-ioc";

  interface ValidateErrorJSON {
    message: "Validation failed";
    details: { [name: string]: unknown };
  }  

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
  
    @SuccessResponse("201", "Created") // Custom success response
    @Response<ValidateErrorJSON>(422, "Validation Failed", {
        message: "Validation failed",
        details: {
          requestBody: {
            message: "id is an excess property and therefore not allowed",
            value: "52907745-7672-470e-a803-a2f8feb52944",
          },
        },
      })
    @Post()
    public async createUser(
      @Body() requestBody: UserCreationParams
    ): Promise<void> {
      this.setStatus(201); // set return status 201
      new UserService().create(requestBody);
      return;
    }
  }