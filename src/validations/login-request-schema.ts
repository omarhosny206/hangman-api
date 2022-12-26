import Joi from "joi";
import ILoginRequest from "../interfaces/login-request-interface";

const loginRequestSchema: Joi.ObjectSchema<ILoginRequest> = Joi.object<ILoginRequest>({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
});

export default loginRequestSchema;
