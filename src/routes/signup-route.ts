import {Router} from "express";
import * as validator from "../middlewares/validator";
import * as signupController from "../controllers/signup-controller";
import signupSchema from "../validations/signup-schema";

const router: Router = Router();

router.post("/", validator.validate(signupSchema), signupController.signup);

export default router;
