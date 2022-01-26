import { User } from "../../../domain/model/user";
import { userRepositoryInterface } from "../../../domain/repository/userRepositoryInterface"

import { Mongoose } from "mongoose"

import 'dotenv/config'

import { userSchema } from '../schemas/userSchema'

export class UserRepository implements userRepositoryInterface {

    private mongoose: Mongoose = new Mongoose()


    constructor(){;}
    

    public async saveUser(user: User){

        const mongoose = new Mongoose();

        await mongoose.connect(process.env.MONGO_URI);

        const schema = new mongoose.Schema(userSchema)

        const UserModel = mongoose.model('User', schema)

        const doc = new UserModel({
            
            userName: user.userName,
            company: user.companyName,
            position: user.positionName
        })

        await doc.save()

        mongoose.connection.close()
    }

    
}