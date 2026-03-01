import express from 'express';
import productRoutes from './productRoutes.js';
import aiRoutes from './aiRoutes.js';

const router = express.Router();

// Mount routes
router.use('/products', productRoutes);
router.use('/ask', aiRoutes);

export default router;
