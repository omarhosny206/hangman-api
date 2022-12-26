import {NextFunction, Request, RequestHandler, Response} from "express";
import ILoginRequest from "../interfaces/login-request-interface";
import ILoginResponse from "../interfaces/login-response-interface";
import * as loginService from "../services/login-service";
import StatusCode from "../utils/status-code";

export const login: RequestHandler = async (
    req: Request<any, any, ILoginRequest>,
    res: Response<ILoginResponse>,
    next: NextFunction
): Promise<Response<ILoginResponse> | void> => {
    try {
        const loginRequest: ILoginRequest = req.body;
        const loginResponse: ILoginResponse = await loginService.login(loginRequest);
        return res.status(StatusCode.OK).json(loginResponse);
    } catch (error) {
        return next(error);
    }
};
