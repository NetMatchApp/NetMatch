export class CreateUserCommand {

    private _name: string
    private _mail: string
    private _company: string
    private _position: string


    constructor(name: string, mail: string, company: string, position: string) {
     
        this._name = name
        this._mail = mail
        this._company = company
        this._position = position
    }

 
    public get name() : string {
        return this._name
    }

    public get mail() : string {
        return this._mail
    }
    
    public get company() : string {
        return this._company
    }

    public get position() : string {
        return this._position
    }   
    
}