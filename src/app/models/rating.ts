import { User } from "./user";

export class Rating{
    _id?: String;
    rater: User;
    userRated: User;
    //activityRated: Activity;
    rating: Number;
    description: String;

    constructor(id: String, rater: User, userRated: User, rating: Number, description: String) {
        this._id = id;
        this.rater = rater;
        this.userRated = userRated;
        this.rating = rating;
        this.description = description;
    }  
}