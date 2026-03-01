import express from 'express';
import { askAI } from '../controllers/aiController.js';

const router = express.Router();

// POST /api/ask - Natural language product search
router.post('/', askAI);

export default router;
