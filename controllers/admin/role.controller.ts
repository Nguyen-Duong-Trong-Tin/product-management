import { Response } from "express";

import configs from "../../configs/index.config";

import roleService from "../../services/admin/role.service";

// [GET] /admin/roles
const get = async (req: any, res: Response): Promise<void> => {
  try {
    const roles = await roleService.find();
    return res.render("admin/pages/roles", {
      pageTitle: "Danh Sách Vai Trò",
      roles
    });
  } catch {
    req.flash("error", "Có lỗi xảy ra");
    return res.redirect("back");
  }
}

// [GET] /admin/roles/create
const create = (req: any, res: Response): void => {
  try {
    return res.render("admin/pages/roles/create", {
      pageTitle: "Thêm Mới Vai Trò"
    });
  } catch {
    req.flash("error", "Có lỗi xảy ra!");
    return res.redirect("back");
  }
}

// [POST] /admin/roles/create
const createPost = async (req: any, res: Response): Promise<void> => {
  try {
    const title: string = req.body.title;
    const description: string = req.body.description;

    await roleService.create({
      title,
      description,
      permission: [],
      createdBy: { accountId: "ABCXYZ", createdAt: new Date() },
      deleted: false
    });

    req.flash("success", "Vai trò được tạo thành công!");
    return res.redirect(`/${configs.admin}/roles`);
  } catch {
    req.flash("error", "Có lỗi xảy ra!");
    return res.redirect("back");
  }
}

const roleController = {
  get,
  create,
  createPost
};
export default roleController;