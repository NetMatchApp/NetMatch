import { Request, Response } from "express";
import { GetUserByIdQuery } from "../../application/queries/getUserById.query";
import { UserRepository } from "../persistance/repositories/userRepository";
import { getUserByIdService } from '../../application/useCases/getUserById.service'

export class GetUserController {

    constructor(){;}

    public static async getUserById(req: Request, res: Response){

        const userRepository = new UserRepository();
        const getUserByIdQuery = new GetUserByIdQuery(req.params.id);
        
        const result = await getUserByIdService(userRepository, getUserByIdQuery);

        res.send(result)
    }
}