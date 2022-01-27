import { UserRepositoryInterface } from "../../domain/repository/userRepositoryInterface";
import { DeleteUserCommand } from "../commands/deleteUser.command"

export function deleteUserService(userRepository: UserRepositoryInterface, deleteUserCommand: DeleteUserCommand) {

    userRepository.deleteUserById(deleteUserCommand.id);
}