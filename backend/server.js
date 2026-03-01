import express from 'express';
import cors from 'cors';
import { config, validateConfig } from './config/config.js';
import routes from './routes/index.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import Product from './models/Product.js';

const app = express();

// Middleware - Allow all origins for now (configure for production)
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use(express.json());

// Initialize application
const initializeApp = async () => {
  try {
    // Validate configuration
    validateConfig();
    
    // Load products
    await Product.loadProducts();
    console.log(`Products loaded: ${Product.getAll().length}`);
    
    // Mount API routes
    app.use('/api', routes);
    
    // Error handling
    app.use(notFound);
    app.use(errorHandler);
    
    // Start server
    app.listen(config.port, () => {
      console.log(`Backend server running on http://localhost:${config.port}`);
      console.log(`Environment: ${config.nodeEnv}`);
    });
  } catch (error) {
    console.error('Failed to initialize application:', error.message);
    process.exit(1);
  }
};

initializeApp();
