import { UserRepositoryInterface } from "../../domain/repository/userRepositoryInterface";
import { GetUserByIdQuery } from "../queries/getUserById.query";

export async function getUserByIdService (userRepository: UserRepositoryInterface, getUserByIdQuery: GetUserByIdQuery) {

    return await userRepository.getUserById(getUserByIdQuery.id);
}