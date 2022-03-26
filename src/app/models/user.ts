import { Message } from "./message";

export class User {
    _id?: number;
    name: string;
    surname: string;
    username: string;
    password: string;
    phone?: string;
    mail?: string;
    creationDate?: Date;
    messages?: Message[] = [];

    constructor(name: string, surname: string, username:string, password: string, phone: string, mail: string) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.mail = mail;
    }   
}
