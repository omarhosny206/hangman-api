import * as dotenv from "dotenv";
import {connect, ConnectOptions} from "mongoose";

import ApiError from "../utils/api-error";

dotenv.config();

const MONGO_CONNECTION_STRING: string = process.env.MONGO_CONNECTION_STRING || "";

export const connectToDb = async (): Promise<void> => {
    try {
        const connectOptions: ConnectOptions = {retryWrites: true, w: "majority"};
        await connect(MONGO_CONNECTION_STRING, connectOptions);
    } catch (error) {
        throw ApiError.from(error);
    }
};
