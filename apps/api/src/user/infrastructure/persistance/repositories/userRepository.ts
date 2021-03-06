import { User } from "../../../domain/model/user";
import { UserRepositoryInterface } from "../../../domain/repository/userRepositoryInterface"

import { Mongoose } from "mongoose"

import 'dotenv/config'

import { userSchema } from '../schemas/userSchema'

export class UserRepository implements UserRepositoryInterface {

    private mongoose: Mongoose = new Mongoose()


    constructor(){;}
    

    public async saveUser(user: User){

        const mongoose = new Mongoose();

        await mongoose.connect(process.env.MONGO_URI);

        const schema = new mongoose.Schema(userSchema);

        const UserModel = mongoose.model('User', schema);

        const doc = new UserModel({
            id: user.id,
            mail: user.mail,
            userName: user.userName,
            password: user.password,
            company: user.companyName,
            position: user.positionName
        })

        await doc.save();

        mongoose.connection.close();
    }

    
    public async getUserById(id: string): Promise<string> {
        
        const mongoose = new Mongoose();

        await mongoose.connect(process.env.MONGO_URI);

        const schema = new mongoose.Schema(userSchema)

        const UserModel = mongoose.model('User', schema);

        //mongoose.connection.close();

        return await UserModel.findOne({"id" : id})
    }


    public async getUserByName(name: string): Promise<string> {
        
        const mongoose = new Mongoose();

        await mongoose.connect(process.env.MONGO_URI);

        const schema = new mongoose.Schema(userSchema)

        const UserModel = mongoose.model('User', schema);

        //mongoose.connection.close();

        return await UserModel.findOne({"name" : name})
    }


    public async getUserByMail(mail: string): Promise<string> {
        
        const mongoose = new Mongoose();

        await mongoose.connect(process.env.MONGO_URI);

        const schema = new mongoose.Schema(userSchema)

        const UserModel = mongoose.model('User', schema);

        //mongoose.connection.close();

        return await UserModel.findOne({"mail" : mail})
    }


    public async getUsersByCompany(company: string): Promise<string[]> {
        
        const mongoose = new Mongoose();

        await mongoose.connect(process.env.MONGO_URI);

        const schema = new mongoose.Schema(userSchema)

        const UserModel = mongoose.model('User', schema);

        //mongoose.connection.close();

        return await UserModel.find({"company" : company})
    }


    public async getUsersByPosition(position: string): Promise<string[]> {
        
        const mongoose = new Mongoose();

        await mongoose.connect(process.env.MONGO_URI);

        const schema = new mongoose.Schema(userSchema)

        const UserModel = mongoose.model('User', schema);

        //mongoose.connection.close();

        return await UserModel.find({"position" : position})
    }


    public async deleteUserById(id: string): Promise<void> {

        const mongoose = new Mongoose();

        await mongoose.connect(process.env.MONGO_URI);

        const schema = new mongoose.Schema(userSchema)

        const UserModel = mongoose.model('User', schema);

        //mongoose.connection.close();

        await UserModel.deleteOne({"id" : id})
    }


    public async updateUserById(user: User): Promise<void> {
     
        const mongoose = new Mongoose();

        await mongoose.connect(process.env.MONGO_URI);

        const schema = new mongoose.Schema(userSchema)

        const UserModel = mongoose.model('User', schema);

        //mongoose.connection.close();

        await UserModel.updateOne(
            {"id" : user.id},
            { $set: { "mail" : user.mail,
                      "userName" : user.userName,
                      "password" : user.password,
                      "company" : user.companyName,
                      "position" : user.positionName
                    }  
            }
        )
    }

    public async getAllUsers(): Promise<string[]> {
        
        const mongoose = new Mongoose();

        await mongoose.connect(process.env.MONGO_URI);

        const schema = new mongoose.Schema(userSchema)

        const UserModel = mongoose.model('User', schema);

        //mongoose.connection.close();

        return await UserModel.find()
    }
}