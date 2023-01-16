import { NextFunction, Request, Response } from "express";
import Joi from "joi";

import ILoginRequest from "../interfaces/login-request-interface";
import ApiError from "../utils/api-error";

export const validate = (schema: Joi.AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body: ILoginRequest = req.body;
    const value = await schema.validateAsync(body, { abortEarly: false });
    next();
  } catch (error) {
    const messages: string = error.details.map((validationErrorItem: Joi.ValidationErrorItem) => validationErrorItem.message).toString();
    next(ApiError.badRequest(messages));
  }
};
