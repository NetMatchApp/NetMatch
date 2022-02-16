export class ComunityName {

    private _name: string


    constructor(name: string){
        if(name == undefined){
            throw new Error("empty comunity name error")
        }
        if(name.length == 0){
            throw new Error("empty comunity name error")
        }
        this._name = name;
    }

    
    public get name() : string {
        return this._name
    }

    public set name(name : string) {
        this._name = name;
    }
     
}