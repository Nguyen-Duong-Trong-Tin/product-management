import { NextFunction, Response } from "express";

import configs from "../../configs/index.config";

const admin = (req: any, res: Response, next: NextFunction): void => {
  try {
    res.locals.admin = configs.admin;
    return next();
  } catch {
    req.flash("error", "Có lỗi xảy ra!");
    return res.redirect("back");
  }
}

export default admin;