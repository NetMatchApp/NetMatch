import { v4 as uuid } from 'uuid'
import { Company } from './user-company';
import { Position } from './user-position';
import { UserName } from './user-username';

export class User {

    private _id: string;
    private _userName: UserName
    private _company: Company
    private _position: Position


    constructor(id: string, userName: UserName, company?: Company, position?: Position) {
        this._id = id;
        this._userName = userName;
        this._company = company;
        this._position = position;
    }

    public static create(name: string, company?: string, position?: string){
        const id = uuid();
        const userName = new UserName(name);
        const userCompany = new Company(company);
        const userPosition = new Position(position);
        return new User(id, userName, userCompany, userPosition);
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