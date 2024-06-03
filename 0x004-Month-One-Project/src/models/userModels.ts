export interface userStructure {
    id: string;
    userName: string;
    email: string;
}
export interface userDetails {
    userName: string;
    email: string;
}

export class User implements userDetails {
    userName: string;
    email: string;
    constructor(userName: string, email: string) {
        this.userName = userName;
        this.email = email;
    }
}
