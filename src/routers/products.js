import express, { Router } from 'express';
import {
  addProductController,
  getAllProductsController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));

router.post('/', ctrlWrapper(addProductController));

export default router;
