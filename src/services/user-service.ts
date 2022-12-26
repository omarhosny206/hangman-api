import {ObjectId, Types} from "mongoose";

import IUser from "../interfaces/user-interface";
import * as userRepository from "../repositories/user-repository";
import ApiError from "../utils/api-error";

export const getAll = async (): Promise<IUser[]> => {
    try {
        const users: IUser[] = await userRepository.getAll();
        return users;
    } catch (error) {
        throw ApiError.from(error);
    }
};

export const getById = async (_id: Types.ObjectId): Promise<IUser | null> => {
    try {
        const user: IUser | null = await userRepository.getById(_id);
        return user;
    } catch (error) {
        throw ApiError.from(error);
    }
};

export const getByEmail = async (email: string): Promise<IUser | null> => {
    try {
        const savedUser: IUser | null = await userRepository.getByEmail(email);
        return savedUser;
    } catch (error) {
        throw ApiError.from(error);
    }
};

export const save = async (user: IUser): Promise<IUser> => {
    try {
        const savedUser: IUser = await userRepository.save(user);
        return savedUser;
    } catch (error) {
        throw ApiError.from(error);
    }
};



export const update = async (_id : Types.ObjectId , highestScore: number): Promise<IUser> => {
    try {
        const user = await userRepository.update(_id, highestScore);
        return user;
    } catch (error) {
        throw ApiError.from(error);
    }
};
