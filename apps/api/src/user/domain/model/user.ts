import { v4 as uuid } from 'uuid'
import { Company } from './user-company';
import { Mail } from './user-mail';
import { Position } from './user-position';
import { UserName } from './user-username';
import { Password } from './user-password';

export class User {

    private _id: string;
    private _mail: Mail;
    private _userName: UserName
    private _password: Password
    
    private _company: Company
    private _position: Position


    constructor(id: string, mail: string, name: string, password: string, company?: string, position?: string) {
        this._id = id;
        this._mail = new Mail(mail);
        this._userName = new UserName(name);
        this._password = new Password(password)

        this._company = new Company(company);
        this._position = new Position(position);
    }

    public static create(mail: string, name: string, password: string, company?: string, position?: string){
        const id = uuid();
        return new User(id, mail, name, password, company, position);
    }
    
    
    public get id() : string {
        return this._id
    }

    
    public get mail() : string {
        return this._mail.mail
    }
    public set mail(newMail : string) {
        this._mail = new Mail(newMail);
    }
    

    public get userName() : string {
        return this._userName.name
    }
    public set userName(newName : string) {
        this._userName = new UserName(newName)
    }


    public get password() : string {
        return this._password.password
    }
    public set password(newPassword : string) {
        this._password = new Password(newPassword)
    }


    public get companyName() : string {
        return this._company.name
    }
    public set userCompanyName(newCompany : string) {
        this._company = new Company(newCompany)
    }


    public get positionName() : string {
        return this._position.name
    }
    public set userPosition(newPosition : string) {
        this._position = new Position(newPosition)
    }
    
}