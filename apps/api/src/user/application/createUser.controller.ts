import { Request, Response } from "express";
import { User } from "../domain/model/user";
import { UserRepository } from "../infrastructure/mongodb/repositories/userRepository";

export function createUserController(req: Request, res: Response) {

    const user = User.create(req.body.name, req.body.company, req.body.position);
    
    const userRepository = new UserRepository();
    userRepository.saveUser(user);

    res.status(200).send("joya mi rey\n")
}