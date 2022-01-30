import { Request } from "express";
import { updateUserService } from "../../application/useCases/updateUser.service";
import { UpdateUserCommand } from "../../application/commands/updateUser.command";
import { UserRepository } from "../persistance/repositories/userRepository";


export class UpdateUserController {

    constructor() {;}

    public static updateUserById(req: Request){

        const updateUserCommand = new UpdateUserCommand(req.body.id, req.body.name, req.body.mail, req.body.company, req.body.position)
        const userRepository = new UserRepository();

        updateUserService(userRepository, updateUserCommand);
    }
}