import { Request, Response } from "express";
import { UserRepository } from "../persistance/repositories/userRepository";
import { getAllUsersService } from "../../application/useCases/getAllUsers.service";

export class GetAllUsersController {

    constructor(){;}

    public static async getAllUsers(req: Request, res: Response){

        const userRepository = new UserRepository();
        
        const result = await getAllUsersService(userRepository);

        res.send(result)
    }
}