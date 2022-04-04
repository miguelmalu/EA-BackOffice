import { User } from "./user";
import { Activity } from "./activity";

export class Rating{
    _id?: String;
    tittle: string;
    rater: User;
    userRated?: User;
    activityRated?: Activity;
    rating: Number;
    description: String;

    constructor(id: String, tittle: string, rater: User, userRated: User, activityRated: Activity, rating: Number, description: String) {
        this._id = id;
        this.tittle = tittle;
        this.rater = rater;
        this.userRated = userRated;
        this.activityRated = activityRated;
        this.rating = rating;
        this.description = description;
    }  
}