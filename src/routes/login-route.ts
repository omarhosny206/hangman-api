import {Router} from "express";
import * as loginController from "../controllers/login-controller";
import * as validator from "../middlewares/validator";
import loginRequestSchema from "../validations/login-request-schema";

const router: Router = Router();

router.post("/", validator.validate(loginRequestSchema), loginController.login);

export default router;
