import { User } from "../model/user"
export interface userRepositoryInterface {

    saveUser(user: User): Promise<void>
}