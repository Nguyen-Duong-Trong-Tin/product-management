import express, { Router } from "express";
const router: Router = express.Router();

import controller from "../../controllers/client/product.controller";

router.get("/", controller.get);

export default router;