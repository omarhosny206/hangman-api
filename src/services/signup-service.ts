import * as userService from "../services/user-service";
import ApiError from "../utils/api-error";
import bcrypt from "bcrypt";
import IUser from "../interfaces/user-interface";

export const signup = async (user: IUser): Promise<IUser> => {
    try {
        const {email, password} = user;
        const storedUser = await userService.getByEmail(email);

        if (storedUser) {
            throw ApiError.badRequest("This email is already taken, choose another one");
        }

        const hashedPassword: string = await bcrypt.hash(password, 10);
        user.password = hashedPassword;

        const savedUser = await userService.save(user);

        return savedUser;
    } catch (error) {
        throw ApiError.from(error);
    }
};
