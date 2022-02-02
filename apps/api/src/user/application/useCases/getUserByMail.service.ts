import { UserRepositoryInterface } from "../../domain/repository/userRepositoryInterface";
import { GetUserByMailQuery } from "../queries/getUserByMail.query";

export async function getUserByMailService (userRepository: UserRepositoryInterface, getUserByMailQuery: GetUserByMailQuery) {

    return await userRepository.getUserByMail(getUserByMailQuery.mail);
}