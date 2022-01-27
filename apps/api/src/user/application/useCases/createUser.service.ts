import { User } from "../../domain/model/user";
import { UserRepositoryInterface } from "../../domain/repository/userRepositoryInterface";
import { CreateUserCommand } from "../commands/createUser.command"

export function createUserService(userRepository: UserRepositoryInterface, createUserDTO: CreateUserCommand) {

    const user = User.create(createUserDTO.name, createUserDTO.company, createUserDTO.position);
    
    userRepository.saveUser(user);
}