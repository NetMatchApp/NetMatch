import { UserRepositoryInterface } from "../../domain/repository/userRepositoryInterface";
import { GetUserQuery } from "../queries/getUser.query";

export async function getUserByIdService (userRepository: UserRepositoryInterface, getUserQuery: GetUserQuery) {

    return await userRepository.getUserById(getUserQuery.id);
}