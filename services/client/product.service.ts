import { EProductStatus } from "../../enums/product.enum";
import ProductModel from "../../models/product.model";

const find = async () => {
  const products = await ProductModel.find({
    deleted: false,
    status: EProductStatus.active
  });
  return products;
}

const productService = {
  find
};
export default productService;