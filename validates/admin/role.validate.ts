import { NextFunction, Response } from "express";

// [POST] /admin/roles/create
const createPost = (req: any, res: Response, next: NextFunction): void => {
  try {
    const title = req.body.title;
    const description = req.body.description;

    if (
      !title ||
      !description
    ) {
      req.flash("error", "Thiếu dữ liệu cần thiết!");
      return res.redirect("back");
    }

    if (
      typeof title !== "string" ||
      typeof description !== "string"
    ) {
      req.flash("error", "Kiểu dữ liệu không chính xác!");
      return res.redirect("back");
    }

    return next();
  } catch {
    req.flash("error", "Có lỗi xảy ra!");
    return res.redirect("back");
  }
}

const roleValidate = {
  createPost
};
export default roleValidate;