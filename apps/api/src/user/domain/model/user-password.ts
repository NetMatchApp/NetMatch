export class Password {

    private readonly _minimumCharacters: number = 6;
    private readonly _maximumCharacters: number = 20;

    private _password: string

    constructor(password: string) {

        if(password == undefined){
            throw new Error("empty user password error")
        }
        if(password == "") {
            throw new Error("empty user password error")
        }
        if(password.length < this._minimumCharacters){
            throw new Error("password too short error")
        }
        if(password.length > this._maximumCharacters){
            throw new Error("password too long error")
        }

        this._password = password
    }

    
    public get password() : string {
        return this._password
    }
}