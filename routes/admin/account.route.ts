import express, { Router } from "express";
const router: Router = express.Router();

import storage from "../../utils/storage.util";
import multerUtil from "../../utils/multer.util";
const upload = multerUtil({ storage });

import validate from "../../validates/admin/account.validate";
import controller from "../../controllers/admin/account.controller";

router.get("/", controller.get);

router.get("/create", controller.create);
router.post(
  "/create",
  upload.single("avatar"),
  validate.createPost,
  controller.createPost
)

export default router;