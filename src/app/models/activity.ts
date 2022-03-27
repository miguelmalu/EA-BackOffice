import { Message } from "./message"
import { User } from "./user"

export class Activity{
    _id?: string;
    name: string;
    description: string;
    organizer: User;
    users: User[];
    language: string;
    location: string[];
    //ratings: [{type: Schema.Types.ObjectId,cref: 'Rating'}],
    messages?: Message[];

    constructor(name:string, description:string, organizer:User, users:User[], language:string, location:string[], /* ratings:Rating[],*/ messages:Message[]){
        this.name = name;
        this.description = description;
        this.organizer = organizer;
        this.language = language;
        this.location = location;
        this.users = users;
        //this.ratings = ratings;
        this.messages = messages;
    }
}