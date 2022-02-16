import { User } from "../../domain/model/user";
import { UserRepositoryInterface } from "../../domain/repository/userRepositoryInterface";
import { CreateUserCommand } from "../commands/createUser.command"

export function createUserService(userRepository: UserRepositoryInterface, createUserCommand: CreateUserCommand) {

    const user = new User(createUserCommand.id, createUserCommand.mail, createUserCommand.name, createUserCommand.password, createUserCommand.company, createUserCommand.position)
    userRepository.saveUser(user);

}