export class Company {

    private _name: string


    constructor(name: string|undefined){
        if( name == undefined) this._name = "";
        else this._name = name
    }

    
    public get name() : string {
        return this._name
    }

    public set name(name : string) {
        this._name = name;
    }
    
}