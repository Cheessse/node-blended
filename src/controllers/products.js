import { getAllProducts, addProduct } from '../services/products.js';

export const getAllProductsController = async (req, res, next) => {
  const products = await getAllProducts();

  res.json({
    data: products,
  });
};

export const addProductController = async (req, res, next) => {
  const product = await addProduct(req.body);

  res.status(201).json({
    data: product,
  });
};
