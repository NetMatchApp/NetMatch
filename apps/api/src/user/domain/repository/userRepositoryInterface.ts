import { User } from "../model/user"
export interface UserRepositoryInterface {

    saveUser(user: User): Promise<void>

    getUserById(id: string): Promise<string>

    getUserByMail(mail: string): Promise<string>

    getUserByName(name: string): Promise<string>

    getUsersByCompany(id: string): Promise<string[]>

    getUsersByPosition(id: string): Promise<string[]>

    deleteUserById(id: string): Promise<void>

    updateUserById(user: User): Promise<void>

    getAllUsers(): Promise<string[]>
}