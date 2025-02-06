import { Express } from "express";

import productRoutes from "./product.route";

const clientRoutes = (app: Express): void => {
  app.use("/products", productRoutes);
}

export default clientRoutes;