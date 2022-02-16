import { Mongoose } from "mongoose"

import 'dotenv/config'

import { comunitySchema } from '../schemas/comunitySchema'
import { ComunityRepositoryInterface } from "../../../domain/repository/comunityRepositoryInterface";
import { Comunity } from "../../../domain/model/comunity";

export class ComunityRepository implements ComunityRepositoryInterface {

    private mongoose: Mongoose = new Mongoose()

    constructor(){;}

    public async saveComunity(comunity: Comunity){

        const mongoose = new Mongoose();

        await mongoose.connect(process.env.MONGO_URI);

        const schema = new mongoose.Schema(comunitySchema);

        const ComunityModel = mongoose.model('Comunity', schema);

        const tags  = comunity.tags.map((tag) => {return {name: tag.name}});

        const doc = new ComunityModel({
            id: comunity.id,
            name: comunity.name,
            tags: tags
        })

        await doc.save();

        mongoose.connection.close();
    }

}