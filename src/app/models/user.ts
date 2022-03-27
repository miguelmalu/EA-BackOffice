import { Message } from "./message";

export class User {
    _id?: string;
    name: string;
    surname: string;
    username: string;
    password: string;
    phone?: string;
    mail?: string;
    languages?: string[];
    location?: string[];
    photo?: string;
/*     personalRatings?: Rating[];
    activitiesOrganized?: Activities[];
    activities?: Activities[];
    messages?: Message[]; */
    creationDate?: Date;
    messages?: Message[] = [];

    constructor(name: string, surname: string, username:string, password: string, phone: string,
        mail: string, languages: string[], location: string[], photo: string,
         /* personalRatings: Rating[], activitiesOrganized: Activities[], activities: Activities[], messages: Message[]*/) {
        
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.mail = mail;
        this.languages = languages;
        this.location = location;
        this.photo = photo;
/*         this.personalRatings = personalRatings;
        this.activitiesOrganized = activitiesOrganized;
        this.activities = activities;
        this.messages = messages; */
    }   
}
