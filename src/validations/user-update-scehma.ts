import Joi from "joi";
import IUser from "../interfaces/user-interface";
import Role from "../utils/role";

const userUpdateSchema: Joi.ObjectSchema = Joi.object({
    highestScore: Joi.number().positive().required()
});

export default userUpdateSchema;
