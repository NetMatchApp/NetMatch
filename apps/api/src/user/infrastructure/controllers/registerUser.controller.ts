import { Request, Response } from "express";
import { CreateUserCommand } from "../../application/commands/createUser.command";
import { GetUserByMailQuery } from "../../application/queries/getUserByMail.query";
import { createUserService } from "../../application/useCases/createUser.service";
import { getUserByMailService } from "../../application/useCases/getUserByMail.service";
import { UserRepository } from "../persistance/repositories/userRepository";

export class RegisterUserController {

    constructor(){;}

    public static async registerUser(req: Request, res: Response){

        const userRepository = new UserRepository();
        const getUserByMailQuery = new GetUserByMailQuery(req.body.mail)

        try {

            const userWithSameMail = await getUserByMailService(userRepository, getUserByMailQuery)
            if(userWithSameMail != null){
                throw new Error("User already exists error")
            }

            const createUserCommand = new CreateUserCommand(req.body.mail, req.body.name, req.body.password, req.body.company, req.body.position)
            createUserService(userRepository, createUserCommand)
            res.send("user was registered")

        } catch (error) {
            res.send(error.message)
        }

    }
}