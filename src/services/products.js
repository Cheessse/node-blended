import { Product } from '../db/Product.js';

export const getAllProducts = () => Product.find();

export const addProduct = (product) => Product.create(product);
