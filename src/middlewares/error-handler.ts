import {ErrorRequestHandler, NextFunction, Request, Response} from "express";
import IResponseError from "../interfaces/response-error-interface";
import ApiError from "../utils/api-error";
import ResponseError from "../utils/response-error";

export const handle: ErrorRequestHandler = async (
    error: Error,
    req: Request,
    res: Response<IResponseError>,
    next: NextFunction
): Promise<Response<IResponseError>> => {
    const newError: ResponseError = ApiError.from(error);
    const errorToReturn: IResponseError = {message: newError.message, status: newError.status};
    console.log(errorToReturn);
    return res.status(errorToReturn.status).json(errorToReturn);
};
