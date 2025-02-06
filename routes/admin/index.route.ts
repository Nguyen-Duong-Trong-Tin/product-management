import { Express } from "express";

import configs from "../../configs/index.config";

import admin from "../../middlewares/admin/admin.middleware";
import deserialize from "../../middlewares/admin/deserialize.middleware";

import authRoutes from "./auth.route";
import roleRoutes from "./role.route";
import accountRoutes from "./account.route";

const adminRoutes = (app: Express): void => {
  const prefixAdmin: string = `/${configs.admin}`;

  app.use(admin);

  app.use(`${prefixAdmin}/auth`, authRoutes);
  app.use(
    `${prefixAdmin}/roles`,
    deserialize,
    roleRoutes
  );
  app.use(
    `${prefixAdmin}/accounts`,
    deserialize,
    accountRoutes
  );
}

export default adminRoutes;