import bcrypt from "bcrypt";

import ILoginRequest from "../interfaces/login-request-interface";
import ILoginResponse from "../interfaces/login-response-interface";
import * as userService from "../services/user-service";
import ApiError from "../utils/api-error";
import * as jwt from "../utils/jwt";

export const login = async (userLogin: ILoginRequest): Promise<ILoginResponse> => {
  try {
    const { email, password } = userLogin;
    const storedUser = await userService.getByEmail(email);

    if (!storedUser) {
      throw ApiError.unauthorized("Bad Credentials: Invalid email");
    }

    const hashedPassword = storedUser.password;
    const areEqualPasswords = await bcrypt.compare(password, hashedPassword);

    if (!areEqualPasswords) {
      throw ApiError.unauthorized("Bad Credentials: Invalid password");
    }

    const token = await jwt.generate(email);
    return { user: storedUser, token: token };
  } catch (error) {
    throw ApiError.from(error);
  }
};
