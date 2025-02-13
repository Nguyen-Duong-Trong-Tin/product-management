import { Response } from "express";

import productService from "../../services/client/product.service";

const get = async (req: any, res: Response): Promise<void> => {
  try {
    const products = await productService.find(req);
    return res.render("client/pages/products", {
      pageTitle: "Danh Sách Sản Phẩm",
      products
    });
  } catch {
    req.flash("error", "Có lỗi xảy ra!");
    return res.redirect("back");
  }
}

const productController = {
  get
};
export default productController;