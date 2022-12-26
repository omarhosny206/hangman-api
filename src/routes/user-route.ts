import {Router} from "express";

import * as userController from "../controllers/user-controller";
import * as authorization from "../middlewares/authorization";
import * as validator from "../middlewares/validator";
import userUpdateScehma from "../validations/user-update-scehma";

const router: Router = Router();

router.use(authorization.authorizeToken);

router.get("/", userController.getAll);
router.get("/:_id", userController.getById);
router.put("/", validator.validate(userUpdateScehma), userController.update);

export default router;
