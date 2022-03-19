export class User {
    _id?: number;
    name: string;
    surname: string;
    username: string;
    password: string;

    constructor(name: string, surname: string, username:string, password: string) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
    }   
}
