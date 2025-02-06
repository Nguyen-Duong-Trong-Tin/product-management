import { EProductStatus } from "../enums/product.enum";

interface IProduct {
  title: string;
  slug: string;
  description: string;
  position: number;
  price: number;
  discountPercentage: number;
  stock: number;
  thumbnail: string;
  status: EProductStatus;
  featured: boolean;
  productCategoryId: string;
  createdBy: {
    accountId: string;
    createdAt: Date;
  },
  updatedBy: {
    accountId: string;
    updatedAt: Date;
  }[],
  deleted: boolean;
  deletedBy: {
    accountId: string;
    deletedAt: Date;
  }
};

export default IProduct;