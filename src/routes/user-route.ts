import { Router } from "express";

import * as userController from "../controllers/user-controller";
import * as authentication from "../middlewares/authentication";
import * as validator from "../middlewares/validator";
import userUpdateScehma from "../validations/user-update-scehma";

const router: Router = Router();

router.use(authentication.authenticateByToken);

router.get("/", userController.getAll);
router.get("/:_id", userController.getById);
router.put("/", validator.validate(userUpdateScehma), userController.update);

export default router;
