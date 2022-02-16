import { Schema } from "mongoose";

export const comunitySchema = new Schema(
    {
        id: String,
        name: String,
        tags: [{
            type: { name: String }
        }]
    }
)