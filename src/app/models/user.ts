export class User {
    _id?: string;
    name: string;
    surname: string;
    username: string;
    password: string;
    phone?: string;
    mail?: string;
    creationDate?: Date;

    constructor(name: string, surname: string, username:string, password: string, phone: string, mail: string) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.mail = mail;
    }   
}
