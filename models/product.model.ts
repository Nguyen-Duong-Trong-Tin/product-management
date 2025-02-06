import mongoose from "mongoose";

import { EProductStatus } from "../enums/product.enum";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  position: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  discountPercentage: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: Object.values(EProductStatus),
    required: true
  },
  featured: {
    type: Boolean,
    required: true
  },
  productCategoryId: {
    type: String,
    required: true
  },
  createdBy: {
    type: {
      accountId: String,
      createdAt: Date
    },
    required: true
  },
  updatedBy: {
    type: [{
      accountId: String,
      updatedAt: Date
    }]
  },
  deleted: {
    type: Boolean,
    required: true
  },
  deletedAt: {
    type: {
      accountId: String,
      deletedAt: Date
    }
  }
}, {
  timestamps: true
});

const ProductModel = mongoose.model("ProductModel", ProductSchema, "products");
export default ProductModel;