import { User } from "../../domain/model/user";
import { UserRepositoryInterface } from "../../domain/repository/userRepositoryInterface";
import { UpdateUserCommand } from "../commands/updateUser.command"

export function updateUserService(userRepository: UserRepositoryInterface, updateUserCommand: UpdateUserCommand) {

    const user = new User(updateUserCommand.id, updateUserCommand.mail, updateUserCommand.password, updateUserCommand.company, updateUserCommand.position)
    
    userRepository.updateUserById(user);
}