import express from 'express';
import { getAllProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

// GET /api/products - Get all products or filter by category
router.get('/', getAllProducts);

// GET /api/products/:id - Get single product by ID
router.get('/:id', getProductById);

export default router;
