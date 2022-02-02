export class GetUserByMailQuery {

    private _mail: string

    constructor(mail: string) {
        this._mail = mail;
    }
 
    public get mail() : string {
        return this._mail;
    }
    
}