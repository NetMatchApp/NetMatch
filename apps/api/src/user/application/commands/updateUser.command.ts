export class UpdateUserCommand {

    private _id: string
    private _mail: string
    private _name: string
    private _company: string
    private _position: string


    constructor(id: string, name: string, mail: string, company: string, position: string) {
     
        this._id = id
        this._name = name
        this._mail = mail
        this._company = company
        this._position = position
    }

 

    public get id() : string {
        return this._id
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