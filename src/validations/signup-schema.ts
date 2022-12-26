import Joi from "joi";
import IUser from "../interfaces/user-interface";
import Role from "../utils/role";

const signupSchema: Joi.ObjectSchema<IUser> = Joi.object<IUser>({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required()
});

export default signupSchema;
