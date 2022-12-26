import * as dotenv from "dotenv";
import * as jwt from "jsonwebtoken";
import ApiError from "./api-error";

dotenv.config();

const JWT_SECRET_KEY: string | undefined = process.env.JWT_SECRET_KEY;
const JWT_EXPIRATION: string | undefined = process.env.JWT_EXPIRATION;

export const generate = async (email: string): Promise<string> => {
    try {
        const signOptions: jwt.SignOptions = {expiresIn: JWT_EXPIRATION};
        const token = await jwt.sign({email: email}, JWT_SECRET_KEY!, signOptions);
        return token;
    } catch (error) {
        throw ApiError.from(error);
    }
};

export const verify = async (token: string): Promise<jwt.JwtPayload> => {
    try {
        const payload: jwt.JwtPayload = await jwt.verify(token, JWT_SECRET_KEY!) as jwt.JwtPayload;
        return payload;
    } catch (error) {
        throw ApiError.unauthorized(error.message);
    }
};
