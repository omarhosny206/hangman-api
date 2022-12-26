import {ObjectId, Types} from "mongoose";

import IUser from "../interfaces/user-interface";
import User from "../models/user";
import ApiError from "../utils/api-error";
export const getAll = async (): Promise<IUser[]> => {
    try {
        const users: IUser[] = await User.find().sort({"highestScore" : -1});
        return users;
    } catch (error) {
        throw ApiError.from(error);
    }
};

export const getById = async (_id: Types.ObjectId) => {
    try {
        const user = await User.findById(_id);
        return user;
    } catch (error) {
        throw ApiError.from(error);
    }
};

export const getByEmail = async (email: string) => {
    try {
        const user = await User.findOne({email: email});
        return user;
    } catch (error) {
        throw ApiError.from(error);
    }
};

export const save = async (user: IUser): Promise<IUser> => {
    try {
        const savedUser: IUser = await User.create(user);
        return savedUser;
    } catch (error) {
        throw ApiError.from(error);
    }
};

export const update = async (_id: Types.ObjectId, highestScore: number): Promise<IUser> => {
    try {
        const user = await getById(_id);

        if (!user) {
            throw ApiError.badRequest("Cannot update the score");
        }

        user.highestScore = Math.max(user.highestScore, highestScore);
        return await user.save();
    } catch (error) {
        throw ApiError.from(error);
    }
};
