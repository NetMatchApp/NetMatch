export class Mail {

    private _mail: string


    constructor(mail: string){
        if(mail == undefined){
            throw new Error("empty user mail error")
        }
        if(mail.length == 0){
            throw new Error("empty user mail error")
        }
        // ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
        const regex = new RegExp( "^[" + "\\" + "w-" + "\\" + ".]+@([" + "\\" + "w-]+" + "\\" + ".)+[" + "\\" + "w-]{2,4}$" );
        if(regex.test(mail) == false){
            throw new Error("wrong user mail format error")
        }
        this._mail = mail;
    }

    
    public get mail() : string {
        return this._mail
    }

    public set mail(mail : string) {
        this._mail = mail;
    }
    
}