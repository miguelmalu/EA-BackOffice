export class UserCredentials {
    username: string;
    password: string;
    token?: string;

    constructor(username:string, password: string) {
        this.username = username;
        this.password = password;
    }   
}
