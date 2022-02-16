import { ComunityName } from "./comunity-name";
import { Tag } from "./tag";

export class Comunity {

    private _id: string;
    private _name: ComunityName;
    private _tags: Tag[] = [];


    constructor(id: string, name: string) {
        this._id = id;
        this._name = new ComunityName(name);
    }

    
    public get id() : string {
        return this._id;
    }

    public get name() : string {
        return this._name.name;
    }

    public get tags() : Tag[] {
        return this._tags;
    }
    
    public addTag(tag: Tag){
        this._tags.push(tag);
    }
}