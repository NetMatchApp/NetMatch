import { Request } from "express";
import { createUserService } from "../../application/useCases/createUser.service";
import { CreateUserCommand } from "../../application/commands/createUser.command";
import { UserRepository } from "../persistance/repositories/userRepository";


export class CreateUserController {

    constructor() {;}

    public static createUser(req: Request){

        const createUserCommand = new CreateUserCommand(req.body.name, req.body.company, req.body.position)
        const userRepository = new UserRepository();

        createUserService(userRepository, createUserCommand);
    }
}