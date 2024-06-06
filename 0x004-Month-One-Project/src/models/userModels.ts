export interface IuserStructure {
    id: string;
    userName: string;
    email: string;
}
export interface IuserDTO {
    userName: string;
    email: string;
}
//------MIGHT RESTRUCTURE THIS SO AS IT ACTS AS A DTO AND HAVE ANOTHER CLASS HERE THAT IMPLEMENTS IUSERSTRUCTURE, but to avoid redundant code chill first, find a better alternative
export class UserDTO implements IuserDTO {
    userName: string;
    email: string;
    constructor(userName: string, email: string) {
        this.userName = userName;
        this.email = email;
    }
}

export class UserStructure implements IuserStructure {
    id: string;
    userName: string;
    email: string;
    constructor(id: string, userName: string, email: string) {
        this.id = id;
        this.userName = userName;
        this.email = email;
    }
}
