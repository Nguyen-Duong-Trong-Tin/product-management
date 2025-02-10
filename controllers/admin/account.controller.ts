import { Response } from "express";

import configs from "../../configs/index.config";

import { EAccountStatus } from "../../enums/account.enum";

import roleService from "../../services/admin/role.service";
import accountService from "../../services/admin/account.service";

import md5Util from "../../utils/md5.util";

// [GET] /admin/accounts
const get = (req: any, res: Response): void => {
  try {
    return res.render("admin/pages/accounts", {
      pageTitle: "Danh Sách Tài Khoản"
    });
  } catch {
    req.flash("error", "Có lỗi xảy ra!");
    return res.redirect("back");
  }
}

// [GET] /admin/accounts
const create = async (req: any, res: Response): Promise<void> => {
  try {
    const roles = await roleService.find(req);
    return res.render("admin/pages/accounts/create", {
      pageTitle: "Tạo Mới Tài Khoản",
      roles
    });
  } catch {
    req.flash("error", "Có lỗi xảy ra!");
    return res.redirect("back");
  }
}

// [POST] /admin/accounts
const createPost = async (req: any, res: Response): Promise<void> => {
  try {
    const myAccount: {
      accountId: string,
      roleId: string
    } = req.account;

    const fullName: string = req.body.fullName;
    const email: string = req.body.email;
    const password: string = md5Util.encode(req.body.password);
    const phone: string = req.body.phone;
    const avatar: string = req.file.path;
    const status: string = req.body.status;
    const roleId: string = req.body.roleId;

    const roleExists = await roleService.findById(roleId);
    if (!roleExists) {
      req.flash("error", "Vai trò không được tìm thấy!");
      return res.redirect("back");
    }

    await accountService.create({
      fullName,
      email,
      password,
      phone,
      avatar,
      status: status as EAccountStatus,
      roleId,
      createdBy: {
        accountId: myAccount.accountId,
        createdAt: new Date()
      },
      deleted: false
    });

    req.flash("success", "Tài khoản được tạo thành công!");
    return res.redirect(`/${configs.admin}/accounts`);
  } catch {
    req.flash("error", "Có lỗi xảy ra!");
    return res.redirect("back");
  }
}

const accountController = {
  get,
  create,
  createPost
};
export default accountController;