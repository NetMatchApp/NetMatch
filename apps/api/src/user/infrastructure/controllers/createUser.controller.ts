import { Request, Response } from "express";
import { createUserService } from "../../application/useCases/createUser.service";
import { CreateUserCommand } from "../../application/commands/createUser.command";
import { UserRepository } from "../persistance/repositories/userRepository";
import { getUserByMailService } from "../../application/useCases/getUserByMail.service";
import { GetUserByMailQuery } from "../../application/queries/getUserByMail.query";
import { GetUserByIdQuery } from "../../application/queries/getUserById.query";
import { getUserByIdService } from "../../application/useCases/getUserById.service";


export class CreateUserController {

    constructor() {;}

    public static async createUser(req: Request, res: Response){

        const userRepository = new UserRepository();
        const getUserByMailQuery = new GetUserByMailQuery(req.body.mail);
        const getUserByIdQuery = new GetUserByIdQuery(req.params.id);

        try {

            const userWithSameMail = await getUserByMailService(userRepository, getUserByMailQuery)
            if(userWithSameMail != null){
                throw new Error("User with same mail already exists error")
            }

            const userWithSameId = await getUserByIdService(userRepository, getUserByIdQuery);
            if(userWithSameId != null){
                throw new Error("User with same id already exists error")
            }

            const createUserCommand = new CreateUserCommand(req.params.id, req.body.mail, req.body.name, req.body.password, req.body.company, req.body.position)
            createUserService(userRepository, createUserCommand)
            res.send("user was registered")

        } catch (error) {
            res.send(error.message)
        }

    }
}