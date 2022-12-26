import bcrypt from "bcrypt";

import ILoginRequest from "../interfaces/login-request-interface";
import * as userService from "../services/user-service";
import ApiError from "../utils/api-error";
import * as jwt from "../utils/jwt";
import ILoginResponse from "../interfaces/login-response-interface";

export const login = async (userLogin: ILoginRequest): Promise<ILoginResponse> => {
    try {
        const {email, password} = userLogin;
        const storedUser = await userService.getByEmail(email);

        if (!storedUser) {
            throw ApiError.badRequest("Invalid email");
        }

        const hashedPassword = storedUser.password;
        const areEqualPasswords = await bcrypt.compare(password, hashedPassword);

        if (!areEqualPasswords) {
            throw ApiError.badRequest("Invalid password");
        }

        const token = await jwt.generate(email);
        return {user: storedUser, token: token};
    } catch (error) {
        throw ApiError.from(error);
    }
};
