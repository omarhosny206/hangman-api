import { NextFunction, Request, RequestHandler, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { ObjectId } from "mongoose";

import IUser from "../interfaces/user-interface";
import * as userService from "../services/user-service";
import ApiError from "../utils/api-error";
import * as jwt from "../utils/jwt";

export const authenticateByToken: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader: string | undefined = req.headers["authorization"];

        if (!authorizationHeader || !authorizationHeader.startsWith("Bearer")) {
            throw ApiError.unauthorized("Unauthorized: token not provided");
        }

        const token: string = authorizationHeader.slice(7);
        const payload: JwtPayload = await jwt.verify(token);
        const user: IUser | null = await userService.getByEmail(payload.email);

        if (!user) {
            throw ApiError.unauthorized("Unauthorized: user not found");
        }

        req.user = user;
        next();
    } catch (error) {
        return next(error);
    }
};
