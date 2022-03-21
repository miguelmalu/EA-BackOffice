import { User } from "./user"

export class Activity{
    name: string;
    description: string;
    organizer: User[];
    users: User[];
    language: string;
    location: string[];
    //ratings: [{type: Schema.Types.ObjectId,cref: 'Rating'}],
    //messages: [{type: Schema.Types.ObjectId,cref: 'Message'}]

    constructor(name:string, description:string, organizer:User[], users:User[], language:string, location:string[], /* ratings:Rating[], message:Message[]*/){
        this.name = name;
        this.description = description;
        this.organizer = organizer;
        this.users = users;
        this.language = language;
        this.location = location;
    }
}