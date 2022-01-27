import { v4 as uuid } from 'uuid'
import { Company } from './user-company';
import { Position } from './user-position';
import { UserName } from './user-username';

export class User {

    private _id: string;
    private _userName: UserName
    private _company: Company
    private _position: Position


    constructor(id: string, userName: string, company?: string, position?: string) {
        this._id = id;
        this._userName = new UserName(userName);
        this._company = new Company(company);
        this._position = new Position(position);
    }

    public static create(name: string, company?: string, position?: string){
        const id = uuid();
        return new User(id, name, company, position);
    }
    
    
    public get id() : string {
        return this._id
    }
    

    public get userName() : string {
        return this._userName.name
    }
    
    public set userName(newName : string) {
        this._userName = new UserName(newName)
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