import { Request, Response } from "express";
import { CreateComunityCommand } from "../../application/commands/createComunity.command";
import { createComunityService } from "../../application/useCases/createComunity.service";
import { ComunityRepository } from "../persistance/repositories/comunityRepository";


export class CreateComunityController {

    constructor() {;}

    public static async createComunity(req: Request, res: Response){

        const comunityRepository = new ComunityRepository();

        try {

            const createComunityCommand = new CreateComunityCommand(req.params.id, req.body.name);

            await createComunityService(comunityRepository, createComunityCommand);

            res.send("comunity was registered")

        } catch (error) {
            res.send(error.message)
        }

    }
}