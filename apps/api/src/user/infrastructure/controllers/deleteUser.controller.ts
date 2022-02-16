import { Request } from "express";
import { deleteUserService } from "../../application/useCases/deleteUser.service";
import { DeleteUserCommand } from "../../application/commands/deleteUser.command";
import { UserRepository } from "../persistance/repositories/userRepository";


export class DeleteUserController {

    constructor() {;}

    public static deleteUserById(req: Request){

        const deleteUserCommand = new DeleteUserCommand(req.params.id)
        const userRepository = new UserRepository();

        deleteUserService(userRepository, deleteUserCommand);
    }
}