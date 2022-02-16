export class UpdateUserCommand {

    private _mail: string
    private _id: string
    private _password: string
    private _name: string
    private _company: string
    private _position: string


    constructor(id: string, mail: string, name: string, password: string, company: string, position: string) {
     
        this._id = id
        this._mail = mail
        this._name = name
        this._password = password
        this._company = company
        this._position = position
    }

 

    public get id() : string {
        return this._id
    }

    public get mail() : string {
        return this._mail
    }

    public get name() : string {
        return this._name
    }
  
    
    public get password() : string {
        return this._password
    }
    
    
    public get company() : string {
        return this._company
    }

    public get position() : string {
        return this._position
    }

}