import { User } from "./user";
import { Activity } from "./activity";

export class Message {
    _id?: string;
    message: string;
    sendingDate?: Date;
    sender: User;
    receiver?: User;
    activity?: Activity;

    constructor(message: string, sender: User, receiver:User, activity:Activity) {
        this.message = message;
        this.sender = sender;
        this.receiver = receiver;
        this.activity=activity;
    }   
}
