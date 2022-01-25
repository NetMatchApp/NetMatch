export class UserName {

    private _name: string


    constructor(name: string){
        if(name.length == 0){
            throw new Error("empty user name error")
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