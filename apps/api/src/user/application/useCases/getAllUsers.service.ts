import { UserRepositoryInterface } from "../../domain/repository/userRepositoryInterface";

export async function getAllUsersService (userRepository: UserRepositoryInterface) {

    return await userRepository.getAllUsers();
}