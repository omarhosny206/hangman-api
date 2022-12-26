import {ObjectId, Types} from "mongoose";

export default interface IUser {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    highestScore: number;
}
