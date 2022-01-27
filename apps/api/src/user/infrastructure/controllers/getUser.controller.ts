import { Request, Response } from "express";
import { GetUserQuery } from "../../application/queries/getUser.query";
import { UserRepository } from "../persistance/repositories/userRepository";
import { getUserByIdService } from '../../application/useCases/getUserById.service'

export class GetUserController {

    constructor(){;}

    public static async getUserById(req: Request, res: Response){

        const userRepository = new UserRepository();
        const getUserQuery = new GetUserQuery(req.body.id);
        
        const result = await getUserByIdService(userRepository, getUserQuery);

        res.send(result)
    }
}