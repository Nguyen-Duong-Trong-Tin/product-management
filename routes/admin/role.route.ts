import express, { Router } from "express";
const router: Router = express.Router();

import validate from "../../validates/admin/role.validate";
import controller from "../../controllers/admin/role.controller";

router.get("/", controller.get);

router.get("/create", controller.create);
router.post(
  "/create",
  validate.createPost,
  controller.createPost
);

export default router;