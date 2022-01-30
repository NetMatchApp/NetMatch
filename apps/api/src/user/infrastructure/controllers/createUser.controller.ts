import { Request, Response } from "express";
import { createUserService } from "../../application/useCases/createUser.service";
import { CreateUserCommand } from "../../application/commands/createUser.command";
import { UserRepository } from "../persistance/repositories/userRepository";


export class CreateUserController {

    constructor() {;}

    public static createUser(req: Request, res: Response){

        const createUserCommand = new CreateUserCommand(req.body.name, req.body.mail, req.body.company, req.body.position)
        const userRepository = new UserRepository();

        try {

            createUserService(userRepository, createUserCommand);
            
        } catch (error) {

            res.send(error.message)
            
        }

        res.send("user was created")
    }
}