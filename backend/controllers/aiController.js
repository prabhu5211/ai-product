import Product from '../models/Product.js';
import AIService from '../services/aiService.js';

export const askAI = async (req, res) => {
  try {
    const { query } = req.body;
    
    // Validate input
    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Query is required and must be a non-empty string' 
      });
    }

    // Get product context
    const productContext = Product.getProductContext();

    // Get AI recommendations
    const aiResponse = await AIService.getProductRecommendations(
      query.trim(), 
      productContext
    );

    // Handle parse errors
    if (aiResponse.parseError) {
      return res.status(500).json({
        error: aiResponse.summary,
        productIds: [],
        products: []
      });
    }

    // Get matching products
    const matchingProducts = Product.getByIds(aiResponse.productIds);

    res.json({
      productIds: aiResponse.productIds,
      summary: aiResponse.summary,
      products: matchingProducts
    });

  } catch (error) {
    console.error('Error in AI controller:', error);
    
    const statusCode = error.statusCode || 500;
    const message = error.message || 'An unexpected error occurred';
    
    res.status(statusCode).json({ error: message });
  }
};
