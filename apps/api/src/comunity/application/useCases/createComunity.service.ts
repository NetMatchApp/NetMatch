import { Comunity } from "../../domain/model/comunity";
import { ComunityRepositoryInterface } from "../../domain/repository/comunityRepositoryInterface";
import { CreateComunityCommand } from "../commands/createComunity.command"

export async function createComunityService(comunityRepository: ComunityRepositoryInterface, createComunityCommand: CreateComunityCommand) {

    const comunity = new Comunity(createComunityCommand.id, createComunityCommand.name);
    await comunityRepository.saveComunity(comunity);
}